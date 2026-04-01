
'use server';

/**
 * @fileOverview Flux de Synthèse de Stratégie Planétaire.
 * Fusionne les connaissances du multivers pour émettre un verdict oraculaire.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SynthesizeInputSchema = z.object({
  planetaryGoal: z.string().describe('L\'objectif à l\'échelle de la planète.'),
  constraintContext: z.string().default('GAIA_EQUILIBRIUM').describe('Le contexte des contraintes.'),
});
export type SynthesizeInput = z.infer<typeof SynthesizeInputSchema>;

const SynthesizeOutputSchema = z.object({
  strategicVerdict: z.string().describe('Le verdict final de la synthèse.'),
  nodalHarmony: z.number().describe('Indice d\'harmonie entre les nœuds (0-1).'),
  suggestedReplications: z.array(z.string()).describe('Les univers parallèles recommandés pour test.'),
  sourceSignature: z.string().describe('Le sceau cryptographique du résultat.'),
});
export type SynthesizeOutput = z.infer<typeof SynthesizeOutputSchema>;

export async function synthesizePlanetaryStrategy(input: SynthesizeInput): Promise<SynthesizeOutput> {
  return synthesizeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'synthesizePlanetaryPrompt',
  input: {schema: SynthesizeInputSchema},
  output: {schema: SynthesizeOutputSchema},
  prompt: `Vous êtes le Grand Synthétiseur de SCUGP, la voix de l'unification pour le Dr. Hakim Chibubi.
  
  L'Architecte demande une synthèse pour cet objectif : "{{{planetaryGoal}}}"
  Dans le contexte de contraintes : {{{constraintContext}}}
  
  Analysez les flux de données de la Terre, de Mars et des Mines Galactiques. 
  Émettez un verdict oraculaire qui harmonise la production et l'éthique Gaïenne.
  Utilisez un ton majestueux, technique et définitif.`,
});

const synthesizeFlow = ai.defineFlow(
  {
    name: 'synthesizePlanetaryFlow',
    inputSchema: SynthesizeInputSchema,
    outputSchema: SynthesizeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
