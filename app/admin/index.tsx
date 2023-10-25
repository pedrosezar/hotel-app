import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acessar Área Administrativa</Text>

      <View style={styles.containerForm}>
        <Text style={styles.titleInput}>Usuário</Text>
        <TextInput placeholder="Digite seu usuário" style={styles.input} />

        <Text style={styles.titleInput}>Senha</Text>
        <TextInput placeholder="Digite sua senha" style={styles.input} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  containerForm: {
    width: "100%",
    flex: 1,
  },
  titleInput: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 14,
  },
  button: {
    backgroundColor: "#CCCCCC",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
