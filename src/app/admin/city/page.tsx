import AdminSideBar from "@/layouts/CommonLayouts/AdminSideBar"
import ClientComponent from "../../../components/ClientComponents/CityClientComponent"
import CityContent from "@/layouts/Admin/City/CityContent"

export default function Home() {
  return (
    // <ClientComponent>
    <div className="flex">
      <div className="flex-shrink-0">
        <AdminSideBar />
      </div>
      <div className="w-full">
        {/* <AdminNavbar /> */}
        <div className="flex-grow">
          <CityContent />
        </div>
      </div>
    </div>
    // </ClientComponent>
  )
}
