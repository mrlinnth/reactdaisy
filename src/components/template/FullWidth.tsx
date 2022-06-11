import { Outlet } from "react-router-dom"

function FullWidth() {
  return (
    <div>
      <nav className="p-4 flex items-center justify-between">
        <span>Header</span>
      </nav>
      <Outlet />
    </div>
  )
}

export default FullWidth
