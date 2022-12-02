const nodemailer = require('nodemailer')

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

export const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL
}