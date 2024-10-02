import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import WorkerGrid from '../components/WorkGrid';
import workers from '../data/workers.json'; // Import worker data from JSON

const CategoriesScreen = () => {
  const [filteredWorkers, setFilteredWorkers] = useState(workers);

  const handleSearch = (text) => {
    const filtered = workers.filter(worker =>
      worker.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredWorkers(filtered);
  };

  const handleCategorySelect = (category) => {
    const filtered = workers.filter(worker => worker.role === category);
    setFilteredWorkers(filtered);
  };

  return (
    <View style={styles.container}>
      <Header onSearch={handleSearch} onSelectCategory={handleCategorySelect} />
      <WorkerGrid workers={filteredWorkers} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CategoriesScreen;
