import React, { useState } from 'react'; 
import styled from 'styled-components'; 

//components
import { SafeArea } from '../../../components/utils/safe-area.component'; 
import { Header } from '../../../components/header/header.component'; 
import { Spacer } from '../../../components/spacer/spacer.component'; 
import { Text } from '../../../components/typography/text.component'; 
import { FeedInfoCard } from '../components/feed-info-card.component';
import { NotificationModal } from '../components/notifications-modal.component';


const FeedContainer = styled.ScrollView`
    flex: 1; 
    background-color: ${(props) => props.theme.colors.ui.quaternary};
`; 

export const Feed = () => {

    const [alertVisable, setAlertVisable] = useState(false); 
    const toggleNotificationModal = () => setAlertVisable(!alertVisable); 


    return(
        <SafeArea>
            <FeedContainer>
                <Header title="Feed" show={true} icon="notifications-outline" whenPressed={toggleNotificationModal} />

                <Spacer variant="borderReduced">
                    <Text variant="error">DEC 10-16</Text>
                </Spacer>
                
                <FeedInfoCard />
                
                {
                    (alertVisable) && <NotificationModal  closeModal={toggleNotificationModal} /> 
                }
            </FeedContainer>
        </SafeArea>
    )
}