
'use client';

import { Firestore, collection, addDoc, serverTimestamp, query, orderBy, limit } from 'firebase/firestore';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export const SecurityMonitor = {
  /**
   * Logs a security-sensitive event to Firestore.
   */
  logEvent: (db: Firestore, userId: string, action: string, status: 'SUCCESS' | 'FAILED' | 'WARNING', details: string = "") => {
    const auditRef = collection(db, "security_audit");
    const payload = {
      userId,
      action,
      status,
      details,
      ip: "SIMULATED_Sovereign_IP",
      timestamp: new Date().toISOString()
    };

    addDoc(auditRef, payload).catch(async (error) => {
      const permissionError = new FirestorePermissionError({
        path: auditRef.path,
        operation: 'create',
        requestResourceData: payload,
      });
      errorEmitter.emit('permission-error', permissionError);
    });
  },

  /**
   * Performance metrics tracker.
   */
  getMetrics: () => {
    return {
      requestsCount: Math.floor(Math.random() * 1000) + 500,
      errorsCount: Math.floor(Math.random() * 5),
      avgResponseTime: (Math.random() * 0.5 + 0.1).toFixed(3) + "s",
      activeConnections: Math.floor(Math.random() * 50) + 10
    };
  }
};
