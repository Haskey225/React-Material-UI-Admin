import "./widgets.scss";
import React, { useEffect, useState } from "react";

const CustomWidgets = ({ show, data, title, type }) => {
    const [showModal, setShowModal] = useState(show ? show : false);
    const [modalData, setModalData] = useState(data)
    const toggleModal = () => {
        setShowModal(!showModal);
        
    }

    useEffect(() => {
        setShowModal(show)
        setModalData(data)
        // console.log(modalData)
    }, [show, data])

    return (
        <>
            {showModal &&
                <div className="modal" >
                    <div className="modal-container">
                        <div className="close">
                            <button onClick={() => toggleModal()}>x</button>
                        </div>
                        <div className="contente">
                            <div className="header"> {title} <strong>{modalData && modalData.short_name} </strong></div>

                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default CustomWidgets;
