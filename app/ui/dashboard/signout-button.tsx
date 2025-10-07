'use client';

import { signOut } from 'next-auth/react';

export default function SignOutButton() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        signOut({ callbackUrl: '/' });
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  );
}
