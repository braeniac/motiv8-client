import React from 'react'; 
import styled from 'styled-components'; 

//components
import { SafeArea } from '../../../components/utils/safe-area.component'; 
import { Header } from '../../../components/header/header.component'; 
import { User } from '../components/user-info.component';
import { Spacer } from '../../../components/spacer/spacer.component'; 
import { Text } from '../../../components/typography/text.component';

const ProfileContainer = styled.View`
    flex: 1; 
    background-color: ${(props) => props.theme.colors.ui.quaternary}
`; 

export const Profile = ({ user = { }}) => {

    const { 
        img="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        name = "Manny Singh", 
        lastWorkout = "Last workout 1 week ago"
    } = user


    return(
        <SafeArea>
            <ProfileContainer>
                <Header title="Profile" show={true} icon="ellipsis-horizontal-outline" />

                {/* user  */}
                <Spacer variant="borderReduced">
                    <Text variant="caption">USER</Text>
                </Spacer>

                <User img={img} name={name} lastWorkout={lastWorkout} />
                
                {/* profile notes */}
                <Spacer variant="borderReduced">
                    <Text variant="caption">PROFILE NOTES</Text>
                </Spacer>

                

            </ProfileContainer>
        </SafeArea>
    )
}