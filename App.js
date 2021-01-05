import React,{useState,useEffect,} from 'react';
import { Text, View, StyleSheet,Button,ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';


export default function App()
{
  const [my,setmy]=useState(0)
const[isLoading,setLoading]=useState(true)



  changeData=()=>
  {
   setLoading(false)
  }
  updateData=()=>
  {
   setmy(my+1)
  }
  if(isLoading)
  {
    return(
      <View>
      <ActivityIndicator/>
      <Button title="Add Teacher"></Button>
       <Button title="Add Faculty"></Button>
        <Button title="Add Client"></Button>
         <Button title="Verify" onPress={changeData}></Button>

      </View>
    )
  }
  return(
    <View>
    
    <Text>Example here</Text>
    <Text>{my}</Text>
    <Button title="Login"></Button>
       <Button title="Signup"></Button>
       
     <Button title="Click here" onPress={updateData} ></Button>
    </View>
  )
}
