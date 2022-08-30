//import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

const App = () => {

  const [Items, setItems] = useState([
    { key: 1, item: 'Item 1 '},
    { key: 2, item: 'Item 2' },
    { key: 3, item: 'Item 3' },
    { key: 4, item: 'Item 4' },
    { key: 5, item: 'Item 5' },
    { key: 6, item: 'Item 6' },
    { key: 7, item: 'Item 7' },
    { key: 8, item: 'Item 8' },
    { key: 9, item: 'Item 9' },
    { key: 10, item: 'Item 10' },
    { key: 11, item: 'Item 11' },
    { key: 12, item: 'Item 12' },
    { key: 13, item: 'Item 13' },
    { key: 14, item: 'Item 14' },
    { key: 15, item: 'Item 15' },
    { key: 16, item: 'Item 16' },
    { key: 17, item: 'Item 17' },
    { key: 18, item: 'Item 18' },
    { key: 19, item: 'Item 19' },
    { key: 20, item: 'Item 20' },
  ])
  return (
    <View style={styles.body}>
      <ScrollView>
     {
      Items.map((object) => {
        return (
    <View style={styles.item}
     key = {object.key}>
      <Text style={styles.text}>{object.item}
      </Text>
    </View>
        )
      })
     }
     </ScrollView>
     </View>
  
);
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'column',
   
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 35,
    margin: 10,
  },
});
export default App;

