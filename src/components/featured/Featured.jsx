import "./featured.scss"
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { KeyboardArrowUpOutlined, MoreVertOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import { FormatNumber } from "../../function/data";
import { getHowManyMemberFor } from "../../function/data";
// import { Tooltip } from "@mui/material";
// import { Tooltip } from "recharts";

const Featured = () => {
  const target = 100000;
  const [globalPercent, setGlobalPercent] = useState(0);
  const [memberNumber, setMemberNumber] = useState(0)
  // const yearNumber = 12;
  // const monthNumber = 144;

  useEffect(() => {
    getHowManyMemberFor().then(data => {
      setGlobalPercent(parseInt((parseInt(data.members) / target) * 100))
      setMemberNumber(data.members)
    })
  }, [])
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title"> Objectif: <strong>+100 K</strong> membres en 2030</h1>
        <MoreVertOutlined fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <div className='item'>
            <CircularProgressbar value={globalPercent} text={globalPercent + '%'} strokeWidth="5" />
            <p>Temps écoulé</p>
          </div>
          <div className="item">
            <CircularProgressbar value={globalPercent} text={globalPercent + '%'} strokeWidth="5" />
            <p>Progression</p>
          </div>
        </div>
        <hr />
        <p className="title">Résumé</p>
        <p className="amount">{memberNumber} Membres inscrit</p>
        <p className="desc">Tous ces chiffre sont basé sur l'algorithme de la cofedalci</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Ogjectif / mois</div>
            <div className="itemResult positive">
              {/* <KeyboardArrowDown fontSize="small" /> */}
              <div className="resultAmount">695</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle" >Restant</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small" />
              <div className="resultAmount">{FormatNumber(target - memberNumber)} </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Performamce</div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="resultAmount">{parseInt((memberNumber / (695 * 5)) * 100)} %</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
