import { View, StyleSheet, Image, SafeAreaView, FlatList } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { Text } from "@rneui/base";
import { Link, useGlobalSearchParams } from "expo-router";

import Loading from "../../../components/Loading";
import useNavigationExitOnBack from "../../../hooks/useNavigationExitOnBack";
import useCollection from "../../../firebase/hooks/useCollection";
import Hotel from "../../../types/Hotel";

interface ItemProps {
  item: Hotel;
}
const Item = ({ item }: ItemProps) => (
  <Link
    key={item.id}
    href={{ pathname: "/(auth)/(home)/details", params: { id: item.id } }}
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
      </View>
    </View>
  </Link>
);

export default function _screen() {
  const { data, loading } = useCollection<Hotel>("hotels");

  const { id } = useGlobalSearchParams();
  useNavigationExitOnBack();

  return (
    <View style={styles.container}>
      <Text h1>Home</Text>
      <SafeAreaView>
        {loading ? (
          <Loading />
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
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
});
