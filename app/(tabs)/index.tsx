import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Target, Utensils, Activity, Award } from 'lucide-react-native';
import { CalorieProgressCard } from '@/components/CalorieProgressCard';
import { QuickStatsCard } from '@/components/QuickStatsCard';
import { RecentMealsCard } from '@/components/RecentMealsCard';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#F0FDF4', '#FFFFFF']}
        style={styles.gradient}
      >
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.greeting}>Good morning, Alex!</Text>
            <Text style={styles.subtitle}>Let's track your nutrition today</Text>
          </View>

          <CalorieProgressCard 
            consumed={1247}
            target={2000}
            remaining={753}
          />

          <View style={styles.statsContainer}>
            <QuickStatsCard 
              icon={<Utensils size={20} color="#10B981" />}
              title="Meals Today"
              value="3"
              subtitle="of 4 planned"
            />
            <QuickStatsCard 
              icon={<Activity size={20} color="#F59E0B" />}
              title="Avg Daily"
              value="1,890"
              subtitle="last 7 days"
            />
          </View>

          <RecentMealsCard />

          <View style={styles.achievementCard}>
            <View style={styles.achievementIcon}>
              <Award size={24} color="#10B981" />
            </View>
            <View style={styles.achievementContent}>
              <Text style={styles.achievementTitle}>3 Day Streak!</Text>
              <Text style={styles.achievementText}>
                You've logged your meals for 3 days in a row
              </Text>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 24,
  },
  greeting: {
    fontSize: 28,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  achievementCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 32,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  achievementIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#ECFDF5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  achievementContent: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 4,
  },
  achievementText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    lineHeight: 20,
  },
});