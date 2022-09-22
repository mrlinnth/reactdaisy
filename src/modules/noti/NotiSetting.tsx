export const NotiSetting = () => {
  return (
    <div className="p-4">
      <div className="card card-compact bg-base-100 border border-base-300 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Subscribe to</h2>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Table Service</span> 
              <input type="checkbox" checked className="checkbox" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Food Station</span> 
              <input type="checkbox" checked className="checkbox" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Drink Station</span> 
              <input type="checkbox" checked className="checkbox" />
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
