import PropContent from "@/layouts/Admin/Prop/PropContent"
import AdminSideBar from "@/layouts/CommonLayouts/AdminSideBar"

export default function Home() {
  return (
    <div className="flex">
      <div className="flex-shrink-0">
        <AdminSideBar />
      </div>
      <div className="w-full">
        <div className="flex-grow">
          <PropContent />
        </div>
      </div>
    </div>
  )
}
