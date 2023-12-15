import React, { useState } from 'react'; 
import { Modal } from 'react-native';
import styled from 'styled-components'; 

import { SafeArea } from '../../../components/utils/safe-area.component';
import { ModalHeader } from '../../../components/header/modal-header.component';
import { Setting } from './muscle-setting-menu.component';

const ModalContent = styled.View`
    flex: 1;    
`;

export const MuscleSettingModal = ({ alertVisable,  closeModal}) => {

    const [weight, setWeight] = useState(''); 
    const selectedWeight = () => (weight === 'lbs' ? setWeight('kg') : setWeight('lbs'));
  
    const [distance, setDistance] = useState(''); 
    const selectedDistance = () => (distance === 'km' ? setDistance('miles') : setDistance('km'));

    const [bodyMeasurements, setBodyMeasurements] = useState(''); 
    const selectedBodyMeasurements = () => (bodyMeasurements === 'cm' ? setBodyMeasurements('in') : setBodyMeasurements('cm')); 

    return(
        <Modal
            animationType="slide"
            transparent={false}
            visible={alertVisable}
        >
            <ModalContent>
                <SafeArea>
                    <ModalHeader closeModal={closeModal} title="Muscle Setting" />
                    <Setting label="Weight" left="kg" right="lbs" selected={selectedWeight}/>
                    <Setting label="Distance" left="miles" right="km" selected={selectedDistance} />
                    <Setting label="Body Measurements" left="in" right="cm" selected={selectedBodyMeasurements}/>
                </SafeArea>
            </ModalContent>        
        </Modal>
    )
}