const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema(
	{
		rawgId: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		rating: {
			type: String,
		},
		released: {
			type: String,
		},
		comment: {
			type: String,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	},
	{
		timestamps: true,
		toObject: { virtuals: true},
		toJSON: { virtuals: true}
	}
)


module.exports = mongoose.model('Game', gameSchema)
