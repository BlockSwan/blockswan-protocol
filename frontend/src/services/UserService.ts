import { API_ENDPOINT } from '../constants/config'
import { CountryProps, LanguageProps, UserProps } from '../types/types'

const UserService = {
   getUser: async (evmAddress: string) => {
      const res = await fetch(`${API_ENDPOINT}/api/user/${evmAddress}`)
      const data = await res.json()
      return data?.message
   },
   editCountry: async (evmAddress: string, country: CountryProps) => {
      const res = await fetch(`${API_ENDPOINT}/api/user/edit/country`, {
         method: 'post',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ evmAddress: evmAddress, country: country }),
      })
      const data = await res.json()
      return data?.message
   },
   editDescription: async (evmAddress: string, description: string) => {
      const res = await fetch(`${API_ENDPOINT}/api/user/edit/description`, {
         method: 'post',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            evmAddress: evmAddress,
            description: description,
         }),
      })
      const data = await res.json()
      return data?.message
   },
   editLanguages: async (evmAddress: string, languages: LanguageProps[]) => {
      const res = await fetch(`${API_ENDPOINT}/api/user/edit/languages`, {
         method: 'post',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ evmAddress: evmAddress, languages: languages }),
      })
      const data = await res.json()
      return data?.message
   },
   editSkills: async (evmAddress: string, skills: UserProps['skills']) => {
      const res = await fetch(`${API_ENDPOINT}/api/user/edit/skills`, {
         method: 'post',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ evmAddress: evmAddress, skills: skills }),
      })
      const data = await res.json()
      return data?.message
   },
   editEducations: async (
      evmAddress: string,
      educations: UserProps['educations']
   ) => {
      const res = await fetch(`${API_ENDPOINT}/api/user/edit/educations`, {
         method: 'post',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            evmAddress: evmAddress,
            educations: educations,
         }),
      })
      const data = await res.json()
      return data?.message
   },
   editCertifications: async (
      evmAddress: string,
      certifications: UserProps['certifications']
   ) => {
      const res = await fetch(`${API_ENDPOINT}/api/user/edit/certifications`, {
         method: 'post',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            evmAddress: evmAddress,
            certifications: certifications,
         }),
      })
      const data = await res.json()
      return data?.message
   },
}

export default UserService
