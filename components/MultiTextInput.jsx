import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import BodyText from './BodyText';

const MultiTextInput = props => {

  const [currentTextEdit, setCurrentTextEdit] = useState("")

  return (
    <View style={styles.multiInput}>
      <ModifiableItemList items={props.items} onDeleteItem={props.onDeleteItem} />
      <TextInput style={styles.input} value={currentTextEdit} onChangeText={setCurrentTextEdit} />
      <TouchableOpacity
        style={styles.multiInputButton}
        onPress={() => props.onSaveItem(currentTextEdit)}>
        <Icon name="ios-add" size={30} color="#900" />
      </TouchableOpacity>
    </View>
  )
}

const ModifiableItemList = ({ items, onDeleteItem }) => {
  return (
    <View style={styles.modifiableListContainer}>
      <FlatList
        data={items}
        renderItem={({ item }) =>
          <View style={styles.multiInputDelete} key={item}>
            <BodyText style={styles.listDisabledText}>{item}</BodyText>
            <TouchableOpacity
              style={styles.multiInputButton}
              onPress={() => onDeleteItem(item)}>
              <Icon name="ios-close-circle" size={30} color="#900" />
            </TouchableOpacity>
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
