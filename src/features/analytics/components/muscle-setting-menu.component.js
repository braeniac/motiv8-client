import React, { useState } from 'react'; 

import { Text } from '../../../components/typography/text.component';

import {
    Container,
    ToggleWrapper,
    Toggle
} from './musle-setting-menu.style'; 


export const Setting = ({ label, left, right, selected }) => {

    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => {
        selected()
        setIsEnabled(previousState => !previousState); 
    };

    return(
        <Container>     
            <Text variant="bold">{label}</Text>
            <ToggleWrapper>
                <Text variant="captionBold">{left}</Text>
                <Toggle
                    trackColor={{false: '#767577', true: '#f4f3f4'}}
                    thumbColor={isEnabled ? '#3e3e3e' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                <Text variant="captionBold">{right}</Text>
            </ToggleWrapper>
        </Container>
    )
    
}