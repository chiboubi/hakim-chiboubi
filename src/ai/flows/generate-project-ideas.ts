'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating academic project ideas based on a given topic.
 *
 * The flow takes a topic as input and returns a list of project ideas.
 * - generateProjectIdeas - The function to generate project ideas.
 * - GenerateProjectIdeasInput - The input type for the generateProjectIdeas function.
 * - GenerateProjectIdeasOutput - The output type for the generateProjectIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectIdeasInputSchema = z.object({
  topic: z.string().describe('The topic to generate project ideas for.'),
});
export type GenerateProjectIdeasInput = z.infer<typeof GenerateProjectIdeasInputSchema>;

const GenerateProjectIdeasOutputSchema = z.object({
  ideas: z.array(z.string()).describe('A list of project ideas.'),
});
export type GenerateProjectIdeasOutput = z.infer<typeof GenerateProjectIdeasOutputSchema>;

export async function generateProjectIdeas(input: GenerateProjectIdeasInput): Promise<GenerateProjectIdeasOutput> {
  return generateProjectIdeasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectIdeasPrompt',
  input: {schema: GenerateProjectIdeasInputSchema},
  output: {schema: GenerateProjectIdeasOutputSchema},
  prompt: `You are a creative academic project idea generator.

  Generate a list of 5 project ideas based on the following topic:

  Topic: {{{topic}}}

  Format the output as a JSON array of strings.
  `,
});

const generateProjectIdeasFlow = ai.defineFlow(
  {
    name: 'generateProjectIdeasFlow',
    inputSchema: GenerateProjectIdeasInputSchema,
    outputSchema: GenerateProjectIdeasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
