import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { federationColumns, getFederation } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../../loading/Loading";
import CustomWidgets from "../widgets/widgets";

function Datatable() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState([])

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const toggleModal = (item) => {
    setModalData(item)
    setShowModal(!showModal);
  }

  useEffect(() => {
    getFederation().then(data => {
      setData(data)
      setIsLoading(false)
    })
  }, [])

  const actionColumn = [
    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <div className="cellAction">
    //         <button className="viewButton" onClick={() => toggleModal(params.row)}>Voir</button>
    //         <div
    //           className="deleteButton"
    //           onClick={() => handleDelete(params.row.id)}
    //         >
    //           Supprimer
    //         </div>
    //       </div>
    //     );
    //   },
    // },
  ];
  
  return (
    !isLoading ? (<div className="datatable">
      <div className="datatableTitle">
        Liste des des fédérations
        <Link to="/federation/addfederation" className="link">
          Ajouter
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={federationColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[20]}

      />
      <CustomWidgets title={'Federation'} show={showModal} data={modalData} />
    </div>) :
      <Loading open={isLoading} />
  );
};

export default Datatable;