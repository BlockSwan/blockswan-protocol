import { TextFieldProps } from '@mui/material'

export const possibleRequirementType = [
   'free-text',
   'multiple-choice',
   'file-attachment',
   '',
] as const
export const possibleLanguageLevelType = [
   'native-bilingual',
   'fluent',
   'conversational',
   '',
] as const

export type LanguageLevelType = string &
   typeof possibleLanguageLevelType[number]
export type RequirementType = typeof possibleRequirementType[number]

export type RenderOptionProps = TextFieldProps & {
   option: string
   handleRemoveOption: (item: string) => void
}
export interface DBDocument {
   _id?: any
   _createdAt?: Date
}

export interface FaqProps {
   question: string
   answer: string
}

export type OptionsType = {
   options: (string | undefined)[]
}

export interface RequirementProps {
   type: RequirementType
   question?: string
   required?: boolean
   multiple?: boolean
   data?: (string | undefined)[]
}

export interface PackageProps {
   name: string
   deliverable: string
   delivery: number
   revision: string
   includes: BoooleanDeliverablesProps[]
   price: number
}

export interface SelectableDeliverablesProps {
   name: string
   data: string[]
   _id?: any
}

export interface BoooleanDeliverablesProps {
   name?: string
}

export type CategoryProps = DBDocument & {
   name: string
   description: string
   emoji: string
   url: string
   faqs: [{ question: string; answer: string }]
   subCategories: SubCategoryProps[]
}

export type SubCategoryProps = DBDocument & {
   name: string
   description: string
   url: string
   selectableDeliverables: SelectableDeliverablesProps[]
   booleanDeliverables: BoooleanDeliverablesProps[]
}

export interface DescriptionProps {
   html: string
   text: string
   length: number
}

export type GigProps = DBDocument & {
   title: string
   category: string
   subcategory: string
   selectableDeliverables?: SelectableDeliverablesProps[]
   tags?: string[]
   packages: PackageProps[]
   description?: DescriptionProps
   faqs?: FaqProps[]
   requirements?: RequirementProps[]
   imgs?: (File | string)[]
   isPaused?: boolean
   isDeleted?: boolean
   metadataHash?: string
}

export type FormInputProps = TextFieldProps & {
   name: string
   control: any
   label: string
   setValue?: any
   maxCount?: number | boolean
   withErrorMsg?: boolean
}

export type CountryProps = {
   label?: string
   code?: string
}

export type LanguageProps = {
   language?: string | null | undefined
   level?: LanguageLevelType | string | null | undefined
}

export type EducationProps = {
   country?: string | undefined | null
   university?: string | undefined | null
   title?: string | undefined | null
   major?: string | undefined | null
   year?: number | undefined | null
}

export type CertificationProps = {
   certificate: string | undefined | null
   certifier: string | undefined | null
   year: number | undefined | null
}

export type UserProps = DBDocument & {
   country?: CountryProps
   username?: string
   evmAddress: string
   gigs?: GigProps[]
   isOnline?: boolean
   isAuthenticated?: boolean
   description?: string
   languages: LanguageProps[]
   skills: (string | undefined | null)[]
   educations: EducationProps[]
   certifications: CertificationProps[]
   defaultProfileImg?: string
}
