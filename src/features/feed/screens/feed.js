import React from 'react'; 
import styled from 'styled-components'; 

//components
import { SafeArea } from '../../../components/utils/safe-area.component'; 
import { Header } from '../../../components/header/header.component'; 
import { Spacer } from '../../../components/spacer/spacer.component'; 
import { Text } from '../../../components/typography/text.component'; 


const FeedContainer = styled.View`
    flex: 1; 
    background-color: ${(props) => props.theme.colors.ui.quaternary};
`; 

export const Feed = () => {

    return(
        <SafeArea>
            <FeedContainer>
                <Header title="Feed" show={true} icon="notifications-outline" />

                <Spacer variant="borderReduced">
                    <Text variant="caption">LAST WEEK</Text>
                </Spacer>

                
                
            </FeedContainer>
        </SafeArea>
    )
}