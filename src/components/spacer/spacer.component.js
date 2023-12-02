import React from 'react';
import styled from 'styled-components/native'; 

const defaultSpacerStyles = (theme) => `
    padding-left: ${theme.space[4]}; 
    padding-right: ${theme.space[4]}; 
    margin-top: ${theme.space[4]}
`; 

const empty = (theme) => `
    flex-direction: row;   
    justify-content: space-between; 
    padding-top: ${theme.space[4]};
    padding-bottom: ${theme.space[4]};
`; 

const border = (theme) =>`
    border-color: ${theme.colors.ui.disabled}; 
    border-top-width: 1px; 
    border-bottom-width: 1px; 
    justify-content: space-between; 
    flex-direction: row; 
    padding-top: ${theme.space[4]};
    padding-bottom: ${theme.space[4]};
`; 

const borderReduced = (theme) =>`
    border-color: ${theme.colors.ui.disabled}; 
    border-top-width: 1px; 
    border-bottom-width: 1px; 
    justify-content: space-between; 
    flex-direction: row; 
    padding-top: ${theme.space[2]};
    padding-bottom: ${theme.space[2]};
`; 

const variants = {
    empty,
    border,
    borderReduced
}

export const Spacer = styled.View`
    ${({ theme }) => defaultSpacerStyles(theme)}; 
    ${({ variant, theme }) => variants[variant](theme)}; 
`; 

Spacer.defaultProps = {
    variant: "empty"
}