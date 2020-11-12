import React, { memo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import {
  nameValidator
} from "../core/utils";
import Toast from "../components/Toast";

const AdminScreen = ({ navigation }) => {
    const [name, setName] = useState({ value: "", error: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // const _AssignPermissionOnPressed = () => {
    //   if (loading) return;
    //   setLoading(true);

    //   navigation.navigate("AssignPermissionScreen");

    //   if (response.error) {
    //     setError(response.error);
    //   }
  
    //   setLoading(false);
    // }
  
    const _AddServiceOnPressed = async () => {
      if (loading) return;
  
      const nameError = nameValidator(name.value);
  
      if (nameError) {
        setName({ ...name, error: nameError });
        return;
      }
  
      setLoading(true);
  
    //   const response = await signInUser({
    //     name: name.value,
    //     email: email.value,
    //     password: password.value
    //   });
  
      if (response.error) {
        setError(response.error);
      }
  
      setLoading(false);
    };
  
    return (
      <Background>
        <BackButton goBack={() => navigation.navigate("Dashboard")} />
        <Header>Admin Page</Header>
        <Logo />
  
        <TextInput
          label="Service Name"
          returnKeyType="next"
          value={name.value}
          onChangeText={text => setName({ value: text, error: "" })}
          error={!!name.error}
          errorText={name.error}
        />
  
        {/* <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={text => setEmail({ value: text, error: "" })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        /> */}
  
        {/* <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={text => setPassword({ value: text, error: "" })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
          autoCapitalize="none"
        /> */}
  
        <Button
          loading={loading}
          mode="contained"
          onPress={_AddServiceOnPressed}
          style={styles.button}
        >
          Add Service
        </Button>

        <Text>-OR-</Text>

        <Button
          //loading={loading}
          mode="contained"
          onPress={() => navigation.navigate("AssignPermissionScreen")}
          style={styles.button}
        >
          Assign Permission
        </Button>
  
        {/* <View style={styles.row}>
          <Text style={styles.label}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
   */}
        <Toast message={error} onDismiss={() => setError("")} />
      </Background>
    );
  };
  
  const styles = StyleSheet.create({
    // label: {
    //   color: theme.colors.secondary
    // },
    // button: {
    //   marginTop: 24
    // },
    // row: {
    //   flexDirection: "row",
    //   marginTop: 4
    // },
    // link: {
    //   fontWeight: "bold",
    //   color: theme.colors.primary
    // }
  });
  
  export default memo(AdminScreen);