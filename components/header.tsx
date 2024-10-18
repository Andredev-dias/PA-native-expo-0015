import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  StyleSheet,
} from "react-native";

export const Header = ({ image }: { image: ImageSourcePropType }) => {
  return (
    <>
      <View style={styles.background}>
        <Text style={styles.temQSerNoText}>Header exemplo</Text>
        <Text style={styles.fontTest}>TESTANDO fontes</Text>
        <Image source={image} />
    
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#090909",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  temQSerNoText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 30,
    fontFamily: "aaa",
  },
  fontTest: {
    fontFamily: "Anton",
    color: "#ffffff",
  },
});
