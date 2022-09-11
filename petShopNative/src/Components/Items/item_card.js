import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './item_card.style';

const App = ({card}) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode={'contain'}
        style={styles.image}
        source={{uri: card.imgURL}}
      />
      <View>
        <Text style={styles.title}>{card.title}</Text>
        <Text style={styles.price}>{card.price}</Text>
        {!card.inStock && <Text style={styles.inStock}>Stokta Yok</Text>}
      </View>
    </View>
  );
};

export default App;