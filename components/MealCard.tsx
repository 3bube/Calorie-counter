import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MoveHorizontal as MoreHorizontal } from 'lucide-react-native';

interface Meal {
  id: string;
  name: string;
  time: string;
  foods: string[];
  calories: number;
  image: string;
}

interface MealCardProps {
  meal: Meal;
}

export function MealCard({ meal }: MealCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.mealInfo}>
          <Text style={styles.mealName}>{meal.name}</Text>
          <Text style={styles.mealTime}>{meal.time}</Text>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <MoreHorizontal size={20} color="#9CA3AF" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Image source={{ uri: meal.image }} style={styles.mealImage} />
        <View style={styles.details}>
          <View style={styles.foodsList}>
            {meal.foods.map((food, index) => (
              <Text key={index} style={styles.foodItem}>
                • {food}
              </Text>
            ))}
          </View>
          <View style={styles.caloriesContainer}>
            <Text style={styles.calories}>{meal.calories} cal</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  mealInfo: {
    flex: 1,
  },
  mealName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 2,
  },
  mealTime: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  moreButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
  },
  mealImage: {
    width: 64,
    height: 64,
    borderRadius: 12,
    marginRight: 12,
  },
  details: {
    flex: 1,
    justifyContent: 'space-between',
  },
  foodsList: {
    gap: 2,
  },
  foodItem: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#374151',
    lineHeight: 18,
  },
  caloriesContainer: {
    alignSelf: 'flex-end',
  },
  calories: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#10B981',
  },
});