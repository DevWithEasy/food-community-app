import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Box, HStack, VStack } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons';

export default function About({navigation}) {
    return (
        <ScrollView
            className='h-screen bg-white space-y-3'
        >
            <Box

            >
                <HStack
                    className='flex justify-between items-center p-2  bg-gray-50'
                >
                    <Text
                        className='text-xl'
                    >
                        Experience
                    </Text>
                    <Icon
                        onPress={()=>navigation.navigate('Edit Profile')}
                        name='create-outline' 
                        size={20} 
                        color='blue'
                    />
                </HStack>
                <VStack
                    className='p-2 border-b border-gray-100'
                >
                    <Text
                        className=''
                    >
                        Production Officier
                    </Text>
                    <Text
                        className='text-sm text-gray-400'
                    >
                        S&B Nice Food Valley Ltd
                    </Text>
                    <Text
                        className='text-sm text-gray-400'
                    >
                        Muhammad Ali Bazar Feni sadar Feni
                    </Text>
                    <Text
                        className='text-sm text-gray-400'
                    >
                        June 2014 To present
                    </Text>
                </VStack>
                <VStack
                    className='p-2 border-b border-gray-100'
                >
                    <Text
                        className=''
                    >
                        Production Officier
                    </Text>
                    <Text
                        className='text-sm text-gray-400'
                    >
                        Startline Food Ltd
                    </Text>
                    <Text
                        className='text-sm text-gray-400'
                    >
                        Feni sadar Feni
                    </Text>
                    <Text
                        className='text-sm text-gray-400'
                    >
                        June 2014 To June 2016
                    </Text>
                </VStack>
            </Box>
            <Box

            >
                <Text
                    className='p-2 text-xl bg-gray-50'
                >
                    Education
                </Text>
                <VStack
                    className='p-2 border-b border-gray-100'
                >
                    <Text
                        className=''
                    >
                        Food Science and Technology
                    </Text>
                    <Text
                        className='text-sm text-gray-400'
                    >
                        NPI University Bangladesh University
                    </Text>
                    <Text
                        className='text-sm text-gray-400'
                    >
                        3.41 of 4.00
                    </Text>
                    <Text
                        className='text-sm text-gray-400'
                    >
                        Passing Year 2012
                    </Text>
                </VStack>
                <VStack
                    className='p-2 border-b border-gray-100'
                >
                    <Text
                        className=''
                    >
                        Food engineering
                    </Text>
                    <Text
                        className='text-sm text-gray-400'
                    >
                        Thakurgaon Polytechnic institute
                    </Text>
                    <Text
                        className='text-sm text-gray-400'
                    >
                        3.41 of 4.00
                    </Text>
                    <Text
                        className='text-sm text-gray-400'
                    >
                        Passing Year 2018
                    </Text>
                </VStack>
                <VStack
                    className='p-2 border-b border-gray-100'
                >
                    <Text
                        className=''
                    >
                        Science
                    </Text>
                    <Text
                        className='text-sm text-gray-400'
                    >
                        Bhelajan High school
                    </Text>
                    <Text
                        className='text-sm text-gray-400'
                    >
                        3.41 of 4.00
                    </Text>
                    <Text
                        className='text-sm text-gray-400'
                    >
                        Passing Year 2018
                    </Text>
                </VStack>
            </Box>
            <Box

            >
                <Text
                    className='p-2 text-xl bg-gray-50'
                >
                    Personal Information
                </Text>
                <VStack
                    className='p-2 space-y-2'
                >
                    <View>
                        <Text
                            className=''
                        >
                            Father's Name :
                        </Text>
                        <Text
                            className='text-gray-500'
                        >
                            Anisur Rahman
                        </Text>
                    </View>
                    <View>
                        <Text
                            className=''
                        >
                            Mother's Name :
                        </Text>
                        <Text
                            className='text-gray-500'
                        >
                            Anisur Rahman
                        </Text>
                    </View>
                    <View>
                        <Text
                            className=''
                        >
                            Parmeant address:
                        </Text>
                        <Text
                            className='text-gray-500'
                        >
                            Bangrol,Motra Hat(5100),Thakurgaon Sadar,Thakurgaon
                        </Text>
                    </View>
                    <View>
                        <Text
                            className=''
                        >
                            Present address :
                        </Text>
                        <Text
                            className='text-gray-500'
                        >
                            Muhammsa Ali bazar feni sadar feni
                        </Text>
                    </View>
                    <View>
                        <Text
                            className=''
                        >
                            Marital Status :
                        </Text>
                        <Text
                            className='text-gray-500'
                        >
                            Married
                        </Text>
                    </View>
                    <View>
                        <Text
                            className=''
                        >
                            Nationality :
                        </Text>
                        <Text
                            className='text-gray-500'
                        >
                            Bangladeshi
                        </Text>
                    </View>
                    <View>
                        <Text
                            className=''
                        >
                            NID No:
                        </Text>
                        <Text
                            className='text-gray-500'
                        >
                            19969419473000162
                        </Text>
                    </View>
                    <View>
                        <Text
                            className=''
                        >
                            Date of Birth :
                        </Text>
                        <Text
                            className='text-gray-500'
                        >
                            11 April 2014
                        </Text>
                    </View>
                </VStack>
            </Box>
        </ScrollView>
    )
}