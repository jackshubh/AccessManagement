import React, { memo, useEffect } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import { getAuthToken } from '../api/ApiWrapper';
import { auth } from "firebase";

const HomeScreen = ({ navigation }) => {
  return (
    <Background>
      <Logo />
      <Header>Access Mangement</Header>
      <Button mode="contained" onPress={() => navigation.navigate("LoginScreen")}>
        Login
    </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        Sign Up
    </Button>

    </Background>
  )
};

export default memo(HomeScreen);
