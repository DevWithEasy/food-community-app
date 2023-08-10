import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import JobListItem from './JobListItem';
import { data } from '../../../assets/data';

export default function Jobs({ route, navigation }) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setPosts(data.filter(item => item.category === route.params.cat))
    }, [])
    return (
        <View
            className='h-screen bg-gray-50'
        >
            {posts && <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={(job) => <JobListItem {...{ job, navigation }} />}
            />}
        </View>
    )
}