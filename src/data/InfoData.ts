import { InfoStoreStateData } from '../store/info';

export interface IInfoDataWithLanguage {
    NL: InfoStoreStateData;
    EN: InfoStoreStateData;
}

export const infoData: IInfoDataWithLanguage = {
    NL: {
        frontItems: {
            name: 'Joey',
            titles: ['Javascript developer', 'back-end developer', 'junior web developer', 'koffie drinker'],
        },
    },
    EN: {
        frontItems: {
            name: 'Joey',
            titles: ['Javascript developer', 'back-end developer', 'junior web developer', 'coffee drinker'],
        },
    },
};
