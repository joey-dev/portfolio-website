import styled from 'styled-components';
import { HomeContent } from '../Home.style';


export const Background = styled.div`
    background-color: ${props => props.theme.primaryColor};
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
`;

export const Name = styled.h1`
    margin-top: 0;
    color: ${props => props.theme.primaryFontColor};
`;

export const OuterContent = styled(HomeContent)`
    height: 85vh;
    margin-top: 15vh;
    text-align: center;
`;

export const Content = styled(HomeContent)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;

export const ComputerImage = styled.img`
    height: 150px;
    width: 150px;
`;

export const FlagsContainer = styled.div`
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
`;
