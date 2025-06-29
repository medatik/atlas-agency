import { validateStep1, validateEmail, sanitizeInput } from '@/lib/validation'
import { FormData } from '@/lib/types'

describe('Validation Functions', () => {
  describe('validateStep1', () => {
    it('should return no errors for valid data', () => {
      const formData: FormData = {
        brandName: 'Test Brand',
        brandDescription: 'This is a test brand description that is long enough',
        logoType: '',
        cantDecideHelp: '',
        primaryColors: [],
        secondaryColors: [],
        colorsCantDecideHelp: '',
        fontPreference: '',
        customFont: '',
        additionalRequests: '',
        projectTimeline: '',
        communicationPreference: '',
      }

      const errors = validateStep1(formData)
      expect(Object.keys(errors)).toHaveLength(0)
    })

    it('should return error for empty brand name', () => {
      const formData: FormData = {
        brandName: '',
        brandDescription: 'Valid description',
        logoType: '',
        cantDecideHelp: '',
        primaryColors: [],
        secondaryColors: [],
        colorsCantDecideHelp: '',
        fontPreference: '',
        customFont: '',
        additionalRequests: '',
        projectTimeline: '',
        communicationPreference: '',
      }

      const errors = validateStep1(formData)
      expect(errors.brandName).toBe('Brand name is required')
    })

    it('should return error for short brand description', () => {
      const formData: FormData = {
        brandName: 'Test Brand',
        brandDescription: 'Short',
        logoType: '',
        cantDecideHelp: '',
        primaryColors: [],
        secondaryColors: [],
        colorsCantDecideHelp: '',
        fontPreference: '',
        customFont: '',
        additionalRequests: '',
        projectTimeline: '',
        communicationPreference: '',
      }

      const errors = validateStep1(formData)
      expect(errors.brandDescription).toBe('Brand description must be at least 10 characters')
    })
  })

  describe('validateEmail', () => {
    it('should return true for valid email', () => {
      expect(validateEmail('test@example.com')).toBe(true)
      expect(validateEmail('user.name+tag@domain.co.uk')).toBe(true)
    })

    it('should return false for invalid email', () => {
      expect(validateEmail('invalid-email')).toBe(false)
      expect(validateEmail('test@')).toBe(false)
      expect(validateEmail('@domain.com')).toBe(false)
      expect(validateEmail('')).toBe(false)
    })
  })

  describe('sanitizeInput', () => {
    it('should remove HTML tags', () => {
      expect(sanitizeInput('<script>alert("xss")</script>Hello')).toBe('Hello')
      expect(sanitizeInput('Hello <b>world</b>')).toBe('Hello world')
    })

    it('should trim whitespace', () => {
      expect(sanitizeInput('  Hello world  ')).toBe('Hello world')
    })

    it('should handle empty strings', () => {
      expect(sanitizeInput('')).toBe('')
      expect(sanitizeInput('   ')).toBe('')
    })
  })
})