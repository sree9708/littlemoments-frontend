import CategoryContent from "@/layouts/Admin/Category/CategoryContent"
import AdminNavbar from "@/layouts/CommonLayouts/AdminNavbar"
import AdminSideBar from "@/layouts/CommonLayouts/AdminSideBar"

export default function Home() {
  return (
    <div className="flex">
      <AdminSideBar />
      <div className="w-full">
        <AdminNavbar />
        <CategoryContent />
      </div>
    </div>
  )
}
