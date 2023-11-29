import React from 'react'; 
import styled from 'styled-components'; 

//components
import { SafeArea } from '../../../components/utils/safe-area.component'; 
import { Header } from '../../../components/header/header.component'; 

const ExercisesContainer = styled.View`
    flex: 1; 
    background-color: ${(props) => props.theme.colors.ui.quaternary}
`; 

export const Exercises = () => {

    return(
        <SafeArea>
            <ExercisesContainer>
                <Header title="Exercises" show={false}  />
            </ExercisesContainer>
        </SafeArea>
    )
}