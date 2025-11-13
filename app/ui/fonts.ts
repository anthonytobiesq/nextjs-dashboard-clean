// app/fonts.ts
import { Inter, Lusitana } from 'next/font/google';

// Configure the fonts and export them
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700'] });