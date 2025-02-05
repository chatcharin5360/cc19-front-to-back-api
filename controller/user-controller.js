// 1.list all users
// 2.update Role
// 3.Delete user

exports.listUsers = async (req, res, next) => {
    try {
        res.json({ message: "hello, List user" })
    } catch (error) {
        next(error)
    }
}

exports.updateRole = async (req, res, next) => {
    try {
        res.json({ message: "Hello, update Role" })
    } catch (error) {
        next(error)
    }
}


exports.deleteUser = async (req, res, next) => {
    try {
        res.json({ message: "Hello, delete user" })
    } catch (error) {
        next(error)
    }
}