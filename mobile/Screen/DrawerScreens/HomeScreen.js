import React, { Component } from 'react';
import { Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  TextInput
} from 'react-native';
var {height, width } = Dimensions.get('window');
import Swiper from 'react-native-swiper'
import api from '../../api'
import Axios from 'axios'
export default class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      dataBanner:[]
    }
  }

  componentDidMount(){
    const url = `${api}/menus` 
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
    // console.log(responseJson.banner)

  

      this.setState({
        isLoading: false,
        dataBanner: responseJson,
      });
      
    })
    .catch((error) =>{
      console.error(error);
    });
  }

  render() {
    return (
      <ScrollView>
       {/* { Object.entries(this.state.dataBanner).map((postData) => {
        console.log(postData) })} */}
        <View style={{ flex: 1,backgroundColor:"#f2f2f2" }}>
          <View style={{width: width, alignItems:'center'}} >
              <Image style={{height:60,width:width/2,margin:10 }} resizeMode="contain" source={require("../../Image/Logo.png")}  />
              <Swiper style={{height:width/2}}  showsButtons={false} autoplay={true} autoplayTimeout={2}>
                {
                  Object.entries(this.state.dataBanner).map((bannerList)=>{
                    console.log(bannerList);
                    // return(
                    //   <Image key={bannerList.id} style={styles.imageBanner} resizeMode="contain" source={{uri:BannerList.img_url}}/>
                    // )
                  })
                }
              </Swiper>
              <View style={{height:20}} />
          </View>
        </View>
       
      </ScrollView>
    )
              



  }}

  const styles = StyleSheet.create({
    imageBanner: {
      height:width/2,
      width:width-40,
      borderRadius:10,
      marginHorizontal:20
    }, 
  });