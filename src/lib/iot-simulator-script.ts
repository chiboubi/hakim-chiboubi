/**
 * @fileOverview Node.js CLI script to simulate IoT variations in Firestore.
 * Run with: npm run simulate
 */

import { initializeFirebase } from '../firebase';
import { SCUGPHubV50 } from './scugp-service';

const { firestore: db } = initializeFirebase();

console.log("🚀 Starting SCUGP 50.0 IoT Cloud Simulator...");

if (!db) {
  console.error("❌ Firestore not initialized. Check your environment variables.");
  process.exit(1);
}

// Populate initial data if empty
SCUGPHubV50.seedInitialData(db).then(() => {
  console.log("✅ Initial data seeded/verified.");
  
  // Start simulation loop
  console.log("📡 Simulation loop active. Updating sensors every 5s...");
  setInterval(() => {
    SCUGPHubV50.runSimulationCycle(db).then(() => {
      console.log(`[${new Date().toLocaleTimeString()}] IoT Handshake: OK (Wells & Sensors synced)`);
    });
  }, 5000);
});
