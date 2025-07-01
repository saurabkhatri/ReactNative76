import {View,Text,Platform,StyleSheet,Image} from 'react-native';

export default function Pokemoncard({
    name,
    image,
    type,
    hp,
    moves,
    weaknesses



}){
    return(
        <View style={ styles.card}>
            <View style={styles.container}>
                <Text style={styles.name}>
                    {name},

                </Text>
                <Text style={styles.hp}>
                    ❤️{hp}
                </Text>
            </View>
            <Image source={image} style={styles.image} accessibilityLabel={'${name} Pokemon'} 
              resizeMode="contain"/>
         
            <View>
                <Text>{type}</Text>

            </View>
            <View>
                <Text> Moves:{moves.join(" , ")}</Text>
            </View>
            <View>
                <Text> Weaknesses:{weaknesses.join(" , ")}</Text>
            </View>

        </View>
    )
}

const styles= StyleSheet.create(
    {
        card:{
            backgroundColor:"white",
            borderRadius:16,
            
            borderWidth:2,
            padding:16,
            margin:16,
            ...Platform.select({
                ios:{
                    shadowOffset:{ 
                        width:2,
                        height:2,
                    },            
                    shadowColor:"#333",
                    shadowOpacity:0.3,
                    shadowRadius:5,
                    
                },
                android:{
                    elevation:5,               }
            },
                  ),
            },
            
           nameConatginer:{
            flexDirection:"row",
            justifyContent:"space-between",
            marginBottom:32,
           },
           name:{
            fontSize:30,
            fontWeight:"bold",
           },
           hp:{
            fontSize:22,
           },
           image:{
            width:"100%",
            height:200,
            marginBottom:16,

           },

    }
)