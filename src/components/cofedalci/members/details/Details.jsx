import './details.scss'
import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from '../../../../context/darkModeContext';
import axios from 'axios';
import { app_config } from '../../../../config/app-config';

const qs = require('qs');

const Details = ({ item }) => {
    const [member, setMember] = useState(item)
    const [data, setData] = useState(null)
    const { shownModal, setShownModal } = useContext(DarkModeContext)

    const toggleModale = () => {
        setShownModal(!shownModal);
    }

    useEffect(() => {
        axios.post(app_config.host, qs.stringify({
            'action': 'find',
            'table': 'member_data',
            'id': item.id
        })).then(resp => {
            setData(resp.data);
            console.log(data)
        })

        setMember(item)
    }, [item])
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
                            <div className="header"><h2> Detail sur membre</h2></div>
                            <div className="body">
                                <div className="description">
                                    <h4>Nom</h4>
                                    <p>{data[0].member_info[0].name} </p>
                                </div>
                                <div className="description">
                                    <h4>Date de naissance</h4>
                                    <p>{data[0].member_info[0].birth_date} </p>
                                </div>
                                <div className="description">
                                    <h4>Lieu de naissance</h4>
                                    <p>{data[0].member_info[0].birth_place} </p>
                                </div>
                                <div className="description">
                                    <h4>Nationnalité</h4>
                                    <p>{data[0].member_info[0].nationnality} </p>
                                </div>
                                <div className="description">
                                    <h4>Nombre de federation fille</h4>
                                    <p> Nombre </p>
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