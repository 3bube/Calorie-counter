import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Check } from 'lucide-react-native';
import { FoodItemCard } from '@/components/FoodItemCard';
import { CaloriesSummaryCard } from '@/components/CaloriesSummaryCard';

const mockDetectedFoods = [
  {
    id: '1',
    name: 'Grilled Chicken Breast',
    calories: 185,
    serving: '100g',
    confidence: 95,
    category: 'protein',
  },
  {
    id: '2',
    name: 'Brown Rice',
    calories: 112,
    serving: '1/2 cup',
    confidence: 92,
    category: 'carbs',
  },
  {
    id: '3',
    name: 'Steamed Broccoli',
    calories: 25,
    serving: '1 cup',
    confidence: 88,
    category: 'vegetables',
  },
  {
    id: '4',
    name: 'Olive Oil',
    calories: 40,
    serving: '1 tsp',
    confidence: 78,
    category: 'fats',
  },
];

export default function FoodRecognitionScreen() {
  const { photoUri } = useLocalSearchParams();
  const totalCalories = mockDetectedFoods.reduce((sum, food) => sum + food.calories, 0);

  const handleConfirm = () => {
    // Add to daily log and navigate back
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ArrowLeft size={24} color="#374151" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Food Recognition</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.photoContainer}>
          <Image 
            source={{ uri: photoUri as string || 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600' }}
            style={styles.mealPhoto}
          />
        </View>

        <View style={styles.resultsContainer}>
          <Text style={styles.resultsTitle}>Detected Foods</Text>
          <Text style={styles.resultsSubtitle}>
            Tap any item to edit serving size or remove
          </Text>

          <View style={styles.foodsList}>
            {mockDetectedFoods.map((food) => (
              <FoodItemCard key={food.id} food={food} />
            ))}
          </View>

          <CaloriesSummaryCard 
            totalCalories={totalCalories}
            macros={{
              carbs: 45,
              protein: 38,
              fat: 17,
            }}
          />

          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
            <Check size={20} color="#FFFFFF" strokeWidth={2} />
            <Text style={styles.confirmButtonText}>Add to Daily Log</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    textAlign: 'center',
  },
  placeholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  photoContainer: {
    marginBottom: 24,
  },
  mealPhoto: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
  },
  resultsContainer: {
    marginBottom: 32,
  },
  resultsTitle: {
    fontSize: 24,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 4,
  },
  resultsSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginBottom: 20,
  },
  foodsList: {
    gap: 12,
    marginBottom: 24,
  },
  confirmButton: {
    backgroundColor: '#10B981',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 16,
    gap: 8,
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  confirmButtonText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
});