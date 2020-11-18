import React, { memo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from "react-native";
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
import SelectMultiple from 'react-native-select-multiple';
import CustomMultiPicker from "react-native-multiple-select-list";
import firebase from 'firebase';
import DropDownPicker from 'react-native-vector-icons/Feather';
import PickerEx from '../components/PickerEx'

const AssignPermissionScreen = ({ navigation }) => {
    const [name, setName] = useState({ value: "", error: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [saved, setSaved] = useState(false);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [selectedService, setSelectedService] = useState([]);
    const users = ['Sriram R','Alagu Sundaram','Aravind S','Chethan S','Kalaiselvan B','Parthasarathy Ganeshan','Parthiban','Vignesh Kanna K','Vignesh Rs','Vijayanaranayan','Vimal Arockia','Shubham Saraswat'];
    const service = ['Production Server', 'Pre-Production Server','Staging Server','AWS','Backened Service'];
    var database = firebase.database();

    const _onUserSelectionsChange = (selectedUsers) => {
        setSelectedUsers([...selectedUsers])
    }
    const _onServiceSelectionsChange = (selectedService) => {
        setSelectedService([...selectedService])
    }
  
    const _SaveOnPressed = async () => {
      //if (saved) return;
      
      if (selectedUsers.length==0) {
        Alert.alert("Select Atleast one or cancel it");
        return;
      }
  
      setSaved(true);
      //   const response = await signInUser({
      //     name: name.value,
      //     email: email.value,
      //     password: password.value
      //   });
  
      // if (response.error) {
      //   setError(response.error);
      // }
  
      setSaved(false);
    };
  
    return (
      <Background>
        <BackButton goBack={() => navigation.navigate("AdminScreen")} />
        <Header>Assign Permission Page</Header>
        <Logo />
        {/* <PickerEx /> */}
        <TextInput
          label="Service Name"
          returnKeyType="next"
          value={name.value}
          onChangeText={text => setName({ value: text, error: "" })}
          error={!!name.error}
          errorText={name.error}
        />
        {/* <CustomMultiPicker
        options={service}
        search={false} // should show search bar?
        multiple={false} //
        placeholder={"Search"}
        placeholderTextColor={'#757575'}
        returnValue={"label"} // label or value
        callback={(res)=>{ _onServiceSelectionsChange }} // callback, array of selected items
        rowBackgroundColor={"#fff"}
        rowHeight={40}
        rowRadius={5}
        iconColor={"#00a2dd"}
        iconSize={15}
        selectedIconName={"ios-checkmark-circle-outline"}
        //unselectedIconName={"ios-radio-button-off-outline"}
        scrollViewHeight={200}
        selected={[1,2]} // list of options which are selected by default
        /> */}
        {/* <View>
            <ScrollView>
                <SelectMultiple
                items={users}
                selectedItems={selectedUsers}
                onSelectionsChange={_onSelectionsChange} />
            </ScrollView>
        </View> */}

      {/* <DropDownPicker
          items={[
              {label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, hidden: true},
              {label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" />},
              {label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" />},
          ]}
          defaultValue={valstate.country}
          containerStyle={{height: 40}}
          style={{backgroundColor: '#fafafa'}}
          itemStyle={{
              justifyContent: 'flex-start'
          }}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          // onChangeItem={item => this.setState({
          //     country: item.value
          // })}
      /> */}

        <CustomMultiPicker
        options={users}
        search={false} // should show search bar?
        multiple={true} //
        placeholder={"Search"}
        placeholderTextColor={'#757575'}
        returnValue={"label"} // label or value
        callback={(res)=>{ _onUserSelectionsChange }} // callback, array of selected items
        rowBackgroundColor={"#fff"}
        rowHeight={40}
        rowRadius={5}
        iconColor={"#00a2dd"}
        iconSize={15}
        selectedIconName={"ios-checkmark-circle-outline"}
        //unselectedIconName={"ios-radio-button-off-outline"}
        scrollViewHeight={200}
        selected={[1,2]} // list of options which are selected by default
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
          onPress={_SaveOnPressed}
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
  
  export default memo(AssignPermissionScreen);