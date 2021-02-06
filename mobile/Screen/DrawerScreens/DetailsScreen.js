import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

  export default class DetailsScreen extends React.Component {

  // const menuId = useNavigationParam('key');
  // const menuId = route.params;
  constructor(props) {
    const getId = props.route.params.key.id;
    super(props);
    this.state = {
      menuID: getId,
      data: [],
    }}
  
  render() {
    console.log(this.state.menuID)
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Example of Splash, Login and Sign Up in React Native 
            {'\n\n'}
            This is the Details Screen  
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          Splash, Login and Register Example{'\n'}React Native
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
        </Text>
      </View>
    </SafeAreaView>
  );
}}