import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Box, HStack } from 'native-base'

export default function ApplyConfirm({navigation}) {
    return (
        <View
            className='h-screen bg-white p-2'
        ><Text
            className='text-red-500 text-xl'
        >Please read after confirm</Text>
            <Box>
                <Text
                    className='text-gray-400'
                >
                    ・ Please update your profile before applying beacause here your profile like as a cv.
                </Text>
                <Text
                    className='text-gray-400'
                >
                    ・ We deduct a amount of apply charge from your balance it non refundable.
                </Text>
            </Box>
            <HStack
                    className='justify-center py-6'
                >
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Job Details')}
                        className='bg-pink-500 rounded-md'
                    >
                        <Text
                            className='p-2 text-white'
                        >
                            Confirm
                        </Text>
                    </TouchableOpacity>
                </HStack>
        </View>
    )
}