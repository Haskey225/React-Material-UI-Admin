import axios from "axios";
import { app_config } from "../config/app-config";

const qs = require('qs');

export const FormatNumber = (number) => {
    if (parseInt(number / 100) < 10) {
        // console.log(number)
        return number;
    }
    let formatedNumber = '';
    if (parseInt(number / 1000000000) > 0) {
        // console.log('Fist stape loop')
        let reste = 0;
        formatedNumber = `${parseInt(number / 1000000000)}`;
        reste = number % 1000000000; // 020 000 500
        // console.log('reste miliard: ' + reste)
        if (parseInt(reste / 100000000) > 0) {
            formatedNumber = `${formatedNumber} ${parseInt(reste / 1000000)}`;
        } else {
            if (parseInt(reste / 10000000) > 0) {
                formatedNumber = `${formatedNumber} 0${parseInt(reste / 1000000)}`;
            } else {
                formatedNumber = `${formatedNumber} 00${parseInt(reste / 1000000)}`;
            }
        }


        reste = reste % 1000000; //000 500
        // console.log('reste milion: ' + reste)
        if (parseInt(reste / 100000) > 0) {
            formatedNumber = `${formatedNumber} ${parseInt((reste / 1000))}`;
        } else {
            if (parseInt(reste / 10000) > 0) {
                formatedNumber = `${formatedNumber} 0${parseInt((reste / 1000))}`;
            } else {
                formatedNumber = `${formatedNumber} 00${parseInt((reste / 1000))}`;
            }
        }

        reste = reste % 1000;
        if (parseInt(reste / 100) > 0) {
            formatedNumber = `${formatedNumber} ${reste}`;
        } else {
            if (parseInt(reste / 10) > 0) {
                formatedNumber = `${formatedNumber} 0${reste}`;
            } else {
                formatedNumber = `${formatedNumber} 00${reste}`;
            }
        }


    } else {
        if (parseInt((number / 1000000)) > 0) {
            let reste = 0;
            formatedNumber = `${parseInt(number / 1000000)}`;

            reste = number % 1000000;
            // console.log('reste milion: ' + reste)
            if (parseInt(reste / 100000) > 0) {
                formatedNumber = `${formatedNumber} ${parseInt((reste / 1000))}`;
            } else {
                if (parseInt(reste / 10000) > 0) {
                    formatedNumber = `${formatedNumber} 0${parseInt((reste / 1000))}`;
                } else {
                    if (parseInt(reste / 1000) > 0) {

                        formatedNumber = `${formatedNumber} 00${parseInt((reste / 1000))}`;
                    } else {
                        formatedNumber = `${formatedNumber} 000`;

                    }
                }
            }


            reste = reste % 1000;
            if (parseInt(reste / 100) > 0) {
                formatedNumber = `${formatedNumber} ${reste}`;
            } else {
                if (parseInt(reste / 10) > 0) {
                    formatedNumber = `${formatedNumber} 0${reste}`;
                } else {
                    formatedNumber = `${formatedNumber} 00${reste}`;
                }
            }
        } else {
            if (parseInt((number / 1000)) > 0) {
                let reste = 0;
                formatedNumber = `${parseInt((number / 1000))}`;

                reste = number % 1000;
                if (parseInt(reste / 100) > 0) {
                    formatedNumber = `${formatedNumber} ${reste}`;
                } else {
                    if (parseInt(reste / 10) > 0) {
                        formatedNumber = `${formatedNumber} 0${reste}`;
                    } else {
                        formatedNumber = `${formatedNumber} 00${reste}`;
                    }
                }
            } else {
                formatedNumber = `${number}`;
            }
        }
    }
    // console.log(formatedNumber);
    return formatedNumber;
}

export const GetMember = () => {
    axios.post(app_config.host, qs.stringify({
        'action': 'find',
        'table': 'members'
    })).then(resp => {
        console.log(resp.data)
    })
}


//Statistic fonction

export const getFederationByBranch = async (br_id) => {
    let data = axios.post(app_config.host_statistic, qs.stringify({
        'action': 'fededation_by_branch',
        'id': br_id
    })).then(resp => {
        // console.log(resp.data)
        data = resp.data;
    });

    return data;
}