import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet, TextInput, FlatList, Button } from 'react-native';

const MultiTextInput = props => {

  const [currentTextEdit, setCurrentTextEdit] = useState("")

  return (
    <View style={styles.multiInput}>
      <ModifiableItemList items={props.items} onDeleteItem={props.onDeleteItem} />
      <TextInput style={styles.input} value={currentTextEdit} onChangeText={setCurrentTextEdit} />
      <Button style={styles.multiInputButton} onPress={() => props.onSaveItem(currentTextEdit)}>
        <Icon name="ios-add" size={30} color="#900" />
      </Button>
    </View>
  )
}

const ModifiableItemList = ({ items, onDeleteItem }) => {
  return (
    <View style={styles.modifiableListContainer}>
      <FlatList
        data={items}
        renderItem={({ item }) =>
          <View style={styles.multiInputDelete}>
            <BodyText style={styles.listDisabledText}>{item}</BodyText>
            <Button style={styles.multiInputButton} onPress={() => onDeleteItem(item)}>
              <Icon name="ios-delete" size={30} color="#900" />
            </Button>
          </View>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  modifiableListContainer: {
    padding: 10
  },
  multiInputDelete: {

  },
  listDisabledText: {

  },
  multiInputButton: {

  }
})

export default MultiTextInput
