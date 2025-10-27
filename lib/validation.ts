// Form validation utilities

export interface ValidationResult {
  valid: boolean
  errors: Record<string, string>
}

export function validateContactForm(data: {
  name?: string
  email?: string
  phone?: string
  country?: string
  message?: string
}): ValidationResult {
  const errors: Record<string, string> = {}

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters long"
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please provide a valid email address"
  }

  if (!data.phone || data.phone.trim().length < 10) {
    errors.phone = "Please provide a valid phone number"
  }

  if (!data.country || data.country.trim().length === 0) {
    errors.country = "Please select a country of interest"
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long"
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function validatePhone(phone: string): boolean {
  return /^[\d\s\-+$$$$]{10,}$/.test(phone.replace(/\s/g, ""))
}
