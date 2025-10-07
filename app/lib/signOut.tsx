'use client';

import { signOut } from 'next-auth/react';

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' }).catch(console.error)}
      className="text-sm font-medium text-gray-600 hover:text-black"
    >
      Sign Out
    </button>
  );
}
