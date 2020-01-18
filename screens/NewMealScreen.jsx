import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, StyleSheet, TextInput, Switch, Picker, Image } from 'react-native';
import BodyText from '../components/BodyText';

const NewMealScreen = props => {
  const meal = props.navigation.getParam('meal');

  const [title, setTitle] = useState(meal ? meal.title : false)
  const [categories, setCategories] = useState(meal ? meal.categories : [])
  const [affordability, setAffordability] = useState(meal ? meal.affordability : "")
  const [complexity, setComplexity] = useState(meal ? meal.complexity : "")
  const [duration, setDuration] = useState(meal ? meal.duration : 0)
  const [ingredients, setIngredients] = useState(meal ? meal.ingredients : [])
  const [steps, setSteps] = useState(meal ? meal.steps : [])
  const [glutenFree, setGlutenFree] = useState(meal ? meal.glutenFree : false)
  const [lactoseFree, setLactoseFree] = useState(meal ? meal.lactoseFree : false)
  const [vegan, setVegan] = useState(meal ? meal.vegan : false)
  const [vegetarian, setVegetarian] = useState(meal ? meal.vegetarian : false)

  const handleAddIngredient = (ingredient) => {
    setIngredients([...ingredients, ingredient])
  }

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
          <TextInput style={styles.input} value={title} onChangeText={setTitle}/>
        </View>

        <View style={styles.inputContainer}>
          <BodyText style={styles.label}>Categories</BodyText>
          <ModifiableItemList items={categories} />
          <Picker
            selectedValue={categories}
            style={styles.input}
            onValueChange={(value) => { setCategories([...categories, { key: categories.length + 1, value: value }])}}>
            <Picker.Item label="Italian" value="c1" />
            <Picker.Item label="Quick & Easy" value="c2" />
            <Picker.Item label="Hamburgers" value="c3" />
            <Picker.Item label="German" value="c4" />
            <Picker.Item label="Light & Lovely" value="c5" />
            <Picker.Item label="Exotic" value="c6" />
            <Picker.Item label="Breakfast" value="c7" />
            <Picker.Item label="Asian" value="c8" />
            <Picker.Item label="French" value="c9" />
            <Picker.Item label="Summer" value="c10" />
          </Picker>
        </View>
        <View style={styles.inputContainer}>
          <BodyText style={styles.label}>Affordability</BodyText>
          <Picker
            selectedValue={affordability}
            style={styles.input}
            onValueChange={setAffordability}>
            <Picker.Item label="Cheap" value="cheap" />
            <Picker.Item label="Okay" value="okay" />
            <Picker.Item label="Pricey" value="pricey" />
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <BodyText style={styles.label}>Complexity</BodyText>
          <Picker
            selectedValue={complexity}
            style={styles.input}
            onValueChange={setComplexity}>
            <Picker.Item label="Easy" value="easy" />
            <Picker.Item label="Seasoned" value="seasoned" />
            <Picker.Item label="Difficult" value="difficult" />
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <BodyText style={styles.label}>Duration</BodyText>
          <TextInput style={styles.input} value={duration} onChangeText={setDuration}/>
        </View>

        <View style={styles.inputContainer}>
          <BodyText style={styles.label}>Ingredients</BodyText>
          <ModifiableItemList items={ingredients} />
          <TextInput
            style={styles.input}
            onChangeText={(text) => {
              setIngredients([...ingredients, { key: ingredients.length + 1, value: text }])
            }}
          />
        </View>

        <View style={styles.inputContainer}>
          <BodyText style={styles.label}>Steps</BodyText>
          <ModifiableItemList items={steps} />
          <TextInput
            style={styles.input}
            onChangeText={(text) => {
              setSteps([...steps, { key: steps.length + 1, value: text }])
            }}
          />
        </View>

        <View style={styles.inputContainer}>
          <BodyText style={styles.label}>Gluten Free?</BodyText>
          <Switch
            value={glutenFree}
            trackColor={{ true: Colors.primaryColor }}
            onValueChange={setGlutenFree} />
        </View>

        <View style={styles.inputContainer}>
          <BodyText style={styles.label}>Lactose Free?</BodyText>
          <Switch
            value={lactoseFree}
            trackColor={{ true: Colors.primaryColor }}
            onValueChange={setLactoseFree} />
        </View>

        <View style={styles.inputContainer}>
          <BodyText style={styles.label}>Vegetarian?</BodyText>
          <Switch
            value={vegetarian}
            trackColor={{ true: Colors.primaryColor }}
            onValueChange={setVegetarian} />
        </View>

        <View style={styles.inputContainer}>
          <BodyText style={styles.label}>Vegan?</BodyText>
          <Switch
            value={vegan}
            trackColor={{ true: Colors.primaryColor }}
            onValueChange={setVegan} />
        </View>

      </View>
    </ScrollView>
  )
}

const ModifiableItemList = ({items, onDeleteItem}) => {
  return(
    <View style={styles.modifiableListContainer}>
      <FlatList
        data={items}
        renderItem={({ item }) => <BodyText style={styles.listDisabledInput}>{item}</BodyText>}
      />
    </View>
  )
}

NewMealScreen.navigationOptions = ({ navigation }) => {

  return {
    // Device header
    headerTitle: navigation.getParam('meal') ? "Edit Recipe" : "Add Recipe",
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
