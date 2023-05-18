import "./navbar.scss"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import FullScreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined"
import NotificationsNoneOutlined from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutLinedIcon from "@mui/icons-material/ListOutlined";
import { useContext} from "react";
import { DarkModeContext} from "../../context/darkModeContext";

const Navbar = () => {

  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Recherche...." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            EN
          </div>
          <div className="item">
            <DarkModeOutlined className="icon" onClick={() => dispatch({type:"TOGGLE"})}/>
          </div>
          <div className="item">
            <FullScreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListOutLinedIcon className="icon" />
          </div>
          <div className="item">
           <img src="https://cofedalci.org/wp-content/uploads/2023/04/cropped-logo512-1-e1682865273108.png" alt="" className="avatar"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
