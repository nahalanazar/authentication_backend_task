import jwt from 'jsonwebtoken'

const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
        expiresIn: '30d'
    })

    // to save in cookie
    res.cookie('jwt', token, {
        httpOnly: true,  // To prevent cookies from being accessed by client-side scripts
        secure: process.env.NODE_ENV !== 'development',  // Value will be false in the development environment and hence http will be allowed in development
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000 // Sets expiry of cookie to 30 days
    })
}

export default generateToken;