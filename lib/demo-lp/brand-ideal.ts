import type { BrandConfig } from './types'

export const idealBrand: BrandConfig = {
  id: 'ideal',
  companyName: 'ideal合同会社',
  logo: {
    src: '/images/top.png',
    alt: 'ideal',
  },
  firstPerson: '私たち',
  colors: {
    primary: '#0F766E',
    accent: '#F59E0B',
    ink: '#0F172A',
    surface: '#F8FAFC',
  },
  form: {
    endpoint: '/contact',
    privacyUrl: '/privacy',
  },
  footer: {
    contactUrl: '/contact',
  },
}
