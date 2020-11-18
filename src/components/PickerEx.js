import { View,Picker } from 'react-native';
import React,{Component} from 'react';

export default class PickerEx extends Component{
    render(){
        return(
            <View>
                <Picker>
                    <Picker.item label="Select a service" value="0"></Picker.item>
                    <Picker.item label="Production Server" value="8000"></Picker.item>
                    <Picker.item label="Pre-Production Server" value="7000"></Picker.item>
                    <Picker.item label="Staging Server" value="6000"></Picker.item>
                    <Picker.item label="Staging Server" value="5000"></Picker.item>
                    <Picker.item label="Staging Server" value="4000"></Picker.item>
                    <Picker.item label="Staging Server" value="3000"></Picker.item>
                </Picker>
            </View>
        )
    }
}