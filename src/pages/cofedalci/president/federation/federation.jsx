import "./branch.scss"
import Sidebar from "../../../../components/sidebar/Sidebar"
import Navbar from "../../../../components/navbar/Navbar"
import Datatable from "../../../../components/cofedalci/president/federation/Datatable"

const FederationPresi = () => {
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

export default FederationPresi
