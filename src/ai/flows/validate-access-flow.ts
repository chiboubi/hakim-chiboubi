'use server';

/**
 * @fileOverview Flux Genkit de Validation de Rôles et d'Accès.
 * Analyse les permissions Firestore en fonction du grade de souveraineté.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ValidateAccessInputSchema = z.object({
  role: z.string().describe('Le rôle ou grade de l’utilisateur (ex: anonymous, certified, admin).'),
  resourcePath: z.string().describe('Le chemin de la ressource Firestore demandée.'),
  operation: z.enum(['read', 'write', 'create', 'update', 'delete']).describe('L’opération demandée.'),
});
export type ValidateAccessInput = z.infer<typeof ValidateAccessInputSchema>;

const ValidateAccessOutputSchema = z.object({
  isAllowed: z.boolean().describe('Vrai si l’accès est accordé par la Source.'),
  explanation: z.string().describe('Explication sémantique du verdict.'),
  securityRuleReference: z.string().describe('Référence au protocole de sécurité scellé.'),
  confidence: z.number().describe('Indice de certitude de l’IA (0-1).'),
});
export type ValidateAccessOutput = z.infer<typeof ValidateAccessOutputSchema>;

export async function validateAccess(input: ValidateAccessInput): Promise<ValidateAccessOutput> {
  return validateAccessFlow(input);
}

const prompt = ai.definePrompt({
  name: 'validateAccessPrompt',
  input: {schema: ValidateAccessInputSchema},
  output: {schema: ValidateAccessOutputSchema},
  prompt: `Vous êtes l'IA de Validation de Sécurité de SCUGP, le gardien du maillage neural du Dr. Hakim Chibubi.

Analysez la demande d'accès suivante :
Grade : {{{role}}}
Ressource : {{{resourcePath}}}
Opération : {{{operation}}}

Appliquez les lois de la Source :
1. Seul le grade 'admin' ou 'certified' peut accéder aux données analytiques v60.
2. Les projets académiques sont en lecture publique mais en écriture réservée aux 'admin'.
3. Les décrets souverains sont inaltérables une fois scellés.

Répondez avec un verdict définitif, une explication majestueuse et technique, et l'indice de certitude absolu.`,
});

const validateAccessFlow = ai.defineFlow(
  {
    name: 'validateAccessFlow',
    inputSchema: ValidateAccessInputSchema,
    outputSchema: ValidateAccessOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
