import React from 'react'; 
import { useNavigation } from '@react-navigation/core';

import {
    HeaderContainer, 
    Button, 
    DummyIcon, 
    Icon,
    Title
} from './header.component.style'; 

export const Header = ({ title, show, icon }) => {
    
    const navigation = useNavigation(); 
    
    return(
        <HeaderContainer>
            <Button
                onPress={() => navigation.openDrawer()}
            >
                <Icon name="menu-outline" size={28} />
            </Button>
            <Title>{title}</Title>
            {
                (show) ? 
                <>
                    <Button>
                        <Icon name={icon} size={25} />
                    </Button>
                </> :
                <>
                    <DummyIcon name="menu-outline" size={28} />
                </>
            }
        </HeaderContainer>
    )
}