import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const SMTP_HOST = process.env.SMTP_HOST
const SMTP_PORT = Number(process.env.SMTP_PORT || 587)
const SMTP_SECURE = (process.env.SMTP_SECURE === 'true')
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASS = process.env.SMTP_PASS

if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
  console.warn('Warning: SMTP not fully configured. Please set SMTP_HOST, SMTP_USER and SMTP_PASS in your .env')
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE,
  auth: SMTP_USER && SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
})

// Verify SMTP configuration early and log a helpful message.
transporter.verify((err, success) => {
  if (err) {
    console.error('SMTP configuration verification failed:', err && err.message ? err.message : err)
    console.error('Emails will fail until SMTP is correctly configured. See .env.example for configuration.')
  } else {
    console.log('SMTP configuration verified — ready to send emails')
  }
})

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, service, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields: name, email, message' })
  }

  const to = process.env.TO_EMAIL || 'domesticpatrol@gmail.com'
  const from = process.env.FROM_EMAIL || SMTP_USER || `no-reply@localhost`

  const subject = `[Website Contact] ${service || 'General Inquiry'} — ${name}`
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || 'N/A'}`,
    `Service: ${service || 'N/A'}`,
    '',
    'Message:',
    message,
  ].join('\n')

  const html = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
    <p><strong>Service:</strong> ${service || 'N/A'}</p>
    <hr />
    <p>${message.replace(/\n/g, '<br/>')}</p>
  `

  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
      // Allow replies to go to the form submitter
      replyTo: email,
    })

    console.log('Contact email sent:', info && info.messageId)
    // Return messageId to caller to help with debugging/tracking
    return res.json({ ok: true, messageId: info && info.messageId })
  } catch (err) {
    // Log full error stack when available to aid debugging
    console.error('Error sending contact email:', err && (err.stack || err))
    return res.status(500).json({ ok: false, error: 'Failed to send email' })
  }
})

const PORT = Number(process.env.PORT || 3000)
app.listen(PORT, () => {
  console.log(`Contact mail server listening on http://localhost:${PORT}`)
})
