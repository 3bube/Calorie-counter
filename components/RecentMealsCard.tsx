import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Clock } from 'lucide-react-native';

const recentMeals = [
  {
    id: '1',
    name: 'Avocado Toast',
    time: '2 hours ago',
    calories: 340,
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: '2',
    name: 'Green Smoothie',
    time: '4 hours ago',
    calories: 180,
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export function RecentMealsCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Recent Meals</Text>
      
      <View style={styles.mealsList}>
        {recentMeals.map((meal) => (
          <View key={meal.id} style={styles.mealItem}>
            <Image source={{ uri: meal.image }} style={styles.mealImage} />
            <View style={styles.mealInfo}>
              <Text style={styles.mealName}>{meal.name}</Text>
              <View style={styles.mealMeta}>
                <Clock size={12} color="#9CA3AF" />
                <Text style={styles.mealTime}>{meal.time}</Text>
              </View>
            </View>
            <Text style={styles.mealCalories}>{meal.calories} cal</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
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
  title: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 16,
  },
  mealsList: {
    gap: 16,
  },
  mealItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mealImage: {
    width: 48,
    height: 48,
    borderRadius: 12,
    marginRight: 12,
  },
  mealInfo: {
    flex: 1,
  },
  mealName: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#374151',
    marginBottom: 4,
  },
  mealMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  mealTime: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#9CA3AF',
  },
  mealCalories: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#10B981',
  },
});