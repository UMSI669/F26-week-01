import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function App() {
  const sections = [
    {
      id: 1,
      title: 'Explore',
      subtitle: 'Discover something new',
      color: '#DCEEFF',
      accent: '#2563EB',
    },
    {
      id: 2,
      title: 'Create',
      subtitle: 'Bring your ideas to life',
      color: '#FCE7F3',
      accent: '#DB2777',
    },
    {
      id: 3,
      title: 'Connect',
      subtitle: 'Share with your community',
      color: '#FEF3C7',
      accent: '#D97706',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>DASHBOARD</Text>
          <Text style={styles.heading}>Welcome back!</Text>
          <Text style={styles.description}>
            Choose a section to get started.
          </Text>
        </View>

        <View style={styles.sections}>
          {sections.map((section, index) => (
            <View
              key={section.id}
              style={[
                styles.card,
                { backgroundColor: section.color },
                index < sections.length - 1 && styles.cardSpacing,
              ]}
            >
              <View
                style={[
                  styles.icon,
                  { backgroundColor: section.accent },
                ]}
              >
                <Text style={styles.iconText}>{section.id}</Text>
              </View>

              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{section.title}</Text>
                <Text style={styles.cardSubtitle}>
                  {section.subtitle}
                </Text>
              </View>

              <Text
                style={[
                  styles.arrow,
                  { color: section.accent },
                ]}
              >
                →
              </Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 20,
  },

  header: {
    marginBottom: 28,
  },

  eyebrow: {
    color: '#2563EB',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: 8,
  },

  heading: {
    color: '#0F172A',
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: -0.5,
  },

  description: {
    color: '#64748B',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 6,
  },

  sections: {
    flex: 1,
  },

  card: {
    flex: 1,
    minHeight: 120,
    borderRadius: 22,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',

    // iOS shadow
    shadowColor: '#0F172A',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,

    // Android shadow
    elevation: 3,
  },

  cardSpacing: {
    marginBottom: 16,
  },

  icon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },

  cardContent: {
    flex: 1,
    marginLeft: 16,
  },

  cardTitle: {
    color: '#0F172A',
    fontSize: 20,
    fontWeight: '700',
  },

  cardSubtitle: {
    color: '#475569',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 4,
  },

  arrow: {
    fontSize: 26,
    fontWeight: '600',
    marginLeft: 12,
  },
});