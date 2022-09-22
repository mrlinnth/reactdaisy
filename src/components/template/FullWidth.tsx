import { Outlet, useNavigate } from "react-router-dom";

function FullWidth() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="p-4 flex items-center justify-between bg-base-200">
        <span onClick={()=>navigate('/')}>Logo + Store Name</span>
        <span onClick={()=>navigate('noti/setting')}>Noti Setting Icon</span>
      </nav>
      <Outlet />
    </div>
  )
}

export default FullWidth
