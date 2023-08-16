import { SafeAreaView, Text, View, FlatList, Image, Button, ActivityIndicator,Touchable } from "react-native";
import React, { useState, useEffect } from "react";
import { NativeModules } from 'react-native';
//dasdsadsadsad
const reloadApp = () => {
  NativeModules.DevSettings.reload();
};

const fetchData = () => {
  return fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
    method: "GET",
    headers: {
      "X-CMC_PRO_API_KEY": "95b37f9b-485c-43d9-8474-a8c92bb1809e",
    },
  });
};

const Item = ({ item }) => {
  return (
    <View style={{ flex: 1, flexDirection: "row", paddingHorizontal: 16, alignItems: "center", paddingVertical: 12 }}>
      <Image
        source={{ uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png` }}
        style={{ width: 64, height: 64 }}
      />
      <View style={{ marginStart: 16 }}>
        <Text> {item.symbol}</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "red" }}>{item.name} </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}> {item.quote.USD.price} $</Text>
      </View>
    </View>
  );
};

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const refreshData = () => {
    setIsLoading(true);
    fetchData()
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Veri alınamadı:", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <SafeAreaView>
      <Button onPress={refreshData} title="Yenile" color="lightgreen" />
      <View style={{alignItems:"center",justifyContent:"center"}}>
        <Text style={{fontSize:50,color:"black",fontWeight:"bold"}}>
          ShenCyrpto
          </Text>
        </View>
      {isLoading ? (
        <ActivityIndicator style={{ marginTop: 20 }} size="large" color="#841584" />
      ) : (
        
        <FlatList
          data={data}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
}


