// replicate-design-elements.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow to replicate design elements
 * from a reference website, generating HTML/CSS code.
 *
 * - replicateDesignElements - A function that accepts a URL and returns HTML/CSS code.
 * - ReplicateDesignElementsInput - The input type for the replicateDesignElements function.
 * - ReplicateDesignElementsOutput - The return type for the replicateDesignElements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ReplicateDesignElementsInputSchema = z.object({
  referenceUrl: z
    .string()
    .describe('The URL of the reference website to replicate the design from.'),
  primaryColor: z
    .string()
    .describe('The primary color of the website in hex format (e.g., #29ABE2).'),
  backgroundColor: z
    .string()
    .describe('The background color of the website in hex format (e.g., #F0F8FF).'),
  accentColor: z
    .string()
    .describe('The accent color of the website in hex format (e.g., #FFB347).'),
  fontHeadline: z.string().describe('Font for headlines (e.g., Poppins)'),
  fontBody: z.string().describe('Font for body text (e.g., PT Sans)'),
});

export type ReplicateDesignElementsInput = z.infer<
  typeof ReplicateDesignElementsInputSchema
>;

const ReplicateDesignElementsOutputSchema = z.object({
  htmlCode: z.string().describe('The generated HTML code for the website.'),
  cssCode: z.string().describe('The generated CSS code for the website.'),
});

export type ReplicateDesignElementsOutput = z.infer<
  typeof ReplicateDesignElementsOutputSchema
>;

export async function replicateDesignElements(
  input: ReplicateDesignElementsInput
): Promise<ReplicateDesignElementsOutput> {
  return replicateDesignElementsFlow(input);
}

const replicateDesignElementsPrompt = ai.definePrompt({
  name: 'replicateDesignElementsPrompt',
  input: {schema: ReplicateDesignElementsInputSchema},
  output: {schema: ReplicateDesignElementsOutputSchema},
  prompt: `You are an expert web designer tasked with replicating the design elements
  from a reference website. Analyze the provided website and generate HTML and CSS code
  that captures its layout and color scheme.

  The reference website URL is: {{{referenceUrl}}}

  Adapt the theme for a light background and use the following color palette:
  - Primary color: {{{primaryColor}}}
  - Background color: {{{backgroundColor}}}
  - Accent color: {{{accentColor}}}
  - Headline font: {{{fontHeadline}}}
  - Body font: {{{fontBody}}}

  Ensure the generated code is clean, well-organized, and responsive.

  Return the HTML and CSS code as separate strings.

  HTML Code:
  <htmlTemplate>
  {{#if htmlCode}}{{{htmlCode}}}{{else}}<div>No html generated.</div>{{/if}}
  </htmlTemplate>

  CSS Code:
  <cssTemplate>
  {{#if cssCode}}{{{cssCode}}}{{else}}/* No CSS generated. */{{/if}}
  </cssTemplate>`,
});

const replicateDesignElementsFlow = ai.defineFlow(
  {
    name: 'replicateDesignElementsFlow',
    inputSchema: ReplicateDesignElementsInputSchema,
    outputSchema: ReplicateDesignElementsOutputSchema,
  },
  async input => {
    const {output} = await replicateDesignElementsPrompt(input);
    return output!;
  }
);

