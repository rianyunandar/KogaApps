import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import api from "../../api";
import 'intl';
import 'intl/locale-data/jsonp/id-ID'; // or any other locale you need
import Loader from '../Components/Loader';
import Axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';

 export default class DetailsScreen extends React.Component {

  // const menuId = useNavigationParam('key');
  // const menuId = route.params;
  constructor(props) {
    const getId = props.route.params.key.id;
    super(props);
    this.state = {
      menuID: getId,
      dataDetail: [],
      loading:true
    }}
  
    componentDidMount() {
      const userToken =  AsyncStorage.getItem('@token')
      console.log(userToken)
      const params = this.state.menuID;
      const url = `${api}/menus/id/${params}`;
      Axios.get(url, {
        timeout: 20000
      },{headers: {"Authorization" : `Bearer ${userToken}`}})
        .then((response) => {
          this.setState({
            loading: false,
            dataDetail: response.data
          });
          // console.log(this.state.dataMenus)
        })
        .catch((error) => {
          console.error(error);
        });
    }


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