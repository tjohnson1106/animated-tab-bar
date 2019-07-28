import React from "react";
import { StyleSheet, Text, View } from "react-native";

import TabBar from "./src/components/TabBar";

export default function App() {
  return (
    <View style={styles.container}>
      <TabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ea3345",
    justifyContent: "flex-end"
  }
});
