
'use server';

/**
 * @fileOverview GeoPredictor+ AI Agent for geological risk simulation.
 *
 * - predictGeologicalRisk - Analyzes coordinates for geological stability.
 * - PredictGeologicalRiskInput - Input coordinates.
 * - PredictGeologicalRiskOutput - Risk assessment and metadata.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const PredictGeologicalRiskInputSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
  environmentType: z.enum(['Arctic', 'Offshore', 'Deepwater']).optional(),
});
export type PredictGeologicalRiskInput = z.infer<typeof PredictGeologicalRiskInputSchema>;

const PredictGeologicalRiskOutputSchema = z.object({
  riskLevel: z.enum(['Low', 'Medium', 'High', 'Critical']),
  determination: z.string().describe('Short summary of the risk status.'),
  riskFactor: z.number().describe('A score from 0 to 100.'),
  recommendations: z.array(z.string()).describe('Safety recommendations based on the findings.'),
});
export type PredictGeologicalRiskOutput = z.infer<typeof PredictGeologicalRiskOutputSchema>;

export async function predictGeologicalRisk(input: PredictGeologicalRiskInput): Promise<PredictGeologicalRiskOutput> {
  return predictGeologicalRiskFlow(input);
}

const prompt = ai.definePrompt({
  name: 'predictGeologicalRiskPrompt',
  input: { schema: PredictGeologicalRiskInputSchema },
  output: { schema: PredictGeologicalRiskOutputSchema },
  prompt: `You are the GeoPredictor+ AI, specialized in Arctic and Offshore geological risk simulation.

  Analyze the following location for geological risks related to deepwater drilling and infrastructure:
  
  Coordinates: ({{{latitude}}}, {{{longitude}}})
  Environment: {{{environmentType}}}

  Consider factors like:
  - Glacial pressure (if Arctic)
  - Seismic activity
  - Soil stability
  - Deepwater pressure

  Provide a professional risk assessment following SCUGP 19.0 standards.`,
});

const predictGeologicalRiskFlow = ai.defineFlow(
  {
    name: 'predictGeologicalRiskFlow',
    inputSchema: PredictGeologicalRiskInputSchema,
    outputSchema: PredictGeologicalRiskOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);
