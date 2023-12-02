import React from 'react';
import styled from 'styled-components/native'; 

const defaultSpacerStyles = (theme) => `
    padding-left: ${theme.space[4]}; 
    padding-top: ${theme.space[4]};
    padding-bottom: ${theme.space[4]};
    padding-right: ${theme.space[4]}; 
`; 

const empty = (theme) => `
    background-color: yellow; 
    padding-left: 1px;
`; 

const border = (theme) =>`
    border-color: ${theme.colors.ui.disabled}; 
    border-top-width: 1px; 
    border-bottom-width: 1px; 
`; 

const variants = {
    empty,
    border
}


export const Spacer = styled.View`
    ${({ theme }) => defaultSpacerStyles(theme)}; 
    ${({ variant, theme }) => variants[variant](theme)}; 
`; 

Spacer.defaultProps = {
    variant: "empty"
}