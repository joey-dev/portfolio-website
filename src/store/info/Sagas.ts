import { infoData } from '../../data/InfoData';
import { IFrontItems, ILanguage } from './index';
import { put } from 'redux-saga/effects';
import * as actions from './Action';


interface SetInfoLanguageAction {
    payload: SetInfoLanguageActionPayload
}

interface SetInfoLanguageActionPayload {
    language: ILanguage;
}

export function* setInfoLanguageSaga(action: SetInfoLanguageAction) {
    yield put(actions.setInfo(infoData[action.payload.language].frontItems))
}
