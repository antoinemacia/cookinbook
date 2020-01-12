import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';

const NewMealScreen = props => {

  const saveMeal = useCallback(() => {
    // TODO: Configure navigator to add this screen if needed
    // TODO: Add hooks to save form state and
    // TODO: Pass form data to Redux action
    // TODO: Success message
  }, [])

  useEffect(() => {
    props.navigation.setParams({
      save: saveMeal
    })
    // The second argument array is for DEPENDENCIES
    // Meaning this hook will trigger on re-renders
    // only if the dependencies bellow have changed
  }, [saveMeal])

  return (
    <ScrollView>

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
