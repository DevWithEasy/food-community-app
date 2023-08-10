import { HStack } from 'native-base';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Post({ post, navigation }) {
    
    return (
        <View
            className='bg-white mb-0.5 p-4'
        >
            <HStack
                className='space-x-2'
            >
                <Image
                    source={require('../../../assets/image/user.png')}
                    className='h-10 w-10 rounded-full'
                />
                <View>
                    <Text
                        onPress={() => navigation.navigate('Profile', { id: '' })}
                        className='font-bold'
                    >
                        Hello Iam
                    </Text>
                    <Text
                        className='text-gray-400 text-xs'
                    >
                        Hello Iam
                    </Text>
                </View>
            </HStack>
            <Text
                className='py-2'
            >
                {post.item.body}
            </Text>
            <TouchableOpacity>
                <Text
                    className='py-2 text-xs text-gray-400'
                >
                    Dusboy and 7 other like
                </Text>
            </TouchableOpacity>
            <HStack
                className='w-full flex justify-between border-t border-gray-100 pt-2'
            >
                <TouchableOpacity
                    className='w-4/12'
                >
                    <HStack
                        className='flex justify-center items-center space-x-2'
                    >
                        <Icon name='thumbs-up' size={18} color='#9ca3af' />
                        <Text
                            className='py-2 text-xs text-gray-400'
                        >
                            Like
                        </Text>
                    </HStack>
                </TouchableOpacity>
                <TouchableOpacity
                    className='w-4/12'
                >
                    <HStack
                        className='flex justify-center items-center space-x-2'
                    >
                        <Icon name='comment' size={18} color='#9ca3af'/>
                        <Text
                            className='py-2 text-xs text-gray-400'
                        >
                            Comment
                        </Text>
                    </HStack>
                </TouchableOpacity>
                <TouchableOpacity
                    className='w-4/12'
                >
                    <HStack
                        className='flex justify-center items-center space-x-2'
                    >
                        <Icon name='share' size={18} color='#9ca3af' />
                        <Text
                            className='py-2 text-xs text-gray-400'
                        >
                            Share
                        </Text>
                    </HStack>
                </TouchableOpacity>
            </HStack>
        </View>
    )
}

