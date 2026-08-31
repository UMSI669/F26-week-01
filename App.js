// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.view1}>
//       <Text>Hot hot refresh!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'lightgreen',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   view1: {
//     flex: 1,
//     backgroundColor: 'lightblue',
//     alignItems: '100%',
//   },
//   view2: {
//     flex: 1,
//     backgroundColor: 'pink',
//     alignItems: '100%',
//   },
//   view3: {
//     flex: 1,
//     backgroundColor: 'yellow',
//     alignItems: '100%',
//   },
// });

// Note: Code from UM-GPT

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      {/* Header: horizontal Flexbox */}
      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>FLEXBOX MISSION</Text>
          <Text style={styles.title}>Explore Space 🚀</Text>
        </View>

        <View style={styles.onlineBadge}>
          <View style={styles.onlineDot} />
          <Text style={styles.onlineText}>ONLINE</Text>
        </View>
      </View>

      {/* Hero: vertical Flexbox */}
      <View style={styles.hero}>
        <View style={styles.planet}>
          <Text style={styles.planetEmoji}>🪐</Text>
        </View>

        <View style={styles.heroText}>
          <Text style={styles.heroLabel}>CURRENT DESTINATION</Text>
          <Text style={styles.heroTitle}>Planet Flex</Text>
          <Text style={styles.heroDescription}>
            Where everything aligns perfectly.
          </Text>
        </View>
      </View>

      {/* Stats: equal-width Flexbox children */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statIcon}>⚡</Text>
          <Text style={styles.statNumber}>28K</Text>
          <Text style={styles.statLabel}>SPEED</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statIcon}>🌡️</Text>
          <Text style={styles.statNumber}>72°</Text>
          <Text style={styles.statLabel}>TEMP</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statIcon}>🛰️</Text>
          <Text style={styles.statNumber}>4</Text>
          <Text style={styles.statLabel}>SIGNALS</Text>
        </View>
      </View>

      {/* Unequal flex values */}
      <View style={styles.missionRow}>
        <View style={styles.missionInfo}>
          <Text style={styles.sectionLabel}>MISSION PROGRESS</Text>
          <Text style={styles.missionTitle}>Almost there!</Text>

          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>

          <Text style={styles.progressText}>78% complete</Text>
        </View>

        <View style={styles.moonCard}>
          <Text style={styles.moonEmoji}>🌙</Text>
          <Text style={styles.moonText}>Next stop</Text>
        </View>
      </View>

      {/* Bottom navigation */}
      <View style={styles.navigation}>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.activeNavText}>Home</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>🧭</Text>
          <Text style={styles.navText}>Explore</Text>
        </View>

        <View style={styles.launchButton}>
          <Text style={styles.launchIcon}>🚀</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>⭐</Text>
          <Text style={styles.navText}>Saved</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>👩‍🚀</Text>
          <Text style={styles.navText}>Profile</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1026',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 14,
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },
  eyebrow: {
    color: '#7C8DB5',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '900',
    marginTop: 4,
  },
  onlineBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#17203E',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#55E6A5',
    marginRight: 6,
  },
  onlineText: {
    color: '#55E6A5',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },

  // Hero
  hero: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6255F6',
    borderRadius: 28,
    padding: 20,
    marginBottom: 16,
    overflow: 'hidden',
  },
  planet: {
    width: 105,
    height: 105,
    borderRadius: 53,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#867CFF',
    marginRight: 18,
    transform: [{ rotate: '-10deg' }],
  },
  planetEmoji: {
    fontSize: 68,
  },
  heroText: {
    flex: 1,
    justifyContent: 'center',
  },
  heroLabel: {
    color: '#D6D2FF',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '900',
    marginTop: 6,
  },
  heroDescription: {
    color: '#E5E2FF',
    fontSize: 13,
    lineHeight: 19,
    marginTop: 5,
  },

  // Statistics
  statsRow: {
    flex: 1.25,
    flexDirection: 'row',
    marginBottom: 16,
    gap: 10,
  },
  statCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#17203E',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#27345D',
  },
  statIcon: {
    fontSize: 22,
    marginBottom: 5,
  },
  statNumber: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
  },
  statLabel: {
    color: '#7C8DB5',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1.3,
    marginTop: 3,
  },

  // Mission section
  missionRow: {
    flex: 1.5,
    flexDirection: 'row',
    marginBottom: 18,
    gap: 12,
  },
  missionInfo: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#FFB84D',
    borderRadius: 24,
    padding: 18,
  },
  sectionLabel: {
    color: '#714500',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.3,
  },
  missionTitle: {
    color: '#241500',
    fontSize: 22,
    fontWeight: '900',
    marginTop: 4,
  },
  progressTrack: {
    height: 9,
    backgroundColor: '#E59B2C',
    borderRadius: 10,
    marginTop: 14,
    overflow: 'hidden',
  },
  progressFill: {
    width: '78%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  progressText: {
    color: '#714500',
    fontSize: 11,
    fontWeight: '700',
    marginTop: 7,
    alignSelf: 'flex-end',
  },
  moonCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6B8A',
    borderRadius: 24,
    padding: 10,
  },
  moonEmoji: {
    fontSize: 44,
  },
  moonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
    marginTop: 8,
  },

  // Navigation
  navigation: {
    height: 76,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#17203E',
    borderRadius: 26,
    paddingHorizontal: 8,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navIcon: {
    fontSize: 20,
    marginBottom: 3,
  },
  navText: {
    color: '#7C8DB5',
    fontSize: 9,
    fontWeight: '700',
  },
  activeNavText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '800',
  },
  launchButton: {
    width: 58,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#6255F6',
    borderRadius: 29,
    borderWidth: 5,
    borderColor: '#0B1026',
    marginTop: -18,
  },
  launchIcon: {
    fontSize: 27,
  },
});