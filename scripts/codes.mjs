import crypto from 'node:crypto'
// No look-alike characters (0/o, 1/l/i), so links are easy to read out loud.
const A = 'abcdefghjkmnpqrstuvwxyz23456789'
export const code = (n) => Array.from(crypto.randomBytes(n), (b) => A[b % A.length]).join('')
export const slugify = (s) => s.toLowerCase().normalize('NFKD').replace(/[^\w\s-]/g, '').trim().replace(/[\s_]+/g, '-').replace(/-+/g, '-').slice(0, 24) || 'client'
