export type PatternTemplate = {
  id: string;
  name: string;
  category: string;
  preview: string;
  template: (color1: string, color2: string, color3?: string) => string;
  badge?: string;
  description?: string;
  publish?: boolean;
};
