import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const { width, height } = Dimensions.get('screen');

const SlideItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item} style={styles.image} />
    </View>
  )

}

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    flex: 0.6,
    width: '100%',
    height: '100%'
  }
});