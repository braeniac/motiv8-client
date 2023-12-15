import React from 'react';
import styled from 'styled-components';
import { StyleSheet } from 'react-native';

import { Text } from '../../../../components/typography/text.component';

const Container = styled.View`
    flex-direction: row;
    padding-left: ${(props) => props.theme.space[4]}; 
    padding-top: ${(props) => props.theme.space[4]}; 
    padding-bottom: ${(props) => props.theme.space[4]}; 
    border-top-width:  ${StyleSheet.hairlineWidth}px; 
    border-bottom-width: ${StyleSheet.hairlineWidth}px; 
    border-color: ${(props) => props.theme.colors.icon.primary}; 
`; 

const Title = styled.View`
    padding-left: ${(props) => props.theme.space[5]}
`; 

export const StartInfo = ({ startTime = {} }) => {

    const {
        time="1:43",
        periods="PM"
    } = startTime

    return(
        <Container>
            <Text variant="captionBold">Start Time</Text>
            <Title><Text variant="caption">Today, {time} {periods}</Text></Title>
        </Container>
    )
}