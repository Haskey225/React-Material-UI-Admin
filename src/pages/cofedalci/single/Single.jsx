import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart" ;
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Modifier</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.unsplash.com/photo-1504376379689-8d54347b26c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=536&q=80" 
              alt="" className="itemImg"/>
              <div className="details">
                <h1 className="itemTitle">?</h1>
                <div className="detailItem">
                  <span className="itemKey">Phone :</span>
                  <span className="itemKey">?</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address :</span>
                  <span className="itemKey">?</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country :</span>
                  <span className="itemKey">?</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 /1} title=" ( Performance de)"/>
          </div>
        </div>
        <div className="bottom">
        {/* <h1 className="title">Derniere transaction</h1>
          <List/> */}
        </div>
      </div>
    </div>
)
}

export default Single
