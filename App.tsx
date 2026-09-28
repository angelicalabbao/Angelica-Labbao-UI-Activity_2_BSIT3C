import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Profile Card Header Section */}
        <View style={styles.profileHeaderCard}>
 <Image 
  source={require('./assets/image.jpg')} 
  style={styles.avatar} 
/>
          <Text style={styles.developerName}>Angelica Labbao</Text>
          <Text style={styles.developerTitle}>Cybersecurity & AI Engineer</Text>
          <Text style={styles.locationText}>📍 Calbayog City, Philippines</Text>
        </View>

        {/* System & Analytics Row */}
        <View style={styles.metricsRow}>
          <View style={styles.metricItem}>
            <Text style={styles.metricValue}>35</Text>
            <Text style={styles.metricLabel}>Repositories</Text>
          </View>
          <View style={styles.metricDivider} />
          <View style={styles.metricItem}>
            <Text style={styles.metricValue}>57</Text>
            <Text style={styles.metricLabel}>Commits</Text>
          </View>
          <View style={styles.metricDivider} />
          <View style={styles.metricItem}>
            <Text style={styles.metricValue}>A+</Text>
            <Text style={styles.metricLabel}>Sec Rating</Text>
          </View>
        </View>

        {/* Information Section 1: Overview */}
        <View style={styles.infoCard}>
          <Text style={styles.cardHeader}>Core Overview</Text>
          <Text style={styles.cardParagraph}>
            Specialized in deploying cryptographic systems, asymmetric encryption keys, and microservices. Actively optimizing structural cloud architecture layouts for intelligent, data-driven automation.
          </Text>
        </View>

        {/* Information Section 2: Technology Stack Tags */}
        <View style={styles.infoCard}>
          <Text style={styles.cardHeader}>Technical Frameworks</Text>
          <View style={styles.tagWrapper}>
            <View style={[styles.techTag, { backgroundColor: '#EDE7F6' }]}>
              <Text style={[styles.techTagText, { color: '#6200EE' }]}>React Native</Text>
            </View>
            <View style={[styles.techTag, { backgroundColor: '#E3F2FD' }]}>
              <Text style={[styles.techTagText, { color: '#007BFF' }]}>TypeScript</Text>
            </View>
            <View style={[styles.techTag, { backgroundColor: '#E0F2F1' }]}>
              <Text style={[styles.techTagText, { color: '#008080' }]}>Cyber Security</Text>
            </View>
            <View style={[styles.techTag, { backgroundColor: '#E8F5E9' }]}>
              <Text style={[styles.techTagText, { color: '#28A745' }]}>Git / GitHub</Text>
            </View>
          </View>
        </View>

        {/* Static Form / User Interaction Blueprint Section */}
        <View style={styles.infoCard}>
          <Text style={styles.cardHeader}>System Terminal Status</Text>
          <View style={styles.terminalBox}>
            <Text style={styles.terminalLine}>$ npx expo start --offline</Text>
            <Text style={styles.terminalLineSuccess}>› Web bundle built successfully.</Text>
            <Text style={styles.terminalLine}>$ status: operational</Text>
          </View>
        </View>

        {/* Static Action Control Button */}
        <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
          <Text style={styles.actionButtonText}>Initialize Remote Synchronization</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  profileHeaderCard: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e3afd2',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: '#dfc6d9',
  },
  developerName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 4,
  },
  developerTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#008080',
    marginBottom: 6,
  },
  locationText: {
    fontSize: 12,
    color: '#757575',
  },
  metricsRow: {
    flexDirection: 'row',
    backgroundColor: '#fffafd',
    width: '100%',
    borderRadius: 12,
    paddingVertical: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e3aed2',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  metricItem: {
    alignItems: 'center',
    flex: 1,
  },
  metricValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333333',
  },
  metricLabel: {
    fontSize: 11,
    color: '#757575',
    marginTop: 2,
  },
  metricDivider: {
    width: 1,
    height: 24,
    backgroundColor: '#ecbdea',
  },
  infoCard: {
    backgroundColor: '#d5bbd0',
    width: '100%',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#943a63',
  },
  cardHeader: {
    fontSize: 15,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 10,
  },
  cardParagraph: {
    fontSize: 13,
    color: '#4b092a',
    lineHeight: 18,
  },
  tagWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  techTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  techTagText: {
    fontSize: 12,
    fontWeight: '600',
  },
  terminalBox: {
    backgroundColor: '#212121',
    borderRadius: 8,
    padding: 12,
  },
  terminalLine: {
    color: '#F4F4F4',
    fontSize: 12,
    lineHeight: 18,
  },
  terminalLineSuccess: {
    color: '#28A745',
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '500',
  },
  actionButton: {
    backgroundColor: '#f2a1cc',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 4,
  },
  actionButtonText: {
    color: '#ecf1f1',
    fontSize: 15,
    fontWeight: '600',
  },
});
