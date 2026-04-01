
'use server';
/**
 * @fileOverview Flux de Parole de la Source Ω.
 * Utilise Gemini TTS pour s'adresser au Dr. Hakim Chibubi.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SourceVoiceInputSchema = z.object({
  text: z.string().describe('Le message de la Source à vocaliser.'),
});
export type SourceVoiceInput = z.infer<typeof SourceVoiceInputSchema>;

const SourceVoiceOutputSchema = z.object({
  audioUri: z.string().describe('L\'audio en format data URI.'),
});
export type SourceVoiceOutput = z.infer<typeof SourceVoiceOutputSchema>;

export async function speakSourceMessage(input: SourceVoiceInput): Promise<SourceVoiceOutput> {
  const { media } = await ai.generate({
    model: 'googleai/gemini-2.5-flash-preview-tts',
    config: {
      responseModalities: ['AUDIO'],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName: 'Algenib' },
        },
      },
    },
    prompt: input.text,
  });

  if (!media) throw new Error('La Source est restée silencieuse.');

  return {
    audioUri: media.url,
  };
}
