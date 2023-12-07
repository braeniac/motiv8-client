import React, { useState } from 'react'; 
import styled from 'styled-components'; 
import Ionicons from '@expo/vector-icons/Ionicons';

//components
import { Text } from '../../../components/typography/text.component'; 

const SearchContainer = styled.View`
    margin-right: ${(props) => props.theme.space[4]}; 
    margin-top: ${(props) => props.theme.space[4]}; 
    flex-direction: row;   
    justify-content: center;
    align-items: center;

`;  

const SearchInput = styled.TextInput`
    flex: 1; 
    padding-left: ${(props) => props.theme.space[4]};
    margin-top: 1px;
`

const Cancel = styled.TouchableOpacity`

    
`
const Icon = styled(Ionicons)`
    color: ${(props) => props.theme.colors.icon.primary}; 
`;


export const Search = ({ closeSearch }) => {

    const [search, setSearch] = useState(''); 
    const onChangeSearch = query => setSearch(query);

    return(
        <SearchContainer>
            <SearchInput
                placeholder="Search for an exercise"
                value={search}
                onChangeText={onChangeSearch}
            />
            <Cancel onPress={closeSearch}>
                <Icon name="close-circle" size={25} />
            </Cancel>
        </SearchContainer>
    )
}