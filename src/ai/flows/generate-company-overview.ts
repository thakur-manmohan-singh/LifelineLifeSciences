'use server';

/**
 * @fileOverview A flow that refines a basic company description into a more compelling and professional overview.
 *
 * - generateCompanyOverview - A function that takes a basic company description and returns a refined overview.
 * - GenerateCompanyOverviewInput - The input type for the generateCompanyOverview function.
 * - GenerateCompanyOverviewOutput - The return type for the generateCompanyOverview function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCompanyOverviewInputSchema = z.object({
  companyDescription: z
    .string()
    .describe('A basic description of the company.'),
});
export type GenerateCompanyOverviewInput = z.infer<typeof GenerateCompanyOverviewInputSchema>;

const GenerateCompanyOverviewOutputSchema = z.object({
  refinedOverview: z
    .string()
    .describe('A more compelling and professional overview of the company.'),
});
export type GenerateCompanyOverviewOutput = z.infer<typeof GenerateCompanyOverviewOutputSchema>;

export async function generateCompanyOverview(
  input: GenerateCompanyOverviewInput
): Promise<GenerateCompanyOverviewOutput> {
  return generateCompanyOverviewFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCompanyOverviewPrompt',
  input: {schema: GenerateCompanyOverviewInputSchema},
  output: {schema: GenerateCompanyOverviewOutputSchema},
  prompt: `You are a marketing expert. Refine the following company description to be more compelling and professional:\n\n{{{companyDescription}}}`,
});

const generateCompanyOverviewFlow = ai.defineFlow(
  {
    name: 'generateCompanyOverviewFlow',
    inputSchema: GenerateCompanyOverviewInputSchema,
    outputSchema: GenerateCompanyOverviewOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
