import styled from "styled-components";
import Ionicons from '@expo/vector-icons/Ionicons';

export const UserContainer = styled.View`
    flex: 0.1; 
    flex-direction: row;
    padding: ${(props) => props.theme.space[4]};
    margin-top: ${(props) => props.theme.space[4]};
    border-color: ${(props) => props.theme.colors.ui.disabled}; 
    border-top-width: 1px; 
    border-bottom-width: 1px; 
`; 

export const Img = styled.Image`
    width: 60px;
    height: 60px;
`; 

export const Info = styled.View`
    flex-direction: col; 
    padding-left: ${(props) => props.theme.space[3]};
`; 

export const LastWorkout = styled.View`
    flex-direction: row; 
`; 

export const Icon = styled(Ionicons)`
    color: ${(props) => props.theme.colors.icon.primary}; 
    padding-right: ${(props) => props.theme.space[2]}
`;