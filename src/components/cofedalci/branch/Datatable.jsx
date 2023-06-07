import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { branchColumns } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../../loading/Loading";

import axios from 'axios';

import { app_config } from "../../../config/app-config";
import { getFederationByBranch } from "../../../function/data";

const qs = require('qs');

function Datatable() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState([])
  const [fedNumber, setFedNumber] = useState('Rien');

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
  };

  const toggleModal = async (item) => {
    if (item) {
      setModalData(item)
      // console.log(getFederationByBranch(item.id))
      axios.post(app_config.host_statistic, qs.stringify({
        'action': 'fededation_by_branch',
        'id': item.id
      })).then(resp => {
        // console.log(resp.data)
        setFedNumber(resp.data.federation);
      });
      // setFedNumber(getFederationByBranch(item.id))

    }
    setShowModal(!showModal)
  }

  useEffect(() => {

    axios.post(app_config.host, qs.stringify({
      'action': 'find',
      'table': 'branch'
    })).then(resp => {
      // console.log(resp.data)
      setData(resp.data)
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
    //         {/* <Link to="/branch/test" style={{ textDecoration: "none" }}>
    //           <div className="viewButton">Voir</div>
    //         </Link> */}
    //         <div
    //           className="deleteButton"
    //           onClick={() => handleDelete(params.row.id)}
    //         >
    //           Modifier
    //         </div>
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
    !isLoading ? (
      <div className="datatable">
        <div className="datatableTitle">
          Liste des branches
          <Link to="/branch/addbranch" className="link">
            Ajouter
          </Link>
        </div>
        {data ? <DataGrid
          className="datagrid"
          rows={data}
          columns={branchColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
        /> : ''}

        {showModal &&
          <div className="modal" >
            <div className="modal-container">
              <div className="close">
                <button onClick={() => toggleModal()}>x</button>
              </div>
              <div className="contente">
                <div className="header"><h2> La branche <strong>{modalData.name} </strong></h2></div>
                <div className="body">
                  <div className="description">
                    <h4>Description</h4>
                    <p> {modalData.description} </p>
                  </div>
                  <div className="description">
                    <h4>Nombre de federation fille</h4>
                    <p> {fedNumber} </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>

    ) : <Loading />
  );
};

export default Datatable;