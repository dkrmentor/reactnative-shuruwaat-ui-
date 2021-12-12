import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screens/LoginScreen';
import MarketingScreen from './src/screens/MarketingScreen';
import { Icon } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';


const Tab = createBottomTabNavigator();

const MyTabs = () => {


  return (
    // <View style={styles.bottomTab}>
    <Tab.Navigator style={styles.bottomTab}
      screenOptions={{
        tabBarStyle: { height: 70, paddingBottom: 10, paddingTop: 10 },
      }}
    >
      <Tab.Screen name="Home" component={LoginScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="home"
              type="material"
              color={'black'}
              size={30}
            />
          )
        }}
      />
      <Tab.Screen name="Network" component={LoginScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="network"
              type="entypo"
              color={'black'}
              size={30}
            />
          )
        }}
      />
      <Tab.Screen name="Marketing" component={MarketingScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="bullhorn-outline"
              type="material-community"
              color={'black'}
              size={30}
            />
          )
        }}
      />
      <Tab.Screen name="Settings" component={MarketingScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="user"
              type="antdesign"
              color={'black'}
              size={30}

            />
          ),
          tabBarStyle: { height: 55 }
        }} />
    </Tab.Navigator>
    // </View>

  );
}

const App = () => {

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({

});
export default App;



