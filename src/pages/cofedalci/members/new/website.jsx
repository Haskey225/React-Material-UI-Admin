import "./website.scss";
// import Sidebar from "../../../../components/sidebar/Sidebar";
// import Navbar from "../../../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState, useEffect } from "react";
import axios from "axios";
import { setMember } from "../../../../datatablesource";
import { app_config } from "../../../../config/app-config";
import { Snackbar, Alert } from "@mui/material";

const qs = require('qs');
const initialMemberState = {
    'name': '',
    'birth_date': '',
    'birth_place': '',
    'nationnality': '',
    'phone_number': '',
    'whatsapp': '',
    'email': '',
    'community_id': 0, //Activity form ID
    'area_name': '', //Activity form ID
    'association_id': 0
}

const initialActivityState = {
    'metier_id': 0,
    'speciality': '',
    'start_date': '',
    'min_month_ca': '',
    'max_month_ca': '10',
    'min_month_customer': '',
    'max_month_customer': '10',
    'total_fix_worker': 0,
    'total_contract_worker': 0,
    'total_familly_worker': 0,
    'total_intern_worker': 0,
    // 'total_worker': 0
}

const ERROR_TYPE = "error";
const SUCCESS_TYPE = "success";

export default function Website() {
    //Avatar or profile image
    const [file, setFile] = useState("");

    const [memberState, setMemberState] = useState(initialMemberState);
    const [activityState, setActivityState] = useState(initialActivityState);

    const [districtState, setDistrictState] = useState(null);
    const [regionState, setRegionState] = useState(null);
    const [departementState, setDepartementState] = useState(null);
    const [communityState, setCommunityState] = useState(null);

    const [branchState, setBranchState] = useState(null);
    const [federationState, setFederationState] = useState(null);
    const [associationState, setAssociationState] = useState(null);
    const [metierState, setMetierState] = useState(null);
    //Snack bar code
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState("warning");

    const onClose = () => {
        setOpen(false)
    }

    const handleClick = () => {
        setOpen(true)
    }
    //end Snack bar

    const handleMemberState = (e) => {
        const { name, value } = e.target;
        setMemberState({ ...memberState, [name]: value });
        // console.log(value);
        // console.log(testFordata);
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
                axios.post(app_config.host, qs.stringify({
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

                axios.post(app_config.host, qs.stringify({
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

                axios.post(app_config.host, qs.stringify({
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

    //handle activity change

    const handleActivityChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'branch':
                axios.post(app_config.host, qs.stringify({
                    'action': 'find',
                    'table': 'fedbybranch',
                    'id': value
                })).then(resp => {
                    setFederationState([])
                    setFederationState(resp.data);
                    setAssociationState([])
                    // console.log(branchState);
                })

                break;
            case 'fed':
                axios.post(app_config.host, qs.stringify({
                    'action': 'find',
                    'table': 'assobyfed',
                    'id': value
                })).then(resp => {
                    setAssociationState(resp.data);
                    // console.log(branchState);
                })
                break;
            case 'association_id':
                axios.post(app_config.host, qs.stringify({
                    'action': 'find',
                    'table': 'metiers_asso_id',
                    'id': value
                })).then(resp => {
                    setMetierState(resp.data);
                    // console.log(resp.data);
                })

                // handleBranchChange(e)
                handleMemberState(e)

                break;

            default:
                break;
        }
    }


    //Sibmit form for member creation
    const isFormFullFelled = (data, data2) => {
        let response = 1;
        Object.values(data).forEach(value => {
            // console.log(value)
            if (!value) {
                response = response * 0;
            }
        });
        Object.values(data2).forEach(value => {
            if (!value) {
                //console.log("aucune valeurs")
                response = response * 0
            }
        });

        return response;

    }
    const submitForm = (e) => {
        e.preventDefault();
        if (!isFormFullFelled(memberState, activityState)) {
            setMessage("Un ou plusieurs champs n'ont pas été renseigné");
            setMessageType(ERROR_TYPE);
            handleClick();//Function pour afficher la snack bare d'information
            return 0
        }
        // console.log('Continuer')
        setMember(memberState, activityState, file);
        setMessage('Membre enregistré avec succès');
        setMessageType(SUCCESS_TYPE);
        handleClick();//Function pour afficher la snack bare d'information
        // handleClick()
    }

    useEffect(() => {
        axios.post(app_config.host, qs.stringify({
            'action': 'find',
            'table': 'branch'
        })).then(resp => {
            setBranchState(resp.data);
            // console.log(branchState);
        })
        axios.post(app_config.host, qs.stringify({
            'action': 'find',
            'table': 'district'
        })).then(resp => {
            setDistrictState(resp.data);
            // console.log(branchState);
        })
    }, [])


    return (
        <div className="new">
            <div className="newContainer">

                <Snackbar
                    anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                    open={open}
                    autoHideDuration={6000}
                    onClose={onClose}>
                    <Alert onClose={onClose} severity={messageType} sx={{ width: '100%' }}>
                        { message }
                    </Alert>
                </Snackbar>
                <div className="bottom">
                    <h2>Info sur le membre</h2>
                    <div className="left">
                        <img
                            src={file ? URL.createObjectURL(file) : "https://www.icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
                    </div>
                    <div className="right">
                        <form>

                            <div className="formInput">
                                <label htmlFor="file">
                                    Photo de profile : <DriveFolderUploadOutlined className="icon" />
                                </label>
                                <input require='require'
                                    type="file"
                                    id="file"
                                    onChange={e => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                    name="file"
                                />
                            </div>

                            <div className="formInput">
                                <label>Nom</label>
                                <input require='require' type='text' name='name' onChange={(e) => handleMemberState(e)} placeholder='entrez votre nom complet' />
                            </div>
                            <div className="formInput">
                                <label>Date de naissance</label>
                                <input require='require' name='birth_date' onChange={(e) => handleMemberState(e)} type='date' placeholder='entrez votre date de naissance' />
                            </div>
                            <div className="formInput">
                                <label>Lieux de naissance</label>
                                <input require='require' name='birth_place' onChange={(e) => handleMemberState(e)} type='text' placeholder='entrez votre lieux de naissance' />
                            </div>
                            <div className="formInput">
                                <label>Nationnalité</label>
                                <input require='require' type='text' name='nationnality' onChange={(e) => handleMemberState(e)} placeholder='entrez votre Nationnalité' />
                            </div>
                            <div className="formInput">
                                <label>Telephone</label>
                                <input require='require' type='tel' onChange={(e) => handleMemberState(e)} name='phone_number' placeholder='entrez votre numéro de tel' />
                            </div>
                            <div className="formInput">
                                <label>Whatsapp</label>
                                <input require='require' type='text' name='whatsapp' onChange={(e) => handleMemberState(e)} placeholder='entrez votre numero whatsapp' />
                            </div>
                            <div className="formInput">
                                <label>Email</label>
                                <input require='require' type='email' name='email' onChange={(e) => handleMemberState(e)} placeholder='entrez votre adresse email' />
                            </div>

                            {/* Info sur lactivité */}
                            <h2>Information sur l activité</h2>
                            <div className="formInput">
                                <label>Branche</label>
                                <select name="branch" onChange={(e) => handleActivityChange(e)}>
                                    <option>Branche</option>
                                    {
                                        branchState && branchState.map((item, index) =>
                                            <option key={index} value={item.id}>{item.name} </option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className="formInput">
                                <label>Federation de base</label>
                                <div>
                                    <select name="fed" onChange={(e) => handleActivityChange(e)}>
                                        <option>Federation</option>
                                        {
                                            federationState ? federationState.map((item, index) =>
                                                <option value={item.id} key={index}>{item.shirt_name}</option>
                                            ) : 'Null'
                                        }
                                    </select>
                                </div>

                            </div>
                            <div className="formInput">
                                <label>Association de base</label>
                                <div>
                                    <select name="association_id" onChange={(e) => handleActivityChange(e)}>
                                        <option>Association</option>
                                        {
                                            associationState ? associationState.map((item, index) =>
                                                <option value={item.id} key={index}>{item.name}</option>
                                            ) : 'Null'
                                        }
                                    </select>
                                </div>
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
                                <input require='require' name='speciality' type='text' placeholder='entrez votre spécialité' onChange={(e) => handleActivityState(e)} />
                            </div>
                            <div className="formInput">
                                <label>Début d'activité</label>
                                <input require='require' type='date' name='start_date' placeholder='entrez votre Nationnalité' onChange={(e) => handleActivityState(e)} />
                            </div>
                            <div className="formInput">
                                <label>Estimation chiffre d'affaire par mois</label>
                                <div className='forminterne'>
                                    <input require='require' name='min_month_ca' placeholder='Montant moyen' onChange={(e) => handleActivityState(e)} />
                                    {/* <input require = 'require' name='max_month_ca'  placeholder='Montant maximum' onChange={(e) => handleActivityState(e)} /> */}
                                </div>
                            </div>
                            <div className="formInput">
                                <label>Estimation du nombre de client par mois</label>
                                <div className='forminterne'>
                                    <input require='require' name='min_month_customer' placeholder='Montant moyen' onChange={(e) => handleActivityState(e)} />
                                    {/* <input require = 'require' name='max_month_customer'  placeholder='Montant maximum' onChange={(e) => handleActivityState(e)} /> */}
                                </div>
                            </div>
                            <div className="formInput">
                                <label>Estimation du nombre d ouvrier ou salarier</label>
                                <div className='forminterne'>
                                    <input require='require' name='total_fix_worker' placeholder='Fixe' onChange={(e) => handleActivityState(e)} />
                                    <input require='require' name='total_contract_worker' placeholder='Contractuel' onChange={(e) => handleActivityState(e)} />
                                    <input require='require' name='total_familly_worker' placeholder='Aide familialle' onChange={(e) => handleActivityState(e)} />
                                    <input require='require' name='total_intern_worker' placeholder='Stagiare' onChange={(e) => handleActivityState(e)} />
                                </div>
                            </div>

                            <h2>Info sur la localité</h2>
                            <div className="formInput">
                                <label >District
                                    <select name='district' onChange={(e) => handleLocationChange(e)}>
                                        <option>{districtState ? 'Selectionnez votre district' : 'Aucun element trouve'} </option>
                                        {
                                            districtState && districtState.map((item, index) =>
                                                <option key={index} value={item.id}>{item.name}</option>
                                            )
                                        }
                                    </select>
                                </label>
                            </div>
                            <div className="formInput">
                                <label>Region
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
                                </label>
                            </div>
                            <div className="formInput">
                                <label>Departement
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
                                </label>
                            </div>
                            <div className="formInput">
                                <label>Commune
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
                                </label>
                            </div>
                            <div className="formInput">
                                <label>Quatier/Village</label>
                                <input require='require' name="area_name" onChange={(e) => handleMemberState(e)} type='text' placeholder='entrez votre le nom de votre quartier' />
                            </div>

                            <h2>Autre information</h2>
                            <div className="formInput">
                                <label>Parlez nous un peux de vous <p>{'(Optionnel)'} </p></label>
                                <textarea require='require' name="area_name" onChange={(e) => handleMemberState(e)} type='text' placeholder='Optionnel' style={{ height: '200px', width: '100%' }} ></textarea>
                            </div>
                            <button onClick={(e) => submitForm(e)}>Enregistrer</button>
                            {/* <p style={{ color: 'red' }}>Des champs sont vide</p> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}