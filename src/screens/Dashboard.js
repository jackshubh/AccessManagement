import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { logoutUser } from "../api/auth-api";
import firebase from "firebase"
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
//import { ListItem } from 'react-native-elements';

const AdminButtonHide = ({navigation, notAdmin}) =>{
  if (notAdmin && notAdmin.data.Role!=='Admin') return null;
  return(
      <Button mode="outlined" onPress={() => navigation.navigate("AdminScreen")}>
          Admin
      </Button>
  )
}

const Dashboard = ({ navigation, route }) => {
  //const userInfo = route.params;
  return(
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
        
        
        {/* <Paragraph>
              {if (!firebase.auth().currentUser) {
                // User is logged in
                firebase.auth().currentUser.uid
              }}
        </Paragraph> */}
        <Button mode="outlined" onPress={() => logoutUser()}>
          Logout
        </Button>
        <AdminButtonHide notAdmin={route}/>
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
