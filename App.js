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


function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function Analytics() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Analytics Screen</Text>
    </View>
  );
}

function Exercises() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Exercises Screen</Text>
    </View>
  );
}


function More() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>More Screen</Text>
    </View>
  );
}


 
//react drawer navigator setup
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
