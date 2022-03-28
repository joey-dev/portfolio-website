import * as actionTypes from './ActionTypes';
import { IFrontItems, ILanguage } from './index';

export const getInfoState = () => {
    return {
        type: actionTypes.GET_INFO_STATE,
        payload: {
        },
    };
};

export const setInfoLanguage = (language: ILanguage) => {
    return {
        type: actionTypes.SET_INFO_LANGUAGE,
        payload: {
            language
        },
    };
};

export const setInfo = (frontItems?: IFrontItems) => {
    return {
        type: actionTypes.SET_INFO,
        payload: {
            frontItems
        },
    };
};


