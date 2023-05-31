import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { federationColumns } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from 'axios';
import { app_config } from "../../../config/app-config";
import Loading from "../../loading/Loading";

const qs = require('qs');
function Datatable() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  useEffect(() => {
    axios.post(app_config.host, qs.stringify({
      'action': 'find',
      'table': 'federation'
    })).then(resp => {
      // console.log(resp.data)
      setData(resp.data)
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
            <Link to="/federation/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">Voir</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Supprimer
            </div>
          </div>
        );
      },
    },
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
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>):
    <Loading />
  );
};

export default Datatable;