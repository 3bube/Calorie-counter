import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface CalorieProgressCardProps {
  consumed: number;
  target: number;
  remaining: number;
}

export function CalorieProgressCard({ consumed, target, remaining }: CalorieProgressCardProps) {
  const progress = (consumed / target) * 100;
  const progressClamped = Math.min(progress, 100);

  return (
    <View style={styles.card}>
      <LinearGradient
        colors={['#10B981', '#059669']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Today's Calories</Text>
          
          <View style={styles.caloriesContainer}>
            <Text style={styles.consumedCalories}>{consumed.toLocaleString()}</Text>
            <Text style={styles.targetCalories}>/ {target.toLocaleString()} cal</Text>
          </View>

          <View style={styles.progressContainer}>
            <View style={styles.progressTrack}>
              <View style={[styles.progressBar, { width: `${progressClamped}%` }]} />
            </View>
            <Text style={styles.progressText}>{Math.round(progress)}% of daily goal</Text>
          </View>

          <Text style={styles.remainingText}>
            {remaining > 0 ? `${remaining} calories remaining` : `${Math.abs(remaining)} calories over goal`}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 24,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  gradient: {
    padding: 24,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: 8,
  },
  caloriesContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 20,
  },
  consumedCalories: {
    fontSize: 36,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
  targetCalories: {
    fontSize: 18,
    fontFamily: 'Inter-Regular',
    color: '#FFFFFF',
    opacity: 0.8,
    marginLeft: 4,
  },
  progressContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressTrack: {
    width: '100%',
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 4,
    marginBottom: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#FFFFFF',
    opacity: 0.9,
  },
  remainingText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#FFFFFF',
    opacity: 0.8,
  },
});