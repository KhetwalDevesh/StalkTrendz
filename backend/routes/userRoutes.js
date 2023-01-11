const express = require('express')
const { getUsers, createUser, getUserById, deleteUser, authUser } = require('../controllers/userControllers')

const router = express.Router()

router.route('/').get(getUsers).post(createUser)
router.route('/:id').get(getUserById).delete(deleteUser)
router.route("/login").post(authUser)

module.exports = router