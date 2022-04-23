import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
// import { Container } from './styles';
const restaurant = restaurants[0];
("");

const RestaurantDetailsScreen: React.FC = () => {
  return(
    <View style={styles.container}>
      <Image 
        source={{uri: restaurant.image}} 
        style={styles.image} 
        resizeMode='cover'
      />

			<View style={styles.iconContainer}>
			</View>
			
      <View style={styles.detailsContainer}>
				<Text style={styles.restaurantTitle}>{restaurant.name}</Text>
				<Text style={styles.restaurantSubtitle}>
					$ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
				</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    image: {
        width: '100%',
        aspectRatio: 5 / 3,
    },
		iconContainer: {

		},
    detailsContainer: {
        margin: 10,
    },
    restaurantTitle:{
        fontSize: 36,
        fontWeight: '600',
        marginVertical: 10,
				color: '#131318',
    },
    restaurantSubtitle:{
        fontSize: 14,
        color: '#888',
    }
});
export default RestaurantDetailsScreen;