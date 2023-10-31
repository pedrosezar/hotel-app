import { Button, Input, Text } from "@rneui/base";
import { makeStyles } from "@rneui/themed";
import { Link, useRouter } from "expo-router";
import { View } from "react-native";

import useNavigationExitOnBack from "../hooks/useNavigationExitOnBack";

export default function _screen() {
  useNavigationExitOnBack();

  const styles = useStyles();
  const router = useRouter();

  const handleLogin = () => {
    router.push("/(auth)/(home)/home");
  };

  return (
    <View style={styles.container}>
      <Input label="E-mail" placeholder="e-mail" />
      <Input label="Senha" placeholder="senha" secureTextEntry />
      <Button
        title="Login"
        containerStyle={styles.login}
        onPress={handleLogin}
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
