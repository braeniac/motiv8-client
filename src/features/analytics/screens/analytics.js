import React from 'react'; 
import styled from 'styled-components'; 

//components
import { SafeArea } from '../../../components/utils/safe-area.component'; 
import { Header } from '../../../components/header/header.component'; 

const AnalyticsContainer = styled.View`
    flex: 1; 
    background-color: ${(props) => props.theme.colors.ui.quaternary}
`; 

export const Analytics = () => {

    return(
        <SafeArea>
            <AnalyticsContainer>
                <Header title="Analytics" show={true} icon="settings-outline" />
            </AnalyticsContainer>
        </SafeArea>
    )
}