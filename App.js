import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert
}
  from 'react-native';
import {
  Feather,
  AntDesign,
  MaterialIcons,
  Ionicons,
  FontAwesome
} from '@expo/vector-icons';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';
const avatarImg = require('./assets/avatar.jpg');
const imgData = [
  { id: 1, imgSource: require('./assets/1.jpg') },
  { id: 2, imgSource: require('./assets/2.jpg') },
  { id: 3, imgSource: require('./assets/3.jpg') },
  { id: 4, imgSource: require('./assets/4.jpg') },
  { id: 5, imgSource: require('./assets/5.jpg') },
  { id: 6, imgSource: require('./assets/6.jpg') },
  { id: 7, imgSource: require('./assets/7.jpg') },
  { id: 8, imgSource: require('./assets/8.jpg') },
  { id: 9, imgSource: require('./assets/9.jpg') },
  { id: 10, imgSource: require('./assets/10.jpg') },
  { id: 11, imgSource: require('./assets/11.jpg') }
];
const centerImgData = Math.floor(imgData.length / 2);

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topNavBar}>
        <TouchableOpacity>
          <AntDesign 
            name="arrowleft" 
            size={27} 
            color="gray" /> 
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather 
            name="menu" 
            size={27} 
            color="gray" />
        </TouchableOpacity>
      </View>

      <View style={styles.userProfile}>
        <Image
          style={styles.avatarImage}
          source={avatarImg}
          resizeMode='cover'
        />
        <View style={styles.posterWrapper}>
          <Text style={styles.userName}>Mister Bossie</Text>
          <Text style={styles.userPosition}>CEO</Text>
          <View style={styles.btnWrapper}>
            <TouchableOpacity 
              onPress={this._showAlertFollow}>
              <View style={[styles.follow, styles.btnStyle]}><Text style={styles.followText}>Follow</Text></View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this._showAlertSend}>
              <View style={[styles.send, styles.btnStyle]}>
                <Feather 
                  name="send" 
                  size={17} 
                  color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.counter}>
        <View style={styles.counterStyles}>
          <Text style={styles.numberCounter}>210</Text>
          <Text style={styles.textCounter}>Photos</Text>
        </View>
        <View style={styles.counterStyles}>
          <Text style={styles.numberCounter}>12.2K</Text>
          <Text style={styles.textCounter}>Followers</Text>
        </View>
        <View style={styles.counterStyles}>
          <Text style={styles.numberCounter}>1200</Text>
          <Text style={styles.textCounter}>Following</Text>
        </View>
      </View>
      <View style={styles.displayedImgContainer}>
        <ScrollView contentContainerStyle={styles.displayedImg}>
          <View style={styles.imgWrapper}>
            {imgData.slice(0, centerImgData).map(item => {
              return <Image source={item.imgSource} style={styles.image} key={item.id} />
            })}
          </View>
          <View style={styles.imgWrapper}>
            {imgData.slice(centerImgData).map(item => {
              return <Image source={item.imgSource} style={styles.image} key={item.id} />
            })}
          </View>
        </ScrollView>
      </View>
      <View style={styles.btmNavBar}>
        <View style={styles.emptyView}></View>
        <MaterialIcons 
          name="person-outline" 
          size={27} 
          color="gray" />
        <Ionicons 
          name="md-add-circle-outline" 
          size={27} 
          color="gray" />
        <FontAwesome 
          name="tasks" 
          size={27} 
          color="gray" />
        <View style={styles.emptyView}></View>
      </View>
    </View>
  );
}

_showAlertFollow = () => {
  Alert.alert('Successfully Follow')
}
_showAlertSend = () => {
  Alert.alert('Your message is sent')
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topNavBar: {
    flex: 0.1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 12,
  },
  userProfile: {
    flex: 0.175,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  userName: {
    fontSize: 27,
    fontWeight: '500',
    marginBottom: 5
  },
  userPosition: {
    fontWeight: '300',
    color: 'gray',
    fontStyle: 'italic'
  },
  followText: {
    color: 'white',
    fontSize: 18
  },
  avatarImage: {
    height: 110,
    width: 110,
    borderRadius: 55
  },
  posterWrapper: {
    marginRight: 60
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btnStyle: {
    height: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  follow: {
    width: 100,
    backgroundColor: 'rgb(71,113,246)',
    marginRight: 10
  },
  send: {
    width: 50,
    backgroundColor: 'rgb(120,213,250)',
  },
  numberCounter: {
    fontSize: 21,
    fontWeight: 'bold'
  },
  textCounter: {
    fontWeight: '400',
    color: 'gray'
  },
  counter: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  counterStyles: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  displayedImgContainer: {
    flex: 0.55,
  },
  displayedImg: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imgWrapper: {
    flexDirection: 'column',
  },
  image: {
    height: 140,
    width: 140,
    borderRadius: 20,
    margin: 10,
   },
  btmNavBar: {
    flex: 0.075,
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
  },
  emptyView: {
    width: 30
  }
});
