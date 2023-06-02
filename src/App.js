import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Branch from "./pages/cofedalci/branch/branch";
import Federation from "./pages/cofedalci/federation/federation";
import Association from "./pages/cofedalci/association/association";
import Members from "./pages/cofedalci/members/members";
import Metiers from "./pages/cofedalci/metiers/metiers";
import FederationPresi from "./pages/cofedalci/president/federation/federation";
import AssociationPresi from "./pages/cofedalci/president/association/association";

//Location
import District from "./pages/cofedalci/location/district/district";
import Region from "./pages/cofedalci/location/region/region";
import Department from "./pages/cofedalci/location/department/department";
import Community from "./pages/cofedalci/location/community/community";
import Area from "./pages/cofedalci/location/area/area";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MemberForm from "./pages/cofedalci/members/new/form";
import BranchForm from "./pages/cofedalci/branch/new/Forms";
import FederationForm from "./pages/cofedalci/federation/new/addFed";
import AssoForm from "./pages/cofedalci/association/new/addAsso";
import MetierForm from "./pages/cofedalci/metiers/new/metier";

//location form
import DistrictForm from "./pages/cofedalci/location/district/new/addDistrict";
import RegionForm from "./pages/cofedalci/location/region/new/addregion";
import DepartmentForm from "./pages/cofedalci/location/department/new/addDepartment";
import CommunityForm from "./pages/cofedalci/location/community/new/addCommunity";
import AreaForm from "./pages/cofedalci/location/area/new/addArea";

//President Fed & Asso
import FederationPresiForm from "./pages/cofedalci/president/federation/new/addFedPresi";
import AssociationPresiForm from "./pages/cofedalci/president/association/new/addAssoPresi";



function App() {

  const { darkMode, isLogged } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      {isLogged ?
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route path="/" element={<Home />} />
              <Route path="products">
                <Route index element={<List />} />
                <Route path=":productId" element={<Single />} />
                <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
              </Route>
              <Route path="branch">
                <Route index element={<Branch />} />
                <Route path=":productId" element={<Single />} />
                <Route path="addbranch" element={<BranchForm />} />
              </Route>
              <Route path="federation">
                <Route index element={<Federation />} />
                <Route path=":productId" element={<Single />} />
                <Route path="addfederation" element={<FederationForm />} />
              </Route>
              <Route path="association">
                <Route index element={<Association />} />
                <Route path=":productId" element={<Single />} />
                <Route path="addAsso" element={<AssoForm />} />
              </Route>
              <Route path="members">
                <Route index element={<Members />} />
                <Route path=":productId" element={<Single />} />
                <Route path="addMember" element={<MemberForm />} />
              </Route>
              <Route path="metiers">
                <Route index element={<Metiers />} />
                <Route path=":productId" element={<Single />} />
                <Route path="addMetiers" element={<MetierForm />} />
              </Route>
              <Route path="fedPresi">
                <Route index element={<FederationPresi />} />
                <Route path=":productId" element={<Single />} />
                <Route path="addFedPresi" element={<FederationPresiForm />} />
              </Route>
              <Route path="assoPresi">
                <Route index element={<AssociationPresi />} />
                <Route path=":productId" element={<Single />} />
                <Route path="addAssoPresi" element={<AssociationPresiForm />} />
              </Route>
              <Route path="district">
                <Route index element={<District />} />
                <Route path=":productId" element={<Single />} />
                <Route path="addDistrict" element={<DistrictForm />} />
              </Route>
              <Route path="region">
                <Route index element={<Region />} />
                <Route path=":productId" element={<Single />} />
                <Route path="addRegion" element={<RegionForm />} />
              </Route>
              <Route path="department">
                <Route index element={<Department />} />
                <Route path=":productId" element={<Single />} />
                <Route path="addDepartment" element={<DepartmentForm />} />
              </Route>
              <Route path="community">
                <Route index element={<Community />} />
                <Route path=":productId" element={<Single />} />
                <Route path="addCommunity" element={<CommunityForm />} />
              </Route>
              <Route path="area">
                <Route index element={<Area />} />
                <Route path=":productId" element={<Single />} />
                <Route path="addArea" element={<AreaForm />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
        :
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>}
    </div>
  );
}

export default App;
