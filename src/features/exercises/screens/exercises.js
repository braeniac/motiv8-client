import React, { useState, useRef, useEffect } from 'react'; 
import styled from 'styled-components'; 


//components
import { SafeArea } from '../../../components/utils/safe-area.component'; 
import { Header } from '../../../components/header/header.component'; 
import { Search } from '../component/search.component';
import { Menu } from '../component/menu.component';
import { Exercise } from '../component/exercise-info.component';
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component'; 

const ExercisesContainer = styled.View`
    flex: 1;  
    background-color: ${(props) => props.theme.colors.ui.quaternary};
`; 

const ListContainer = styled.ScrollView`
    border-top-width: 1px;
    border-color: ${(props) => props.theme.colors.ui.disabled};
    margin-top: ${(props) => props.theme.space[4]}; 
`

export const Exercises = () => {

    const [toggleSearch, setToggleSearch] = useState(false); 
    const toggleSearchInput = () => setToggleSearch(!toggleSearch); 

    const [openExerciseInfo, setOpenExerciseInfo] = useState(false); 
    const openExercise = () => {
        setOpenExerciseInfo(!openExerciseInfo)
    };
  
    return(
        <SafeArea>
            <ExercisesContainer>
                {
                    (!toggleSearch) ?
                    <Header title="Exercises" show={true} icon="search-outline" whenPressed={toggleSearchInput}/> :
                    <Search closeSearch={toggleSearchInput} />
                }
                
                <Menu />

                <Spacer variant="borderReduced">
                    <Text variant="caption">FROM YOUR HISTORY</Text>
                </Spacer>

                <ListContainer>
                    <Exercise whenPressed={openExercise} />
                </ListContainer>


            
            
            
            </ExercisesContainer>
        </SafeArea>
    )
}