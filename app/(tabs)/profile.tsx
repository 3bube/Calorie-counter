import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { TrendingUp, Target, Calendar, Settings } from 'lucide-react-native';
import { InsightCard } from '@/components/InsightCard';
import { SettingsButton } from '@/components/SettingsButton';

const screenWidth = Dimensions.get('window').width;

const weeklyData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [1800, 2100, 1950, 2200, 1890, 2050, 1740],
    },
  ],
};

const chartConfig = {
  backgroundColor: '#FFFFFF',
  backgroundGradientFrom: '#FFFFFF',
  backgroundGradientTo: '#FFFFFF',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(16, 185, 129, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(107, 114, 128, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForLabels: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
  },
};

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#F0FDF4', '#FFFFFF']}
        style={styles.gradient}
      >
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.title}>Insights & Goals</Text>
            <Text style={styles.subtitle}>Track your progress over time</Text>
          </View>

          <View style={styles.chartCard}>
            <Text style={styles.chartTitle}>Weekly Calorie Intake</Text>
            <BarChart
              data={weeklyData}
              width={screenWidth - 80}
              height={200}
              chartConfig={chartConfig}
              style={styles.chart}
              showValuesOnTopOfBars={false}
              fromZero={true}
            />
          </View>

          <View style={styles.insightsContainer}>
            <InsightCard 
              icon={<TrendingUp size={20} color="#10B981" />}
              title="Weekly Average"
              value="1,966 cal"
              change="+5.2%"
              isPositive={true}
            />
            <InsightCard 
              icon={<Target size={20} color="#F59E0B" />}
              title="Goal Achievement"
              value="85%"
              change="6/7 days"
              isPositive={true}
            />
          </View>

          <View style={styles.macroCard}>
            <Text style={styles.macroTitle}>Macronutrient Breakdown</Text>
            <Text style={styles.macroSubtitle}>Average this week</Text>
            
            <View style={styles.macroList}>
              <View style={styles.macroItem}>
                <View style={[styles.macroIndicator, { backgroundColor: '#10B981' }]} />
                <Text style={styles.macroLabel}>Carbohydrates</Text>
                <Text style={styles.macroValue}>45%</Text>
              </View>
              <View style={styles.macroItem}>
                <View style={[styles.macroIndicator, { backgroundColor: '#3B82F6' }]} />
                <Text style={styles.macroLabel}>Protein</Text>
                <Text style={styles.macroValue}>30%</Text>
              </View>
              <View style={styles.macroItem}>
                <View style={[styles.macroIndicator, { backgroundColor: '#F59E0B' }]} />
                <Text style={styles.macroLabel}>Fat</Text>
                <Text style={styles.macroValue}>25%</Text>
              </View>
            </View>
          </View>

          <View style={styles.settingsSection}>
            <Text style={styles.sectionTitle}>Settings</Text>
            <View style={styles.settingsContainer}>
              <SettingsButton 
                icon={<Target size={20} color="#6B7280" />}
                title="Daily Calorie Goal"
                value="2,000 cal"
              />
              <SettingsButton 
                icon={<Calendar size={20} color="#6B7280" />}
                title="Meal Reminders"
                value="Enabled"
              />
              <SettingsButton 
                icon={<Settings size={20} color="#6B7280" />}
                title="App Preferences"
                value="Configure"
              />
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
  title: {
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
  chartCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  chartTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 16,
  },
  chart: {
    marginLeft: -16,
    borderRadius: 16,
  },
  insightsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  macroCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  macroTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 4,
  },
  macroSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginBottom: 20,
  },
  macroList: {
    gap: 16,
  },
  macroItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  macroIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  macroLabel: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#374151',
  },
  macroValue: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
  },
  settingsSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 16,
  },
  settingsContainer: {
    gap: 12,
  },
});