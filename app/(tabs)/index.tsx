import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  TextInput,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
}

export default function HomeScreen() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<string>("1");
  const fetchCharacters = async (pageNumber: string) => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${pageNumber}`
      );
      setCharacters(response.data.results);
    } catch (error) {
      console.error("Erro ao buscar personagens:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(page);
  }, []);

  const renderCharacter = ({ item }: { item: Character }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.status}>Status: {item.status}</Text>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.inputContainer}>
        <Text>1/43 - </Text>
        <TextInput
          style={styles.input}
          value={page}
          keyboardType="numeric"
          placeholder="Digite o número da página"
          onChangeText={(text) => setPage(text)}
        />
        <Button title="Buscar" onPress={() => fetchCharacters(page)} />
      </View>

      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()} // Define a chave única para cada item
        renderItem={renderCharacter} // Renderiza cada personagem
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    padding: 16,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 12,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2, // Sombras para Android
    shadowColor: "#000", // Sombras para iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
  },
  info: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  status: {
    fontSize: 14,
    color: "#666",
  },
});
