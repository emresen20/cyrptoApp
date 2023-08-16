import { SafeAreaView, Text, View, FlatList, Image, Button } from "react-native";
import React from "react";
import { useEffect, useState } from "react";
import { NativeModules } from 'react-native';
import ShenScreen from "./src/assets/screens/ShenScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/assets/screens/HomeScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Shen" component={ShenScreen}/>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;