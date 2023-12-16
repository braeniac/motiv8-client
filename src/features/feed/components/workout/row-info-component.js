import react, { useState } from 'react'; 
import styled from 'styled-components';
import { StyleSheet, } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

//----------------------------------------------------------------------------------------row

import { Text } from '../../../../components/typography/text.component';

const Container = styled.View`
    flex-direction: row; 
    border-bottom-width: ${StyleSheet.hairlineWidth}px; 
    border-color: ${(props) => props.theme.colors.icon.primary}; 
    padding-top: ${(props) => props.theme.space[3]}; 
    padding-bottom: ${(props) => props.theme.space[3]}; 
    align-content: center; 
`;

const Header = styled(Text)`
    width: 32px; 
    margin-left: ${(props) => props.theme.space[3]}
`

const StyledTextInput = styled.TextInput`
    width: 32px;    
`

const Title = styled(Text)`
    padding-right: ${(props) => props.theme.space[3]};
`;

const Achieved = styled.View`
    flex-direction: row; 
    margin-left: ${(props) => props.theme.space[6]}
`; 

const PR = styled.View`
    justify-content: center; 
    background-color: ${(props) => props.theme.colors.icon.tertiary}; 
    margin-left: ${(props) => props.theme.space[6]};
    padding-left: ${(props) => props.theme.space[3]};
    padding-right: ${(props) => props.theme.space[3]};
    border-width: ${StyleSheet.hairlineWidth}px;  
    border-radius: 50%; 

`


export const Row = ({ set, isPR }) => {

    const [pounds, setPounds] = useState(0); 
    const [reps, setReps] = useState(0); 

    return(
        <Container>
            <Header variant="caption">{set}</Header>
            <Achieved>
                <StyledTextInput 
                    placeholder='lbs'
                    placeholderTextColor="#DEDEDE"
                    maxLength={3}
                    autoComplete='off'
                    autoCorrect={false}
                    inputMode='numeric'
                    keyboardType="numeric"
                />
                <Title variant="caption">x</Title>
                <StyledTextInput 
                    placeholder="reps"
                    placeholderTextColor="#DEDEDE"
                    maxLength={3}
                    autoComplete='off'
                    autoCorrect={false}
                    inputMode='numeric'
                    keyboardType="numeric"
                />

                {
                    (isPR) && 
                    <PR>
                        <Text variant="caption">PR</Text>
                    </PR>
                }

            </Achieved>
        </Container>
    )
}

//----------------------------------------------------------------------------------------default row

const DefaultContainer = styled.View`
    border-bottom-width: ${StyleSheet.hairlineWidth}px; 
    border-color: ${(props) => props.theme.colors.icon.primary}; 
    padding-top: ${(props) => props.theme.space[3]}; 
    padding-bottom: ${(props) => props.theme.space[3]}; 
`;

const AddContainer = styled.View`
    flex-direction: row; 
    justify-content: space-between; 
    margin-left: ${(props) => props.theme.space[3]};
    margin-right: ${(props) => props.theme.space[3]};
`; 

const AddButton = styled.TouchableOpacity``;

const AddNote = styled.TouchableOpacity``;

const NoteInput = styled.TextInput`
    font-size: 10px; 
`; 

const CloseButton = styled.TouchableOpacity``; 

const Icon = styled(Ionicons)`
    color: ${(props) => props.theme.colors.icon.error}; 
`;


export const DefaultRow = ({ add }) => {

    const [note, setNote] = useState('');
    const [isOpen, setIsOpen] = useState(false); 

    return(
        <DefaultContainer>
            {
                (!isOpen) ?
                <AddContainer>
                    <AddButton>
                        <Text variant="captionBoldRed">+</Text>
                    </AddButton>
                    <AddNote
                        onPress={() => {
                            setIsOpen(!isOpen); 
                        }}
                    >
                        <Icon name="pencil-outline"/>
                    </AddNote>
                </AddContainer> 
                :
                <AddContainer>
                    <NoteInput 
                        placeholder="Add note..."
                        placeholderTextColor="#DEDEDE"
                        value={note}
                        onChangeText={(text) => setNote(text)}
                        autoComplete="off"
                        autoCorrect={false}
                        autoFocus={true}
                    />
                    <CloseButton
                        onPress={() => {
                            setIsOpen(!isOpen);
                            setNote(""); 
                        }}
                    >
                        <Text variant="captionBoldRed">X</Text>
                    </CloseButton>
                </AddContainer> 
            }
        </DefaultContainer>
    )
}
