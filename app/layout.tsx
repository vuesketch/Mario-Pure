import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Omar — Developer & Builder', description: 'Omar is a developer exploring the web, backend systems, programming and infrastructure. Always learning. Always building.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
