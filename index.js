import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

export default class Telebar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up Telebar.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

AppRegistry.registerComponent("Telebar", () => Telebar);
