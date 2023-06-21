import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { memberColumn, getMember } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Loading from "../../loading/Loading";
import Details from "./details/Details";
import { DarkModeContext } from "../../../context/darkModeContext";

function Datatable() {
  const { setShownModal } = useContext(DarkModeContext)
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [modalItem, setModalItem] = useState(24)

  const onDetails = (item) => {
    setModalItem(item)
    setShownModal(true)
  }

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };


  useEffect(() => {
    getMember().then(data => {
      setData(data)
      setIsLoading(false)
    })
  }, [])



  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <button className="viewButton" onClick={() => onDetails(params.row.id)}>Détails</button>
            {/* <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Supprimer
            </div> */}
          </div>
        );
      },
    },
  ];

  return (
    !isLoading ?
      (
        <div className="datatable">
          <div className="datatableTitle">
            Liste des membres
            <Link to="/members/addMember" className="link">
              Ajouter
            </Link>
          </div>
          <DataGrid
            className="datagrid"
            rows={data}
            columns={memberColumn.concat(actionColumn)}
            // pageSize={25}
            rowsPerPageOptions={[9]}
          // paginationMode="server"
          // checkboxSelection // Desable check box
          />
          <Details id={modalItem} />
        </div>
      )
      :
      <Loading open={isLoading} />
  );
};

export default Datatable;