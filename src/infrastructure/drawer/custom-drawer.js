import React from 'react'; 
import { useNavigation } from '@react-navigation/native';

import { SafeArea } from '../../components/utils/safe-area.component';
import { 
    Drawer, 
    Label, 
    Tab,
    Icon,
    Logout
} from './custom-drawer-style';

export const CustomDrawer = () => {

    const navigation = useNavigation();  
    
    return(
        <SafeArea>
            <Drawer>
                <Tab onPress={() => navigation.navigate('Feed')}>
                    <Icon size={24} name="ios-home-outline" />
                    <Label>Home</Label>
                </Tab> 
                <Tab onPress={() => navigation.navigate('Profile')}>
                    <Icon size={24} name="ios-person-circle-outline" />
                    <Label>Profile</Label>
                </Tab>   
                <Tab onPress={() => navigation.navigate('Analytics')}>
                    <Icon size={24} name="ios-analytics" />
                    <Label>Analytics</Label>
                </Tab>   
                <Tab onPress={() => navigation.navigate('Exercises')}>
                    <Icon size={24} name="barbell-sharp" />
                    <Label>Exercises</Label>
                </Tab>    
                <Tab onPress={() => navigation.navigate('More')}>
                    <Icon size={24} name="ellipsis-horizontal-outline" />
                    <Label>More</Label>
                </Tab>  
            </Drawer>
            <Logout>
                <Tab>
                    <Icon size={24} name="log-out-outline" />
                    <Label>Logout</Label>
                </Tab>
            </Logout>
        </SafeArea>
   )
}



