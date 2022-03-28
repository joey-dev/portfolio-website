import * as actionTypes from './ActionTypes';
import UpdateObject from '../../util/reducer/UpdateObject/UpdateObject';
import { IFrontItems, ILanguage, InfoStoreState } from './index';

const initialState: InfoStoreState = {
    language: 'EN',
    data: undefined,
};

export type Actions = {
    type: string;
    payload: Payload;
};

type Payload = {
    language?: ILanguage;
    frontItems?: IFrontItems;
};

const infoReducer = (state: InfoStoreState = initialState, { type, payload }: Actions) => {
    switch (type) {
        case actionTypes.SET_INFO_LANGUAGE:
            return UpdateObject(state, { language: payload.language });
        case actionTypes.SET_INFO:
            return UpdateObject(state, { data: {...state.data, frontItems: payload.frontItems } });
        default:
            return state;
    }
};

export default infoReducer;
