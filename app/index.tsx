import { Button, Input, Text } from "@rneui/base";
import { useState } from "react";
import { makeStyles } from "@rneui/themed";
import { Link, useRouter } from "expo-router";
import { Alert, View } from "react-native";

import useNavigationExitOnBack from "../hooks/useNavigationExitOnBack";
import useAuth from "../firebase/hooks/useAuth";

export default function _screen() {
  useNavigationExitOnBack();

  const styles = useStyles();
  const { login, loading } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("fulano@hotel-app.com.br");
  const [password, setPassword] = useState("123Mudar");

  return (
    <View style={styles.container}>
      <Input label="E-mail" value={email} onChangeText={setEmail} />
      <Input
        label="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Login"
        containerStyle={styles.login}
        onPress={async () => {
          try {
            await login(email, password);
            router.push("/(auth)/(home)/home");
          } catch (error: any) {
            Alert.alert("Login error", error.toString());
          }
        }}
      />

      <Link href="/register">
        <Text style={styles.register}>Criar cadastro</Text>
      </Link>
    </View>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 16,
  },
  login: {
    width: "100%",
    paddingHorizontal: 8,
  },
  register: {
    color: "#000",
    fontWeight: "600",
  },
}));
