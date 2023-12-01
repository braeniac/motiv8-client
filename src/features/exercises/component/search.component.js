import React, { useState} from 'react'; 
import styled from 'styled-components'; 
import { Searchbar } from 'react-native-paper';

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};    
`; 

export const Search = () => {

    const [search, setSearch] = useState(''); 
    const onChangeSearch = query => setSearch(query);

    return(
        <SearchContainer>
            <Searchbar 
                placeholder="Search..."
                value={search}
                onChangeText={onChangeSearch}
                theme={{ colors: { primary: 'green' } }} 
            
            />
        </SearchContainer>
    )
}