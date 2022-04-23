import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// import { Container } from './styles';
// interface RestaurantItemProps {
//     restaurant: string;
//     subtitle?: string;
// }

const RestaurantItem = ({ restaurant }) => {
  return (
    <View style={styles.restaurantContainer}>
    <Image
        source={{ uri: restaurant.image}}
        style={styles.image}
    />
    <Text style={styles.restaurantTitle}>{restaurant.name}</Text>
    <Text style={styles.restaurantSubtitle}>
        $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
    </Text>
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
    restaurantTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    restaurantSubtitle: {
        color: '#888',
    }
});