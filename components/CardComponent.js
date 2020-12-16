import React from 'react'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Image } from 'react-native'
import { images } from '../components/Prueba';


export default function CardComponent(props) {

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

        <Card >
            <Card.Content>
                {/* <Image style={{ height: 50, width: 50, borderRadius: 10 }}
                    source={require(`../assets/games/${props.carte.game}.png`)} /> */}
                    
  

    <Image source={imgSource} />



            </Card.Content>
            <Card.Content>
                <Title>{props.carte.name}</Title>
                <Paragraph>{props.carte.game}</Paragraph>
            </Card.Content>
            <Card.Actions>

                <Button onPress={() => props.goCard(props.carte)}>Dettagli Carta</Button>

            </Card.Actions>
        </Card>
    )

}