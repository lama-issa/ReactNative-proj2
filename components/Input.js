import React from 'react'
import { TextInput,StyleSheet } from 'react-native'

const Input= props => {
  return (
  <TextInput {...props} style={{...styles.input,...props.style}}/>
  )
}
//...props.style --- to allows you add additional style to input in another componet which use this <Input> 
//forwareind your props to the companent you are using in your custom component
const styles =StyleSheet.create({
    input:{
        height:30,
        borderBottomWidth:1,
        borderBottomColor:"gray",
        marginVertical:10
        

    }
});
export default Input