import {TouchableOpacity, stylesheet} from "react-native";
import { View, Text} from 'react-native'
import styles from './style'

export default function AuthMenu() {
return (
    <view style = {styles.container}>
      <Text style ={styles.headertext}>  Log in  </Text>
       <TouchableOpacity style = {styles.provider}>
        
        
        </TouchableOpacity> 
    </view>
)
}