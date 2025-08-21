import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Utensils, Target, TrendingUp } from 'lucide-react-native';

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#F0FDF4', '#DCFCE7']}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <View style={styles.iconCircle}>
              <Utensils size={48} color="#10B981" strokeWidth={2} />
            </View>
          </View>

          <Text style={styles.title}>Welcome to{'\n'}CalorieTracker</Text>
          <Text style={styles.subtitle}>
            Track your meals effortlessly with AI-powered food recognition and reach your health goals
          </Text>

          <View style={styles.featuresContainer}>
            <View style={styles.feature}>
              <Target size={24} color="#10B981" />
              <Text style={styles.featureText}>Set daily goals</Text>
            </View>
            <View style={styles.feature}>
              <Utensils size={24} color="#10B981" />
              <Text style={styles.featureText}>Snap & track meals</Text>
            </View>
            <View style={styles.feature}>
              <TrendingUp size={24} color="#10B981" />
              <Text style={styles.featureText}>Monitor progress</Text>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.getStartedButton}
            onPress={() => router.replace('/(tabs)')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
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
  content: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 40,
  },
  iconCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 8,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 48,
    paddingHorizontal: 16,
  },
  featuresContainer: {
    gap: 20,
    marginBottom: 48,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  featureText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#374151',
  },
  getStartedButton: {
    backgroundColor: '#10B981',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 24,
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
});