import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import { CATEGORIES } from '../data/categories';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import BodyText from '../components/BodyText';
const CategoriesScreen = props => {

  return (
    <View style={styles.screen}>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        renderItem={({ item }) => <Category {...props} item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const Category = props => {
  return (
    <TouchableOpacity
      style={styles.category}
      onPress={() => {
        props.navigation.navigate({
          routeName: 'CategoryMeals',
          params: {
            categoryId: props.item.id
          }
        })
      }}>
      <View style={{...styles.categoryGrid, ...{backgroundColor: props.item.color}}}>
        <BodyText style={styles.categoryTitle}>{props.item.title}</BodyText>
      </View>
    </TouchableOpacity>
  )
}

// This is used for navigation configuration once
// The object has been initialized
// Setting it as a key value is used for static configuration
CategoriesScreen.navigationOptions = ({navigation}) => {
  return {
    headerTitle: 'Meal Categories',
    headerRight: () => {
      return <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="add-meal" iconName="ios-add" onPress={() => navigation.toggleDrawer()}></Item>
      </HeaderButtons>
    },
    headerLeft: () => {
      return <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="menu" iconName="ios-menu" onPress={() => navigation.toggleDrawer()}></Item>
      </HeaderButtons>
    }
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  category: {
    flex: 1,
    margin: 15,
    height: 150
  },
  categoryGrid: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // shadow styles is iOS only
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    // elevation is Android only (same as shadow)
    elevation: 3
  },
  categoryTitle: {
    fontFamily: 'open-sans-bold',
    fontSize: 15
  }
});

export default CategoriesScreen
