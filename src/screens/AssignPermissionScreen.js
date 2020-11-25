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
import { CheckBox, ListItem, Icon } from 'react-native-elements'
import SelectMultiple from 'react-native-select-multiple';
import CustomMultiPicker from "react-native-multiple-select-list";
//import CustomMultiPicker from '../component/CustomMultiSelectList';


import DropDownPicker from 'react-native-vector-icons/Feather';
import PickerEx from '../components/PickerEx'
import axios from "axios";
import { UpdatePermissions } from '../api/ApiWrapper';

const AssignPermissionScreen = ({ navigation }) => {
  const [Servicename, setServiceName] = useState({ value: "", error: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const users = ['Sriram R', 'Alagu Sundaram', 'Aravind S', 'Chethan S', 'Kalaiselvan B', 'Parthasarathy Ganeshan', 'Parthiban', 'Vignesh Kanna K', 'Vignesh Rs', 'Vijayanaranayan', 'Vimal Arockia', 'Shubham Saraswat'];
  const service = ['Production Server', 'Pre-Production Server', 'Staging Server', 'AWS', 'Backened Service'];

  const list = [
    {
      title: 'Appointments',
      icon: 'av-timer'
    },
    {
      title: 'Trips',
      icon: 'flight-takeoff'
    },
  ]

  const _onUserSelectionsChange = (use) => {
    setSelectedUsers([...use])
  }

  const _SaveOnPressed = async () => {
    if (loading) return;

    setLoading(true);
    if (selectedUsers.length == 0) {
      Alert.alert("Select Atleast one or cancel it");
      return;
    } else {
      UpdatePermissions(Servicename, selectedUsers)
        .then(() => {
          navigation.navigate('AdminScreen');
        }).catch((error) => {
          console.log(error);
        });

    }
    setLoading(false);
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
        value={Servicename.value}
        onChangeText={text => setServiceName({ value: text, error: "" })}
        error={!!Servicename.error}
        errorText={Servicename.error}
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
        callback={(res) => { _onUserSelectionsChange(res) }} // callback, array of selected items
        rowBackgroundColor={"#fff"}
        rowHeight={40}
        rowRadius={30}
        iconColor={"#00a2dd"}
        iconSize={15}
        selectedIconName={"ios-checkmark-circle-outline"}
        //unselectedIconName={"ios-radio-button-off-outline"}
        scrollViewHeight={300}
      //selected={[1, 2]} // list of options which are selected by default
      />


      {/* <View>
        {
          list.map((item, i) => (
            <ListItem key={i} bottomDivider>
              <CheckBox
                right
                title='Click Here'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={check}
                onPress={() => _onUserSelectionsChange(item)}
              />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          ))
        }
      </View> */}



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