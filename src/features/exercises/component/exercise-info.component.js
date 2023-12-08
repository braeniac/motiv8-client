import react from 'react'; 
import styled from 'styled-components';

//component 
import { Text } from '../../../components/typography/text.component';

const ExerciseContainer = styled.View` 
    border-bottom-width: 1px; 
    border-color: ${(props) => props.theme.colors.ui.disabled}; 
    padding-top: ${(props) => props.theme.space[3]}; 
    padding-bottom: ${(props) => props.theme.space[3]}; 
`

const ExerciseInfo = styled.TouchableOpacity`   
    flex-direction: row;
    justify-content: space-between; 
    align-items: center; 
    padding-left: ${(props) => props.theme.space[4]};    
    padding-right: ${(props) => props.theme.space[4]};    
`

export const Img = styled.Image`
    width: 60px;
    height: 60px;
`; 

export const Exercise = ({ exercise = { }, whenOpened }) => {
    const { 
        img="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        nameOfExercise="Smith Machine Incline Bench Press",
        lastPerformed="3d"
    } = exercise; 
     
    return(
        <ExerciseContainer>
            <ExerciseInfo
                onPress={whenOpened}
            >
                <Img src={img} />
                <Text variant="captionBold">{nameOfExercise}</Text>
                <Text variant="captionBold">{lastPerformed}</Text>
            </ExerciseInfo>
        </ExerciseContainer>
    )
}