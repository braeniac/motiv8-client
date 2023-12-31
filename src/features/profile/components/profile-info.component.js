import React from 'react';
import styled from 'styled-components'; 
import { TextInput } from 'react-native';

//components
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';


const TextArea = styled.ScrollView`

`


export const ProfileNotes = ({ profileNotes, updateProfileNotes }) => {

    return(
        <>
            <Spacer variant="borderReduced">
                <Text variant="caption">PROFILE NOTES</Text>
            </Spacer>

            <TextArea
                scrollable={false}
            >
                <TextInput 
                    editable
                    multiline
                    placeholder="Add a note..."
                    numberOfLines={4}
                    maxLength={40}
                    onChangeText={updateProfileNotes}
                    value={profileNotes}
                />
            </TextArea>
        </>
    )
}