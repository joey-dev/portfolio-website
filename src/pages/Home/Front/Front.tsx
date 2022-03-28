import React from 'react';
import { connect } from 'react-redux';
import { MapStateToProps } from '../../../store';
import { InfoStoreState } from '../../../store/info';
import FrontLogic from './Front.logic';
import FrontTemplate from './Front.template';


const Front: React.FC<InfoStoreState> = (props: InfoStoreState) => {
    if (!props.data || !props.data.frontItems) {
        return (
            <p>no data, pls wait</p>
        );
    }

    const logicData = FrontLogic({fontItemsTitles: props.data.frontItems.titles});

    return <FrontTemplate frontItems={props.data.frontItems} titles={logicData.titles} />;
};

const mapStateToProps = (state: MapStateToProps) => {
    return {
        data: state.info.data,
        language: state.info.language,
    };
};

export default connect(mapStateToProps)(Front);
