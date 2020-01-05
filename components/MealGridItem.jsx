

import React from 'react';
import { TouchableOpacity, StyleSheet, View, ImageBackground, Text  } from 'react-native';
import BodyText from './BodyText';

const MealGridItem = props => {
  return (
    <TouchableOpacity
      style={styles.meal}
      onPress={() => {
        props.navigation.navigate({
          routeName: 'MealDetail',
          params: {
            mealId: props.meal.id
          }
        })
      }}>
      <View style={styles.mealGridItem}>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground style={styles.image} source={{ uri: props.meal.imageUrl }}>
            <Text style={styles.mealTitle} numberOfLines={1}>{props.meal.title}</Text>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
          <BodyText>{props.meal.duration} minutes</BodyText>
          <BodyText>{props.meal.complexity.toUpperCase()}</BodyText>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  meal: {
    margin: 15,
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  mealGridItem: {
    borderRadius: 10,
    height: 200,
    backgroundColor: '#f5f5f5',
    // shadow styles is iOS only
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    // elevation is Android only (same as shadow)
    elevation: 3
  },
  mealRow: {
    flexDirection: 'row'
  },
  mealHeader: {
    height: '85%'
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%'
  },
  mealTitle: {
    fontFamily: 'open-sans-bold',
    fontSize: 15,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: 'center'
  }
});

export default MealGridItem
