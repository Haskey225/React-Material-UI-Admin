import "./widget.scss";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceWalletOutLinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlined from "@mui/icons-material/MonetizationOnOutlined";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { app_config } from "../../config/app-config";

const Widget = ({ type }) => {
    const [count, setCount] = useState(null)
    let data;

    // Temporary
    const diff = 20;

    useEffect(() => {
        axios.get(app_config.host_statistic).then(resp => {
            setCount(resp.data)
        })
    })

    switch (type) {
        case "member":
            data = {
                title: "Membres",
                isMoney: false,
                link: (
                    <Link to="/members">Voir tous les membres</Link>),
                icon: (
                    <PersonOutlineOutlined
                        className="icon"
                        style={{
                            color: "crimson",
                            backgroundColor: " rgba(218,165,32,0.2)",
                        }}
                    />
                ),
                counts: count ? count.members : '0'
            };
            break;
        case "association":
            data = {
                title: "Association",
                isMoney: false,
                link: (<Link to="/association">Voir les associations</Link>),
                icon: (
                    <ShoppingCartOutlinedIcon className="icon"
                        style={{
                            color: "goldenrod",
                            backgroundColor: " rgba(218,165,32,0.2)",
                        }}
                    />
                ),
                counts: count ? count.association : '0'
            };
            break;
        case "federation":
            data = {
                title: "Federations",
                isMoney: false,
                link: (<Link to="/federation">Voir les federations</Link>),
                icon: (
                    <MonetizationOnOutlined className="icon"
                        style={{
                            color: "green",
                            backgroundColor: " rgba(0,128,0,0.2)",
                        }}
                    />
                ),
                counts: count ? count.federation : '0'
            };
            break;
        case "branch":
            data = {
                title: "Branche",
                isMoney: false,
                link: (<Link to="/branch">Voir les branches</Link>),
                icon: (
                    <AccountBalanceWalletOutLinedIcon className="icon"
                        style={{
                            color: "purple",
                            backgroundColor: " rgba(128,0,128,0.2)",
                        }}
                    />
                ),
                counts: count ? count.branch : '0'
            };
            break;
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney ? "CFA" : null} {data.counts}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUp />
                    {diff} %
                </div>
                {data.icon}
            </div>

        </div>
    );

}

export default Widget
