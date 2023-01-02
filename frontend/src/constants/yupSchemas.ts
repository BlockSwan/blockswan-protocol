import { LanguageLevelType, possibleLanguageLevelType } from './../types/types'
import * as yup from 'yup'

export const FAQschema = yup.object().shape({
   question: yup.string().min(10).max(80).required(),
   answer: yup.string().min(10).max(200).required(),
})

export const Step2NewGigSchema = yup.object().shape({
   description: yup.string().min(100).max(200).required(),
   faqs: yup.array().min(1).required(),
})

export const Step3Requirements = yup.object().shape({
   required: yup.bool().required().default(false),
   question: yup.string().min(10).max(80).required(),
   type: yup.string().required('You must choose soomething'),
   mulitple: yup.bool(),

   data: yup
      .array()
      .of(yup.string().nullable())
      .when('type', {
         is: 'multiple-choice',
         then: yup.array().of(yup.string().min(1).max(80)),
         otherwise: yup.array().of(yup.string()),
      }),
})
// yup.mixed<RequirementType>().oneOf([...possibleRequirementType]),
export const optionSchema = yup.object().shape({
   options: yup.array().min(1).of(yup?.string()?.min(2).max(40).required()),
})

export const descriptionSchema = yup.object().shape({
   description: yup.string().min(10).max(200).required(),
})

export const languageSchema = yup.object().shape({
   language: yup?.string().required(),
   level: yup?.string().min(3).required(),
})

export const skillSchema = yup.object().shape({
   name: yup?.string().min(2).max(100).required(),
})

export const educationSchema = yup.object().shape({
   country: yup.string().min(2).required(),
   university: yup.string().required().min(2),
   title: yup.string().required().min(2),
   major: yup.string().required().min(1),
   year: yup.number().required().min(1960),
})

export const certificationSchema = yup.object().shape({
   certificate: yup.string().min(2).required(),
   certifier: yup.string().min(2).required(),
   year: yup.number().required().min(1960),
})
