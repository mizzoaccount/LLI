// app/auth/register/page.tsx
import { Suspense } from 'react';
import RegistrationForm from '@/components/auth/RegistrationForm';

export default function RegistrationPage() {
  return (
    <Suspense fallback={<div className="text-white text-center p-8">Loading registration form...</div>}>
      <RegistrationForm />
    </Suspense>
  );
}
