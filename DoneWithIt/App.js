// import { StatusBar } from 'expo-status-bar';
import { StatusBar } from 'react-native';
import { StyleSheet, Dimensions, Text, Alert, Platform, TouchableNativeFeedback, TouchableOpacity, View, Image, SafeAreaView, Button } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';
import React from 'react';
import HomeScreen from './app/screens/HomeScreen';
import FocusImageScreen from './app/screens/FocusImageScreen';

export default function App() {
  // const handlePress = () => { console.log('I was pressed') };
  // const handleChangeColor = () => {
  //   document.querySelector('button').style.backgroundColor = 'red';
  // }

  // console.log(useDimensions());

  // const { landscape } = useDeviceOrientation();

  return (
    // <HomeScreen />
    <FocusImageScreen />
  )

  // return (
  // <SafeAreaView style={styles.container}>
  //   <Text>Hello Native! </Text>
  //   <TouchableNativeFeedback>
  //     <View style={{ width: '100%', height: landscape ? '100%' : '20%', backgroundColor: 'blue' }}></View>
  //   </TouchableNativeFeedback>
  //   <TouchableOpacity onPress={() => console.log("Imaged tapo tapo")}>
  //     <Image fadeDuration={300} borderRadius={50} marginTop={10} source={{
  //       width: 300,
  //       height: 300,
  //       uri: "https://picsum.dev/400/300"
  //     }} />
  //   </TouchableOpacity>
  //   <Button title='Click Me' onPress={() => Alert.alert('My message', 'Oooh Yes', [{ text: "Yes" }, { text: 'No' }])}></Button>
  //   {/* <StatusBar style='auto'></StatusBar> */}
  // </SafeAreaView>
  // <View
  //   style={{
  //     backgroundColor: "#fff",
  //     flex: 1,
  //     flexDirection: "row",
  //     justifyContent: "center",
  //     alignItems: 'center',
  //     // flexWrap: 'wrap',
  //     alignContent: 'center',
  //     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20,
  //   }}>
  //   <View style={{
  //     backgroundColor: '#ff0000',
  //     width: 100,
  //     height: 100,
  //   }}>
  //   </View>
  //   <View style={{
  //     backgroundColor: 'gold',
  //     width: 100,
  //     height: 100,
  //     top: 20,
  //     left: 20,
  //     position: "absolute",
  //   }}>
  //   </View>
  //   <View style={{
  //     backgroundColor: 'blue',
  //     width: 100,
  //     height: 100,
  //   }}>
  //   </View>
  //   <View style={{
  //     backgroundColor: 'green',
  //     width: 100,
  //     height: 100,
  //   }}>
  //   </View>
  //   <StatusBar style="auto" />
  // </View>

  //   <SafeAreaView style={{
  //     flex: 1,
  //     // alignItems: 'center',
  //     // justifyContent: 'center',
  //   }}>
  //     <View style={{ flex: 1, position: 'relative' }}>
  //       <Image source={require('./assets/background.jpg')} style={{
  //         position: 'absolute',
  //         top: 0,
  //         left: 0,
  //         right: 0,
  //         bottom: 0,
  //         width: '100%',
  //         height: '100%',
  //       }}
  //         resizeMode="cover" />
  //       <View style={{
  //         flex: 1,
  //         paddingTop: 70,
  //         // paddingHorizontal: 20,
  //         alignItems: 'center',
  //       }}>
  //         <View style={{ alignItems: 'center' }}>
  //           <Image style={{ height: 100, width: 100 }} source={
  //             require('./assets/logo.png')} />
  //           <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>Sell what you don't need</Text>
  //         </View>
  //         <View style={{ width: '100%', marginTop: 'auto' }}>
  //           <View style={{ backgroundColor: '#F88379', width: '100%', height: 60 }}></View>
  //           <View style={{
  //             backgroundColor: '#87CEFA',
  //             width: '100%', height: 60
  //           }}>
  //           </View>
  //         </View>
  //       </View>
  //     </View>
  //   </SafeAreaView >
  // );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff5cb',
//     marginTop: 20,
//     alignItems: 'center',
//     // justifyContent: 'center',
//     // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
// });
