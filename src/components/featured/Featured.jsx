import "./featured.scss"
import { CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { KeyboardArrowUpOutlined, MoreVertOutlined } from "@mui/icons-material";
import { KeyboardArrowDown } from "@mui/icons-material";


const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title"> Statistique</h1>
        <MoreVertOutlined fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth="5"/>
         </div>
         <p className="title">Membres inscrit</p>
         <p className="amount">500 en 24 h</p>
         <p className="desc">Tous ces chiffre sont basé sur l'algorithme de la cofedalci</p>
         <div className="summary">
          <div className="item">
            <div className="itemTitle">Membres</div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="resultAmount">200 000</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Mois passé</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small" />
              <div className="resultAmount">50 000</div>
            </div>
          </div>  
             <div className="item">
            <div className="itemTitle">Ce mois</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small" />
              <div className="resultAmount">100 000</div>
            </div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Featured
