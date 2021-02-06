import React, { Component } from "react";
import {
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  TextInput
} from "react-native";
var { height, width } = Dimensions.get("window");
const a_proportion = '70%';
const b_proportion = '20%';

import Swiper from "react-native-swiper";
import api from "../../api";
import Axios from "axios";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBanner: []
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
          dataBanner: response.data.bannerList
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
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
          <View style={styles.normalView}>
            <Image
              style={styles.logoBanner}
              source={require("../../Image/Logo.png")}
            />
            <Text style={styles.textBanner}>Martabak Bangka Anugrah Koga</Text>
            <Text style={styles.mottoBanner}>We Always Serve The Best</Text>

          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#112263",
  },
  normalView: {
    padding:20,
    width: width,
    alignContent: "stretch",
    flexWrap:"wrap",
    flexDirection:"row"
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
    maxWidth:b_proportion,
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
    marginHorizontal:10
  }
});
