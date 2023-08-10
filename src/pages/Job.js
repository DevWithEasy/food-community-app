import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { data } from '../../assets/data'
import CategoryItem from '../components/Job/CategoryItem'

export default function Job({navigation}) {
    const [jobs] = useState(data)
    let categories = []
    jobs.forEach(job => {
        if(categories.includes(job.category)){
            return
        }else{
            categories.push(job.category)
        }
    })
    console.log(categories)
    return (
        <View
            className='h-screen bg-gray-50 px-2 pt-2'
        >
            {jobs && <FlatList
                    data={categories}
                    keyExtractor={(item,i) => i}
                    renderItem={({item}) => <CategoryItem {...{item,navigation}}/>}
                />}
        </View>
    )
}