import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { createAzure } from '@ai-sdk/azure';

export const azure = createAzure({
  resourceName: process.env.AZURE_OPENAI_ENDPOINT,
  apiKey: process.env.AZURE_API_KEY,
});