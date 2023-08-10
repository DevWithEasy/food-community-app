import { HStack, VStack } from 'native-base';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function JobListItem({ navigation }) {
    return (
        <TouchableOpacity
        onPress={()=>navigation.navigate('Job Details')}
        >
            <VStack
            
            className='mb-0.5 px-4 py-2 space-y-2 bg-white rounded shadow-md'
        >
            <VStack
                className='mb-2'
            >
                <Text
                    className='text-pink-500 text-[18px]'
                >
                    Production Executive
                </Text>
                <Text
                    className=''
                >
                    S&B Nice Food Valley Ltd
                </Text>
            </VStack>
            <HStack
                className='flex justify-between'
            >
                <HStack
                    className='w-1/2 space-x-2'
                >
                    <Icon name='calendar-alt' size={12} color='#64748b' />
                    <View
                        className='-mt-1'
                    >
                        <Text
                            className='text-gray-600'
                        >
                            Deadline :
                        </Text>
                        <Text
                            className='text-gray-400'
                        >
                            26 March 2023
                        </Text>
                    </View>
                </HStack>
                <HStack
                    className='w-1/2 space-x-2'
                >
                    <Icon name='briefcase' size={12} color='#64748b' />
                    <View
                        className='-mt-1'
                    >
                        <Text
                            className='text-gray-600'
                        >
                            Experience :
                        </Text>
                        <Text
                            className='text-gray-400'
                        >
                            At least5 year
                        </Text>
                    </View>
                </HStack>
            </HStack>
            <HStack
                className='w-1/2 space-x-2'
            >
                <Icon name='graduation-cap' size={12} color='#64748b' />
                <View
                    className='-mt-1'
                >
                    <Text
                        className='text-gray-600'
                    >
                        Education :
                    </Text>
                    <Text
                        className='text-gray-500'
                    >
                        B.Sc in Food Engineering and Dipolama
                    </Text>
                </View>
            </HStack>
        </VStack>
        </TouchableOpacity>
    )
}