import { CountryProps, EducationProps, GigProps, LanguageProps, UserProps, CertificationProps } from './../types/types';
import { RequirementProps } from '../types/types';

const defaultRequirement: RequirementProps = {
	question: "",
	required: false,
	data: ["", ""],
	multiple: false,
	type: "",
}

const defaultGig: GigProps = {
	title: "",
	category: "",
	subcategory: "",
	selectableDeliverables: [],
	tags: [],
	packages: [],
	description: {
		html: "",
		text: "",
		length: 0,
	},
	faqs: [],
	requirements: [],
	imgs: [],
	isPaused: false,
	isDeleted: false
}

const defaultCountry: CountryProps = {
	label: "",
	code: "",
}

const defaultLanguage: LanguageProps = {
	language: "",
	level: "",
}

const defaultEducation: EducationProps = {
	country: undefined,
	university: undefined,
	title: undefined,
	major: undefined,
	year: undefined,
}

const defaultCertifications: CertificationProps = {
	certificate: undefined,
	certifier: undefined,
	year: undefined,
}

const defaultUser: UserProps = {
	languages: [],
	country: {},
	evmAddress: "",
	skills: [""],
	educations: [],
	certifications: []
}

const defaultSkill = {
	name: "",
}

export {
	defaultRequirement,
	defaultGig,
	defaultCountry,
	defaultLanguage,
	defaultUser,
	defaultSkill,
	defaultEducation,
	defaultCertifications
}