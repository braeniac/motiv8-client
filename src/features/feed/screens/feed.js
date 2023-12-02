import React from 'react'; 
import styled from 'styled-components'; 
import { Text } from 'react-native'; 

//components
import { SafeArea } from '../../../components/utils/safe-area.component'; 
import { Header } from '../../../components/header/header.component'; 
import { Spacer } from '../../../components/spacer/spacer.component'; 


const FeedContainer = styled.View`
    flex: 1; 
    background-color: ${(props) => props.theme.colors.ui.quaternary};
`; 

export const Feed = () => {

    return(
        <SafeArea>
            <FeedContainer>
                <Header title="Feed" show={true} icon="notifications-outline" />

                <Spacer variant="empty">

                    <Text>hello world</Text>
                </Spacer>

                
                
            </FeedContainer>
        </SafeArea>
    )
}