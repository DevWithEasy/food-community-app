import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const Spalsh = ({navigation}) => {
    const{isAuth} = useSelector(state=>state.auth)
    useEffect(()=>{
        setTimeout(()=>{
            if(isAuth){
                navigation.navigate('Main')
            }else{
                navigation.navigate('Signin')
            }
        },2000)
    })
    return (
        <View
            className='flex-1 justify-center items-center bg-white'
        >
            <View
                    className='my-10'
                >
                    <Text
                        className='text-6xl text-center text-sky-500 font-bold'
                    >
                        Food
                    </Text>
                    <Text
                        className='text-center text-gray-400'
                    >
                        Engineering Community BD
                    </Text>
                </View>
        </View>
    );
};

export default Spalsh;