import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const flowers = [
  { emoji: '🌹', name: 'Rose', meaning: 'Love & passion', color: '#ffd6e8' },
  { emoji: '🌻', name: 'Sunflower', meaning: 'Loyalty & joy', color: '#fff3b0' },
  { emoji: '🌷', name: 'Tulip', meaning: 'Perfect love', color: '#ffcad4' },
  { emoji: '🪷', name: 'Lotus', meaning: 'Purity & rebirth', color: '#e8d5ff' },
  { emoji: '🌼', name: 'Daisy', meaning: 'Innocence', color: '#fff9db' },
  { emoji: '🌸', name: 'Cherry Blossom', meaning: 'Fleeting beauty', color: '#ffe0ec' },
];

export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.header}>~Floriography: the language of flowers~</Text>

      <View style={styles.grid}>
        {flowers.map((flower, index) => (
          <View
            key={index}
            style={[styles.card, { backgroundColor: flower.color }]}
          >
            <Text style={styles.emoji}>{flower.emoji}</Text>
            <Text style={styles.name}>{flower.name}</Text>
            <Text style={styles.meaning}>{flower.meaning}</Text>
          </View>
        ))}
      </View>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf5ef',
    paddingTop: 70,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#6b4d57',
    marginBottom: 24,
    letterSpacing: 1,
    fontFamily: 'Georgia'
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    width: '42%',
    aspectRatio: 1,
    borderRadius: 20,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  emoji: {
    fontSize: 36,
    marginBottom: 8,
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    color: '#4a3540',
    marginBottom: 2,
  },
  meaning: {
    fontSize: 12,
    color: '#7a6570',
    textAlign: 'center',
  },
});