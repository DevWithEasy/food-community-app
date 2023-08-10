import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { HStack, VStack } from 'native-base'

export default function JobDetails({route,navigation}) {
    return (
        <ScrollView
            className='h-screen bg-white p-2'
        >
            <Text
                className='text-xl'
            >
                S&B Nice Food Valley Ltd.
            </Text>
            <Text
                className='text-lg text-sky-500'
            >
                Production Executive
            </Text>
            <HStack
                className='justify-between my-5'
            >
                <VStack
                    className='w-1/2'
                >
                    <Text
                        className='text-gray-500'
                    >
                        Deadline:
                    </Text>
                    <Text
                        className='text-pink-500'
                    >
                        12 July 2023
                    </Text>
                </VStack>
                <VStack
                    className='w-1/2'
                >
                    <Text
                        className='text-gray-500'
                    >
                        Salary:
                    </Text>
                    <Text
                        className='text-gray-500'
                    >
                        Negotialble
                    </Text>
                </VStack>
            </HStack>
            <ScrollView
                className='pb-10'
            >
                <VStack>
                    <Text
                        className='text-pink-500'
                    >
                        Numer of Vacencies
                    </Text>
                    <Text
                        className='text-gray-400'
                    >
                        Not Specific
                    </Text>
                </VStack>
                <VStack>
                    <Text
                        className='text-pink-500'
                    >
                        Job Location
                    </Text>
                    <Text
                        className='text-gray-400'
                    >
                        Muhammad Ali bazar Feni sadar feni
                    </Text>
                </VStack>
                <VStack>
                    <Text
                        className='text-pink-500'
                    >
                        Job Context
                    </Text>
                    <Text
                        className='text-gray-400'
                    >
                        We are looking for smart energetic, quick learner (FEMALE) - Executive, Administration (Operations) for our reputed Multinational company.
                    </Text>
                </VStack>
                <VStack>
                    <Text
                        className='text-pink-500'
                    >
                        Job Responsibilities
                    </Text>
                    <Text
                        className='text-gray-400'
                    >
                        ・ Site visit & prepare boq according to customer requirement & budget.
                    </Text>
                    <Text
                        className='text-gray-400'
                    >
                        ・ Cast vision to the team and thereby setting up timely directions to the cluster.
                    </Text>
                    <Text
                        className='text-gray-400'
                    >
                        ・ Act as a change agent
                    </Text>
                    <Text
                        className='text-gray-400'
                    >
                        ・ Drive the ADV values in to the people and promote the ADV culture within the organization.
                    </Text>
                    <Text
                        className='text-gray-400'
                    >
                        ・ Monitoring the discipline of the respective subordinates
                    </Text>
                    <Text
                        className='text-gray-400'
                    >
                        ・ Obtain the required level of support from other functional areas
                    </Text>
                </VStack>
                <VStack>
                    <Text
                        className='text-pink-500'
                    >
                        Job Nature
                    </Text>
                    <Text
                        className='text-gray-400'
                    >
                        Full Time
                    </Text>
                </VStack>
                <VStack>
                    <Text
                        className='text-pink-500'
                    >
                        Work place
                    </Text>
                    <Text
                        className='text-gray-400'
                    >
                        Office
                    </Text>
                </VStack>
                <VStack>
                    <Text
                        className='text-pink-500'
                    >
                        Requirement
                    </Text>
                    <VStack>
                        <Text
                            className='text-gray-500 font-bold'
                        >
                            Education
                        </Text>
                        <Text
                            className='text-gray-400'
                        >
                            ・  Bachelor of Business Administration (BBA)
                        </Text>
                    </VStack>
                    <VStack>
                        <Text
                            className='text-gray-500 font-bold'
                        >
                            Experience
                        </Text>
                        <Text
                            className='text-gray-400'
                        >
                            ・  Bachelor of Business Administration (BBA)
                        </Text>
                    </VStack>
                </VStack>
                <VStack>
                    <Text
                        className='text-pink-500'
                    >
                        Additional requirments
                    </Text>
                    <Text
                        className='text-gray-400'
                    >
                        ・ Site visit & prepare boq according to customer requirement & budget.
                    </Text>
                    <Text
                        className='text-gray-400'
                    >
                        ・ Cast vision to the team and thereby setting up timely directions to the cluster.
                    </Text>
                </VStack>
                <VStack>
                    <Text
                        className='text-pink-500'
                    >
                        Others benifits
                    </Text>
                    <Text
                        className='text-gray-400'
                    >
                        ・ Site visit & prepare boq
                    </Text>
                    <Text
                        className='text-gray-400'
                    >
                        ・ Cast vision to the team and thereby setting
                    </Text>
                    <Text
                        className='text-gray-400'
                    >
                        ・ Cast vision to the team and thereby setting
                    </Text>
                </VStack>
                <VStack>
                    <Text
                        className='text-pink-500'
                    >
                        Publish on
                    </Text>
                    <Text
                        className='text-gray-400'
                    >
                        10 June 2022
                    </Text>
                </VStack>
                <VStack>
                    <Text
                        className='text-pink-500'
                    >
                        Company Information
                    </Text>
                    <Text
                        className='text-gray-400'
                    >
                        S&B Nice Food Valley Ltd
                    </Text>
                </VStack>
                <VStack>
                    <Text
                        className='text-pink-500'
                    >
                        Company Address
                    </Text>
                    <Text
                        className='text-gray-400'
                    >
                        Dhaka avenue Development resouce
                    </Text>
                </VStack>
                <VStack>
                    <Text
                        className='text-pink-500'
                    >
                        Apply
                    </Text>
                    <Text
                        className='text-gray-400'
                    >
                        ・ Email your cv from service@mail.com
                    </Text>
                    <Text
                        className='text-gray-400'
                    >
                        ・ send your cv from this address -
                    </Text>
                </VStack>
                <HStack
                    className='justify-center py-6'
                >
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Apply')}
                        className='bg-pink-500 rounded-md'
                    >
                        <Text
                            className='p-2 text-white'
                        >
                            Apply now
                        </Text>
                    </TouchableOpacity>
                </HStack>
            </ScrollView>
        </ScrollView>
    )
}