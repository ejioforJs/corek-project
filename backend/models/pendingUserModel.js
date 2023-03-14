import mongoose from 'mongoose'

const pendingUserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true},
    admin: {type: Boolean, default: false},
}, {
    timestamps: true
})

const PendingUser = mongoose.model('PendingUser', pendingUserSchema)

export default PendingUser