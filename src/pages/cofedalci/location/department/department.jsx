import "./metiers.scss"
import Sidebar from "../../../../components/sidebar/Sidebar"
import Navbar from "../../../../components/navbar/Navbar"
import Datatable from "../../../../components/cofedalci/location/department/Datatable"

const Department = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
)
}

export default Department
