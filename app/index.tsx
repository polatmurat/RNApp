import { View, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Murat Polat</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
