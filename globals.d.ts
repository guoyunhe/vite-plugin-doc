/// <reference types="react" />

// MDX
declare module '*.md' {
  export const title: string;
  const comp: React.ComponentType;
  export default comp;
}
declare module '*.mdx' {
  export const title: string;
  const comp: React.ComponentType;
  export default comp;
}

// CSS Modules
declare module '*.module.css' {
  const content: Record<string, string>;
  export default content;
}
declare module '*.module.less' {
  const content: Record<string, string>;
  export default content;
}
declare module '*.module.scss' {
  const content: Record<string, string>;
  export default content;
}

// Text files
declare module '*.txt' {
  const content: string;
  export default content;
}
declare module '*.ejs' {
  const content: string;
  export default content;
}

// Media
declare module '*.avif' {
  const content: string;
  export default content;
}
declare module '*.gif' {
  const content: string;
  export default content;
}
declare module '*.jpg' {
  const content: string;
  export default content;
}
declare module '*.png' {
  const content: string;
  export default content;
}
declare module '*.svg' {
  const content: string;
  export default content;
}
declare module '*.webp' {
  const content: string;
  export default content;
}

// Vite
declare module '*?raw' {
  const content: string;
  export default content;
}
declare module '*?url' {
  const content: string;
  export default content;
}
