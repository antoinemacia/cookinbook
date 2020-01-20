import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, StyleSheet, TextInput, Switch, Picker, FlatList } from 'react-native';
import BodyText from '../components/BodyText';
import { CATEGORIES } from '../data/categories';
import MultiSelect from 'react-native-multiple-select';
import Colors from '../constants/Colors';
import MultiTextInput from '../components/MultiTextInput'

const NewMealScreen = props => {
  const meal = props.navigation.getParam('meal');

  const [title, setTitle] = useState(meal ? meal.title : "")
  const [categories, setCategories] = useState(meal ? meal.categories : [])
  const [affordability, setAffordability] = useState(meal ? meal.affordability : "")
  const [complexity, setComplexity] = useState(meal ? meal.complexity : "")
  const [duration, setDuration] = useState(meal ? meal.duration : "")
  const [ingredients, setIngredients] = useState(meal ? meal.ingredients : [])
  const [steps, setSteps] = useState(meal ? meal.steps : [])
  const [glutenFree, setGlutenFree] = useState(meal ? meal.glutenFree : false)
  const [lactoseFree, setLactoseFree] = useState(meal ? meal.lactoseFree : false)
  const [vegan, setVegan] = useState(meal ? meal.vegan : false)
  const [vegetarian, setVegetarian] = useState(meal ? meal.vegetarian : false)

  handleSaveStep = (step) => {
    setSteps([...steps, step])
  }

  handleDeleteStep = (step) => {
    setSteps(steps.filter((_, idx) => steps.indexOf(step) == idx))
  }
  
  handleSaveIngredient = (ingredient) => {
    setSteps([...ingredients, ingredient])
  }

  handleDeleteIngredient = (ingredient) => {
    setSteps(ingredients.filter((_, idx) => ingredients.indexOf(ingredient) == idx))
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
          <MultiSelect
            items={CATEGORIES}
            uniqueKey="id"
            onSelectedItemsChange={setCategories}
            selectedItems={categories}
            selectText="Pick Categories"
            selectText="Pick Items"
            searchInputPlaceholderText="Search Items..."
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            itemTextColor="#000"
            submitButtonColor="#CCC"
            submitButtonText="Submit"
          />
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
          <MultiTextInput
            items={ingredients}
            onDeleteItem={this.handleDeleteIngredient}
            onSaveItem={this.handleSaveIngredient} />
        </View>

        <View style={styles.inputContainer}>
          <BodyText style={styles.label}>Steps</BodyText>
          <MultiTextInput
            items={steps}
            onDeleteItem={this.handleDeleteStep}
            onSaveItem={this.handleSaveStep} />
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
