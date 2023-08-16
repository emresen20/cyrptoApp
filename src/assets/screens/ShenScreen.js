import { SafeAreaView, Text, View, FlatList, Image, Button, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { useEffect, useState } from "react";
import { NativeModules } from 'react-native';

export default function ShenScreen({ navigation }) {
    return (
        <TouchableOpacity style={{
            flex: 1,
            backgroundColor: "#558c8c",
            alignItems: "center",
            justifyContent: "center"
        }}
            onPress={() => navigation.navigate('Home')}>
            <View>
                <Image
                    style={{
                        width:250,
                        height:250,
                        borderRadius: 50,
                    }}
                    source={require("./../Images/Shen.png")} />
                    <Text
                        style={{
                            fontSize:15,
                            marginTop:170,
                            alignSelf:"center"
                        }}> Başlamak için dokunun</Text>
            </View>
        </TouchableOpacity>


    )
}
