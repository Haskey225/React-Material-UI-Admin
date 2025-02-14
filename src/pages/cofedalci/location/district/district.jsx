import "./district.scss"
import Sidebar from "../../../../components/sidebar/Sidebar"
import Navbar from "../../../../components/navbar/Navbar"
import Datatable from "../../../../components/cofedalci/location/district/Datatable"

const District = () => {
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

export default District
