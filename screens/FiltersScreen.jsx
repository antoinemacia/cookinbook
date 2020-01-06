import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import Colors from '../constants/Colors'

const FiltersScreen = props => {
  const { navigation } = props;
  const [glutenFreeFilter, setGlutenFreeFilter] = useState(false)
  const [lactoseFreeFilter, setLactoseFreeFilter] = useState(false)
  const [veganFilter, setVeganFilter] = useState(false)
  const [vegetarianFilter, setVegetarianFilter] = useState(false)

  // useCallback avoids re-creating the function unneccessarily on re-renders
  // the function here will only be re-created if the dependecies
  // have changed.
  // useEffect() allows you to register a function which executes
  // AFTER the current render cycle.
  // https://reactjs.org/docs/hooks-reference.html#usecallback
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: glutenFreeFilter,
      lactoseFree: lactoseFreeFilter,
      vegan: veganFilter,
      vegetarian: vegetarianFilter
    }

    return appliedFilters
    // The second argument array is for DEPENDENCIES
    // Meaning this hook will trigger on re-renders
    // only if the dependencies bellow have changed
  }, [glutenFreeFilter, lactoseFreeFilter, veganFilter, vegetarianFilter])

  // This hook is used to persist the state stored in the navigation params
  // https://reactjs.org/docs/hooks-reference.html#useeffect
  useEffect(() => {
    props.navigation.setParams({
      save: saveFilters
    })
    // The second argument array is for DEPENDENCIES
    // Meaning this hook will trigger on re-renders
    // only if the dependencies bellow have changed
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch label="Gluten Free" value={glutenFreeFilter} onChange={setGlutenFreeFilter}/>
      <FilterSwitch label="Lactose Free" value={lactoseFreeFilter} onChange={setLactoseFreeFilter} />
      <FilterSwitch label="Vegan" value={veganFilter} onChange={setVeganFilter} />
      <FilterSwitch label="Vegetarian" value={vegetarianFilter} onChange={setVegetarianFilter} />
    </View>
  )
}

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        value={props.value}
        // Change color of active state
        trackColor={{ true: Colors.primaryColor }}
        onValueChange={props.onChange} />
    </View>
  )
}

// This is used for navigation configuration once
// The object has been initialized
FiltersScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'Filter Meals',
    headerLeft: () => {
      return <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="menu" iconName="ios-menu" onPress={() => navigation.toggleDrawer()}></Item>
      </HeaderButtons>
    },
    headerRight: () => {
      return <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="menu"
          iconName="ios-save"
          onPress={() => {
            navigation.getParam('save')
          }} />
      </HeaderButtons>
    }
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    margin: 20,
    textAlign: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 20
  }
});

export default FiltersScreen
