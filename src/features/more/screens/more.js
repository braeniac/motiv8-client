import React from 'react'; 
import styled from 'styled-components'; 

//components
import { SafeArea } from '../../../components/utils/safe-area.component'; 
import { Header } from '../../../components/header/header.component'; 

const MoreContainer = styled.View`
    flex: 1; 
    background-color: ${(props) => props.theme.colors.ui.quaternary}
`; 

export const More = () => {

    return(
        <SafeArea>
            <MoreContainer>
                <Header title="More" show={true} icon="settings-outline" />
            </MoreContainer>
        </SafeArea>
    )
}