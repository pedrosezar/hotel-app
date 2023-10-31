import { Button, Input } from "@rneui/base";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function _screen() {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <Input label="E-mail" placeholder="fulano@site.com.br" />
      <Input label="Senha" placeholder="*****" secureTextEntry />
      <Input label="Confirme a senha" placeholder="*****" secureTextEntry />
      <Button
        title="Fazer login"
        containerStyle={styles.register}
        onPress={handleRegister}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 16,
  },
  register: {
    width: "100%",
    paddingHorizontal: 8,
  },
});
