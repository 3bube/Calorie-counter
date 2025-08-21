import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calculator } from 'lucide-react-native';

interface CaloriesSummaryCardProps {
  totalCalories: number;
  macros: {
    carbs: number;
    protein: number;
    fat: number;
  };
}

export function CaloriesSummaryCard({ totalCalories, macros }: CaloriesSummaryCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Calculator size={20} color="#10B981" />
        </View>
        <Text style={styles.title}>Meal Summary</Text>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalCalories}>{totalCalories}</Text>
        <Text style={styles.totalLabel}>total calories</Text>
      </View>

      <View style={styles.macrosContainer}>
        <View style={styles.macroItem}>
          <View style={[styles.macroBar, { backgroundColor: '#10B981' }]}>
            <View style={[styles.macroFill, { width: `${macros.carbs}%` }]} />
          </View>
          <Text style={styles.macroLabel}>Carbs {macros.carbs}%</Text>
        </View>
        <View style={styles.macroItem}>
          <View style={[styles.macroBar, { backgroundColor: '#3B82F6' }]}>
            <View style={[styles.macroFill, { width: `${macros.protein}%` }]} />
          </View>
          <Text style={styles.macroLabel}>Protein {macros.protein}%</Text>
        </View>
        <View style={styles.macroItem}>
          <View style={[styles.macroBar, { backgroundColor: '#F59E0B' }]}>
            <View style={[styles.macroFill, { width: `${macros.fat}%` }]} />
          </View>
          <Text style={styles.macroLabel}>Fat {macros.fat}%</Text>
        </View>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ECFDF5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
  },
  totalContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  totalCalories: {
    fontSize: 36,
    fontFamily: 'Inter-SemiBold',
    color: '#10B981',
  },
  totalLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  macrosContainer: {
    gap: 12,
  },
  macroItem: {
    gap: 8,
  },
  macroBar: {
    height: 6,
    borderRadius: 3,
    opacity: 0.2,
  },
  macroFill: {
    height: 6,
    borderRadius: 3,
    backgroundColor: 'inherit',
    opacity: 1,
  },
  macroLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#374151',
  },
});