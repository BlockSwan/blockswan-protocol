import { Request, Response } from 'express'
import crypto from 'crypto'

import { User, UserDocument, UserInput } from '../models/user.model'
import { IPFS } from 'ipfs-core-types'
import { FAILED_QUERY_USER, MISSING_EVM_ADDRESS } from '../constants/errors'

const getUser = async (req: Request, res: Response, node: IPFS) => {
	const { evmAddress } = req.params
	if (!evmAddress)
		return res.status(400).json({ message: MISSING_EVM_ADDRESS })
	User.getByEvmAddress(evmAddress, node).then((data) => {
		if (!data || data === undefined)
			return res.status(400).json({ message: FAILED_QUERY_USER })
		return res.status(200).json({ message: data })
	})
}

const updateCountry = async (req: Request, res: Response) => {
	const { evmAddress, country } = req.body

	const user: UserDocument | null = await User.findOne({
		evmAddress: evmAddress,
	})

	if (!user) {
		return res.status(404).json({
			message: `User with evmAddress "${ evmAddress }" not found.`,
		})
	}

	if (!country) {
		return res.status(422).json({
			message: 'The field country is required',
		})
	}

	await User.updateOne(
		{
			evmAddress: evmAddress,
		},
		{
			country: country,
		}
	)
	return res.status(200).json({
		message: country,
	})
}

const updateDescription = async (req: Request, res: Response) => {
	const { evmAddress, description } = req.body

	const user: UserDocument | null = await User.findOne({
		evmAddress: evmAddress,
	})

	if (!user) {
		return res.status(404).json({
			message: `User with evmAddress "${ evmAddress }" not found.`,
		})
	}

	if (!description) {
		return res.status(422).json({
			message: 'The field description is required',
		})
	}

	await User.updateOne(
		{
			evmAddress: evmAddress,
		},
		{
			description: description,
		}
	)
	return res.status(200).json({
		message: description,
	})
}

const updateLanguages = async (req: Request, res: Response) => {
	const { evmAddress, languages } = req.body

	const user: UserDocument | null = await User.findOne({
		evmAddress: evmAddress,
	})

	if (!user) {
		return res.status(404).json({
			message: `User with evmAddress "${ evmAddress }" not found.`,
		})
	}

	if (!languages) {
		return res.status(422).json({
			message: 'The field languages is required',
		})
	}

	await User.updateOne(
		{
			evmAddress: evmAddress,
		},
		{
			languages: languages,
		}
	)
	return res.status(200).json({
		message: languages,
	})
}

const updateSkills = async (req: Request, res: Response) => {
	const { evmAddress, skills } = req.body

	const user: UserDocument | null = await User.findOne({
		evmAddress: evmAddress,
	})

	if (!user) {
		return res.status(404).json({
			message: `User with evmAddress "${ evmAddress }" not found.`,
		})
	}

	if (!skills) {
		return res.status(422).json({
			message: 'The field skills is required',
		})
	}

	await User.updateOne(
		{
			evmAddress: evmAddress,
		},
		{
			skills: skills,
		}
	)
	return res.status(200).json({
		message: skills,
	})
}

const updateEducations = async (req: Request, res: Response) => {
	const { evmAddress, educations } = req.body

	const user: UserDocument | null = await User.findOne({
		evmAddress: evmAddress,
	})

	if (!user) {
		return res.status(404).json({
			message: `User with evmAddress "${ evmAddress }" not found.`,
		})
	}

	if (!educations) {
		return res.status(422).json({
			message: 'The field educations is required',
		})
	}

	await User.updateOne(
		{
			evmAddress: evmAddress,
		},
		{
			educations: educations,
		}
	)
	return res.status(200).json({
		message: educations,
	})
}

const updateCertifications = async (req: Request, res: Response) => {
	const { evmAddress, certifications } = req.body

	const user: UserDocument | null = await User.findOne({
		evmAddress: evmAddress,
	})

	if (!user) {
		return res.status(404).json({
			message: `User with evmAddress "${ evmAddress }" not found.`,
		})
	}

	if (!certifications) {
		return res.status(422).json({
			message: 'The field certifications is required',
		})
	}

	await User.updateOne(
		{
			evmAddress: evmAddress,
		},
		{
			certifications: certifications,
		}
	)
	return res.status(200).json({
		message: certifications,
	})
}

export { updateCountry, getUser, updateDescription, updateLanguages, updateSkills, updateEducations, updateCertifications }
