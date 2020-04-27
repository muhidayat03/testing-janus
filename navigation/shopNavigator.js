import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'
import mainScreen from '../src/index.js'


const ProductNavigator = createStackNavigator({
    mainScreen: mainScreen

})


export default createAppContainer(ProductNavigator)