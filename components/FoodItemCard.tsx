import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Beef, Wheat, Salad, Droplets } from 'lucide-react-native';

interface Food {
  id: string;
  name: string;
  calories: number;
  serving: string;
  confidence: number;
  category: string;
}

interface FoodItemCardProps {
  food: Food;
}

const getCategoryIcon = (category: string) => {
  const iconProps = { size: 20, strokeWidth: 2 };
  
  switch (category) {
    case 'protein':
      return <Beef {...iconProps} color="#EF4444" />;
    case 'carbs':
      return <Wheat {...iconProps} color="#F59E0B" />;
    case 'vegetables':
      return <Salad {...iconProps} color="#10B981" />;
    case 'fats':
      return <Droplets {...iconProps} color="#8B5CF6" />;
    default:
      return <Salad {...iconProps} color="#6B7280" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'protein':
      return '#FEF2F2';
    case 'carbs':
      return '#FFFBEB';
    case 'vegetables':
      return '#ECFDF5';
    case 'fats':
      return '#FAF5FF';
    default:
      return '#F9FAFB';
  }
};

export function FoodItemCard({ food }: FoodItemCardProps) {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.content}>
        <View style={[styles.iconContainer, { backgroundColor: getCategoryColor(food.category) }]}>
          {getCategoryIcon(food.category)}
        </View>
        
        <View style={styles.foodInfo}>
          <Text style={styles.foodName}>{food.name}</Text>
          <Text style={styles.serving}>{food.serving}</Text>
          <View style={styles.confidenceContainer}>
            <View style={styles.confidenceBar}>
              <View style={[styles.confidenceFill, { width: `${food.confidence}%` }]} />
            </View>
            <Text style={styles.confidenceText}>{food.confidence}%</Text>
          </View>
        </View>
        
        <View style={styles.caloriesContainer}>
          <Text style={styles.calories}>{food.calories}</Text>
          <Text style={styles.caloriesLabel}>cal</Text>
        </View>
      </View>
    </TouchableOpacity>
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
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  foodInfo: {
    flex: 1,
  },
  foodName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 2,
  },
  serving: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginBottom: 6,
  },
  confidenceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  confidenceBar: {
    flex: 1,
    height: 4,
    backgroundColor: '#F3F4F6',
    borderRadius: 2,
  },
  confidenceFill: {
    height: 4,
    backgroundColor: '#10B981',
    borderRadius: 2,
  },
  confidenceText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#10B981',
    minWidth: 32,
  },
  caloriesContainer: {
    alignItems: 'flex-end',
  },
  calories: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
  },
  caloriesLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
});