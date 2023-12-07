import React, { useState } from 'react'; 
import styled from 'styled-components';
import Ionicons from '@expo/vector-icons/Ionicons';


export const MenuContainer = styled.View`
    flex-direction: row; 
    justify-content: space-between; 
    margin-top: ${(props) => props.theme.space[4]};    
    padding-left: ${(props) => props.theme.space[4]};
`


export const SubCategoriesContainer = styled.ScrollView` 
    flex: 1; 
    flex-direction: row; 
`

export const Categories = styled.TouchableOpacity`
    flex-direction: row; 
    padding-right: ${(props) => props.theme.space[4]};
    align-items: center; 
`; 


export const Close = styled.TouchableOpacity`
    flex-direction: row; 
    padding-right: ${(props) => props.theme.space[4]};
`

export const Icon = styled(Ionicons)`
    color: ${(props) => props.theme.colors.icon.primary}; 
`;