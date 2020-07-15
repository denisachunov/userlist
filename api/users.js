const express = require ( 'express' );
const User = require ( '../models/User' );
const { check, validationResult } = require( 'express-validator' );
const router = express.Router();

const USERLIST_LIMIT = 8;

router.post (
    '/save',
    [
        check ( 'firstname', 'Firstname is required' ).not().isEmpty(),
        check ( 'lastname', 'Lastname is required' ).not().isEmpty(),
        check ( 'username', 'Username is required' ).not().isEmpty(),
        check ( 'role', 'Role is required' ).not().isEmpty(),
        check ( 'password', 'Password is required' ).not().isEmpty()
    ],
    async ( req, res ) => {
        const errors = validationResult ( req );
        if ( errors.isEmpty() ) {
            try {
                const { firstname, lastname, username, password, role } = req.body;
                const userModel = new User ({
                    firstname,
                    lastname,
                    username,
                    password,
                    role
                });
                await userModel.save();
                res.json ( userModel );
            }
            catch {
                console.error ( err.message );
                res.status ( 500 ).send ( 'Server Error' );
            }
        }
        else {
            return res.status ( 400 ).json ({ errors: errors.array() });
        }
    }
);

router.get (
    '/get',
    async ( req, res ) => {
        const { page } = req.query;
        try {
            const posts = await User.find()
                                    .sort({ _id: -1 })
                                    .skip ( page ? (( page - 1 ) * USERLIST_LIMIT ) : 0 )
                                    .limit ( USERLIST_LIMIT );
            res.json ( posts );
        }
        catch ( err ) {
            console.error ( err.message );
            res.status ( 500 ).send ( 'Server Error' );
        }
    }
);

router.get (
    '/get/:query',
    async ( req, res ) => {
        try {
            const { query } = req.params;
            const posts = await User.find ({
                $or: [
                    { firstname: { $regex: query, $options: 'i' }},
                    { lastname: { $regex: query, $options: 'i' }},
                    { username: { $regex: query, $options: 'i' }},
                    { role: { $regex: query, $options: 'i' }}
                ] 
            }).limit ( 8 );
            res.json ( posts );
        }
        catch ( err ) {
            console.error ( err.message );
            res.status ( 500 ).send ( 'Server Error' );
        }
    }
);

module.exports = router;