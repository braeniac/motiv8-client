import React from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components';

//components
import { ModalHeader } from '../../../../components/header/modal-header.component';
import { Text } from '../../../../components/typography/text.component';
import { StartInfo } from './start-info.component';
import { AddExerciseSuperset } from './add.component';
import { Exercise } from './exercise.component';

const ModalContent = styled.ScrollView`
    background-color: white;
    margin-top: ${(props) => props.theme.space[5]}
`; 

export const Routine = ({ workoutModalVisable, closeModal }) => {
    return(
        <Modal
            animationType="slide"
            transparent={false}
            visible={workoutModalVisable}
            presentationStyle="fullScreen"
        >
                <ModalContent>
                    <ModalHeader closeModal={closeModal} title="New Workout" />
                    <StartInfo /> 
                    <Exercise  />
                    <AddExerciseSuperset />
                </ModalContent>        
        </Modal>
    )
}