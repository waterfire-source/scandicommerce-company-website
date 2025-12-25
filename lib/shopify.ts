const PRODUCTS_QUERY = `
  query getProducts($first: Int!, $after: String) {
    products(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          title
          description
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                price {
                  amount
                  currencyCode
                }
                availableForSale
              }
            }
          }
          tags
          collections(first: 10) {
            edges {
              node {
                id
                title
                handle
              }
            }
          }
        }
      }
    }
  }
`

const PRODUCT_BY_HANDLE_QUERY = `
  query getProduct($handle: String!) {
    product(handle: $handle) {
      id
      title
      description
      handle
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 5) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            availableForSale
          }
        }
      }
      tags
      collections(first: 10) {
        edges {
          node {
            id
            title
            handle
          }
        }
      }
      metafields(identifiers: [
        {namespace: "custom", key: "rating"},
        {namespace: "custom", key: "review_count"},
        {namespace: "reviews", key: "rating"},
        {namespace: "reviews", key: "review_count"},
        {namespace: "judgeme", key: "rating"},
        {namespace: "judgeme", key: "reviews_count"},
        {namespace: "yotpo", key: "rating"},
        {namespace: "yotpo", key: "reviews_count"},
        {namespace: "stamped", key: "rating"},
        {namespace: "stamped", key: "reviews_count"},
        {namespace: "loox", key: "rating"},
        {namespace: "loox", key: "reviews_count"},
        {namespace: "okendo", key: "rating"},
        {namespace: "okendo", key: "reviews_count"}
      ]) {
        id
        namespace
        key
        value
        type
      }
    }
  }
`

const PRODUCT_RECOMMENDATIONS_QUERY = `
  query getProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      id
      title
      handle
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 1) {
        edges {
          node {
            url
            altText
          }
        }
      }
    }
  }
`

export interface ShopifyCollection {
  id: string
  title: string
  handle: string
}

export interface ShopifyProduct {
  id: string
  title: string
  description: string
  handle: string
  price: number
  currencyCode: string
  image: string
  imageAlt?: string
  images?: string[]
  tags: string[]
  collections: ShopifyCollection[]
  availableForSale: boolean
  rating?: number
  reviewCount?: number
}

interface ShopifyResponse<T> {
  data: T
  errors?: Array<{ message: string }>
}

interface ProductsData {
  products: {
    pageInfo: {
      hasNextPage: boolean
      endCursor: string | null
    }
    edges: Array<{
      node: {
        id: string
        title: string
        description: string
        handle: string
        priceRange: {
          minVariantPrice: {
            amount: string
            currencyCode: string
          }
        }
        images: {
          edges: Array<{
            node: {
              url: string
              altText: string | null
            }
          }>
        }
        variants: {
          edges: Array<{
            node: {
              price: {
                amount: string
                currencyCode: string
              }
              availableForSale: boolean
            }
          }>
        }
        tags: string[]
        collections: {
          edges: Array<{
            node: {
              id: string
              title: string
              handle: string
            }
          }>
        }
      }
    }>
  }
}

interface ProductData {
  product: {
    id: string
    title: string
    description: string
    handle: string
    priceRange: {
      minVariantPrice: {
        amount: string
        currencyCode: string
      }
    }
    images: {
      edges: Array<{
        node: {
          url: string
          altText: string | null
        }
      }>
    }
    variants: {
      edges: Array<{
        node: {
          id: string
          title: string
          price: {
            amount: string
            currencyCode: string
          }
          availableForSale: boolean
        }
      }>
    }
    tags: string[]
    collections: {
      edges: Array<{
        node: {
          id: string
          title: string
          handle: string
        }
      }>
    }
    metafields?: Array<{
      id: string
      namespace: string
      key: string
      value: string
      type: string
    }>
  } | null
}

interface ProductRecommendationsData {
  productRecommendations: Array<{
    id: string
    title: string
    handle: string
    priceRange: {
      minVariantPrice: {
        amount: string
        currencyCode: string
      }
    }
    images: {
      edges: Array<{
        node: {
          url: string
          altText: string | null
        }
      }>
    }
  }>
}

function getShopifyEndpoint(): string {
  const storeDomain = process.env.SHOPIFY_STORE_DOMAIN
  if (!storeDomain) {
    throw new Error('SHOPIFY_STORE_DOMAIN environment variable is not set')
  }
  return `https://${storeDomain}/api/2024-01/graphql.json`
}

function getAccessToken(): string {
  const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
  if (!token) {
    throw new Error('SHOPIFY_STOREFRONT_ACCESS_TOKEN environment variable is not set')
  }
  return token
}

async function shopifyFetch<T>(query: string, variables?: Record<string, any>): Promise<T> {
  const endpoint = getShopifyEndpoint()
  const accessToken = getAccessToken()

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': accessToken,
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 },
    })

    if (!response.ok) {
      throw new Error(`Shopify API error: ${response.status} ${response.statusText}`)
    }

    const result: ShopifyResponse<T> = await response.json()

    if (result.errors) {
      throw new Error(`Shopify GraphQL errors: ${result.errors.map(e => e.message).join(', ')}`)
    }

    return result.data
  } catch (error) {
    console.error('Error fetching from Shopify:', error)
    throw error
  }
}

export async function getShopifyProducts(limit: number = 250): Promise<ShopifyProduct[]> {
  try {
    const products: ShopifyProduct[] = []
    let hasNextPage = true
    let cursor: string | null = null
    const first = Math.min(limit, 250)

    while (hasNextPage && products.length < limit) {
      const data: ProductsData = await shopifyFetch<ProductsData>(PRODUCTS_QUERY, {
        first: Math.min(first, limit - products.length),
        after: cursor,
      })

      const edges = data.products.edges
      for (const edge of edges) {
        const node = edge.node
        const image = node.images.edges[0]?.node
        const collections = node.collections.edges.map(collectionEdge => ({
          id: collectionEdge.node.id,
          title: collectionEdge.node.title,
          handle: collectionEdge.node.handle,
        }))

        products.push({
          id: node.id,
          title: node.title,
          description: node.description || '',
          handle: node.handle,
          price: parseFloat(node.priceRange.minVariantPrice.amount),
          currencyCode: node.priceRange.minVariantPrice.currencyCode,
          image: image?.url || '',
          imageAlt: image?.altText || undefined,
          tags: node.tags,
          collections,
          availableForSale: node.variants.edges[0]?.node.availableForSale ?? true,
        })
      }

      hasNextPage = data.products.pageInfo.hasNextPage
      cursor = data.products.pageInfo.endCursor
    }

    return products
  } catch (error) {
    console.error('Error fetching Shopify products:', error)
    return []
  }
}

function extractRatingAndReviewCount(
  metafields?: Array<{ namespace: string; key: string; value: string } | null>,
  tags?: string[]
): { rating?: number; reviewCount?: number } {
  let rating: number | undefined
  let reviewCount: number | undefined

  if (metafields) {
    for (const metafield of metafields) {
      if (!metafield) continue

      if (
        (metafield.key === 'rating' || metafield.key === 'review_rating' || metafield.key === 'average_rating') &&
        (metafield.namespace === 'custom' ||
          metafield.namespace === 'reviews' ||
          metafield.namespace === 'judgeme' ||
          metafield.namespace === 'yotpo' ||
          metafield.namespace === 'stamped' ||
          metafield.namespace === 'loox' ||
          metafield.namespace === 'okendo')
      ) {
        const parsed = parseFloat(metafield.value)
        if (!isNaN(parsed) && parsed >= 0 && parsed <= 5) {
          rating = parsed
        }
      }

      if (
        (metafield.key === 'review_count' ||
          metafield.key === 'reviewCount' ||
          metafield.key === 'reviews_count' ||
          metafield.key === 'total_reviews') &&
        (metafield.namespace === 'custom' ||
          metafield.namespace === 'reviews' ||
          metafield.namespace === 'judgeme' ||
          metafield.namespace === 'yotpo' ||
          metafield.namespace === 'stamped' ||
          metafield.namespace === 'loox' ||
          metafield.namespace === 'okendo')
      ) {
        const parsed = parseInt(metafield.value, 10)
        if (!isNaN(parsed) && parsed >= 0) {
          reviewCount = parsed
        }
      }
    }
  }

  if (tags) {
    for (const tag of tags) {
      const ratingMatch = tag.match(/rating[:\-]?(\d+\.?\d*)/i)
      if (ratingMatch && !rating) {
        const parsed = parseFloat(ratingMatch[1])
        if (!isNaN(parsed) && parsed >= 0 && parsed <= 5) {
          rating = parsed
        }
      }
      const reviewMatch = tag.match(/review[s]?[:\-]?count[:\-]?(\d+)/i)
      if (reviewMatch && !reviewCount) {
        const parsed = parseInt(reviewMatch[1], 10)
        if (!isNaN(parsed)) {
          reviewCount = parsed
        }
      }
    }
  }

  return { rating, reviewCount }
}

export async function getShopifyProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  try {
    const data = await shopifyFetch<ProductData>(PRODUCT_BY_HANDLE_QUERY, { handle })

    if (!data.product) {
      return null
    }

    const product = data.product
    const image = product.images.edges[0]?.node
    const allImages = product.images.edges.map(imgEdge => imgEdge.node.url)
    const collections = product.collections.edges.map(collectionEdge => ({
      id: collectionEdge.node.id,
      title: collectionEdge.node.title,
      handle: collectionEdge.node.handle,
    }))

    const { rating, reviewCount } = extractRatingAndReviewCount(
      product.metafields,
      product.tags
    )

    return {
      id: product.id,
      title: product.title,
      description: product.description || '',
      handle: product.handle,
      price: parseFloat(product.priceRange.minVariantPrice.amount),
      currencyCode: product.priceRange.minVariantPrice.currencyCode,
      image: image?.url || '',
      imageAlt: image?.altText || undefined,
      images: allImages.length > 0 ? allImages : [image?.url || ''],
      tags: product.tags,
      collections,
      availableForSale: product.variants.edges[0]?.node.availableForSale ?? true,
      rating,
      reviewCount,
    }
  } catch (error) {
    console.error(`Error fetching Shopify product ${handle}:`, error)
    return null
  }
}

export async function getShopifyRelatedProducts(productId: string): Promise<ShopifyProduct[]> {
  try {
    const data = await shopifyFetch<ProductRecommendationsData>(
      PRODUCT_RECOMMENDATIONS_QUERY,
      { productId }
    )

    if (!data.productRecommendations || data.productRecommendations.length === 0) {
      return []
    }

    return data.productRecommendations.map(rec => {
      const image = rec.images.edges[0]?.node
      return {
        id: rec.id,
        title: rec.title,
        description: '',
        handle: rec.handle,
        price: parseFloat(rec.priceRange.minVariantPrice.amount),
        currencyCode: rec.priceRange.minVariantPrice.currencyCode,
        image: image?.url || '',
        imageAlt: image?.altText || undefined,
        tags: [],
        collections: [],
        availableForSale: true,
      }
    })
  } catch (error) {
    console.error(`Error fetching related products for ${productId}:`, error)
    return []
  }
}