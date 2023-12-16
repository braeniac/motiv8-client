import React from 'react'; 
import styled from 'styled-components'; 
import Ionicons from '@expo/vector-icons/Ionicons';


export const Drawer = styled.View`
    flex: 1; 
    background-color: ${(props) => props.theme.colors.ui.quaternary}; 
    padding-top:  ${(props) => props.theme.space[6]};
    padding-bottom: ${(props) => props.theme.space[6]}; 
    padding-left: ${(props) => props.theme.space[5]}
`; 

export const Tab = styled.TouchableOpacity` 
    flex-direction: row; 
    padding: ${(props) => props.theme.space[1]}; 
    margin-top:  ${(props) => props.theme.space[3]};
    margin-bottom: ${(props) => props.theme.space[3]}; 
    align-items: center;
`; 

export const Label = styled.Text`
    fontSize: ${(props) => props.theme.fontSizes.body}; 
    color: ${(props) => props.theme.colors.icon.primary}; 
    padding-left: ${(props) => props.theme.space[3]}; 
    font-weight: ${(props) => props.theme.fontWeights.thin};
`; 

export const Icon = styled(Ionicons)`
    color: ${(props) => props.theme.colors.icon.error}; 
    padding-right: ${(props) => props.theme.space[3]}; 
`;

export const Logout = styled.View`
    padding-left: ${(props) => props.theme.space[5]};
    padding-bottom: ${(props) => props.theme.space[6]}; 
    background-color: ${(props) => props.theme.colors.ui.quaternary};
`;
