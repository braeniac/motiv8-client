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
import { DefaultInfo } from '../../../components/default/default.component';


const FeedContainer = styled.ScrollView`
    flex: 1; 
  
`; 


const Workout = styled.TouchableOpacity`
    position: absolute;
    bottom: 0; 
    right: 0; 
    padding: ${(props) => props.theme.space[3]}; 
    margin-right: ${(props) => props.theme.space[1]}; 
    margin-bottom: ${(props) => props.theme.space[8]}; 

`


export const Icon = styled(Ionicons)`
    color: ${(props) => props.theme.colors.icon.error}; 
`;


export const Feed = () => {

    const [alertVisable, setAlertVisable] = useState(false); 
    const toggleNotificationModal = () => setAlertVisable(!alertVisable); 


    return(
        <SafeArea>
            <Header title="Feed" show={true} start={true} icon="notifications-outline" whenPressed={toggleNotificationModal} />
            
                { (alertVisable) && <NotificationModal  closeModal={toggleNotificationModal} /> }   
                
                <FeedContainer>

                    <Spacer variant="borderReduced">
                        <Text variant="caption">DEC 10-16</Text>
                    </Spacer>


                    <FeedInfoCard typeOfWorkout="Push" />
                    <FeedInfoCard typeOfWorkout="Pull" />

                    <Spacer variant="borderReduced">
                        <Text variant="caption">DEC 17-23</Text>
                    </Spacer>

                    <FeedInfoCard typeOfWorkout="Push" />
                    <FeedInfoCard typeOfWorkout="Pull" />
                    <FeedInfoCard typeOfWorkout="Leg" />
                    
                    <Spacer variant="borderReduced">
                        <Text variant="caption">DEC 24-30</Text>
                    </Spacer>

                    <FeedInfoCard typeOfWorkout="Push" />
                    <FeedInfoCard typeOfWorkout="Pull" />
                    <FeedInfoCard typeOfWorkout="Leg" />

                
                </FeedContainer>

        </SafeArea>
    )
}