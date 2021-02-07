import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView
} from "react-native";
import api from "../../api";
import 'intl';
import 'intl/locale-data/jsonp/id-ID'; // or any other locale you need
import Loader from '../Components/Loader';
import Axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';
var { height, width } = Dimensions.get("window");

const numberFormat = (value) =>
  new Intl.NumberFormat('locales', {
    style: 'currency',
    currency: 'IDR'
  }).format(value);
 export default class DetailsScreen extends Component {

  // const menuId = useNavigationParam('key');
  // const menuId = route.params;
  constructor(props) {
    const getId = props.route.params.key.id;
    super(props);
    this.state = {
      menuID: getId,
      dataDetail: '',
      loading:true,
      userToken:""
    }}
  
     getToken = async () => {
      try {
        const usertoken = await AsyncStorage.getItem('token')
        if(usertoken !== null) {
         this.setState({
           userToken:usertoken
         })
        }
      } catch(e) {
        console.error(e);
        // error reading value
      }
    } 
    componentDidMount() {
      // this.getToken()
      // console.log(this.state.userToken)
      const params = this.state.menuID;
      const url = `${api}/menus/id/${params}`;
      Axios.get(url, {
        timeout: 20000
      }
      // ,{headers: {"Authorization" : `Bearer ${this.state.userToken}`}}
      )
        .then((response) => {
          this.setState({
            loading: false,
            dataDetail: response.data
          });
          // console.log(response.data)
        })
        .catch((error) => {
          console.error(error);
        });
    }


  render() {
    // <FlatList
    // data={this.state.dataDetail}
    // renderItem={({ item }) => 
    // (
      console.log(this.state.dataDetail)
      return(
        <View style={styles.container}>
         <Image style={styles.imageBanner} 
          source={{ uri: this.state.dataDetail.url_image }} />
         <Text style={styles.menuHeader}>
           {this.state.dataDetail.menu_tittle}
         </Text>
         <View style={styles.hrLine}/>
         <Text style={styles.menuDescList}>Deskripsi : {this.state.dataDetail.desc2}</Text>
         <Text style={styles.menuDescList}>Bahan Utama : {this.state.dataDetail.desc1}</Text>
         <Text style={styles.menuDescList}>Harga : {`${(numberFormat(this.state.dataDetail.price))}`}</Text>
       </View>
    )
  //  }
  //   keyExtractor = { (Object,index) => index.toString() }
  //  /> // console.log(this.state.menuID)
   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#112263",
    padding:10,
    width: width,
    alignContent: "center",
  },
 
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    // margin: 20
    alignSelf:"center"
  
  },
  menuHeader: {
    fontFamily: "sans-serif-condensed",
    color: "white",
    fontWeight:"bold",
    textTransform: "uppercase",
    fontSize:20,
    alignSelf:"center",
    padding:10
  },
  
  menuDescList:{
    fontSize:18,
    color:"white",
    marginTop:10,
    alignSelf:"stretch",
    marginHorizontal:10
  },
  hrLine:{borderBottomColor:"#999",borderBottomWidth:5}

});
