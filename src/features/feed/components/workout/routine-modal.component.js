import React from 'react';
import styled from 'styled-components'; 
import { Modal } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Text } from '../../../../components/typography/text.component';


const ModalContent = styled.View`
    width: 90%;
    height: 300px;
    margin-bottom: 20px; 
    background-color: white;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 20px;
`; 

const Icon = styled(Ionicons)`
    color: ${(props) => props.theme.colors.icon.primary}; 
`;

const Button = styled.TouchableOpacity``; 

export const Routine = ({ workoutModalVisable, closeModal }) => {

    return(
        <Modal
            animationType="slide"
            transparent={false}
            visible={workoutModalVisable}
            presentationStyle="pageSheet"
        >
           
                <ModalContent>

                    <Button
                        onPress={closeModal}
                    >
                        <Icon name="close-circle" size={25} />
                    </Button>


                    <Text variant="bold">Push</Text>
                    <Text variant="bold">Pull</Text>
                    <Text variant="bold">Leg</Text>
                    

                
            
                </ModalContent>        
        </Modal>
    )
}