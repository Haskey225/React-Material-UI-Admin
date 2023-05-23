import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Branch from "./pages/cofedalci/branch/branch";
import Federation from "./pages/cofedalci/federation/federation";
import Association from "./pages/cofedalci/association/association";
import Members from "./pages/cofedalci/members/members";
import Metiers from "./pages/cofedalci/metiers/metiers";
import District from "./pages/cofedalci/district/district";

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



function App() {

  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
            </Route>
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
              <Route path="addAsso" element={<AssoForm  />} />
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
            <Route path="district">
              <Route index element={<District />} />
              <Route path=":productId" element={<Single />} />
              <Route path="addMetiers" element={<MetierForm />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
