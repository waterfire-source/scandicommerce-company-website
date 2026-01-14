import { defineArrayMember, defineField } from "sanity";

export const servicesShowcaseSection = defineField({
  name: "servicesShowcase",
  title: "Services Showcase Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "object",
      fields: [
        defineField({
          name: "text",
          title: "Main Text",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "highlight",
          title: "Highlighted Text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "categories",
      title: "Service Categories",
      type: "array",
      of: [
        defineArrayMember({
          name: "category",
          title: "Category",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "icon",
              title: "Icon Name",
              type: "string",
              options: {
                list: [
                  { title: "Cart", value: "cart" },
                  { title: "Chart", value: "chart" },
                  { title: "Chat", value: "chat" },
                ],
              },
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "string",
            }),
            defineField({
              name: "price",
              title: "Price",
              type: "string",
            }),
            defineField({
              name: "link",
              title: "Link URL",
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "packages",
      title: "Package Cards",
      type: "array",
      of: [
        defineArrayMember({
          name: "package",
          title: "Package",
          type: "object",
          fields: [
            defineField({
              name: "tier",
              title: "Tier Name",
              type: "string",
              description: "e.g., 'FOUNDATION'",
            }),
            defineField({
              name: "description",
              title: "Short Description",
              type: "string",
            }),
            defineField({
              name: "price",
              title: "Price",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "features",
              title: "Features",
              type: "array",
              of: [{ type: "string" }],
              validation: (rule) => rule.max(4),
            }),
            defineField({
              name: "buttonText",
              title: "Button Text",
              type: "string",
              initialValue: "View Details",
            }),
            defineField({
              name: "buttonLink",
              title: "Button Link",
              type: "string",
            }),
            defineField({
              name: "featured",
              title: "Featured",
              type: "boolean",
              initialValue: false,
            }),
          ],
        }),
      ],
    }),
  ],
});
