//Import Model
const User = require('./../models/User')


//Create user
exports.register = async function (newUser) {
    try {
        const user = await User.create({name: newUser.name, email: newUser.email, password: newUser.password})
        const createdUser = {
            id: user._id,
            name: user.name,
            email: user.email,
        }
        return createdUser;
    } catch (e) {
        return e
    }
}

//Service to check if user already exist
exports.findOne = async function(email) {

    let user = await User.findOne({email: email})

    return user
}