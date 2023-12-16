import React from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components';

//components
import { ModalHeader } from '../../../../components/header/modal-header.component';
import { Text } from '../../../../components/typography/text.component';
import { StartInfo } from './start-info.component';
import { AddExercise } from './add-exercise.component';
import { Exercise } from './exercise.component';

const ModalContent = styled.ScrollView`
    background-color: white;
`; 

export const Routine = ({ workoutModalVisable, closeModal }) => {
    return(
        <Modal
            animationType="slide"
            transparent={false}
            visible={workoutModalVisable}
            presentationStyle="pageSheet"
        >
                <ModalContent>
                    <ModalHeader closeModal={closeModal} title="New Workout" />
                    <StartInfo /> 
                    <Exercise />
                    <Exercise />
                    <Exercise />
                    <Exercise />
                    <Exercise />
                    <Exercise />
                    <AddExercise />
                </ModalContent>        
        </Modal>
    )
}