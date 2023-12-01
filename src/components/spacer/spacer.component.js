import React from 'react'; 
import styled from 'styled-components'; 
import { Text } from '../typography/text.component'; 

const SpacerContainer = styled.View`
    border-bottom: 1px solid; 
    padding-left: ${(props) => props.theme.space[4]}; 
    padding-top: ${(props) => props.theme.space[3]}; 
    padding-bottom: ${(props) => props.theme.space[3]}; 
    border-color:${(props) => props.theme.colors.ui.secondary}; 
    border-top-width: 1px; 
    border-bottom-width: 1px; 
`; 

const Label = styled.Text`
    font-weight: ${(props) => props.theme.fontWeights.thin};
    color: ${(props) => props.theme.colors.ui.secondary};
`; 


export const Spacer = ({ label, variant }) => {
    return(
        <SpacerContainer>
            <Text variant={variant} >{label}</Text>
        </SpacerContainer>
    )
}