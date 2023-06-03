import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Widget from "../../components/widget/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
// import Table from "../../components/table/Table"
import "./home.scss"


const Home = () => {



  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="branch" />
          <Widget type="federation" />
          <Widget type="association" />
          <Widget type="member" />
        </div>
        <div className="widgets">
          <Widget type="capg" />
          <Widget type="mcustomer" />
          <Widget type="mog" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Flux d'inscription des membres" aspect={3 / 1} />
        </div>
        {/* <div className="listContainer">
          <div className="listTitle">Nouveau membres</div>
          <Table />
        </div> */}
      </div>
    </div>
  )
}

export default Home