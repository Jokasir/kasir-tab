import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native'
import tw from 'twrnc'
import React from 'react'

import dummy__image1 from '../assets/dummy__image1.jpg';
import dummy__image2 from '../assets/dummy__image2.jpg';
import dummy__image3 from '../assets/dummy__image3.jpg';
import dummy__image4 from '../assets/dummy__image4.jpg';
import SlideItem from '../components/SliderItem';

const arrImages = [{ id: 1, image: dummy__image1 }, { id: 2, image: dummy__image2}, { id: 3, image: dummy__image3 }, {id: 4, image: dummy__image4}];

const { width, height } = Dimensions.get('screen');

export default function OnBoarding() {
  return (
    <View style={tw`py-10 w-[${width}] h-[${height}] flex-1`}>
      <FlatList 
        data={arrImages}
        renderItem={({item, idx}) => <SlideItem item={item.image} key={idx} />}
        horizontal={true}
        pagingEnabled={true}
        keyExtractor={(item) => item.id}
        snapToAlignment='center'
        showsHorizontalScrollIndicator={true}
      />
    </View>
  )
}