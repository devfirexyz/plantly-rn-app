import { Text, View, StyleSheet, Button } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/store";

export default function ProfileScreen() {
  const toggleHasOnBoarded =  useUserStore((state) => state.toggleHasOnboarded)

  return (
    <View style={styles.container}>
     <Button title="Back to onboarding" onPress={toggleHasOnBoarded} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
  text: {
    fontSize: 24,
  },
});
