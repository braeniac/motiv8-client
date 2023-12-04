import React from 'react';
import styled from 'styled-components'; 
import { Modal } from 'react-native';

//components
import { Text } from '../../../components/typography/text.component';
import { SafeArea } from '../../../components/utils/safe-area.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { ModalHeader } from '../../../components/header/modal-header.component';


const ModalContent = styled.View`
    flex: 1;    
`; 

export const NotificationModal = ({ alertVisable, closeModal }) => {
    return(
        <Modal
            animationType="slide"
            transparent={false}
            visible={alertVisable}
        >
            <ModalContent>
                <SafeArea>
                    <ModalHeader closeModal={closeModal} title="Notifications" />
  
                    {/* default notification  */}
                    <Spacer variant="emptyColumn">
                        <Text variant="bodyCenter">You have no notifications.</Text>
                    </Spacer>

                </SafeArea>
            </ModalContent>        
        </Modal>
    )

}