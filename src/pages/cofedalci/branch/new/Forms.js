import "./new.scss";
import Sidebar from "../../../../components/sidebar/Sidebar";
import Navbar from "../../../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import { setBranch } from "../../../../datatablesource";

const initialState = {
    'name': '',
    'description': 'description'
}
export default function BranchForm() {

    const [data, setData] = useState(initialState);

    const handleOnChange = (e) => {

        const { name, value } = e.target;

        setData({ ...data, [name]: value })
    }

    const saveBranche = (e) => {
        // e.preventDefault();
        setBranch(data)
    }

    return (
        <div className="new">
            <Sidebar />

            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>Ajouter une branch</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        <form>
                            <div className="formInput">
                            </div>

                            <div className="formInput">
                                <label>Nom de la branche</label>
                                <input name="name" onChange={(e) => handleOnChange(e)} placeholder='Entrez le nom de la banche' />
                            </div>
                            <div className="formInput">
                                <label>Description de la branche</label>
                                <input name="description" onChange={(e) => handleOnChange(e)} placeholder='Entrez la description de la branche' />
                            </div>
                            <button onClick={(e) => saveBranche(e)}>Enregistrer</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
