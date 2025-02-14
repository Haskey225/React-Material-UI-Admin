import "./widget.scss";
// import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceWalletOutLinedIcon from "@mui/icons-material/AccountBalanceOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlined from "@mui/icons-material/MonetizationOnOutlined";
import { Home } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FormatNumber, getOrganismeInfo } from "../../function/data";
import { getFinancialInfo } from "../../function/data";

const Widget = ({ type }) => {
    const [count, setCount] = useState(null)
    const [finance, setFinance] = useState(null)
    let data;

    // Temporary
    // const diff = 20;
    //Definition de constatant :
    //capa -> chiffre d'affaire monsuel par artisan
    //capg -> Chiffre d'affaire global
    //mopa -> main d'oeuvre par artisan
    //mog -> maind'oeuvre global

    useEffect(() => {
        getOrganismeInfo().then(data => {
            setCount(data)
        })

        getFinancialInfo().then(data => {
            setFinance(data)
        })
    }, [])

    switch (type) {
        case "member":
            data = {
                title: "Nombre de membre total",
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
                counts: count ? FormatNumber(count.members) : '0'
            };
            break;
        case "association":
            data = {
                title: "Nombre d'association",
                isMoney: false,
                link: (<Link to="/association">Voir les associations</Link>),
                icon: (
                    <Home className="icon"
                        style={{
                            color: "goldenrod",
                            backgroundColor: " rgba(218,165,32,0.2)",
                        }}
                    />
                ),
                counts: count ? FormatNumber(count.association) : '0'
            };
            break;
        case "federation":
            data = {
                title: "Nombre de federation",
                isMoney: false,
                link: (<Link to="/federation">Voir les federations</Link>),
                icon: (
                    <Home className="icon"
                        style={{
                            color: "green",
                            backgroundColor: " rgba(0,128,0,0.2)",
                        }}
                    />
                ),
                counts: count ? FormatNumber(count.federation) : '0'
            };
            break;
        case "branch":
            data = {
                title: "Nombre de branche",
                isMoney: false,
                link: (<Link to="/branch">Voir les branches</Link>),
                icon: (
                    <Home className="icon"
                        style={{
                            color: "purple",
                            backgroundColor: " rgba(128,0,128,0.2)",
                        }}
                    />
                ),
                counts: count ? FormatNumber(count.branch) : '0'
            };
            break;
        case "capa":
            data = {
                title: "Chiffe d'affaire par artisan monsuel",
                isMoney: true,
                link: (<Link to="/">Voir les détails</Link>),
                icon: (
                    <MonetizationOnOutlined className="icon"
                        style={{
                            color: "purple",
                            backgroundColor: " rgba(128,0,128,0.2)",
                        }}
                    />
                ),
                counts: count ? FormatNumber(count.branch) : '0'
            };
            break;
        case "capg":
            data = {
                title: "Chiffre d'affaire mensuel",
                isMoney: true,
                link: (<Link to="/">Voir les détails</Link>),
                icon: (
                    <MonetizationOnOutlined className="icon"
                        style={{
                            color: "purple",
                            backgroundColor: " rgba(128,0,128,0.2)",
                        }}
                    />
                ),
                counts: finance ? FormatNumber(finance.min_month_ca) : '0'
            };
            break;
        case "mopa":
            data = {
                title: "Emploi créer par artisan",
                isMoney: false,
                link: (<Link to="/">Voir les détails</Link>),
                icon: (
                    <AccountBalanceWalletOutLinedIcon className="icon"
                        style={{
                            color: "purple",
                            backgroundColor: " rgba(128,0,128,0.2)",
                        }}
                    />
                ),
                counts: count ? FormatNumber(count.branch) : '0'
            };
            break;
        case "mog":
            data = {
                title: "Nombre total d'emploi créés",
                isMoney: false,
                link: (<Link to="/">Voir les détails</Link>),
                icon: (
                    <PersonOutlineOutlined className="icon"
                        style={{
                            color: "purple",
                            backgroundColor: " rgba(128,0,128,0.2)",
                        }}
                    />
                ),
                counts: finance ? FormatNumber(finance.total_woker) : '0',
                // style: {
                //     background: '#c1c1c1'
                // }
            };
            break;
        case "mcustomer":
            data = {
                title: "Nombre de consommateur mensuel",
                isMoney: false,
                link: (<Link to="/">Voir les détails</Link>),
                icon: (
                    <PersonOutlineOutlined className="icon"
                        style={{
                            color: "purple",
                            backgroundColor: " rgba(128,0,128,0.2)",
                        }}
                    />
                ),
                counts: finance ? FormatNumber(finance.min_month_customer) : '0'
            };
            break;
        default:
            break;
    }

    return (
        <div className="widget" style={data.style && data.style}>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.counts} {data.isMoney ? "XOF" : null}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                {/* <div className="percentage positive">
                    <KeyboardArrowUp />
                    {diff} %
                </div> */}
                {data.icon}
            </div>

        </div>
    );

}

export default Widget
