const mongoose = require('mongoose')

/////////////////////////
// Schema definition ////
/////////////////////////

const profileSchema = new Schema({
    firstName: { type: String, 
		required: true 
	},
    lastName: { type: String
	},
    lastName: { type: String 
	},
    user: { type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

/////////////////////////
// Schema definition ////
/////////////////////////


const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		user: {
			type: String,
			required: true,
			unique: true,
		},
		hashedPassword: {
			type: String,
			required: true,
		},
		profile: [profileSchema],
		token: String,
	},
	{
		timestamps: true,
		toObject: {
			// remove `hashedPassword` field when we call `.toObject`
			transform: (_doc, user) => {
				delete user.hashedPassword
				return user
			},
		},
	}
)

module.exports = mongoose.model('User', userSchema)
