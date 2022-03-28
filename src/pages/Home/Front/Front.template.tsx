import React from 'react';
import LanguageSelector from '../../../components/buttons/LanguageSelector/LanguageSelector';
import GithubTopRight from '../../../components/links/GithubTopRight/GithubTopRight';
import { IFrontItems } from '../../../store/info';
import { Background, ComputerImage, Content, FlagsContainer, Name, OuterContent } from './Front.style';
import { ReactTypical } from '@deadcoder0904/react-typical';


export type IFontItemsTitlesWithTimes = [string?, number?, string?, number?, string?, number?, string?, number?];

interface Props {
    frontItems: IFrontItems;
    titles: IFontItemsTitlesWithTimes
}

const FrontTemplate: React.FC<Props> = (props: Props) => {

    return (
        <Background>
            <GithubTopRight />
            <OuterContent>
                <Content>
                    <ComputerImage
                        src="/images/computer.svg"
                        alt="computer svg"
                    />
                    <Name>
                        {props.frontItems.name}
                    </Name>
                    <ReactTypical
                        steps={props.titles}
                        loop={Infinity}
                        wrapper="p"
                        style={{height: "1em", fontSize: "1.8em", marginTop: 0,}}
                    />
                </Content>
                <FlagsContainer>
                    <LanguageSelector />
                </FlagsContainer>
            </OuterContent>
        </Background>
    );
};

export default FrontTemplate;
