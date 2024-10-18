import { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { Link, router } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  //   const [count, setCount] = useState(0);
  //   const onPress = () => setCount((a) => a + 1);

  const onPress = () => {
    router.push("/(tabs)");
  };

  console.log(email, pass);
  console.log(typeof email, typeof pass);

  return (
    <>
      <SafeAreaView>
        <Text>Login</Text>
        <Text>E-mail</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
        />
        <Text>Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPass}
          value={pass}
          placeholder="Insira sua senha"
          keyboardType="default"
          secureTextEntry={true}
        />
        <View>
          {/* <View>
            <Text>Count: {count}</Text>
          </View> */}
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.btnText}>ENTRAR</Text>
          </TouchableOpacity>
          <View>
            <Link href={"/register"}>Cadastrar novo usuário</Link>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: "#090909",
    color: "#ffffff",
  },
  button: {
    backgroundColor: "#090909",
  },
  btnText: {
    fontFamily: "Inter",
    color: "#ffffff",
  },
});
