import Filter from "@/components/Sidebar/Filter"
import Navbar from "@/layouts/CommonLayouts/Navbar"
import Hero from "@/layouts/PlacesPage/Hero"

export default function Home() {
  return (
    <div>
      <Navbar searchBar={true} />
      <div className="flex justify-between">
        <Filter />
        <Hero />
      </div>
    </div>
  )
}
