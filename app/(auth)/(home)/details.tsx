import {
  View,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { useGlobalSearchParams } from "expo-router";
import { Button } from "@rneui/base";
import Constants from "expo-constants";
import { data } from "../../../mocks/data";

export default function details() {
  const { id } = useGlobalSearchParams();
  const { name, price, gallery } = data[0];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>{name}</Text>

        <View style={styles.gallery}>
          <Image
            style={styles.photoGallery}
            source={{
              uri: gallery[0].photo,
            }}
          />

          <Image
            style={styles.photoGallery}
            source={{
              uri: gallery[1].photo,
            }}
          />
          <Image
            style={styles.photoGallery}
            source={{
              uri: gallery[2].photo,
            }}
          />
          <Image
            style={styles.photoGallery}
            source={{
              uri: gallery[3].photo,
            }}
          />
        </View>

        <View style={styles.item}>
          <View style={styles.info}>
            <Text style={styles.infoTitle}>Preço para 1 diária, 2 adultos</Text>
            <Text style={styles.infoPrice}>R$ {price}</Text>
            <Text style={styles.infoDetail}>Impostos e taxas incluidos</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.detail}>
            <View style={styles.detailLeft}>
              <Text style={styles.detailTitle}>Check-in</Text>
              <Text style={styles.detailDate}>ter 17 out</Text>
            </View>
            <View style={styles.detailRight}>
              <Text style={styles.detailTitle}>Check-out</Text>
              <Text style={styles.detailDate}>qua 18 out</Text>
            </View>
            <View style={styles.detailInfo}>
              <Text style={styles.detailInfoTitle}>Quartos e hóspedes</Text>
              <Text style={styles.detailInfoSubTitle}>
                1 quarto, 2 adultos, 0 crianças
              </Text>
            </View>
          </View>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
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
  item: {
    backgroundColor: "#eee",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  info: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  infoTitle: {
    fontSize: 10,
  },
  infoPrice: {
    fontWeight: "bold",
    fontSize: 12,
  },
  infoDetail: {
    fontSize: 9,
  },
  detail: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    gap: 5,
  },
  detailLeft: {
    width: "25%",
    flexDirection: "column",
  },
  detailRight: {
    flex: 1,
  },
  detailTitle: {
    fontWeight: "bold",
    fontSize: 11,
  },
  detailDate: {
    color: "#0767F7",
    fontSize: 10,
  },
  detailInfo: {
    width: "100%",
  },
  detailInfoTitle: {
    fontWeight: "bold",
    fontSize: 11,
  },
  detailInfoSubTitle: {
    color: "#0767F7",
    fontSize: 10,
  },
  reservar: {
    width: "100%",
    paddingHorizontal: 8,
    marginTop: 15,
  },
});
