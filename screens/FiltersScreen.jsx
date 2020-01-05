import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const FiltersScreen = props => {

  return (
    <View style={styles.screen}>
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
    }
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FiltersScreen
