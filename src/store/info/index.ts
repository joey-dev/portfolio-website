import { all, takeEvery } from 'redux-saga/effects';
import * as actionTypes from './ActionTypes';
import { setInfoLanguageSaga } from './Sagas';


export type ILanguage = 'NL' | 'EN';

export type IFontItemsTitles = readonly [string?, string?, string?, string?];

export interface IFrontItems {
    name: string;
    titles: IFontItemsTitles;
}

export function* watchInfoSagas() {
    yield all([
        takeEvery<any>(actionTypes.SET_INFO_LANGUAGE, setInfoLanguageSaga),
    ]);
}

export interface InfoStoreStateData {
    frontItems?: IFrontItems;
}

export interface InfoStoreState {
    language: ILanguage;
    data?: InfoStoreStateData;
}
