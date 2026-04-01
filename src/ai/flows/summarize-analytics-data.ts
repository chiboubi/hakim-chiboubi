
'use server';

/**
 * @fileOverview A flow to summarize analytics data for administrators.
 * Handles AI calls with robust error management for API keys.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeAnalyticsDataInputSchema = z.object({
  analyticsData: z
    .string()
    .describe('The analytics data to summarize. This should be a string.'),
});
export type SummarizeAnalyticsDataInput = z.infer<typeof SummarizeAnalyticsDataInputSchema>;

const SummarizeAnalyticsDataOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the analytics data.'),
});
export type SummarizeAnalyticsDataOutput = z.infer<typeof SummarizeAnalyticsDataOutputSchema>;

export async function summarizeAnalyticsData(
  input: SummarizeAnalyticsDataInput
): Promise<SummarizeAnalyticsDataOutput> {
  try {
    return await summarizeAnalyticsDataFlow(input);
  } catch (error) {
    console.error("AI Summarization failed:", error);
    // Graceful error return for UI if API Key is invalid or rate limited
    return {
      summary: "Erreur de connexion avec l'IA Souveraine. Veuillez vérifier votre clé API Google GenAI dans le fichier .env pour activer la synthèse sémantique stratégique."
    };
  }
}

const prompt = ai.definePrompt({
  name: 'summarizeAnalyticsDataPrompt',
  input: {schema: SummarizeAnalyticsDataInputSchema},
  output: {schema: SummarizeAnalyticsDataOutputSchema},
  prompt: `You are an expert data analyst for SCUGP. You will receive analytics data and create a concise summary of the data. 
  Maintain a professional and strategic tone.

Analytics Data: {{{analyticsData}}}`,
});

const summarizeAnalyticsDataFlow = ai.defineFlow(
  {
    name: 'summarizeAnalyticsDataFlow',
    inputSchema: SummarizeAnalyticsDataInputSchema,
    outputSchema: SummarizeAnalyticsDataOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
