import { View,Text,StatusBar, StyleSheet } from "react-native";

export default function App(){
  return (
    <View style={styles.container}>
      <Text style={styles.card}>
        SAURAV
      </Text>
    </View>
    
  );
};
const styles = StyleSheet.create(
  {
      container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5f5f5',
        paddingTop: StatusBar.currentHeight
      },
      card:{
        backgroundColor:'#fff',
        padding:10,
        borderRadius:10,
        margin:10,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.2,
        shadowRadius:4,
        elevation:5,

      },
  }
)