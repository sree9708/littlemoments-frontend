import PropIdContent from "@/layouts/Admin/Prop/[id]/PropIdContent"
import AdminSideBar from "@/layouts/CommonLayouts/AdminSideBar"

export default function Page() {
  return (
    <div className="flex">
      <div className="flex-shrink-0">
        <AdminSideBar />
      </div>
      <div className="w-full">
        <div className="flex-grow">
          <PropIdContent />
        </div>
      </div>
    </div>
  )
}
