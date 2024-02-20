import ClientComponent from "@/components/ClientComponents/CategoryClientComponent"
import CategoryContent from "@/layouts/Admin/Category/CategoryContent"
import AdminSideBar from "@/layouts/CommonLayouts/AdminSideBar"

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
            <CategoryContent />
          </div>
        </div>
      </div>
    // </ClientComponent>
  )
}
