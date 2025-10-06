// app/actions/signOut.ts
'use server';

import { signOut } from '@/auth'; // or 'next-auth/react' if you're using next-auth

export async function handleSignOut() {
  await signOut({ redirectTo: '/' });
}
