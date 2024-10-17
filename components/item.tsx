import { View, StyleSheet, Text } from "react-native";

import { Image } from "expo-image";

export const Item = ({
  name,
  age,
  date,
  image,
}: {
  name: string;
  age: string;
  date: string;
  image: string;
}) => {
  console.log(image);
  return (
    <>
      <View style={styles.itemList}>
        <Image source={image} style={styles.imageStyle}></Image>
        <Text>{name}</Text>
        <Text>{age}</Text>
        <Text>{date}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  itemList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#4168a4d4",
    margin: 10,
    height: 80,
    paddingHorizontal: 10,
  },
  imageStyle: {
    width: 30,
    height: 30,
  },
});
