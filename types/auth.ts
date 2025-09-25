// types/auth.ts
export interface RegistrationFormData {
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}