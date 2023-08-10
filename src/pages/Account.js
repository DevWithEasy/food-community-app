import { Box, HStack } from "native-base";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default function Account({ navigation }) {
    return (
        <ScrollView
            className='h-screen bg-white'
        >
            <Box
                className='h-52 bg-sky-500 flex flex-col items-center justify-center'
            >
                <Text
                    className='text-white text-2xl text-center font-bold'
                >
                    Food Coomunity Bangladesh
                </Text>
                <Text
                    className='text-white text-center'
                >
                    We connect you will all food related person.
                </Text>

            </Box>
            <Box
                className='flex justify-center items-center h-32 w-32 -mt-16 ml-2 rounded-full bg-white'
            >
                <Image
                    source={require('..//../assets/image/user.png')}
                    className='h-[120px] w-[120px]'
                />
            </Box>
            <Box
                className='p-4'
            >
                <Text
                    className='text-xl font-bold'
                >
                    Robiul Awal
                </Text>
                <Text
                    className='text-gray-400'
                >
                    S&B Nice Food Valley Ltd.
                </Text>
            </Box>
            {/* <HStack
                className=''
            >
                <TouchableOpacity
                    className='border-b border-gray-100'
                >
                    <Text
                        className='px-4 py-2 text-center'
                    >
                    About
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className='border-b border-gray-100'
                >
                    <Text
                        className='px-4 py-2 text-center'
                    >
                    Posts
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className='border-b border-gray-100'
                >
                    <Text
                        className='px-4 py-2 text-center'
                    >
                    Follows
                    </Text>
                </TouchableOpacity>
            </HStack> */}
            <TouchableOpacity
                onPress={() => navigation.navigate('About')}
            >
                <Box

                    className='px-2 space-y-1'
                >
                    <HStack
                        className='flex items-center space-x-2'
                    >
                        <Icon name='briefcase' size={15} color='#9ca3af' />
                        <HStack
                            className='flex flex-wrap space-x-1'
                        >
                            <Text>
                                Production Officier
                            </Text>
                            <Text>
                                At
                            </Text>
                            <Text
                                className='font-bold'
                            >
                                S&B nice Food valley Ltd
                            </Text>
                        </HStack>
                    </HStack>
                    <HStack
                        className='flex items-center space-x-2'
                    >
                        <Icon name='briefcase' size={15} color='#9ca3af' />
                        <HStack
                            className='flex flex-wrap space-x-1'
                        >
                            <Text>
                                Production Officier At
                            </Text>
                            <Text
                                className='font-bold'
                            >
                                S&B nice Food valley Ltd
                            </Text>
                        </HStack>
                    </HStack>
                    <HStack
                        className='flex items-center space-x-2'
                    >
                        <Icon name='school' size={15} color='#9ca3af' />
                        <HStack
                            className='flex flex-wrap space-x-1'
                        >
                            <Text>
                                Studied At Food Engineering
                            </Text>
                            <Text
                                className='font-bold'
                            >
                                NPI University of Bangladesh
                            </Text>
                        </HStack>
                    </HStack>
                    <HStack
                        className='flex items-center space-x-2'
                    >
                        <Icon name='school' size={15} color='#9ca3af' />
                        <HStack
                            className='flex flex-wrap space-x-1'
                        >
                            <Text>
                                Studied At Food Engineering
                            </Text>
                            <Text
                                className='font-bold'
                            >
                                S&B nice Food valley Ltd
                            </Text>
                        </HStack>
                    </HStack>
                    <HStack
                        className='flex items-center space-x-2'
                    >
                        <Icon name='home' size={15} color='#9ca3af' />
                        <HStack
                            className='flex flex-wrap space-x-1'
                        >
                            <Text>
                                Lives in
                            </Text>
                            <Text
                                className='font-bold'
                            >
                                Feni Sadar Feni
                            </Text>
                        </HStack>
                    </HStack>
                    <HStack
                        className='flex items-center space-x-2'
                    >
                        <Icon name='location' size={15} color='#9ca3af' />
                        <HStack
                            className='flex flex-wrap space-x-1'
                        >
                            <Text>
                                From
                            </Text>
                            <Text
                                className='font-bold'
                            >
                                Thakurgaon
                            </Text>
                        </HStack>
                    </HStack>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('About')}
                        className='px-2'
                    >
                        <Text>About more and edit profile...</Text>
                    </TouchableOpacity>
                </Box>
            </TouchableOpacity>
        </ScrollView>
    );
}
