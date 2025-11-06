import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json()

        if (!email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        // Create a transporter (use your real credentials or environment variables)
        const transporter = nodemailer.createTransport({
            secure:true,
            host:'smtp.gmail.com',
            port:465,
            auth: {
                user: process.env.EMAIL_USER, // your Gmail address
                pass: process.env.EMAIL_PASS, // your Gmail app password
            },
        })

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER, // your own email (where you want to receive messages)
            subject: `New message from ${name || 'Anonymous'}`,
            text: `
        Name: ${name || 'Not provided'}
        Email: ${email}
        Message: ${message} `,
        }

        await transporter.sendMail(mailOptions)

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
