import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Fontisto,
  MaterialCommunityIcons,
  Foundation,
} from '@expo/vector-icons';

//Project
import HomeScreen from '@screens/Home/index'
import ProfileScreen from '@screens/Profiles/index'



const Tab = createBottomTabNavigator();

const ThemeStatusBar = '#FFF';
const SIZE_ICON = 25;

function MyTabs() {
  return (
    <>
    <SafeAreaView style={styles.topSafeArea} />
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={({ route, navigation }) => ({
          unmountOnBlur: true,
          // tabBarStyle: { display: getTabBarHidden(route) },
          tabBarIcon: ({ size, color, focused }) => (
            <>
            <Fontisto
              name="home"
              size={SIZE_ICON}
                color={ focused ? '#00205B' : '#34343480' }
            />
            
            </>
          ),
        })}
        listeners={({ navigation, route }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('Home', {screen: 'Home'});
          },
        })}
      />
      <Tab.Screen name="Profile" 
        component={ProfileScreen}
        options={({ route, navigation }) => ({
        unmountOnBlur: true,
        // tabBarStyle: { display: getTabBarHidden(route) },
        tabBarIcon: ({ size, color, focused }) => (
          <>
          <Fontisto
            name="home"
            size={SIZE_ICON}
              color={ focused ? '#00205B' : '#34343480' }
          />
          
          </>
        ),
      })}
      listeners={({ navigation, route }) => ({
        tabPress: e => {
          e.preventDefault();
          navigation.navigate('Profile', {screen: 'Profile'});
        },
      })}
    />
    </Tab.Navigator>
  </>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}


const getTabBarHidden = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route)
  console.log(routeName)
  if(routeName?.includes('Home') || routeName?.includes('Profile')    
  ){
    return 'none'
  }

  return 'flex'

}

const styles = StyleSheet.create({
  topSafeArea: {
      flex: 0,
      backgroundColor: ThemeStatusBar
  },

});