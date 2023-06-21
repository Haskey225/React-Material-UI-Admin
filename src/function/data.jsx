import axios from "axios";
import { app_config } from "../config/app-config";

const qs = require('qs');

/* 
******************* Function for formating number ******************
    This function can format all number between 0 to 999 999 999 999
    You can implement some detail to format more the default
*/
export const FormatNumber = (number) => {
    //If the number is under one thousand the return it, we didn't need format it
    if (parseInt(number / 100) < 10) {
        return number;
    }

    let formatedNumber = '';
    if (parseInt(number / 1000000000) > 0) {
        let reste = 0;
        formatedNumber = `${parseInt(number / 1000000000)}`;
        reste = number % 1000000000; // 020 000 500
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
    return formatedNumber;
}

/* 
******************* End number formating ******************
*/


//Statistic fonction

export const getFederationByBranch = async (br_id) => {
    return Promise.resolve(await axios.post(app_config.host_statistic, qs.stringify({
        'action': 'fededation_by_branch',
        'id': br_id
    })).then(resp => {
        // console.log(resp.data)
        return resp.data;
    }))
}

export const testFunction = async () => {
    return Promise.resolve(await axios.post(app_config.host_statistic, qs.stringify({
        'action': 'find',
        'table': 'branch'
    })).then(resp => {
        return resp.data;
    }))
}

// **************** Statistic function Get all data for statistic *****************************
export const getFinancialInfo = async () => {
    return Promise.resolve(await axios.post(app_config.host_statistic, qs.stringify({
        'action': 'finance'
    })).then(resp => {
        return resp.data;
    }))
}
export const getOrganismeInfo = async () => {
    return Promise.resolve(await axios.post(app_config.host_statistic, qs.stringify({
        'action': 'organisme'
    })).then(resp => {
        return resp.data;
    }))
}

/*
**************** End statistic function *****************************
*/

/*
**************** Futures function start *****************************
*/
export const getHowManyMemberFor = async () => {
    /*
        This function check the total member for the specifyed year. Here is 2023
    */
    return Promise.resolve(await axios.post(app_config.host_statistic, qs.stringify({
        'action': 'members_number',
        'year': 2023
    })).then(resp => {
        return resp.data;
    }))
}

 /*
    This function check members for the last 6 month and send it to the memeber flux graph
 */
export const getMemberGraphDetails = async()=>{
    return Promise.resolve(await axios.post(app_config.host_statistic, qs.stringify({
        'action': 'month_graph'
      })).then(resp => {
        return resp.data;
      }))
}