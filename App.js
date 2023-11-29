import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

//infrastructure
import { ThemeProvider } from "styled-components/native";
import { theme } from './src/infrastructure/theme'; 

//screens
import { CustomDrawer } from './src/infrastructure/drawer/custom-drawer'; 
import { Feed } from './src/features/feed/screens/feed'; 
import { Profile } from './src/features/profile/screens/profile'; 
import { Analytics } from './src/features/analytics/screens/analytics'; 
import { Exercises } from './src/features/exercises/screens/exercises'; 
import { More } from './src/features/more/screens/more'; 


//drawer setup
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={ props => <CustomDrawer {...props}/> }
      screenOptions={{ 
        headerShown: false,
      }} 
    >
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Analytics" component={Analytics} />
      <Drawer.Screen name="Exercises" component={Exercises} />
      <Drawer.Screen name="More" component={More} />
    </Drawer.Navigator>
  );
}


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </ThemeProvider>
  );
}
