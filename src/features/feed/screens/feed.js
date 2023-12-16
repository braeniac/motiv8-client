import React, { useState } from 'react'; 
import styled from 'styled-components'; 
import Ionicons from '@expo/vector-icons/Ionicons';

//components
import { SafeArea } from '../../../components/utils/safe-area.component'; 
import { Header } from '../../../components/header/header.component'; 
import { Spacer } from '../../../components/spacer/spacer.component'; 
import { Text } from '../../../components/typography/text.component'; 
import { FeedInfoCard } from '../components/feed-info-card.component';
import { NotificationModal } from '../components/notifications-modal.component';
import { DateLabel, DefaultInfo } from '../../../components/default/default.component';


import { Routine } from '../components/workout/routine-modal.component';


const FeedContainer = styled.ScrollView`
    flex: 0.93
`; 


const Workout = styled.TouchableOpacity`
    position: absolute;
    margin-bottom: ${(props) => props.theme.space[5]}; 
    padding-top: ${(props) => props.theme.space[3]}; 
    padding-bottom: ${(props) => props.theme.space[3]}; 
    bottom: 0; 
    right: 0; 
    left: 0; 
    justify-content: center; 
    align-items: center; 
`

export const Icon = styled(Ionicons)`
    color: ${(props) => props.theme.colors.brand.secondary}; 
`;


export const Feed = () => {

    //Notification 
    const [alertVisable, setAlertVisable] = useState(false); 
    const toggleNotificationModal = () => setAlertVisable(!alertVisable); 

    //workout
    const [workoutModalVisable, setWorkoutModalVisable] = useState(false); 
    const toggleWorkoutModal = () => setWorkoutModalVisable(!workoutModalVisable); 


    const [FeedInfo, setFeedInfo] = useState(true); 

    return(
        <SafeArea>
            <Header title="Feed" show={true} start={true} icon="notifications-outline" whenPressed={toggleNotificationModal} />
               
                { (alertVisable) && <NotificationModal  closeModal={toggleNotificationModal} /> }   
               
                <FeedContainer>
                   {
                    (!FeedInfo) ? 
                        <DefaultInfo info="🏋️ Ready to get started?"/> : 
                    <>
                        <DateLabel dateLabel="DEC 10-16" />
                        <FeedInfoCard typeOfWorkout="Push" />
                    </>
                   }
                </FeedContainer>

                {
                    (workoutModalVisable) && 
                        <Routine 
                            workoutModalVisable={workoutModalVisable} 
                            closeModal={toggleWorkoutModal}
                        />
                }

                <Workout
                    onPress={() => {
                        toggleWorkoutModal(); 
                    }}
                >
                    <Text variant="heading">Start a Workout</Text>
                </Workout>

        </SafeArea>
    )
}