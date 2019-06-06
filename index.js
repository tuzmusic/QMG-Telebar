import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  Alert
} from "react-native";

import { authorize, refresh, revoke } from "react-native-app-auth";

export default class Telebar extends React.Component {
  state = {
    hasLoggedInOnce: false,
    accessToken: "",
    accessTokenExpirationDate: "",
    refreshToken: ""
  };

  authorize = async () => {
    try {
      console.log(config);

      const authState = await authorize(config);
      this.setState({
        hasLoggedInOnce: true,
        accessToken: authState.accessToken,
        accessTokenExpirationDate: authState.accessTokenExpirationDate,
        refreshToken: authState.refreshToken
      });
    } catch (error) {
      Alert.alert("Failed to log in", error.message);
    }
  };

  refresh = async () => {
    try {
      const authState = await refresh(config, {
        refreshToken: this.state.refreshToken
      });
      this.setState({
        accessToken: authState.accessToken || this.state.accessToken,
        accessTokenExpirationDate:
          authState.accessTokenExpirationDate ||
          this.state.accessTokenExpirationDate,
        refreshToken: authState.refreshToken || this.state.refreshToken
      });
    } catch (error) {
      Alert.alert("Failed to refresh token", error.message);
    }
  };

  revoke = async () => {
    try {
      await revoke(config, {
        tokenToRevoke: this.state.accessToken,
        sendClientId: true
      });
      this.setState({
        accessToken: "",
        accessTokenExpirationDate: "",
        refreshToken: ""
      });
    } catch (error) {
      Alert.alert("Failed to revoke token", error.message);
    }
  };

  render() {
    const { state } = this;

    return (
      <View style={styles.container}>
        {!state.accessToken && (
          <Button onPress={this.authorize} title="Authorize" color="#017CC0" />
        )}
        {!!state.refreshToken && (
          <Button onPress={this.refresh} title="Refresh" color="#24C2CB" />
        )}
        {!!state.accessToken && (
          <Button onPress={this.revoke} title="Revoke" color="#EF525B" />
        )}
      </View>
    );
  }
}
AppRegistry.registerComponent("Telebar", () => Telebar);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const config = {
  issuer: "https://{yourOktaDomain}.oktapreview.com/oauth2/default",
  clientId: "{clientId}",
  redirectUrl: "com.{yourReversedOktaDomain}:/callback",
  additionalParameters: {},
  scopes: ["openid", "profile", "email", "offline_access"]
};
