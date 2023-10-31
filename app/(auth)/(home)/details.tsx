import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { useGlobalSearchParams } from "expo-router";
import { Text, Button } from "@rneui/base";
import Constants from "expo-constants";

export default function details() {
  const { cover, name, price, gallery } = useGlobalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text h2>Detalhes Hotel</Text>
        <View style={styles.item}>
          <Image
            style={styles.cover}
            source={{
              uri: "https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg",
            }}
          />

          <View style={styles.info}>
            <Text h3>{name}</Text>
            <Text h4>R$ {price}</Text>
          </View>
        </View>

        <View style={styles.gallery}>
          <Image
            style={styles.photoGallery}
            source={{
              uri: "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg",
            }}
          />

          <Image
            style={styles.photoGallery}
            source={{
              uri: "https://images.pexels.com/photos/2952663/pexels-photo-2952663.jpeg",
            }}
          />
          <Image
            style={styles.photoGallery}
            source={{
              uri: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
            }}
          />
          <Image
            style={styles.photoGallery}
            source={{
              uri: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg",
            }}
          />
        </View>

        <Button title="Reservar" containerStyle={styles.reservar} />
      </ScrollView>
    </SafeAreaView>
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
    backgroundColor: "#fff",
    flexDirection: "row",
    margin: 15,
  },
  cover: {
    width: 80,
    height: 120,
  },
  info: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  gallery: {
    backgroundColor: "#eee",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  photoGallery: {
    width: 92,
    height: 60,
  },
  reservar: {
    width: "100%",
    paddingHorizontal: 8,
    marginTop: 10,
  },
});
