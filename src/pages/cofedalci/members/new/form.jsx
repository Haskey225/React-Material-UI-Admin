import "./new.scss";
import Sidebar from "../../../../components/sidebar/Sidebar";
import Navbar from "../../../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { Select } from "@mui/material";
import axios from "axios";
import { setMember } from "../../../../datatablesource";


const qs = require('qs');
const initialMemberState = {
    'name': '',
    'birth_date': '10/10/1991',
    'birth_place': '',
    'nationnality': '',
    'phone_number': '',
    'whatsapp': '',
    'email': '',
    'community_id': 0, //Activity form ID
    'area_name': '' //Activity form ID
}

const initialActivityState = {
    'metier_id': 0,
    'speciality': '',
    'start_date': '10/10/2023',
    'min_month_ca': '',
    'max_month_ca': '',
    'min_month_customer': '',
    'max_month_customer': '',
    'total_fix_worker': 0,
    'total_contract_worker': 0,
    'total_familly_worker': 0,
    'total_intern_worker': 0
}

export default function MemberForm() {
    //Avatar or profile image
    const [file, setFile] = useState("");

    const [memberState, setMemberState] = useState(initialMemberState);
    const [activityState, setActivityState] = useState(initialActivityState);

    const [districtState, setDistrictState] = useState(null);
    const [regionState, setRegionState] = useState(null);
    const [departementState, setDepartementState] = useState(null);
    const [communityState, setCommunityState] = useState(null);
    const [areaState, setAreaState] = useState(null);
    const [metierState, setMetierState] = useState(null)

    const [branchState, setBranchState] = useState(null);

    const handleMemberState = (e) => {
        const { name, value } = e.target;
        setMemberState({ ...memberState, [name]: value });
        // console.log(value);
    }

    const handleActivityState = (e) => {
        const { name, value } = e.target;
        setActivityState({ ...activityState, [name]: value });
        // console.log(name)
    }

    //Location manager

    const handleLocationChange = (e) => {
        const { name, value } = e.target;
        // console.log(value)

        switch (name) {

            case 'district':
                axios.post('http://localhost/cofedal-api/api/', qs.stringify({
                    'action': 'find',
                    'table': 'region',
                    'id': value
                })).then(resp => {
                    setRegionState(resp.data);
                    setDepartementState(null)
                    setCommunityState(null)
                    // console.log();
                })

                break;

            case 'region':

                axios.post('http://localhost/cofedal-api/api/', qs.stringify({
                    'action': 'find',
                    'table': 'department',
                    'id': value
                })).then(resp => {
                    setDepartementState(resp.data);
                    setCommunityState(null)
                    // console.log(resp.data);
                })

                break;

            case 'department':

                axios.post('http://localhost/cofedal-api/api/', qs.stringify({
                    'action': 'find',
                    'table': 'community',
                    'id': value
                })).then(resp => {
                    setCommunityState(resp.data);
                    // console.log();
                })

                break;

            default:
                break;
        }
    }

    const handleBranchChange = (e) => {
        const { value } = e.target;
        //Ici on charge les corps de metiers en rapport avec la branch en passant l'id de la banche 
        axios.post('http://localhost/cofedal-api/api/', qs.stringify({
            'action': 'find',
            'table': 'metier',
            'branch_id': value
        })).then(resp => {
            setMetierState(resp.data);
            console.log(metierState);
        })
    }

    //Sibmit form for member creation
    const submitForm = (e) => {
        e.preventDefault();
        setMember(memberState, activityState)

    }

    useEffect(() => {
        axios.post('http://localhost/cofedal-api/api/', qs.stringify({
            'action': 'find',
            'table': 'branch'
        })).then(resp => {
            setBranchState(resp.data);
            // console.log(branchState);
        })
        axios.post('http://localhost/cofedal-api/api/', qs.stringify({
            'action': 'find',
            'table': 'district'
        })).then(resp => {
            setDistrictState(resp.data);
            // console.log(branchState);
        })
    }, [])


    return (
        <div className="new">
            <Sidebar />

            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>Ajouter un nouveau membre</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={file ? URL.createObjectURL(file) : "https://www.icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
                    </div>
                    <div className="right">
                        <form>
                            <div className='top'>
                                <h2>Info sur le membre</h2>
                            </div>

                            <div className="formInput">
                                <label htmlFor="file">
                                    Image : <DriveFolderUploadOutlined className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={e => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                            </div>

                            <div className="formInput">
                                <label>Nom</label>
                                <input type='text' name='name' onChange={(e) => handleMemberState(e)} placeholder='entrez votre nom complet' />
                            </div>
                            <div className="formInput">
                                <label>Date de naissance</label>
                                <input name='birth_date' onChange={(e) => handleMemberState(e)} type='date' placeholder='entrez votre date de naissance' />
                            </div>
                            <div className="formInput">
                                <label>Lieux de naissance</label>
                                <input name='birth_place' onChange={(e) => handleMemberState(e)} type='text' placeholder='entrez votre lieux de naissance' />
                            </div>
                            <div className="formInput">
                                <label>Nationnalité</label>
                                <input type='text' name='nationnality' onChange={(e) => handleMemberState(e)} placeholder='entrez votre Nationnalité' />
                            </div>
                            <div className="formInput">
                                <label>Telephone</label>
                                <input type='tel' onChange={(e) => handleMemberState(e)} name='phone_number' placeholder='entrez votre numéro de tel' />
                            </div>
                            <div className="formInput">
                                <label>Whatsapp</label>
                                <input type='text' name='whatsapp' onChange={(e) => handleMemberState(e)} placeholder='entrez votre numero whatsapp' />
                            </div>
                            <div className="formInput">
                                <label>Email</label>
                                <input type='email' name='email' onChange={(e) => handleMemberState(e)} placeholder='entrez votre adresse email' />
                            </div>

                            {/* Info sur lactivité */}
                            <h2>Information sur l activité</h2>
                            <div className="formInput">
                                <label>Branche</label>
                                <select onChange={(e) => handleBranchChange(e)}>
                                    <option>Branche</option>
                                    {
                                        branchState && branchState.map((item, index) =>
                                            <option key={index} value={item.id}>{item.name} </option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className="formInput">
                                <label>Corps de métier</label>
                                <select name='metier_id' onChange={(e) => handleActivityState(e)}>
                                    <option>Corps de metier</option>
                                    {metierState && metierState.map((item, index) =>
                                        <option key={index} value={item.id}> {item.name} </option>
                                    )}
                                </select>
                            </div>
                            <div className="formInput">
                                <label>Spécialité</label>
                                <input name='speciality' type='text' placeholder='entrez votre spécialité' onChange={(e) => handleActivityState(e)} />
                            </div>
                            <div className="formInput">
                                <label>Début d'activité</label>
                                <input type='date' name='start_date' placeholder='entrez votre Nationnalité' onChange={(e) => handleActivityState(e)} />
                            </div>
                            <div className="formInput">
                                <label>Estimation chiffre d'affaire par mois</label>
                                <div className='forminterne'>
                                    <input name='min_month_ca' type='numeric' placeholder='Montant minimum' onChange={(e) => handleActivityState(e)} />
                                    <input name='max_month_ca' type='numeric' placeholder='Montant maximum' onChange={(e) => handleActivityState(e)} />
                                </div>
                            </div>
                            <div className="formInput">
                                <label>Estimation du nombre de client par mois</label>
                                <div className='forminterne'>
                                    <input name='min_month_customer' type='numeric' placeholder='Montant minimum' onChange={(e) => handleActivityState(e)} />
                                    <input name='max_month_customer' type='numeric' placeholder='Montant maximum' onChange={(e) => handleActivityState(e)} />
                                </div>
                            </div>
                            <div className="formInput">
                                <label>Estimation du nombre d ouvrier ou salarier</label>
                                <div className='forminterne'>
                                    <input name='total_fix_worker' type='numeric' placeholder='Fixe' onChange={(e) => handleActivityState(e)} />
                                    <input name='total_contract_worker' type='numeric' placeholder='Contractuel' onChange={(e) => handleActivityState(e)} />
                                    <input name='total_familly_worker' type='numeric' placeholder='Aide familialle' onChange={(e) => handleActivityState(e)} />
                                    <input name='total_intern_worker' type='numeric' placeholder='Stagiare' onChange={(e) => handleActivityState(e)} />
                                </div>
                            </div>

                            <h2>Info sur la localité</h2>
                            <div className="formInput">
                                <label>District</label>
                                <select name='district' onChange={(e) => handleLocationChange(e)}>
                                    <option>{districtState ? 'Selectionnez votre district' : 'Aucun element trouve'} </option>
                                    {
                                        districtState && districtState.map((item, index) =>
                                            <option key={index} value={item.id}>{item.name}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className="formInput">
                                <label>Region</label>
                                <select name='region' onChange={(e => handleLocationChange(e))}>
                                    <option>
                                        {regionState ? 'Selectionnez votre Region' : '(Aucun) veuillez selectionnez un district'}
                                    </option>
                                    {
                                        regionState && regionState.map((item, index) =>
                                            <option key={index} value={item.id}>{item.name}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className="formInput">
                                <label>Departement</label>
                                <select name='department' onChange={(e) => handleLocationChange(e)}>
                                    <option>
                                        {departementState ? 'Selectionnez votre departement' : '(Aucun) veuillez selectionnez une region'}
                                    </option>
                                    {
                                        departementState && departementState.map((item, index) =>
                                            <option key={index} value={item.id}>{item.name}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className="formInput">
                                <label>Commune</label>
                                <select name='community_id' onChange={(e) => handleMemberState(e)}>
                                    <option>
                                        {communityState ? 'Selectionnez votre commune' : '(Aucun) veuillez selectionnez un departement'}
                                    </option>
                                    {
                                        communityState && communityState.map((item, index) =>
                                            <option key={index} value={item.id}>{item.name}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className="formInput">
                                <label>Quatier/Village</label>
                                <input name="area_name" onChange={(e) => handleMemberState(e)} type='text' placeholder='entrez votre le nom de votre quartier' />
                            </div>

                            <h2>Autre information</h2>
                            <div className="formInput">
                                <label>Federation de base</label>
                                <div>
                                    <input type='text' readOnly placeholder='Nom' />
                                    <input type='text' readOnly placeholder='Pesident' />
                                    <input type='text' readOnly placeholder='Contact' />
                                </div>

                            </div>
                            <div className="formInput">
                                <label>Association de base</label>
                                <div>
                                    <input type='text' readOnly placeholder='Nom' />
                                    <input type='text' readOnly placeholder='Pesident' />
                                    <input type='text' readOnly placeholder='Contact' />
                                </div>
                            </div>

                            <button onClick={(e) => submitForm(e)}>Enregistrer</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}