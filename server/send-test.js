import http from 'http'

const data = JSON.stringify({
  name: 'Test Sender',
  email: 'test.sender@example.com',
  phone: '+919876543210',
  service: 'General Inquiry',
  message: 'This is a test message from the harness.'
})

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/contact',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data)
  }
}

const req = http.request(options, (res) => {
  let body = ''
  res.on('data', (chunk) => { body += chunk })
  res.on('end', () => {
    console.log('Status:', res.statusCode)
    console.log('Response:', body)
  })
})

req.on('error', (err) => {
  console.error('Request error:', err.message)
})

req.write(data)
req.end()
