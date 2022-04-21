import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// import { Container } from './styles';

const RestaurantItem: React.FC = () => {
  return (
    <View style={styles.restaurantContainer}>
    <Image
        source={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg" }}
        style={styles.image}
    />
    <Text style={styles.restaurantTitle}>El Cabo Coffe Bar Tres De Mayo</Text>
    <Text style={styles.restaurantSubtitle}>$1.99 15-30 minutes</Text>
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