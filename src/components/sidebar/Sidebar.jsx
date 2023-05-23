import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
// import CreditCardIcon from '@mui/icons-material/CreditCard';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import AnalyticsIcon from '@mui/icons-material/Analytics';
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
// import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InputOutlinedIcon from '@mui/icons-material/InputOutlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {

  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>

          <span className="logo">COFEDALCI-ADMIN</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Tableau de bord</span>
            </li>
          </Link>
          <Link to="/branch" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Branch</span>
            </li>
          </Link>
          <Link to="/federation" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Fedeation</span>
            </li>
          </Link>
          <Link to="/association" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Association</span>
            </li>
          </Link>
          <Link to="/metiers" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Metiers</span>
            </li>
          </Link>
          <p className="title">Utilisateurs</p>
          <Link to="/members" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Membres</span>
            </li>
          </Link>
          <p className="title">Localité</p>
          <Link to="/district" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>District</span>
            </li>
          </Link>
          
          <p className="title">Paramettre</p>
          <li>
            <InputOutlinedIcon className="icon" />
            <span>Deco</span>
          </li>
        </ul>

      </div>
      <div className="bottom">
        <div className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}>
        </div>

        <div className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}>
        </div>

      </div>
    </div>
  )
}

export default Sidebar
