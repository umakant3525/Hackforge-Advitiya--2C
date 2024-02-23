import { StyleSheet, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {

  const images = [
    require("../assets/c1.jpg"),
    require("../assets/c2.webp"),
    require("../assets/c3.jpeg"),
    require("../assets/c4.jpeg"),
  ];

  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor={"#13274F"}
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
          borderRadius: 6,
          width: "94%",
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
