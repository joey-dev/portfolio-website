import React from 'react';
import { IFontItemsTitles } from '../../../store/info';
import { IFontItemsTitlesWithTimes } from './Front.template';


interface HomeLogicProps {
    fontItemsTitles: IFontItemsTitles
}

interface HomeLogicReturn {
    titles: IFontItemsTitlesWithTimes
}

const FrontLogic = (props: HomeLogicProps): HomeLogicReturn => {
    let titles: IFontItemsTitlesWithTimes = [];

    props.fontItemsTitles.forEach(title => {
        titles.push(title);
        titles.push(2500);
    })

    return {
        titles
    };
}

export default FrontLogic;
