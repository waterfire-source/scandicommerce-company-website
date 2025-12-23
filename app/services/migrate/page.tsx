import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/services/migrate/Hero'
import Platforms from '@/components/sections/services/migrate/Platforms'
import RisksAndProtection from '@/components/sections/services/migrate/RisksAndProtection'
import MigrationProcess from '@/components/sections/services/migrate/MigrationProcess'
import RealMigrationResults from '@/components/sections/services/migrate/RealMigrationResults'
import MigrationCTA from '@/components/sections/services/migrate/MigrationCTA'

const MigratePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Platforms />
        <RisksAndProtection />
        <MigrationProcess />
        <RealMigrationResults />
        <MigrationCTA />
        <Footer />
      </main>
    </div>
  )
}

export default MigratePage
