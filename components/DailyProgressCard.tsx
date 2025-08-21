import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DailyProgressCardProps {
  consumed: number;
  target: number;
  carbs: number;
  protein: number;
  fat: number;
}

export function DailyProgressCard({ consumed, target, carbs, protein, fat }: DailyProgressCardProps) {
  const progress = (consumed / target) * 100;
  const remaining = target - consumed;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Daily Progress</Text>
        <Text style={styles.remaining}>
          {remaining > 0 ? `${remaining} cal left` : `${Math.abs(remaining)} cal over`}
        </Text>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressTrack}>
          <View style={[styles.progressBar, { width: `${Math.min(progress, 100)}%` }]} />
        </View>
        <Text style={styles.progressText}>{Math.round(progress)}%</Text>
      </View>

      <View style={styles.caloriesRow}>
        <Text style={styles.consumed}>{consumed.toLocaleString()}</Text>
        <Text style={styles.target}>/ {target.toLocaleString()} cal</Text>
      </View>

      <View style={styles.macrosContainer}>
        <View style={styles.macroItem}>
          <View style={[styles.macroIndicator, { backgroundColor: '#10B981' }]} />
          <Text style={styles.macroLabel}>Carbs</Text>
          <Text style={styles.macroValue}>{carbs}%</Text>
        </View>
        <View style={styles.macroItem}>
          <View style={[styles.macroIndicator, { backgroundColor: '#3B82F6' }]} />
          <Text style={styles.macroLabel}>Protein</Text>
          <Text style={styles.macroValue}>{protein}%</Text>
        </View>
        <View style={styles.macroItem}>
          <View style={[styles.macroIndicator, { backgroundColor: '#F59E0B' }]} />
          <Text style={styles.macroLabel}>Fat</Text>
          <Text style={styles.macroValue}>{fat}%</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
  },
  remaining: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#10B981',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  progressTrack: {
    flex: 1,
    height: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 4,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#10B981',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#10B981',
    minWidth: 40,
  },
  caloriesRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    marginBottom: 20,
  },
  consumed: {
    fontSize: 32,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
  },
  target: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginLeft: 4,
  },
  macrosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  macroItem: {
    flex: 1,
    alignItems: 'center',
  },
  macroIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  macroLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
    marginBottom: 2,
  },
  macroValue: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
  },
});