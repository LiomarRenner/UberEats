import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// import { Container } from './styles';
// interface RestaurantItemProps {
//     restaurant: string;
//     subtitle?: string;
// }

const RestaurantItem = ({ restaurant }:any) => {
  return (
      <View style={styles.restaurantContainer}>
          <Image
              source={{ uri: restaurant.image }}
              style={styles.image}
          />

          <View style={styles.row}>
              <View>
                  <Text style={styles.restaurantTitle}>{restaurant.name}</Text>
                  <Text style={styles.restaurantSubtitle}>
                      $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
                  </Text>
              </View>
              
              <View style={styles.rating}>
                  <Text>{restaurant.rating}</Text>
              </View>
          </View>
      </View>
  );
}

export default RestaurantItem;

const styles = StyleSheet.create({
    restaurantContainer: {
        width: '100%',
        marginVertical: 10,
    },
    image: {
        width: '100%',
        aspectRatio: 5 / 3,
        marginBottom: 5,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    restaurantTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    restaurantSubtitle: {
        color: '#888',
    },
    rating: {
        marginLeft: 'auto',
        backgroundColor: '#c2c26a',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
});