import React, { memo, useEffect, useState } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { logoutUser } from "../api/auth-api";
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
//import { ListItem } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { UserInfoEndPoint, UserInfoData, authToken, ListOfServices } from '../api/ApiWrapper';
import { auth } from "firebase";

const Dashboard = ({ navigation }) => {
  //const authToken = async () => await AsyncStorage.getItem('authToken');

  const [user, setUser] = useState({
    country: '',
    emailId: '',
    fullName: '',
    isIndianUser: false,
    mobileNumber: '',
    userId: 0,
    userSegment: '',
    userType: ''
  });

  useEffect(async () => {
    const response = await axios({
      method: 'get',
      url: UserInfoEndPoint.baseURL,
      headers: { 'Authorization': 'Basic ' + authToken },
    })
      .then((response) => {
        let objTemp = {};
        objTemp = response.data.data;
        setUser({
          country: objTemp.country,
          emailId: objTemp.emailId,
          fullName: objTemp.fullName,
          isIndianUser: objTemp.isIndianUser,
          mobileNumber: objTemp.mobileNumber,
          userId: objTemp.userId,
          userSegment: objTemp.userSegment,
          userType: objTemp.userType
        })
        console.log('UserInfoFetched');
      })
      .catch((error) => {
        console.log(error);
      })

  }, [])


  const AdminButtonHide = () => {
    if (user.userType == 'Admin') return null;
    else {
      return (
        <Button mode="outlined" onPress={() => navigation.navigate("AdminScreen", { itemId: 86, otherparams: 'anything you want here' })}>
          Admin
        </Button>
      )
    }
  }
  const LinkToBeDisplayed = () => {
    const arr = async () => await ListOfServices();
    return (
      <View>

      </View>
    )
  }

  return (
    <View>
      <Background>
        {/* <View>
        <Button mode="outlined" style={styles.AdminButton}>
          Admin
        </Button>
      </View>
      <View> */}
        <Header>Let’s start</Header>
        <Logo />


        <Paragraph>
          {user.fullName}
        </Paragraph>
        <Button mode="outlined" onPress={() => logoutUser()}>
          Logout
        </Button>
        <AdminButtonHide />{/*Customer is only for test purpose */}
        {/* <Button mode="outlined" onPress={() => navigation.navigate("AdminScreen")}>
          Admin
        </Button> */}
      </Background>
      {/* <FlatList

      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  AdminButton: {
    // flex: 1,
    // position: 'absolute',
    // right: 0,
    // top: 5,
  }
});

export default memo(Dashboard);
