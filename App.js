import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Cute Flexbox 🌸</Text>

        <View style={[styles.card, styles.view1]}>
          <Text style={styles.emoji}>☁️</Text>
          <Text style={styles.label}>Destroy</Text>
        </View>

        <View style={[styles.card, styles.view2]}>
          <Text style={styles.emoji}>🌷</Text>
          <Text style={styles.label}>Build</Text>
        </View>

        <View style={[styles.card, styles.view3]}>
          <Text style={styles.emoji}>✨</Text>
          <Text style={styles.label}>Destroy</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF7FB',
    paddingTop: StatusBar.currentHeight || 0,
  },

  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#76506B',
    textAlign: 'center',
    marginBottom: 14,
  },

  card: {
    flex: 1,
    width: '100%',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,

    // iOS shadow
    shadowColor: '#8C6A80',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,

    // Android shadow
    elevation: 4,
  },

  view1: {
    backgroundColor: '#CDEBFF',
  },

  view2: {
    backgroundColor: '#FFD6E7',
  },

  view3: {
    backgroundColor: '#FFF0B8',
    marginBottom: 0,
  },

  emoji: {
    fontSize: 38,
  },

  label: {
    marginTop: 6,
    fontSize: 18,
    fontWeight: '600',
    color: '#5E4B56',
  },
});