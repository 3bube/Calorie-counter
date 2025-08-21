import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Plus } from 'lucide-react-native';
import { DailyProgressCard } from '@/components/DailyProgressCard';
import { MealCard } from '@/components/MealCard';
import { FloatingActionButton } from '@/components/FloatingActionButton';

const mockMeals = [
  {
    id: '1',
    name: 'Breakfast',
    time: '8:30 AM',
    foods: ['Oatmeal with berries', 'Greek yogurt'],
    calories: 340,
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '2',
    name: 'Lunch',
    time: '12:45 PM',
    foods: ['Grilled chicken salad', 'Whole grain bread'],
    calories: 520,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '3',
    name: 'Snack',
    time: '3:15 PM',
    foods: ['Apple', 'Almonds'],
    calories: 180,
    image: 'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function LogScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#F0FDF4', '#FFFFFF']}
        style={styles.gradient}
      >
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.title}>Today's Log</Text>
            <Text style={styles.date}>Monday, January 15</Text>
          </View>

          <DailyProgressCard 
            consumed={1040}
            target={2000}
            carbs={45}
            protein={35}
            fat={20}
          />

          <View style={styles.mealsSection}>
            <Text style={styles.sectionTitle}>Today's Meals</Text>
            <View style={styles.mealsContainer}>
              {mockMeals.map((meal) => (
                <MealCard key={meal.id} meal={meal} />
              ))}
            </View>
          </View>
        </ScrollView>

        <FloatingActionButton 
          icon={<Plus size={24} color="#FFFFFF" />}
          onPress={() => {/* Navigate to add meal */}}
        />
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
  date: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  mealsSection: {
    marginBottom: 100,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 16,
  },
  mealsContainer: {
    gap: 12,
  },
});