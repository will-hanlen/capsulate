const dev = (process.env.VER_ENV !== 'prod' || process.env.NODE_ENV !== 'production');

export const server = dev ? 'http://localhost:3000' : 'https://capsulate.vercel.app';