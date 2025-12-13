import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center">
            Welcome to Scandi Commerce
          </h1>
          <p className="text-center mt-4 text-gray-600">
            Start building your website by converting the Figma design components
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

