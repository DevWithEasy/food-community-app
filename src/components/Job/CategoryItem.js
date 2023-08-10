import { HStack } from 'native-base'
import React from 'react'
import { Pressable, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function CategoryItem({ item, navigation }) {

    return (
        <Pressable
        onPress={()=>navigation.navigate('Jobs',{cat : item})}
        >
            <HStack
            onPress={()=>navigation.navigate('Jobs',{cat : item})}
                className='w-full flex justify-between bg-white px-2 py-3 mb-1'
            >
                <Text
                    className='w-11/12'
                >
                    {item}
                </Text>
                <Text
                    className='text-pink-500'
                >
                10
                </Text>
            </HStack>
        </Pressable>

    )
}