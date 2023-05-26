import axios from 'axios';
import { app_config } from './config/app-config';
const qs = require('qs');

export const branchColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "name",
    width: 150,
  },

  {
    field: "description",
    headerName: "description",
    width: 400,
  },
];
export const federationColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "short_name",
    headerName: "nom abrégé",
    width: 150,
  },
  {
    field: "full_name",
    headerName: "nom developpé",
    width: 150,
  },
  {
    field: "description",
    headerName: "description",
    width: 400,
  },
  {
    field: "branch_id",
    headerName: "ID de banch",
    width: 150,
  },

];
export const associationColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "name",
    width: 100,
  },

  {
    field: "description",
    headerName: "description",
    width: 200,
  },
  {
    field: "federation_id",
    headerName: "ID fedeation",
    width: 120,
  },
  {
    field: "location_id",
    headerName: "ID Lieux",
    width: 120,
  },
];
export const metierColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "name",
    width: 100,
  },

  {
    field: "description",
    headerName: "description",
    width: 200,
  },
  {
    field: "branch_id",
    headerName: "ID Branch",
    width: 100,
  },
];
export const districtColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "name",
    width: 150,
  },

  {
    field: "iso_3",
    headerName: "ISO-3 du pays",
    width: 70,
  },
];
export const regionColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "name",
    width: 150,
  },

  {
    field: "district_id",
    headerName: "ID District",
    width: 70,
  },
];
export const departmentColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "name",
    width: 150,
  },

  {
    field: "region_id",
    headerName: "ID de Region",
    width: 70,
  },
];
export const communityColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "name",
    width: 150,
  },

  {
    field: "department_id",
    headerName: "ID de Departement",
    width: 70,
  },
];
export const areaColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "name",
    width: 150,
  },

  {
    field: "community_id",
    headerName: "ID de la Commune",
    width: 70,
  },
];
export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//president coloumn
export const assoPresiColumn = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Nom",
    width: 100,
  },
  {
    field: "contact",
    headerName: "Contact",
    width: 150,
  },
  {
    field: "association_id",
    headerName: "ID Association",
    width: 200,
  },

];
export const fedPresiColumn = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Nom",
    width: 100,
  },
  {
    field: "contact",
    headerName: "Contact",
    width: 150,
  },
  {
    field: "federation_id",
    headerName: "ID Federation",
    width: 200,
  },

];

//Loaction column
export const regionColumn = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Nom",
    width: 100,
  },
  {
    field: "district_id",
    headerName: "ID district",
    width: 150,
  },

];
export const departementColumn = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Nom",
    width: 100,
  },
  {
    field: "region",
    headerName: "ID Region",
    width: 150,
  },

];
export const communityColumn = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Nom",
    width: 100,
  },
  {
    field: "department_id",
    headerName: "ID Departement",
    width: 150,
  },

];
export const areaColumn = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Nom",
    width: 100,
  },
  {
    field: "community_id",
    headerName: "ID Commune",
    width: 150,
  },

];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];

export async function GetBranch() {
  let datas;
  await axios.post(app_config.host, qs.stringify({
    'action': 'find',
    'table': 'branch'
  })).then(resp => {
    // //console.log(resp.data)
    // return new Promise(resp.data)
    datas = resp.data
  })

  return datas
}

export const setBranch = (val) => {
  axios.post(app_config.host, qs.stringify({
    'action': 'save',
    'table': 'branch',
    'val': val
  })).then(resp => {
    // //console.log(resp.data);
    return resp.data
  })
}

export const setFederation = (val) => {
  axios.post(app_config.host, qs.stringify({
    'action': 'save',
    'table': 'federation',
    'val': val
  })).then(resp => {
    //console.log(resp.data);
    return resp.data
  })

}
export const setFederationPresi = (val) => {
  axios.post(app_config.host, qs.stringify({
    'action': 'save',
    'table': 'fedpresi',
    'val': val
  })).then(resp => {
    // console.log(resp.data);
    // return resp.data
  })

}
export const setAssociation = (val) => {
  axios.post(app_config.host, qs.stringify({
    'action': 'save',
    'table': 'association',
    'val': val
  })).then(resp => {
    // console.log(resp.data);
    // return resp.data
  })

}
export const setAssociationPresi = (val) => {
  axios.post(app_config.host, qs.stringify({
    'action': 'save',
    'table': 'assopresi',
    'val': val
  })).then(resp => {
    // console.log(resp.data);
    // return resp.data
  })

}

export const setMetier = (val) => {
  axios.post(app_config.host, qs.stringify({
    'action': 'save',
    'table': 'metier',
    'val': val
  })).then(resp => {
    //console.log(resp.data)
  })
}

export const setMember = (member, activity) => {
  axios.post(app_config.host, qs.stringify({
    'action': 'save',
    'table': 'member',
    'member': member,
    'activity': activity
  })).then(resp => {
    console.log(resp.data)
  })
}

export const setDepartment = (val) => {
  axios.post(app_config.host, qs.stringify({
    'action': 'save',
    'table': 'department',
    'val': val
  })).then(resp => {
    console.log(resp.data)
  })
}
export const setCommunity = (val) => {
  axios.post(app_config.host, qs.stringify({
    'action': 'save',
    'table': 'community',
    'val': val
  })).then(resp => {
    console.log(resp.data)
  })
}
export const setArea = (val) => {
  axios.post(app_config.host, qs.stringify({
    'action': 'save',
    'table': 'area',
    'val': val
  })).then(resp => {
    console.log(resp.data)
  })
}