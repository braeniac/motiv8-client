import React from 'react'; 

import styled from 'styled-components'; 


export const FeedInfoCardContainer = styled.TouchableOpacity`
    flex-direction: row; 
`; 

export const TypeContainer = styled.View`
    background-color: ${(props) => props.theme.colors.ui.primary};

    margin-right: ${(props) => props.theme.space[3]}; 
    width: ${(props) => props.theme.fontSizes.h2};
    align-items: center; 
    justify-content: center;
`; 


export const TextContainer = styled.View`
    flex-direction: col; 
`