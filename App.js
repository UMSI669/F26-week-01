import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const ColorBox = ({ color, label, style }) => (
  <View style={[styles.box, { backgroundColor: color }, style]}>
    <Text style={styles.boxLabel}>{label}</Text>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>SI 669 · WEEK 01</Text>
          <Text style={styles.title}>Flexbox Color Lab</Text>
          <Text style={styles.subtitle}>
            One screen, several ways to arrange space.
          </Text>
        </View>

        <View style={styles.heroRow}>
          <ColorBox
            color="#FF6B6B"
            label="flex: 2"
            style={styles.heroLarge}
          />
          <ColorBox
            color="#FFD166"
            label="flex: 1"
            style={styles.heroSmall}
          />
        </View>

        <View style={styles.middleRow}>
          <ColorBox color="#06D6A0" label="START" />
          <ColorBox color="#118AB2" label="CENTER" />
          <ColorBox color="#7B61FF" label="END" />
        </View>

        <View style={styles.wrapSection}>
          <Text style={styles.sectionLabel}>FLEX WRAP + GAP</Text>
          <View style={styles.chipRow}>
            {['ROW', 'COLUMN', 'ALIGN', 'JUSTIFY', 'WRAP'].map(
              (concept, index) => (
                <View
                  key={concept}
                  style={[
                    styles.chip,
                    index === 4 && styles.chipHighlight,
                  ]}
                >
                  <Text style={styles.chipText}>{concept}</Text>
                </View>
              )
            )}
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>built with flex</Text>
          <View style={styles.footerDot} />
          <Text style={styles.footerText}>made for mobile</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#101828',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 12,
    gap: 14,
  },
  header: {
    flex: 1.2,
    justifyContent: 'center',
  },
  eyebrow: {
    color: '#98A2B3',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 8,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: -1,
  },
  subtitle: {
    color: '#D0D5DD',
    fontSize: 15,
    marginTop: 6,
  },
  heroRow: {
    flex: 2,
    flexDirection: 'row',
    gap: 12,
  },
  heroLarge: {
    flex: 2,
  },
  heroSmall: {
    flex: 1,
  },
  middleRow: {
    flex: 1.35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    padding: 8,
  },
  boxLabel: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
    textAlign: 'center',
  },
  wrapSection: {
    flex: 1.55,
    justifyContent: 'center',
    backgroundColor: '#1D2939',
    borderRadius: 18,
    padding: 14,
  },
  sectionLabel: {
    color: '#98A2B3',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: 10,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    backgroundColor: '#344054',
    borderRadius: 20,
    paddingHorizontal: 13,
    paddingVertical: 9,
  },
  chipHighlight: {
    backgroundColor: '#F04438',
  },
  chipText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  footerText: {
    color: '#667085',
    fontSize: 11,
  },
  footerDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#667085',
  },
});
