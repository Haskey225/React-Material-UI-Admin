import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { fedPresiColumn } from "../../../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from 'axios';
import { app_config } from "../../../../config/app-config";

const qs = require('qs');
function Datatable() {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  useEffect(() => {
    axios.post(app_config.host, qs.stringify({
      'action': 'find',
      'table': 'fedpresi'
    })).then(resp => {
      // console.log(resp.data)
      setData(resp.data)
      // console.log(resp.data)
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
    //         <Link to="/users/test" style={{ textDecoration: "none" }}>
    //           <div className="viewButton">Voir</div>
    //         </Link>
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
   
    <div className="datatable">
    <div className="datatableTitle">
    Liste des president d'association
      <Link to="/fedPresi/addFedPresi" className="link">
        Ajouter
      </Link>
    </div>
    <DataGrid
      className="datagrid"
      rows={data}
      columns={fedPresiColumn.concat(actionColumn)}
      pageSize={9}
      rowsPerPageOptions={[9]}
    />
  </div>
  );
};

export default Datatable;