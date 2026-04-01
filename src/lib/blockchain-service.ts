
'use client';

/**
 * @fileOverview Blockchain Certification Service for SCUGP V60.
 * Handles the certification of academic actions in a simulated immutable ledger.
 */

import { Firestore, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

/**
 * Certifies an academic action or project with a unique integrity hash.
 * This simulates a blockchain transaction on the Firestore academic_ledger collection.
 * 
 * @param db - The Firestore instance.
 * @param actionId - The unique ID of the ledger entry to update.
 * @param userId - The ID of the authorizing student or admin.
 * @param hash - The cryptographic integrity hash of the action.
 */
export const certifyAction = (db: Firestore, actionId: string, userId: string, hash: string) => {
  const docRef = doc(db, "academic_ledger", actionId);
  const certificationData = {
    certifications: arrayUnion({
      timestamp: new Date().toISOString(),
      authorizedBy: userId,
      integrityHash: hash,
      status: "CERTIFIED_SCUGP_V60"
    })
  };

  // Initiating mutation without blocking UI (Optimistic approach)
  updateDoc(docRef, certificationData)
    .catch(async (error) => {
      // Surfacing rich security context for debugging if permission is denied
      const permissionError = new FirestorePermissionError({
        path: docRef.path,
        operation: 'update',
        requestResourceData: certificationData,
      });
      errorEmitter.emit('permission-error', permissionError);
    });
};
