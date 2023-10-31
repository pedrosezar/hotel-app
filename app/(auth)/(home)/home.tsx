import { View, StyleSheet, Image, SafeAreaView, FlatList } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { Text } from "@rneui/base";
import { Link } from "expo-router";

import useNavigationExitOnBack from "../../../hooks/useNavigationExitOnBack";
import { data } from "../../../mocks/data";

const Item = ({ item }: any) => (
  <Link
    key={item.id}
    href={{ pathname: "/(auth)/(home)/details", params: item }}
  >
    <View style={styles.item}>
      <Image
        style={styles.cover}
        source={{
          uri: item.cover,
        }}
      />
      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>R$ {item.price}</Text>
      </View>
    </View>
  </Link>
);

export default function _screen() {
  useNavigationExitOnBack();

  return (
    <View style={styles.container}>
      <Text h1>Home</Text>
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 16,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  cover: {
    width: 80,
    height: 120,
  },
  content: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 20,
    marginBottom: 16,
  },
  price: {
    color: "#000",
    fontSize: 16,
  },
});
