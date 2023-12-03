import React from 'react'; 

//components
import { SafeArea } from '../../../components/utils/safe-area.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';

//styles
import { 
    FeedInfoCardContainer,
    TypeContainer,
    TextContainer
} from './feed-into-card.styles';

export const FeedInfoCard = ({ feed = {} }) => {
    
    const {
        typeOfWorkout="Push",
        title = "Tuesday Morning Workout", 
        description = "Lat Pulldown, Seated Row, Barbell Curl", 
        date="DEC 12, 2023"
    } = feed; 

    return(
        <SafeArea>
            <Spacer variant="emptyColumn">
                <FeedInfoCardContainer>
                    <TypeContainer>
                        <Text variant="boldInverse">{typeOfWorkout}</Text>
                        <Text variant="boldInverse">Day</Text>
                    </TypeContainer>
                    <TextContainer>
                        <Text variant="bold"> {title} </Text>
                        <Text variant="caption"> {description} </Text>
                        <Text variant="body"> {date} </Text>
                    </TextContainer>
                </FeedInfoCardContainer>
            </Spacer>
        </SafeArea>
    ) ; 
}


