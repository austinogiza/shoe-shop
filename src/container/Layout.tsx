import React from 'react'
import { View, SafeAreaView } from 'react-native'
import Constants from 'expo-constants'


const Layout:React.FC = ({children}) => {

    return (
        <SafeAreaView style={{
            flex: 1,
            paddingTop: Constants.statusBarHeight
        }}>
           {children}
        </SafeAreaView>
    )
}

export default Layout
