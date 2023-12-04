import React from 'react'; 
import styled from 'styled-components'; 

//components
import { Text } from '../../components/typography/text.component';
import { Spacer } from '../../components/spacer/spacer.component';
import { BackButton } from '../../components/button/back-button.component';


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

export const ModalHeader = ({ closeModal, title }) => {
    return(
        <Spacer>
            <Header>
                <BackButton close={closeModal} />
                <Title><Text variant="headingInverse">{title}</Text></Title>
            </Header>
        </Spacer>
    )
}