import React from 'react'; 
import styled from 'styled-components'; 

//components
import { SafeArea } from '../../../components/utils/safe-area.component'; 
import { Header } from '../../../components/header/header.component'; 

const ProfileContainer = styled.View`
    flex: 1; 
    background-color: ${(props) => props.theme.colors.ui.quaternary}
`; 

export const Profile = () => {

    return(
        <SafeArea>
            <ProfileContainer>
                <Header title="Profile" show={true} icon="ellipsis-horizontal-outline" />
            </ProfileContainer>
        </SafeArea>
    )
}