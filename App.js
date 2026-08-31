import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const missions = [
  { title: 'Downtown patrol', detail: '3 alerts nearby', icon: '⌖', color: '#EE2A35' },
  { title: 'F.E.A.S.T. check-in', detail: '12:30 PM · May', icon: '♥', color: '#4B8DFF' },
];

export default function App() {
  const [isSuitOn, setIsSuitOn] = useState(true);
  const [saved, setSaved] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <View style={styles.screen}>
        <View style={styles.topBar}>
          <View>
            <Text style={styles.eyebrow}>NEW YORK · 8:42 PM</Text>
            <Text style={styles.greeting}>Hey, Peter.</Text>
          </View>
          <Pressable onPress={() => setIsSuitOn((current) => !current)} style={({ pressed }) => [styles.suitButton, pressed && styles.pressed]}>
            <Text style={styles.suitButtonText}>{isSuitOn ? 'SUIT ON' : 'SUIT OFF'}</Text>
          </Pressable>
        </View>

        <View style={styles.hero}>
          <View style={styles.heroCopy}>
            <Text style={styles.heroKicker}>CURRENT MISSION</Text>
            <Text style={styles.heroTitle}>Keep the city{'\n'}swinging.</Text>
            <Text style={styles.heroDescription}>Your friendly neighborhood needs you tonight.</Text>
          </View>
          <View style={styles.spiderMark} accessibilityLabel="Spider emblem">
            <Text style={styles.spiderBody}>◆</Text>
            <View style={styles.legRow}><Text style={styles.leg}>╲</Text><Text style={styles.leg}>╱</Text></View>
            <View style={styles.legRow}><Text style={styles.leg}>╱</Text><Text style={styles.leg}>╲</Text></View>
          </View>
          <View style={styles.webLineOne} />
          <View style={styles.webLineTwo} />
        </View>

        <View style={styles.statusCard}>
          <View style={styles.statusHeader}>
            <Text style={styles.sectionLabel}>SPIDER-SENSE</Text>
            <View style={styles.livePill}><View style={styles.liveDot} /><Text style={styles.liveText}>LIVE</Text></View>
          </View>
          <View style={styles.statusContent}>
            <View style={styles.signalRing}><View style={styles.signalCore} /></View>
            <View style={styles.statusTextWrap}>
              <Text style={styles.statusTitle}>{isSuitOn ? 'All systems ready' : 'Suit offline'}</Text>
              <Text style={styles.statusDescription}>{isSuitOn ? 'No immediate danger detected.' : 'Tap the suit switch to gear up.'}</Text>
            </View>
          </View>
        </View>

        <View style={styles.missionHeading}>
          <Text style={styles.sectionTitle}>Tonight’s route</Text>
          <Text style={styles.routeCount}>02 stops</Text>
        </View>

        <View style={styles.missionList}>
          {missions.map((mission) => (
            <Pressable key={mission.title} style={({ pressed }) => [styles.missionCard, pressed && styles.pressed]}>
              <View style={[styles.missionIcon, { backgroundColor: mission.color }]}><Text style={styles.missionIconText}>{mission.icon}</Text></View>
              <View style={styles.missionText}><Text style={styles.missionTitle}>{mission.title}</Text><Text style={styles.missionDetail}>{mission.detail}</Text></View>
              <Text style={styles.chevron}>›</Text>
            </Pressable>
          ))}
        </View>

        <Pressable onPress={() => setSaved((current) => !current)} style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}>
          <Text style={styles.primaryButtonText}>{saved ? 'ROUTE SAVED ✓' : 'SAVE TONIGHT’S ROUTE'}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#071321' },
  screen: { flex: 1, paddingHorizontal: 22, paddingBottom: 20 },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 },
  eyebrow: { color: '#8DA0B7', fontSize: 10, fontWeight: '800', letterSpacing: 1.4 },
  greeting: { color: '#F8FAFC', fontSize: 27, fontWeight: '800', letterSpacing: -0.6, marginTop: 4 },
  suitButton: { backgroundColor: '#EE2A35', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 8 },
  suitButtonText: { color: '#FFFFFF', fontSize: 10, fontWeight: '900', letterSpacing: 0.8 },
  hero: { backgroundColor: '#0D2440', borderRadius: 24, flexDirection: 'row', minHeight: 190, marginTop: 24, overflow: 'hidden', padding: 22 },
  heroCopy: { flex: 1, zIndex: 2 },
  heroKicker: { color: '#78AFFF', fontSize: 10, fontWeight: '900', letterSpacing: 1.2 },
  heroTitle: { color: '#FFFFFF', fontSize: 28, fontWeight: '900', letterSpacing: -1, lineHeight: 31, marginTop: 8 },
  heroDescription: { color: '#B9C8DA', fontSize: 12, lineHeight: 17, marginTop: 10, maxWidth: 185 },
  spiderMark: { alignItems: 'center', justifyContent: 'center', marginRight: 8, width: 82, zIndex: 2 },
  spiderBody: { color: '#EE2A35', fontSize: 44, lineHeight: 39 },
  legRow: { flexDirection: 'row', gap: 14, marginTop: -3 },
  leg: { color: '#EE2A35', fontSize: 24, fontWeight: '700', lineHeight: 19 },
  webLineOne: { backgroundColor: '#2E4B6C', height: 1, position: 'absolute', right: -25, top: 47, transform: [{ rotate: '-36deg' }], width: 155 },
  webLineTwo: { backgroundColor: '#2E4B6C', height: 1, position: 'absolute', right: -35, top: 113, transform: [{ rotate: '34deg' }], width: 165 },
  statusCard: { backgroundColor: '#102B49', borderColor: '#1B4269', borderRadius: 18, borderWidth: 1, marginTop: 16, padding: 16 },
  statusHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  sectionLabel: { color: '#85A5C8', fontSize: 10, fontWeight: '900', letterSpacing: 1.1 },
  livePill: { alignItems: 'center', backgroundColor: '#173B3C', borderRadius: 10, flexDirection: 'row', gap: 5, paddingHorizontal: 8, paddingVertical: 4 },
  liveDot: { backgroundColor: '#55E2AA', borderRadius: 4, height: 6, width: 6 },
  liveText: { color: '#78E9BA', fontSize: 9, fontWeight: '900', letterSpacing: 0.8 },
  statusContent: { alignItems: 'center', flexDirection: 'row', marginTop: 13 },
  signalRing: { alignItems: 'center', backgroundColor: '#193D5E', borderColor: '#4E96E8', borderRadius: 22, borderWidth: 1, height: 44, justifyContent: 'center', width: 44 },
  signalCore: { backgroundColor: '#76B4FF', borderRadius: 7, height: 14, width: 14 },
  statusTextWrap: { flex: 1, marginLeft: 12 },
  statusTitle: { color: '#F4F8FC', fontSize: 15, fontWeight: '800' },
  statusDescription: { color: '#93A9C0', fontSize: 11, marginTop: 3 },
  missionHeading: { alignItems: 'baseline', flexDirection: 'row', justifyContent: 'space-between', marginTop: 23 },
  sectionTitle: { color: '#F8FAFC', fontSize: 18, fontWeight: '800', letterSpacing: -0.3 },
  routeCount: { color: '#7E94AD', fontSize: 11, fontWeight: '700' },
  missionList: { gap: 10, marginTop: 12 },
  missionCard: { alignItems: 'center', backgroundColor: '#0D2138', borderRadius: 16, flexDirection: 'row', padding: 13 },
  missionIcon: { alignItems: 'center', borderRadius: 13, height: 40, justifyContent: 'center', width: 40 },
  missionIconText: { color: '#FFFFFF', fontSize: 20, fontWeight: '800' },
  missionText: { flex: 1, marginLeft: 12 },
  missionTitle: { color: '#F3F7FB', fontSize: 14, fontWeight: '800' },
  missionDetail: { color: '#839BB4', fontSize: 11, marginTop: 3 },
  chevron: { color: '#829BB4', fontSize: 28, fontWeight: '300', lineHeight: 25 },
  primaryButton: { alignItems: 'center', backgroundColor: '#EE2A35', borderRadius: 15, justifyContent: 'center', marginTop: 'auto', minHeight: 52 },
  primaryButtonText: { color: '#FFFFFF', fontSize: 12, fontWeight: '900', letterSpacing: 1 },
  pressed: { opacity: 0.76, transform: [{ scale: 0.98 }] },
});
