import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { Alert, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const starterTasks = [
  { id: '1', title: 'Review project notes', time: '9:00 AM', category: 'Work', done: false },
  { id: '2', title: 'Pick up groceries', time: '5:30 PM', category: 'Personal', done: false },
  { id: '3', title: 'Call Mom', time: '7:00 PM', category: 'Personal', done: false },
  { id: '4', title: 'Reply to Maya', time: 'Done', category: 'Work', done: true },
];

export default function App() {
  const [tasks, setTasks] = useState(starterTasks);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('Today');
  const openTasks = useMemo(() => tasks.filter((task) => !task.done), [tasks]);
  const completedTasks = useMemo(() => tasks.filter((task) => task.done), [tasks]);
  const visibleTasks = filter === 'Completed' ? completedTasks : openTasks;

  const toggleTask = (id) => setTasks((current) => current.map((task) => (
    task.id === id ? { ...task, done: !task.done, time: task.done ? 'Today' : 'Done' } : task
  )));

  const addTask = () => {
    const title = newTask.trim();
    if (!title) {
      Alert.alert('Add a task', 'Write a reminder first.');
      return;
    }
    setTasks((current) => [{ id: Date.now().toString(), title, time: 'Today', category: 'Personal', done: false }, ...current]);
    setNewTask('');
    setFilter('Today');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>MONDAY, SEPTEMBER 8</Text>
            <Text style={styles.title}>Good morning, Anne</Text>
          </View>
          <View style={styles.avatar} accessibilityLabel="User profile"><Text style={styles.avatarText}>A</Text></View>
        </View>
        <View style={styles.progressCard}>
          <View style={styles.progressTopRow}>
            <View><Text style={styles.progressLabel}>TODAY'S FOCUS</Text><Text style={styles.progressValue}>{openTasks.length} tasks left</Text></View>
            <Text style={styles.progressCount}>{completedTasks.length}/{tasks.length}</Text>
          </View>
          <View style={styles.progressTrack}><View style={[styles.progressFill, { width: `${tasks.length ? (completedTasks.length / tasks.length) * 100 : 0}%` }]} /></View>
          <Text style={styles.progressHint}>Small steps still count.</Text>
        </View>
        <View style={styles.addSection}>
          <Text style={styles.sectionLabel}>NEW REMINDER</Text>
          <View style={styles.addRow}>
            <TextInput accessibilityLabel="New reminder" value={newTask} onChangeText={setNewTask} onSubmitEditing={addTask} placeholder="What needs to get done?" placeholderTextColor="#6D7470" returnKeyType="done" style={styles.input} />
            <Pressable accessibilityRole="button" accessibilityLabel="Add reminder" onPress={addTask} style={styles.addButton}><Text style={styles.addButtonText}>+</Text></Pressable>
          </View>
        </View>
        <View style={styles.listHeader}><Text style={styles.listTitle}>{filter === 'Completed' ? 'Completed' : 'Today'}</Text><Text style={styles.listSubtitle}>{visibleTasks.length} {visibleTasks.length === 1 ? 'reminder' : 'reminders'}</Text></View>
        <View style={styles.filterRow} accessibilityRole="tablist">
          {['Today', 'Completed'].map((item) => <Pressable key={item} accessibilityRole="tab" accessibilityState={{ selected: filter === item }} onPress={() => setFilter(item)} style={[styles.filterButton, filter === item && styles.filterButtonActive]}><Text style={[styles.filterText, filter === item && styles.filterTextActive]}>{item}</Text></Pressable>)}
        </View>
        <View style={styles.taskList}>
          {visibleTasks.map((task) => <Pressable key={task.id} accessibilityRole="checkbox" accessibilityState={{ checked: task.done }} accessibilityLabel={`${task.title}, ${task.time}`} onPress={() => toggleTask(task.id)} style={[styles.taskCard, task.done && styles.taskCardDone]}>
            <View style={[styles.checkbox, task.done && styles.checkboxDone]}>{task.done && <Text style={styles.checkmark}>✓</Text>}</View>
            <View style={styles.taskCopy}><Text style={[styles.taskTitle, task.done && styles.taskTitleDone]}>{task.title}</Text><View style={styles.metaRow}><Text style={styles.taskTime}>{task.done ? 'Completed' : `Remind me · ${task.time}`}</Text><View style={styles.dot} /><Text style={styles.category}>{task.category}</Text></View></View>
            <Text style={styles.chevron}>›</Text>
          </Pressable>)}
          {visibleTasks.length === 0 && <View style={styles.emptyState}><Text style={styles.emptyTitle}>Nothing here yet</Text><Text style={styles.emptyText}>Add a reminder or check off a task to see it here.</Text></View>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F6F7F3' }, scrollContent: { paddingHorizontal: 20, paddingBottom: 40 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20, paddingBottom: 28 }, eyebrow: { color: '#68716D', fontSize: 12, fontWeight: '700', letterSpacing: 1.1 }, title: { color: '#17241B', fontSize: 28, fontWeight: '700', letterSpacing: -0.6, marginTop: 6 }, avatar: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center', backgroundColor: '#D9E6C6' }, avatarText: { color: '#30461E', fontSize: 17, fontWeight: '700' },
  progressCard: { backgroundColor: '#254B2B', borderRadius: 20, padding: 20 }, progressTopRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }, progressLabel: { color: '#CFE1BB', fontSize: 12, fontWeight: '700', letterSpacing: 1 }, progressValue: { color: '#FFFFFF', fontSize: 24, fontWeight: '700', marginTop: 6 }, progressCount: { color: '#FFFFFF', fontSize: 18, fontWeight: '700' }, progressTrack: { height: 8, borderRadius: 4, backgroundColor: '#57755A', marginTop: 22, overflow: 'hidden' }, progressFill: { height: '100%', backgroundColor: '#D9E98B', borderRadius: 4 }, progressHint: { color: '#D7E4D3', fontSize: 14, marginTop: 12 },
  addSection: { marginTop: 28 }, sectionLabel: { color: '#68716D', fontSize: 12, fontWeight: '700', letterSpacing: 1.1, marginBottom: 10 }, addRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', borderColor: '#E0E4DD', borderRadius: 16, borderWidth: 1, paddingLeft: 16 }, input: { flex: 1, color: '#17241B', fontSize: 16, height: 56 }, addButton: { width: 48, height: 48, marginRight: 4, borderRadius: 14, backgroundColor: '#C8E35D', alignItems: 'center', justifyContent: 'center' }, addButtonText: { color: '#1C341C', fontSize: 28, fontWeight: '400', lineHeight: 30 },
  listHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 32 }, listTitle: { color: '#17241B', fontSize: 24, fontWeight: '700', letterSpacing: -0.4 }, listSubtitle: { color: '#68716D', fontSize: 14 }, filterRow: { flexDirection: 'row', marginTop: 16, marginBottom: 14, gap: 8 }, filterButton: { borderRadius: 20, paddingHorizontal: 16, paddingVertical: 9 }, filterButtonActive: { backgroundColor: '#E2E9DC' }, filterText: { color: '#68716D', fontSize: 14, fontWeight: '600' }, filterTextActive: { color: '#254B2B' }, taskList: { gap: 10 },
  taskCard: { alignItems: 'center', flexDirection: 'row', backgroundColor: '#FFFFFF', borderColor: '#E0E4DD', borderRadius: 16, borderWidth: 1, minHeight: 84, padding: 16 }, taskCardDone: { backgroundColor: '#F1F4ED' }, checkbox: { width: 25, height: 25, borderColor: '#8A958D', borderRadius: 13, borderWidth: 2, alignItems: 'center', justifyContent: 'center' }, checkboxDone: { backgroundColor: '#5B813B', borderColor: '#5B813B' }, checkmark: { color: '#FFFFFF', fontSize: 15, fontWeight: '800' }, taskCopy: { flex: 1, marginLeft: 14 }, taskTitle: { color: '#17241B', fontSize: 16, fontWeight: '700' }, taskTitleDone: { color: '#68716D', textDecorationLine: 'line-through' }, metaRow: { alignItems: 'center', flexDirection: 'row', marginTop: 6 }, taskTime: { color: '#68716D', fontSize: 13 }, dot: { width: 3, height: 3, borderRadius: 2, backgroundColor: '#9CA59F', marginHorizontal: 7 }, category: { color: '#68716D', fontSize: 13 }, chevron: { color: '#879087', fontSize: 26, fontWeight: '300', marginLeft: 8 },
  emptyState: { alignItems: 'center', backgroundColor: '#FFFFFF', borderColor: '#E0E4DD', borderRadius: 16, borderStyle: 'dashed', borderWidth: 1, padding: 28 }, emptyTitle: { color: '#17241B', fontSize: 16, fontWeight: '700' }, emptyText: { color: '#68716D', fontSize: 14, lineHeight: 20, marginTop: 6, textAlign: 'center' },
});
