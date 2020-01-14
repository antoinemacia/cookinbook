import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, StyleSheet, TextInput, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';

const NewMealScreen = props => {
  const [title, setTitle] = useState(false)
  const [categories, setCategories] = useState([])
  const [affordability, setAffordability] = useState("")
  const [complexity, setComplexity] = useState()
  const [duration, setDuration] = useState(0)
  const [ingredients, setIngredients] = useState([])
  const [steps, setSteps] = useState([])
  const [glutenFree, setGlutenFree] = useState(false)
  const [lactoseFree, setLactoseFree] = useState(false)
  const [vegan, setVegan] = useState(false)
  const [vegetarian, setVegetarian] = useState(false)

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
    headerTitle: navigation.getParam('mealId') ? "Edit Recipe" : "Add Recipe",
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
  image: {
    width: '100%',
    height: 200
  },
  details: {
    margin: 15,
  },
  title: {
    fontFamily: 'open-sans-bold',
    marginVertical: 8
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  }
});

export default NewMealScreen
