import React from 'react';
import styled from 'styled-components'; 
import { StyleSheet } from 'react-native';

//components
import { Text } from '../../../../components/typography/text.component';

const Container = styled.View`
    flex-direction: row;
    margin-top: ${(props) => props.theme.space[5]}; 
    margin-Bottom: ${(props) => props.theme.space[6]}; 
    padding-left: ${(props) => props.theme.space[4]}; 
    padding-top: ${(props) => props.theme.space[4]}; 
    padding-bottom: ${(props) => props.theme.space[4]}; 
    border-top-width:  ${StyleSheet.hairlineWidth}px; 
    border-bottom-width: ${StyleSheet.hairlineWidth}px; 
    border-color: ${(props) => props.theme.colors.icon.primary}; 
`; 

const Button = styled.TouchableOpacity``; 

const Title = styled.View`
    padding-left: ${(props) => props.theme.space[5]}
`; 


export const AddExerciseSuperset = () => {

    return(
        <Container>
            <Button>
                <Text variant="captionBoldRed">+ Exercise</Text>
            </Button>
            <Button>
                <Title>
                    <Text variant="captionBoldRed">+ Superset</Text>
                </Title>
            </Button>
        </Container>
    )
}