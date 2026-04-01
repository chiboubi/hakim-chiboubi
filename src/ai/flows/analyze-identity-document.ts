
'use server';

/**
 * @fileOverview Flux Genkit d'Analyse Documentaire (OCR & Classification).
 * Extrait les informations souveraines des pièces d'identité.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeIdInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "La photo de la pièce d'identité, comme une data URI en Base64."
    ),
});
export type AnalyzeIdInput = z.infer<typeof AnalyzeIdInputSchema>;

const AnalyzeIdOutputSchema = z.object({
  extractedName: z.string().describe('Le nom extrait du document.'),
  documentType: z.string().describe('Type de document (Passport, ID Card, etc.).'),
  credentialsFound: z.array(z.string()).describe('Certificats ou mots-clés détectés.'),
  isOilCertified: z.boolean().describe('Vrai si HSE ou BOSIET sont détectés.'),
  confidence: z.number().describe('Indice de confiance de l OCR.'),
});
export type AnalyzeIdOutput = z.infer<typeof AnalyzeIdOutputSchema>;

export async function analyzeIdentityDocument(input: AnalyzeIdInput): Promise<AnalyzeIdOutput> {
  return analyzeIdFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeIdPrompt',
  input: {schema: AnalyzeIdInputSchema},
  output: {schema: AnalyzeIdOutputSchema},
  prompt: `Vous êtes l'OCR Souverain de SCUGP.
  
  Analysez ce document d'identité :
  {{media url=photoDataUri}}
  
  Extrayez le nom complet, le type de document et cherchez toute mention de certifications pétrolières (HSE, OPITO, BOSIET).
  Soyez extrêmement précis sur l'indice de confiance.`,
});

const analyzeIdFlow = ai.defineFlow(
  {
    name: 'analyzeIdFlow',
    inputSchema: AnalyzeIdInputSchema,
    outputSchema: AnalyzeIdOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
