import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import contact from './contact';



const app = () => {
  return (
    <View className='flex justify-center items-center h-screen'>
      <Text className='text-red-600 text-2xl flex justify-center items-center'>Hello Shemanto!</Text>
      
      
      <View className='w-1/2 flex justify-center items-center'>
        <Link href='/contact' asChild>
        <Pressable>
        <Text className='bg-slate-500 rounded-full px-5 py-3 text-white'>contact</Text>
        </Pressable>
        </Link>
      </View>


    </View>
  )
}

export default app