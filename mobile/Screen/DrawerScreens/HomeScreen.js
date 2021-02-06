import React, { Component } from "react";
import {
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity
} from "react-native";
var { height, width } = Dimensions.get("window");
const a_proportion = '70%';
const b_proportion = '20%';

import Swiper from "react-native-swiper";
import api from "../../api";
import Axios from "axios";
import 'intl';
import 'intl/locale-data/jsonp/id-ID'; // or any other locale you need
const numberFormat = (value) =>
  new Intl.NumberFormat('locales', {
    style: 'currency',
    currency: 'IDR'
  }).format(value);
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBanner: [],
      dataMenus:[]
    };
  }

  componentDidMount() {
    const url = `${api}/menus`;
    Axios.get(url, {
      timeout: 20000
    })
      .then((response) => {
        this.setState({
          isLoading: false,
          dataBanner: response.data.bannerList,
          dataMenus: response.data.menuList
        });
        // console.log(this.state.dataMenus)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.centerView}>
            <Swiper
              style={{ height: width / 2 }}
              showsButtons={false}
              autoplay={true}
              autoplayTimeout={2}
            >
              {this.state.dataBanner.map((Object) => {
                // console.log(Object);
                return (
                  <Image
                    key={Object.id}
                    style={styles.imageBanner}
                    resizeMode="contain"
                    source={{ uri: Object.img_url }}
                  />
                );
              })}
            </Swiper>
            <View style={{ height: 10 }} />
          </View>
        </View>
          <View style={styles.LogoView}>
            <Image
              style={styles.logoBanner}
              source={require("../../Image/Logo.png")}
            />
            <Text style={styles.textBanner}>Martabak Bangka Anugrah Koga</Text>
            <Text style={styles.mottoBanner}>We Always Serve The Best</Text>
          </View>
          <View style={styles.container}>
          <Text style={styles.menuHeader}>Our food menu</Text>
          <Text style={styles.mottoBanner}>~ See what we offer ~</Text>
          <View>
          <Text style={styles.menuHeaderItalic}> Martabak Manis &amp; Martabak Telur</Text>
          <Text style={styles.hrLine}/>
          <FlatList
           data={this.state.dataMenus}
           renderItem={({ item }) => 
           (
            <TouchableOpacity style={styles.menuListstyles}>
                <Text style={styles.menuHeaderList}>
                  {item.menu_tittle}
                </Text>
                <Text style={styles.menuDescList}>{item.desc1}</Text>
                <Text style={styles.menuDescList}> {`${(numberFormat(item.price))}`}</Text>
               
    
              </TouchableOpacity>
           )
          }
           keyExtractor = { (Object,index) => index.toString() }
          />
          </View>
          </View>

      </ScrollView></>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#112263",
    padding:5
  },
  LogoView: {
    flexWrap:"wrap",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginHorizontal:45
  },
  centerView: {
    width: width,
    alignItems: "center"
  },
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20
  },
  logoBanner: {
    maxHeight: 60,
    maxWidth:60,
    margin: 10,
    
  },
  textBanner: {
    fontFamily: "sans-serif-medium",
    fontSize: 18,
    textTransform: "uppercase",
    color: "red",
    alignSelf:"center",
    maxWidth:a_proportion,
  },
  mottoBanner: {
    fontFamily: "sans-serif-medium",
    color: "#cdaa7c",
    marginHorizontal:10,
    fontStyle:"italic",
    alignSelf:"center"
  },
  menuHeader: {
    fontFamily: "sans-serif-condensed",
    color: "white",
    fontWeight:"bold",
    marginHorizontal:10,
    textTransform: "uppercase",
    fontSize:20,
    alignSelf:"center"
  },
  menuHeaderItalic: {
    fontFamily: "sans-serif-condensed",
    color: "white",
    fontWeight:"bold",
    marginHorizontal:10,
    textTransform: "uppercase",
    fontSize:20,
    alignSelf:"center",
    fontStyle:"italic"
  },
  menuHeaderList:{fontWeight:'bold',fontSize:16,fontFamily:"monospace",fontWeight:"500",color:"white"},
  menuDescList:{fontSize:14,color:"#999"},
  menuListstyles:{
  flexWrap:"wrap",
  flexDirection:"row",
  alignContent:"space-between",
  justifyContent:"space-between",
marginVertical:10},
  hrLine:{flexGrow:1,borderBottomColor:"#999",borderBottomWidth:5}

});
