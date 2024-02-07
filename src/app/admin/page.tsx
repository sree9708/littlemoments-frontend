import CategoryContent from "@/layouts/Admin/Category/CategoryContent"
import AdminNavbar from "@/layouts/CommonLayouts/AdminNavbar"
import AdminSideBar from "@/layouts/CommonLayouts/AdminSideBar"

export default function Home() {
  return (
    <div className="flex">
      <div className="flex-shrink-0">
        <AdminSideBar />
      </div>
      {/* <div className="w-full">
          <div className="flex-grow">
            <CategoryContent />
          </div>
        </div> */}
    </div>
  )
}
