import React from 'react'; 

import styled from 'styled-components'; 

export const TypeContainer = styled.View`
    background-color: ${(props) => {
        switch (props.type) {
            case 'Pull':
                return props.theme.colors.icon.tertiary; 
            case 'Push':
                return props.theme.colors.icon.secondary; 
            case 'Leg':
                return props.theme.colors.icon.success; 
        }
    }}; 
    margin-right: ${(props) => props.theme.space[3]}; 
    width: ${(props) => props.theme.fontSizes.h2};
    align-items: center; 
    justify-content: center;
`; 


export const FeedInfoCardContainer = styled.TouchableOpacity`
    flex-direction: row; 
`; 

export const TextContainer = styled.View`
    flex-direction: col; 
`