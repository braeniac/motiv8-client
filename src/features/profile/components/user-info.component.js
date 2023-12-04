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

export const User = ({ img, name, lastWorkout }) => {
    return(
        <UserContainer>
                <Img 
                    src={img}
                />
                <Info>
                    <Text variant="bold">{name}</Text>
                    <LastWorkout>
                        <Icon name="calendar-sharp" size={15} />
                        <Text variant="caption">{lastWorkout}</Text>
                    </LastWorkout>
                </Info>
        </UserContainer>
    )
}

