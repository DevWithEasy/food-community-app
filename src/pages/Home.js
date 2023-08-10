import { HStack } from 'native-base';
import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Post from '../components/post/Post';


export default function Home({ navigation }) {
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    function loadMore() {
        setLoading(true)
        setPage(page + 1)
    }

    useEffect(() => {
        fetch(`https://dummyjson.com/posts?limit=15&skip=${page == 1 ? 0 : 10 * (page - 1)}`)
            .then(res => res.json())
            .then(data => {
                setPosts([...posts, ...data.posts])
                setLoading(false)
            });
    }, [page])

    return (
        <View
            className='flex-1 h-screen bg-gray-50'
        >
            <Text
                className='px-4 py-2 text-2xl bg-sky-500 text-white'
            >
                Food Community BD
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('NewPost')}
                className='mb-1 bg-white rounded cursor-pointer'
            >
                <HStack
                    className='p-4 space-x-2 flex items-center'
                >
                    <Image
                        source={require('../../assets/image/user.png')}
                        className='h-10 w-10 rounded-full'
                    />
                    <Text>
                        Whats your mind...
                    </Text>
                </HStack>
            </TouchableOpacity>
            <FlatList
                data={posts}
                onEndReached={() => loadMore()}
                keyExtractor={(item, i) => i}
                renderItem={(post) => <Post {...{ post, navigation }} />}
            />
            {
                loading &&
                <Text>Loading...</Text>
            }
        </View>
    );
}
