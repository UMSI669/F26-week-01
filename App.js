import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <View>
            <Text style={styles.label}>CURRENT PROJECT</Text>
            <Text style={styles.title}>Mobile App Prototype</Text>
          </View>

          <View style={styles.status}>
            <Text style={styles.statusText}>ACTIVE</Text>
          </View>
        </View>

        <Text style={styles.description}>
          Exploring React Native layouts with Flexbox.
        </Text>

        <View style={styles.divider} />

        <View style={styles.footer}>
          <Text style={styles.meta}>SI 669</Text>
          <Text style={styles.meta}>WEEK 01</Text>
        </View>
      </View>

      <StatusBar style="dark" />
    </View>
  );
}

const monoFont = Platform.select({
  ios: 'SFMono-Regular',
  android: 'monospace',
  default: 'monospace',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  card: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 22,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,

    elevation: 4,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  label: {
    fontFamily: monoFont,
    fontSize: 11,
    letterSpacing: 1.2,
    color: '#777',
    marginBottom: 8,
  },

  title: {
    fontFamily: monoFont,
    fontSize: 20,
    fontWeight: '600',
    color: '#111',
  },

  status: {
    backgroundColor: '#111',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },

  statusText: {
    fontFamily: monoFont,
    fontSize: 10,
    color: '#FFF',
    letterSpacing: 0.8,
  },

  description: {
    fontFamily: monoFont,
    fontSize: 13,
    lineHeight: 20,
    color: '#555',
    marginTop: 22,
  },

  divider: {
    height: 1,
    backgroundColor: '#E8E8E8',
    marginVertical: 20,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  meta: {
    fontFamily: monoFont,
    fontSize: 11,
    color: '#888',
    letterSpacing: 0.8,
  },
});