import React from 'react';
import { Modal } from 'react-native';

import { Text } from '../../../../components/typography/text.component';
import { ModalHeader } from '../../../../components/header/modal-header.component';

import { 
    ModalContent,
} from './routine-modal.styles'; 

import { StartInfo } from './start-info.component';
import { AddExercise } from './add-exercise.component';

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

                    <AddExercise />





                    
            
                </ModalContent>        
        </Modal>
    )
}