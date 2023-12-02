import styled from 'styled-components'; 
import Ionicons from '@expo/vector-icons/Ionicons';

export const HeaderContainer = styled.View`
    flex-direction: row; 
    align-items: center;
    justify-content: space-between; 
    padding-left: ${(props) => props.theme.space[4]};
    padding-right: ${(props) => props.theme.space[4]}; 
    margin-top: ${(props) => props.theme.space[3]}; 
    background-color: red; 
`;

export const Button = styled.TouchableOpacity`
    
`; 

export const Icon = styled(Ionicons)`
    color: ${(props) => props.theme.colors.icon.primary}; 
`;


export const DummyIcon = styled(Ionicons)`
    color: ${(props) => props.theme.colors.icon.quaternary}; 
`;

export const Title = styled.Text`
    font-size: ${(props) => props.theme.fontSizes.title};
    font-weight: ${(props) => props.theme.fontWeights.bold};
`;