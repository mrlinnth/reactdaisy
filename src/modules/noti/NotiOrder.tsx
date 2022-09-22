export const NotiOrder = () => {
  return (
    <div className="p-4">
      <div className="card card-compact bg-base-100 border border-base-300 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">#ABCD12</h2>
          <div className="overflow-x-auto">
            <table className="table table-compact w-full">
              <tbody>
                <tr>
                  <th>1</th> 
                  <td>Item A</td> 
                  <td>x 1</td>
                  <td>
                    <input type="checkbox" className="toggle toggle-sm" />
                  </td>
                </tr>
                <tr>
                  <th>2</th> 
                  <td>Item B</td> 
                  <td>x 2</td>
                  <td>
                    <input type="checkbox" className="toggle toggle-sm" />
                  </td>
                </tr>
              </tbody> 
            </table>
          </div>
          <div className="card-actions">
            <button className="btn btn-block">Accept</button>
          </div>
          <div className="card-actions">
            <button className="btn btn-block">Print</button>
          </div>
          <div className="card-actions">
            <button className="btn btn-block">Go to details</button>
          </div>
        </div>
      </div>
    </div>
  )
}
