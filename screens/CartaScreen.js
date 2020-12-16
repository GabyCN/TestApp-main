import React from 'react'
import { Text, View, Image } from 'react-native'
import Button from '../components/Button'
import { images } from '../components/Prueba';


export default function CartaScreen(props) {
    let card = props.route.params.otherParam
    // if (props.carte.game === 'minecraft') {
    //     var imgSource = images.minecraft.uri
    // }
    // if (props.carte.game === 'dragonball') {
    //     var imgSource = images.dragonball.uri
    // }
    // if (props.carte.game === 'naruto') {
    //     var imgSource = images.narutot.uri
    // }
    // if (props.carte.game === 'pokemon') {
    //     var imgSource = images.pokemon.uri
    // }
    // if (props.carte.game === 'supermario') {
    //     var imgSource = images.supermario.uri
    // }
    switch(props.carte.game) {
        case 'minecraft':
            var imgSource = images.minecraft.uri
          break;
        case 'dragonball':
            var imgSource = images.dragonball.uri
          break;
          case 'naruto':
            var imgSource = images.narutot.uri
          break;
        case 'pokemon':
            var imgSource = images.pokemon.uri
          break;
        default:
            var imgSource = images.supermario.uri
      }

    return (
        <View>
            <Text>{card.name}</Text>
            <Text>{card.id}</Text>
            <Text> {card.created_at}</Text>
            <Text>{card.description}</Text>
            {/* <Image style={{ height: 200, width: 200, borderRadius: 10 }}
                source={require(`../assets/games/${card.game}.png`)} /> */}
               
  

<Image source={imgSource} />

            <Button onPress={() => {
                props.navigation.navigate('Trasferisci', {
                    id: card.id,
                    otherParam:card,
                })
            }}>Trasferisci la carta</Button>

        </View>
    )

}