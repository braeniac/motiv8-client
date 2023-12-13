import React, { useState } from 'react'; 
import { Modal } from 'react-native';
import styled from 'styled-components'; 

import { SafeArea } from '../../../components/utils/safe-area.component';
import { ModalHeader } from '../../../components/header/modal-header.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { Setting } from './muscle-setting-menu.component';

const ModalContent = styled.View`
    flex: 1;    
`;


export const MuscleSettingModal = ({ alertVisable,  closeModal}) => {

    const [weight, setWeight] = useState(''); 
    const [distance, setDistance] = useState(''); 
    const [bodyMeasurements, setBodyMeasurements] = useState(''); 
    

    return(
        <Modal
            animationType="slide"
            transparent={false}
            visible={alertVisable}
        >
            <ModalContent>
                <SafeArea>
                    <ModalHeader closeModal={closeModal} title="Muscle Setting" />

                    <Setting label="Weight" left="kg" right="lbs" />

                    <Setting label="Distance" left="miles" right="km" />

                    <Setting label="Body Measurements" left="in" right="cm" />
                   
                </SafeArea>
            </ModalContent>        
        </Modal>
    )
}