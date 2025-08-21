import React, { ReactNode } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

interface FloatingActionButtonProps {
  icon: ReactNode;
  onPress: () => void;
}

export function FloatingActionButton({ icon, onPress }: FloatingActionButtonProps) {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
});