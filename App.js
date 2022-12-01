import * as React from 'react';
import {useEffect, useState} from 'react';
import {Button, Alert} from 'react-native';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Switch,
  Text,
  View,
  Image,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from 'react-native-splash-screen';
// import MessegesIcon from './android/app/src/main/assets/icons/MsgIcon';

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: 'https://images.pexels.com/photos/719396/pexels-photo-719396.jpeg?auto=compress&cs=tinysrgb&w=800',
        }}>
        <Text style={{color: 'white'}}>Hello</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="useless placeholder"
            keyboardType="numeric"
          />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 100,
    height: 100,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

// const ProfileScreen = ({navigation, route}) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };

// const Login = ({navigation, route}) => {
//   return <Text>this is {route.params.name}</Text>;
// };
const Tab = createBottomTabNavigator();

const SettingsScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
};
const App = () => {
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);
  return (
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Home" component={HomeScreen} />
    //     <Tab.Screen name="Settings" component={SettingsScreen} />
    //   </Tab.Navigator>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //     />
    //     <Stack.Screen name="Profile" component={ProfileScreen} />
    //     <Stack.Screen name="Login" component={Login} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="dis Home"
          component={HomeScreen}
          // options={{
          //   tabBarLabel: 'nuur',
          //   tabBarIcon: () => <MessegesIcon />,
          // }}
        />
        <Tab.Screen name="le setting" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
