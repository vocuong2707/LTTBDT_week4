import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,Button} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.viewBook}>
        <View style = {styles.container_1}>
        <View> 
          <Image style = {styles.imgBook} source={require('../assets/book.png')}></Image>
        </View>
        <View>
          <Text style={styles.text_1}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.text_1}>Cung cấp bởi Tiki Trading</Text>
          <Text>141.800</Text>
          <Text>141.800</Text>
          <View style = {styles.container_2}>
          <View style = {styles.container_3}>
            <Button style = {styles.btn}>-</Button>
            <Text>1</Text>
            <Button style = {styles.btn}>+</Button>
          </View>
          <View>
            <Text>Mua sau</Text>
          </View>
          </View>
        </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  viewBook: {
    flex:1,
    width:360,
    height:283,
    marginTop:13
  },
    container_1 : {
      flex:1,
      flexDirection:'row',
      justifyContent:'space-around'
    }
  ,

  imgBook: {
    width:104,
    height:147,
  },
  text_1: {
    fontSize:12,
    fontWeight:700,
    height:14,
    lineHeight: 14.06,
    marginTop:7,
  },
  container_2 : {
    flex:1,
    flexWrap:'nowrap',
    flexDirection:'row'
  },
  container_3 :{
    flex:1,
    flexWrap:'nowrap',
    
  }
  ,
  btn : {
    width:14.22,
    height:16,
  }
});
