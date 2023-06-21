import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { associationColumns, getAssociation } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../../loading/Loading";

function Datatable() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  useEffect(() => {   
    getAssociation().then(data=>{
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
    //         <Link to="/association/test" style={{ textDecoration: "none" }}>
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
    !isLoading ? (<div className="datatable">
      <div className="datatableTitle">
        Liste des associations
        <Link to="/association/addAsso" className="link">
          Ajouter
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={associationColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}

      />
    </div>) :
      <Loading open={isLoading} />
  );
};

export default Datatable;