import React, { useEffect, useState } from 'react';
import { Redirect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native';
import { USER_STORAGE_KEY } from '@/data/api';

const Page = () => {
    const [hasId, setHasID] = useState(false);

    useEffect(() => {
        const loadId = async () => {
            const id = await AsyncStorage.getItem(USER_STORAGE_KEY);
            if (!id){
                const randomUserid = Math.random().toString(36);
                console.log("~ file: index.tsx:15 ~ loadId ~ randomUserid:", randomUserid)
                await AsyncStorage.setItem(USER_STORAGE_KEY, randomUserid);
            }
            setHasID(true);
        }
        loadId()
    }, [])
    if (hasId){
        return < Redirect href="/(tabs)/sets"/>;
    } else{
        return <View/>;
    }

};

export default Page;