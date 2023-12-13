import styled from "styled-components";
import { Switch } from "react-native";

export const Container = styled.View`
    flex-direction: row; 
    align-items: center; 
    justify-content: space-between; 
    margin-left: ${(props) => props.theme.space[5]};
    margin-top: ${(props) => props.theme.space[5]};
`;

export const ToggleWrapper = styled.View`
    flex-direction: row; 
    align-items: center;
    margin-right: ${(props) => props.theme.space[5]};
`

export const Toggle = styled(Switch)`
    margin-right: ${(props) => props.theme.space[4]};
    margin-left: ${(props) => props.theme.space[4]};
`; 