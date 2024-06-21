import Colors from '@/constants/Colors';
import { Stack, Tabs } from 'expo-router'
import React from 'react'


const _layout = () => {
  return (
     <Stack
    screenOptions={{
        headerStyle: {
            backgroundColor: Colors.primary
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center'
    }}
    >
    
    <Stack.Screen name ="(tabs)" options={{ headerShown: false}}/>
    </Stack>
  );
};

export default _layout