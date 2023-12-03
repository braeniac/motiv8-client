import React from 'react';
import styled from 'styled-components'; 
import { Modal } from 'react-native';

//components
import { Text } from '../../../components/typography/text.component';
import { SafeArea } from '../../../components/utils/safe-area.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { BackButton } from '../../../components/button/back-button.component';


const ModalContent = styled.View`
    flex: 1;    
`; 

const Header = styled.View`   
    flex:1; 
    flex-direction: row; 
    align-items: center;
    justify-content: space-between;
`; 

const Title = styled.View`
    background-color: ${(props) => props.theme.colors.icon.primary}; 
    padding: ${(props) => props.theme.space[2]}
`; 

export const NotificationModal = ({ alertVisable, closeModal }) => {
    return(
        <Modal
            animationType="slide"
            transparent={false}
            visible={alertVisable}
        >
            <ModalContent>
                <SafeArea>
                    <Spacer>
                        <Header>
                            <BackButton close={closeModal} />
                            <Title><Text variant="headingInverse">Notifications</Text></Title>
                        </Header>
                    </Spacer>

                    {/* default notification  */}
                    <Spacer variant="emptyColumn">
                        <Text variant="bodyCenter">You have no notifications.</Text>
                    </Spacer>

                </SafeArea>
            </ModalContent>        
        </Modal>
    )

}