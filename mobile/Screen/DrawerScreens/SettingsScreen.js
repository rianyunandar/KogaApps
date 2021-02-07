import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView
} from 'react-native';

import { EvilIcons } from '@expo/vector-icons';

export default class SettingsScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.droidSafeArea}>
        <View style={styles.container}>
          <Text style={styles.title}>Tentang Saya</Text>
          <View style={styles.profile}>
            <EvilIcons name="user" size={200} color="black" style={{marginBottom: 24}}/>
            <Text style={styles.userTitle}>Rian yunandar</Text>
            <Text style={styles.jobTitle}>Full Stack Developer</Text>
          </View>
       </View>
        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    fontFamily: 'Roboto'
  },

  droidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginTop: 64,
    marginBottom: 12
  },

  profile: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  userTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginBottom: 8
  },

  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3EC6FF',
    textAlign: 'center',
    marginBottom: 16
  },

  portofolio: {
      width: 359,
      height: 140,
      borderRadius: 16,
      backgroundColor: '#EFEFEF',
      marginBottom: 9
  },

  boxTitle: {
    fontSize: 18,
    paddingTop: 5,
    paddingLeft: 8,
    paddingBottom: 8,
    color: '#003366'
  },

  border: {
      borderBottomWidth: 1,
      marginLeft: 8,
      marginRight: 8,
      width: 343
  },

  portofolioIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 19.69
  },
  
  gitIcon: {
    color: '#3EC6FF'
  },

  textIcon: {
    fontSize: 16,
    marginTop: 11,
    marginBottom: 17,
    fontWeight: 'bold',
    color: '#003366'
  },

  iconGitlab: {
    marginRight: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },

  iconGithub: {
    marginLeft: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },

  contact: {
    width: 359,
    height: 251,
    borderRadius: 16,
    backgroundColor: '#EFEFEF',
  },

  socIcon: {
    color: '#3EC6FF',
    marginRight: 19
  },

  iconFacebook: {
    marginLeft: 89.81,
    marginTop: 18.81,
    flexDirection: 'row'
  },

  iconInstagram: {
    marginLeft: 89.81,
    marginTop: 29.62,
    flexDirection: 'row'
  },

  iconTwitter: {
    marginLeft: 89.81,
    marginTop: 29.62,
    marginTop: 21.62,
    flexDirection: 'row'
  }
});

// export default ;