export const contact = { email: '', github: '', linkedin: '' };
export const toolbox: { category: string; tools: string[] }[] = [
  { category: 'Frontend', tools: [] }, { category: 'Backend', tools: [] },
  { category: 'Programming languages', tools: [] }, { category: 'Infrastructure & deployment', tools: [] },
  { category: 'Development tools', tools: [] },
];
export type Certificate = { title: string; issuer: string; date: string; image?: string; url?: string; description?: string };
export const certificates: Certificate[] = [];
export const picoFeatures = ['Pseudocode compiler', 'Python compiler', 'Flowchart builder', 'Digital logic simulator', 'CPU Studio', 'Guided tutorials', 'Custom themes', 'Browser project saving'];
export const picoStats = [{ value: '2,000+', label: 'visits' }, { value: '20,000+', label: 'requests' }];
