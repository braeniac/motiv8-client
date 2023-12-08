import React, { useState } from 'react'; 
import styled from 'styled-components';
import Ionicons from '@expo/vector-icons/Ionicons';


export const MenuContainer = styled.View`
    flex-direction: row; 
    justify-content: space-between; 
    margin-top: ${(props) => props.theme.space[4]};    
    padding-left: ${(props) => props.theme.space[4]};
`

export const Label = styled.View`
    flex-direction: row; 
    align-items: center; 
    padding-right: ${(props) => props.theme.space[4]};
    margin-right: ${(props) => props.theme.space[4]};
    border-right-width: 1px; 
`

export const Categories = styled.TouchableOpacity`
    flex-direction: row; 
    padding-right: ${(props) => props.theme.space[4]};
    align-items: center; 
`; 


export const SubCategoriesContainer = styled.ScrollView` 
    flex: 1; 
    flex-direction: row; 
`


export const Close = styled.TouchableOpacity`
    flex-direction: row; 
    padding-right: ${(props) => props.theme.space[4]};
`

export const Icon = styled(Ionicons)`
    color: ${(props) => props.theme.colors.icon.primary}; 
`;