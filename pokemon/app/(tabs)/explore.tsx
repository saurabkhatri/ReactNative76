import { SafeAreaView,Text,ScrollView,StyleSheet}  from "react-native";
import pokemoncard from "../../compo/Pokemoncard";
import Pokemoncard from "../../compo/Pokemoncard";

export default function App() {
  const charmanderData={
    name: "Charmander",
    image: require("../../assets/images/charmander.png"),
      type:"Fire",
      hp:39,
      moves:["Scratch","Ember"],
      weaknesses:["Water","Rock"],
  };
  return(
    <SafeAreaView style={styles.container}>
      <Pokemoncard {...charmanderData}/>
      
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f5f5f5",
  },
}
);