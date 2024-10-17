import { Text, SafeAreaView, FlatList, StyleSheet, View } from "react-native";
import data from "@/constants/dataEx.json";
import { Item } from "@/components/item";

export default function List() {
  return (
    <>
      <View style={styles.center}>
        <Text>Lista</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.back}
          data={data}
          renderItem={({ item }) => (
            <Item
              name={item.nome}
              age={item.idade}
              date={item.data}
              image={item.imagem}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  back: {
    paddingHorizontal: 20,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    paddingVertical: 20,
  },
});
