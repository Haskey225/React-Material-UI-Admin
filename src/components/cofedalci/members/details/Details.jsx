import './details.scss'
import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from '../../../../context/darkModeContext';
import axios from 'axios';
import { app_config } from '../../../../config/app-config';
import {
    PinDropOutlined,
    Watch, 
    VerifiedUser,
    CloudCircle,
} from '@mui/icons-material';

const qs = require('qs');

const Details = ({ id }) => {
    const [member, setMember] = useState(id)
    const [data, setData] = useState(null)
    const { shownModal, setShownModal } = useContext(DarkModeContext)

    const toggleModale = () => {
        setShownModal(!shownModal);
    }

    useEffect(() => {
        axios.post(app_config.host, qs.stringify({
            'action': 'find',
            'table': 'member_data',
            'id': id
        })).then(resp => {
            setData(resp.data);
        })

    }, [])
    useEffect(() => {
        axios.post(app_config.host, qs.stringify({
            'action': 'find',
            'table': 'member_data',
            'id': id
        })).then(resp => {
            setData(resp.data);
        })

    }, [id])
    //Create second useEffect for item change in order to update activity state
    //Implementation des membre detail:
    //Info du membre
    //Activité du membre,
    //member ship : les dates d'inscription
    //Localite du membre

    return (
        <>
            {
                shownModal &&
                <div className="modal" >
                    <div className="modal-container">
                        <div className="close">
                            <button onClick={() => toggleModale()}>x</button>
                        </div>
                        <div className="contente">
                            <div className="header"><h3> Detail sur membre</h3></div>
                            <p>Membre dépuis le {data[0].member_ship[0].day + '/' + data[0].member_ship[0].month + '/' + data[0].member_ship[0].year}</p>
                            <div className="body">
                                <div className='section'>
                                    <div className='title'>
                                        <VerifiedUser />
                                        <h4>Information sur le membre </h4>
                                    </div>
                                    <div className='items'>
                                        <div className="item">
                                            <h4>Nom</h4>
                                            <p>{data[0].member_info[0].name} </p>
                                        </div>
                                        <div className="item">
                                            <h4>Date / lieu de naissance</h4>
                                            <p>Né le {data[0].member_info[0].birth_date} à {data[0].member_info[0].birth_place} </p>
                                        </div>
                                        <div className="item">
                                            <h4>Nationnalité</h4>
                                            <p>{data[0].member_info[0].nationnality} </p>
                                        </div>
                                        <div className="item">
                                            <h4>Contact</h4>
                                            <p>
                                                Tel: {data[0].member_info[0].phone_number}  <br />
                                                Whatsapp: {data[0].member_info[0].whatsapp}  <br />
                                                Email: {data[0].member_info[0].email}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div className='section'>
                                    <div className='title'>
                                        <Watch />
                                        <h4>Activité </h4>

                                    </div>
                                    <div className='items'>
                                        <div className="item">
                                            <h4>Début de l'activité</h4>
                                            <p>{data[0].activity[0].start_date} </p>
                                        </div>
                                        <div className="item">
                                            <h4>Date de naissance</h4>
                                            <p>{data[0].activity[0].birth_date} </p>
                                        </div>
                                        <div className="item">
                                            <h4>Spécialité</h4>
                                            <p>{data[0].activity[0].speciality} </p>
                                        </div>
                                        <div className="item">
                                            <h4>Chiffe d'affaire / mois</h4>
                                            <p>{data[0].activity[0].min_month_customer} </p>
                                        </div>
                                        <div className="item">
                                            <h4>Nombre d'emplyé</h4>
                                            <p>{data[0].activity[0].total_contract_worker + data[0].activity[0].total_fixe_worker + data[0].activity[0].total_family_worker + data[0].activity[0].total_intern_worker} </p>
                                        </div>

                                    </div>
                                </div>
                                <div className='section'>
                                    <div className='title'>
                                        <PinDropOutlined /> <h4>  Localité </h4>
                                    </div>
                                    <div className='items'>
                                        <div className="item">
                                            <h4>Quartier</h4>
                                            <p>{data[0].location[0].erea[0].name} </p>
                                        </div>
                                        <div className="item">
                                            <h4>COmmune</h4>
                                            <p>{data[0].location[0].community[0].name} </p>
                                        </div>
                                        <div className="item">
                                            <h4>Departement</h4>
                                            <p>{data[0].location[0].department[0].name} </p>
                                        </div>
                                        <div className="item">
                                            <h4>Region</h4>
                                            <p>{data[0].location[0].region[0].name} </p>
                                        </div>
                                        <div className="item">
                                            <h4>District</h4>
                                            <p>{data[0].location[0].district[0].name} </p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Details;