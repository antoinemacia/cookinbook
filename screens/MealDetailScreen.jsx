import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const MealDetailScreen = props => {

  return (
    <View style={styles.screen}>
      <Button
        title="Go Back to Categories"
        onPress={
          // popToTop sends back to the original top of the stack screen
          () => { props.navigation.popToTop() }
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailScreen
