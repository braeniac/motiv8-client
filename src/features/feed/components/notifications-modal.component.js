import React from 'react';
import styled from 'styled-components'; 
import { Modal } from 'react-native';

//components
import { SafeArea } from '../../../components/utils/safe-area.component';
import { ModalHeader } from '../../../components/header/modal-header.component';
import { DefaultInfo } from '../../../components/default/default.component';

const ModalContent = styled.View`
    flex: 1;    
`; 

export const NotificationModal = ({ alertVisable, closeModal, notifications={} }) => {

    return(
        <Modal
            animationType="slide"
            transparent={false}
            visible={alertVisable}
        >
            <ModalContent>
                <SafeArea>
                    <ModalHeader closeModal={closeModal} title="Notifications" />
                    <DefaultInfo info="🔔 You have no notifications." />
                </SafeArea>
            </ModalContent>        
        </Modal>
    )

}