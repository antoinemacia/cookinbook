import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, StyleSheet, TextInput, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';

const NewMealScreen = props => {

  const saveMeal = useCallback(() => {
    // TODO: Add hooks to save form state and
    // TODO: Pass form data to Redux action
    // TODO: Success message
  }, [])

  useEffect(() => {
    props.navigation.setParams({
      save: saveMeal
    })
  }, [saveMeal])

  this.isGlutenFree = isGlutenFree;
  this.isVegan = isVegan;
  this.isVegetarian = isVegetarian;
  this.isLactoseFree = isLactoseFree;
  return (
    <ScrollView>
      <View style={styles.details}>
        <View style={styles.inputContainer}>
          <BodyText style={styles.label}>Upload image</BodyText>
          {
            // TODO - Needs image upload
            // <TextInput style={styles.input} />
          }
        </View>

        <View style={styles.inputContainer}>
          <BodyText style={styles.label}>Title</BodyText>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <BodyText style={styles.label}>Categories</BodyText>
          {
            // TODO - Needs dropdown
            // <TextInput style={styles.input} />
          }
        </View>

        <View style={styles.inputContainer}>
          <BodyText style={styles.label}>Affordability</BodyText>
          {
            // TODO - Needs dropdown
            // <TextInput style={styles.input} />
          }
        </View>

        <View style={styles.inputContainer}>
          <BodyText style={styles.label}>Complexity</BodyText>
          {
            // TODO - Needs dropdown
            // <TextInput style={styles.input} />
          }
        </View>

        <View style={styles.inputContainer}>
          <BodyText style={styles.label}>Duration</BodyText>
          {
            // TODO - Needs dropdown
            // <TextInput style={styles.input} />
          }
        </View>

        <View style={styles.inputContainer}>
          <BodyText style={styles.label}>Ingredients</BodyText>
          {
            // TODO - Needs text input with list (Add & Delete)
            // <TextInput style={styles.input} />
          }
        </View>


        <View style={styles.inputContainer}>
          <BodyText style={styles.label}>Steps</BodyText>
          {
            // TODO - Needs text input with list (Add & Delete)
            // <TextInput style={styles.input} />
          }
        </View>

        <View style={styles.inputContainer}>
          <BodyText style={styles.label}>Gluten Free?</BodyText>
          {
            // TODO - Radio button
          }
        </View>

        <View style={styles.inputContainer}>
          <BodyText style={styles.label}>Lactose Free?</BodyText>
          {
            // TODO - Radio button
          }
        </View>

        <View style={styles.inputContainer}>
          <BodyText style={styles.label}>Vegetarian?</BodyText>
          {
            // TODO - Radio button
          }
        </View>

        <View style={styles.inputContainer}>
          <BodyText style={styles.label}>Vegan?</BodyText>
          {
            // TODO - Radio button
          }
        </View>

      </View>
    </ScrollView>
  )
}

NewMealScreen.navigationOptions = ({ navigation }) => {

  return {
    // Device header
    headerTitle: "Add Recipe",
    // Device top-right component (like a button)
    headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="menu"
        iconName="ios-save"
        onPress={navigation.getParam('save')} />
    </HeaderButtons>
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});

export default NewMealScreen
