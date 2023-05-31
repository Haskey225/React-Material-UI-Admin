import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { branchColumns } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../../loading/Loading";

import axios from 'axios';

import { app_config } from "../../../config/app-config";

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
      'table': 'branch'
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
            <Link to="/branch/test" style={{ textDecoration: "none" }}>
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
        checkboxSelection
      /> : ''}
    </div>) : <Loading />
  );
};

export default Datatable;