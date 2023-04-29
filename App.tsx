import {View, Text} from 'react-native';
import React from 'react';
import 'nativewind/types.d';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Greeting from './pages/Greeting';
import Items from './pages/Items';

const Stack = createNativeStackNavigator();

const App = () => {
  // return (
  //   <View className="mt-12">
  //     <Text className="font-bold text-3xl pl-4">App</Text>
  //   </View>
  // );
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Greeting"
          component={Greeting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Items"
          component={Items}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
