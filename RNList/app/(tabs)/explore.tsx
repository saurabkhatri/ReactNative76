import {View,Text,StyleSheet,ScrollView,SafeAreaView,StatusBar,SectionList}  from 'react-native';

import pokemonList from '../../data.json';
import groupedPokemonList from '../../grouped-data.json';

export default function App(){
  return(
    <SafeAreaView style={Styles.container}>
      <ScrollView style={Styles.scrollview}>
      {/* {
        pokemonList.map(pokemon =>{
          return(
            <View style={Styles.card} key={pokemon.id}>
              <Text style={Styles.cardtext}>
                {pokemon.type}
              </Text>
              <Text style={Styles.cardtext}>
                {pokemon.name}
              </Text>
              </View>
              
          )
        }
         
        )
      } */}

      <SectionList 
      sections={groupedPokemonList}
      renderItem={({ item}) =>{
        return(
          <View style={Styles.card}>
            <Text style={Styles.cardtext}>{item}

            </Text>
          </View>
        )
      }}
      renderSectionHeader={({section}) => (
        <Text style={Styles.sectionHeaderText}>
          {section.type}
        </Text>
      )}/>
      
    </ScrollView>
    </SafeAreaView>
  )
  }

  const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      paddingTop:StatusBar.currentHeight,
      },
      scrollview:{
        paddingHorizontal:19,
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
      cardtext:{
        fontSize:16,
        color:'#333',
        marginBottom:10,
      },
      sectionHeaderText:{
        fontSize:18,
        color:'#333',
        marginBottom:10,
        fontWeight:'bold',

      },
  })