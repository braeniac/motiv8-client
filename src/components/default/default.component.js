import React from 'react'; 
import styled from 'styled-components';

//components
import { Spacer } from '../spacer/spacer.component';
import { Text } from '../typography/text.component';

export const DefaultInfo = ({ info }) => {
    return(
        <Spacer variant="emptyColumn">
            <Text variant="bodyCenter">{info}</Text>
        </Spacer>
    )
}


