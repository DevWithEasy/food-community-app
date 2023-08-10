import React, { useEffect } from 'react'
import { Platform, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addAuth } from '../store/slice/authSlice'

export default function Signin({navigation}) {
    const{isAuth} = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    useEffect(()=>{
        setTimeout(()=>{
            if(isAuth){
                navigation.navigate('Main')
            }
        },500)
    })
    return (
        <View
            className='h-screen w-full px-2 flex-1 flex-col justify-between items-center bg-sky-50'
            style ={{
                padding : Platform.OS === 'ios' ? 20 : StatusBar.currentHeight
            }}
        >
            
            <View
                className='w-full space-y-2'
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
                <TextInput
                    placeholder='Email or Phone Number'
                    className='w-full p-2 border border-gray-200 bg-white'
                />
                <TextInput
                    placeholder='Password'
                    className='w-full p-2 border border-gray-200 bg-white'
                />
                <TouchableOpacity
                    onPress={() =>dispatch(addAuth({}))}
                    className='bg-sky-500 rounded'
                >
                    <Text
                        className='p-3 text-white text-center'
                    >
                        Submit
                    </Text>
                </TouchableOpacity>
                <View
                    className='py-2'
                >
                <TouchableOpacity
                    onPress={()=>navigation.navigate('Signup')}
                    className='bg-sky-500 rounded'
                >
                    <Text
                        className='p-3 text-white text-center'
                    >
                        Create an Account
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text>DevwithEasy</Text>
            </View>
        </View>
    )
}