import react, { useState } from 'react'; 
import styled from 'styled-components';
import { StyleSheet } from 'react-native';


const Container = styled.View`
    flex-direction: row; 
    border-bottom-width: ${StyleSheet.hairlineWidth}px; 
    border-color: ${(props) => props.theme.colors.icon.primary}; 
    padding-top: ${(props) => props.theme.space[3]}; 
    padding-bottom: ${(props) => props.theme.space[3]}; 
    padding-left: ${(props) => props.theme.space[3]}; 
`;

const StyledTextInput = styled.TextInput`
    width: 32px; 
`

const Title = styled(Text)`
    padding-left: ${(props) => props.theme.space[3]}; 
    padding-right: ${(props) => props.theme.space[3]}; 
`;

const Achieved = styled.View`
    flex-direction: row; 
    margin-left: ${(props) => props.theme.space[6]}; 
`; 

import { Text } from '../../../../components/typography/text.component';

export const Row = ({ set }) => {

    const [pounds, setPounds] = useState(0); 
    const [reps, setReps] = useState(0); 

    return(
        <Container>

            <Text variant="caption">{set}</Text>

            <Achieved>
                <StyledTextInput 
                    placeholder='lbs'
                    maxLength={3}
                    autoComplete='off'
                    autoCorrect={false}
                    inputMode='numeric'
                    keyboardType="numeric"
                />
                <Title variant="caption">x</Title>
                <StyledTextInput 
                    placeholder="reps"
                    maxLength={3}
                    autoComplete='off'
                    autoCorrect={false}
                    inputMode='numeric'
                    keyboardType="numeric"
                />
            </Achieved>
        </Container>
    )
}

