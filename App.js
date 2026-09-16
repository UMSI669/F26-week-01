import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
 return (
     <View style={stylesSG.body}>
       <View style={stylesSG.section}>
         <View style={stylesSG.boxLeft}>
           <Text>Silver Box 175x175</Text>
         </View>
         <View style={stylesSG.boxLeft}>
           <Text>Silver Box 175x175</Text>
         </View>
       </View>
       <View style={stylesSG.section}>
         <View style={stylesSG.boxRight}>
           <Text>Gold Box 125x125</Text>
         </View>
         <View style={stylesSG.boxRight}>
           <Text>Gold Box 125x125</Text>
         </View>
         <View style={stylesSG.boxRight}>
           <Text>Gold Box 125x125</Text>
         </View>
       </View>
     </View>
 );
}
const stylesSG = StyleSheet.create({
 body: {
   flex: 1,
   flexDirection: 'row',
 },
 section: {
   flex: 0.5,
   alignItems: 'center',
   justifyContent: "space-evenly"
 },
 boxLeft: {
   height: 175,
   width: 175,
   backgroundColor: 'silver',
   alignItems: 'center',
   justifyContent: 'center'
 },
 boxRight: {
   height: 125,
   width: 125,
   backgroundColor: 'gold',
   alignItems: 'center',
   justifyContent: 'center'
 }
});
