import React from 'react'; 

//components
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';

//styles
import { 
    UserContainer,
    Img, 
    Info,
    LastWorkout, 
    Icon
} from './user-info.styles';

export const User = ({ img, name, email, lastWorkout }) => {
    return(
        <>
            <Spacer variant="borderReduced">
                <Text variant="caption">USER</Text>
            </Spacer>
            <UserContainer>
               
            </UserContainer>
        </>
    )
}

