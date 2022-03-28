import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { MapStateToProps } from './store';
import { ILanguage, InfoStoreState } from './store/info';
import { setInfoLanguage } from './store/info/Action';

interface DispatchProps {
    setInfoLanguage: (language: ILanguage) => void,
}

type Props = DispatchProps & InfoStoreState;

const App: React.FC<Props> = (props: Props) => {

    useEffect(() => {
        props.setInfoLanguage(props.language);
    }, [])

    return (
        <>
            <Routes>
                <Route path="/"
                    element={<Home />}
                />
            </Routes>
        </>
    );
}

const mapStateToProps = (state: MapStateToProps) => {
    return {
    };
};

type DispatchPropsArgs = {
    type: string;
};

const mapDispatchToProps = (dispatch: (arg0: DispatchPropsArgs) => void) => {
    return {
        setInfoLanguage: (language: ILanguage) => dispatch(setInfoLanguage(language)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
