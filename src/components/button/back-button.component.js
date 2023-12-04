import React from 'react'; 
import styled from 'styled-components'; 
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text } from '../../components/typography/text.component'; 

const BackContainer = styled.TouchableOpacity`
    flex-direction: row; 
    align-items: center;
`;

export const Icon = styled(Ionicons)`
    color: ${(props) => props.theme.colors.icon.primary}; 
`;

export const BackButton = ({ close }) => {
    return(
        <BackContainer onPress={close}>
            <Icon name="chevron-back-sharp" size={25} />
            <Text variant="bold">Back</Text>
        </BackContainer>    
    )
}