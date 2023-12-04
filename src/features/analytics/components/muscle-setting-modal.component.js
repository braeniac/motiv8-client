import React from 'react'; 
import { Modal } from 'react-native';
import styled from 'styled-components'; 

import { SafeArea } from '../../../components/utils/safe-area.component';
import { ModalHeader } from '../../../components/header/modal-header.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';

const ModalContent = styled.View`
    flex: 1;    
`; 

export const MuscleSettingModal = ({ alertVisable,  closeModal}) => {
    return(
        <Modal
            animationType="slide"
            transparent={false}
            visible={alertVisable}
        >
            <ModalContent>
                <SafeArea>
                    <ModalHeader closeModal={closeModal} title="Muscle Setting" />
  
                   

                </SafeArea>
            </ModalContent>        
        </Modal>
    )
}