export const NotiService = () => {
  return (
    <div className="p-4">
      <div className="card card-compact bg-base-100 border border-base-300 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Table 1</h2>
          <p>Call Waiter <span className="ml-2 text-slate-400">5 mins ago</span></p>
          <div className="card-actions justify-end">
            <button className="btn">Accept</button>
          </div>
        </div>
      </div>
    </div>
  )
}
