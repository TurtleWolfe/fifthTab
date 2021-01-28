import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
const DATA = [
  {
    id: (uuidv4()),
    title: 'normal',
    fontJB: 'normal',
  },
  {
    id: (uuidv4()),
    title: 'notoserif',
    fontJB: 'notoserif',
  },
  {
    id: (uuidv4()),
    title: 'sans-serif',
    fontJB: 'sans-serif',
  },
  {
    id: (uuidv4()),
    title: 'sans-serif-light',
    fontJB: 'sans-serif-light',
  },
  {
    id: (uuidv4()),
    title: 'sans-serif-thin',
    fontJB: 'sans-serif-thin',
  },
  {
    id: (uuidv4()),
    title: 'sans-serif-condensed',
    fontJB: 'sans-serif-condensed',
  },
  {
    id: (uuidv4()),
    title: 'sans-serif-medium',
    fontJB: 'sans-serif-medium',
  },
  {
    id: (uuidv4()),
    title: 'serif',
    fontJB: 'serif',
  },
  {
    id: (uuidv4()),
    title: 'Roboto',
    fontJB: 'Roboto',
  },
  {
    id: (uuidv4()),
    title: 'monospace',
    fontJB: 'monospace',
  },
];

const Item = ({ title, fontJB }) => (
  <View style={styles.item}>
    <Text style={{ fontSize: 20, fontFamily: fontJB }}>{title}</Text>
  </View>
);

const FontList = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} fontJB={item.fontJB} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default FontList;