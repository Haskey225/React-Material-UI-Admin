import "./featured.scss"
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { KeyboardArrowUpOutlined, MoreVertOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
import { app_config } from "../../config/app-config";
import { KeyboardArrowDown } from "@mui/icons-material";
// import { Tooltip } from "@mui/material";
// import { Tooltip } from "recharts";

const qs = require('qs')

const Featured = () => {
  const target = 100000;
  const [globalPercent, setGlobalPercent] = useState(0);
  const [memberNumber, setMemberNumber] = useState(0)
  // const yearNumber = 12;
  // const monthNumber = 144;

  useEffect(() => {
    axios.post(app_config.host_statistic, qs.stringify({
      'action': 'members_number',
      'year': 2023
    })).then(resp => {
      setGlobalPercent(parseInt((parseInt(resp.data.members) / target) * 100))
      setMemberNumber(resp.data.members)
    })
  }, [])
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title"> Objectif: <strong>+100 K</strong> membres en 2032</h1>
        <MoreVertOutlined fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={globalPercent} text={globalPercent + '%'} strokeWidth="5" />
        </div>
        <p className="title">Progression</p>
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
              <div className="resultAmount">{parseInt((100000-memberNumber)/1000) + ' ' +((100000-memberNumber)%1000)} </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Performamce</div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="resultAmount">{parseInt((memberNumber/(695*5))*100)} %</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
