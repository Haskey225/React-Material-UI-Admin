import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows, GetBranch, branchColumns } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from 'axios';

import { DarkModeContext } from "../../../context/darkModeContext";

const qs = require('qs');
function Datatable() {
  const [data, setData] = useState(null);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  useEffect(() => {
    axios.post('http://localhost/cofedal-api/api/', qs.stringify({
      'action': 'find',
      'table': 'branch'
    })).then(resp => {
      // console.log(resp.data)
      setData(resp.data)
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
            <Link to="/users/test" style={{ textDecoration: "none" }}>
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
    <div className="datatable">
      <div className="datatableTitle">
        Ajouter une branche
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
    </div>
  );
};

export default Datatable;