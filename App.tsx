import React from "react";
import {Text,StyleSheet,View} from 'react-native'
import Home from "./src/screens/Home";

const App=()=>{
  return(
    <View style={styles.main}>
<Text>Hello Gouranga This is App page</Text>
<Home />
    </View>
  )
}

export default App;
const styles=StyleSheet.create({
main:{
  height:'100%',
  width:'100%',
  alignItems:"center",
  justifyContent:"center",

}

})
