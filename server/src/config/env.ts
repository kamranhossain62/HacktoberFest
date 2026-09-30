import dotenv from 'dotenv';
import crypto from 'crypto';
import path from 'path';

// Load .env from multiple potential candidate locations (root or server dir)
[
  path.resolve(process.cwd(), '.env'),
  path.resolve(process.cwd(), '../.env'),
  path.resolve(__dirname, '../../.env'),
  path.resolve(__dirname, '../../../.env')
].forEach(envPath => {
  dotenv.config({ path: envPath });
});

// Never fall back to a public, hardcoded secret. If JWT_SECRET is missing we generate a
// random one for this process (tokens simply stop working after a restart).
const jwtSecret = process.env.JWT_SECRET || crypto.randomBytes(32).toString('hex');
if (!process.env.JWT_SECRET) {
  console.warn('⚠️ JWT_SECRET is not set. Using a random per-process secret. Set JWT_SECRET in your environment.');
}

export const ENV = {
  PROJECT_NAME: process.env.PROJECT_NAME || 'Smart Curriculum & Attendance App',
  TEAM_NAME: process.env.TEAM_NAME || 'Institutional Engineering',
  HACKATHON_NAME: process.env.HACKATHON_NAME || 'Edition 2026',
  DEMO_URL: process.env.DEMO_URL || '[YOUR DEMO URL]',
  PORT: parseInt(process.env.PORT || '5000', 10),
  MONGODB_URI: process.env.MONGODB_URI || '',
  SUPABASE_URL: process.env.SUPABASE_URL || '',
  SUPABASE_KEY: process.env.SUPABASE_KEY || '',
  JWT_SECRET: jwtSecret,
  ALLOW_PRIVILEGED_SIGNUP: process.env.ALLOW_PRIVILEGED_SIGNUP === 'true',
  PYTHON_API_URL: process.env.PYTHON_API_URL || 'http://localhost:8000',
  IS_PRODUCTION: process.env.NODE_ENV === 'production'
};
