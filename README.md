# Professional Portfolio - Bitrus H Amaza

A modern, professional portfolio website showcasing full-stack development and cybersecurity expertise.

## 🌟 Features

### Main Portfolio (`index.html`)

- **Professional Design**: Clean, modern aesthetic with dark/light mode support
- **Hero Section**: Compelling introduction with call-to-action buttons
- **Technical Skills**: Organized showcase of frontend, backend, cybersecurity, and tool expertise
- **Portfolio Projects**: Featured projects with technology tags and descriptions
- **About Section**: Comprehensive overview of services and experience
- **Contact Form**: Functional contact form with email notifications
- **Responsive Design**: Fully responsive on all devices (mobile, tablet, desktop)
- **Performance**: Optimized for fast loading and smooth interactions

### Featured Projects

#### 1. **SecureBank** - Digital Banking Platform

- **Tech Stack**: HTML, CSS
- **Features**: Responsive account overview, sample savings goal, example transactions
- **Link**: `/banking-app.html`
- **Description**: A fictional banking dashboard concept; no account services or transfers are available.

#### 2. **BHA Cyberspace** - Cybersecurity Firm Website

- **Tech Stack**: HTML, CSS, JavaScript
- **Features**: Security services, responsive navigation, enquiry form
- **Description**: A cybersecurity services page with clear service summaries and practical next steps.

#### 3. **Tidal Protocol** - On-chain Finance Dashboard

- **Tech Stack**: HTML, CSS, JavaScript
- **Features**: Sample portfolio view, asset breakdown, protocol snapshot
- **Description**: A DeFi portfolio preview with fictional figures and no wallet connection.

#### 4. **Morrow** - Digital Art Marketplace

- **Tech Stack**: HTML, CSS, JavaScript
- **Features**: Digital collection, edition filters, artwork notes
- **Description**: A sample gallery with fictional artists, works and prices; no purchases are available.

#### 5. **Common Ground** - DAO Governance

- **Tech Stack**: HTML, CSS, JavaScript
- **Features**: Proposal filters, local vote preview, treasury overview
- **Description**: A community governance preview; vote choices stay in the browser and are not submitted.

#### 6. **Axion** - Web3 dApp

- **Tech Stack**: HTML, CSS, JavaScript
- **Features**: Browser wallet address, network and native ETH balance
- **Description**: A read-only wallet dashboard concept. It requests no signatures and sends no transactions.

#### 7. **Meridian** - Tokenized Real-World Assets

- **Tech Stack**: HTML, CSS, JavaScript
- **Features**: Asset registry, ownership history, settlement status
- **Link**: `/meridian.html`
- **Description**: An example portfolio for checking holdings, recent updates and the next payment date

#### 8. **Blockscope** - On-Chain Observability

- **Tech Stack**: HTML, CSS, JavaScript, SVG
- **Features**: Network health, indexing metrics, finality and service status
- **Link**: `/blockscope.html`
- **Description**: A quick way to tell whether a slow app is a slow chain or an indexer that has fallen behind

#### 9. **Verity** - Decentralized Identity

- **Tech Stack**: HTML, CSS, JavaScript, SVG
- **Features**: Verifiable credential status, issuer checks, selective disclosure
- **Link**: `/verity.html`
- **Description**: An identity-wallet idea built around showing users exactly what a service will see

#### 10. **Sentinel** - Protocol Security Operations

- **Tech Stack**: HTML, CSS, JavaScript, SVG
- **Features**: Protocol health, risk signals, incident triage
- **Link**: `/sentinel.html`
- **Description**: An alert inbox that gives a team enough context to decide what needs a second look

## 🛠️ Technologies Used

### Full-Stack Development

- React & Next.js
- TypeScript & JavaScript
- HTML & CSS
- Node.js & Express
- REST APIs & integrations
- PostgreSQL & MongoDB
- Authentication & security
- Docker & cloud deployment
- Email integration with Nodemailer

### Tools & Services

- Git & GitHub
- VS Code
- Figma (UI/UX Design)
- Docker (for deployment)

### Security

- Secure authentication
- Input validation
- Environment variables for sensitive data
- CORS & Security headers

## Installation & Setup

### Prerequisites

- Node.js 18 or newer
- npm

### Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser. The demo pages are served from
the same local site.

Email delivery from the portfolio contact form is optional. To enable it,
create a `.env` file in the project root and set `EMAIL_USER` and `EMAIL_PASS`;
`EMAIL_TO` can be set to choose a different recipient and `PORT` can override
the default port.

## 📁 Project Structure

```
portfolio/
├── index.html                    # Main portfolio page
├── style.css                     # Main portfolio styles (professional theme)
├── server.js                     # Backend server
├── package.json                  # Project dependencies
├── banking-app.html              # Sample banking dashboard concept
├── demo.html                     # Transaction review concept
├── cyber.html                    # Cybersecurity services page
├── tidal.html                    # DeFi portfolio preview
├── morrow.html                   # Digital art collection preview
├── commons.html                  # DAO governance preview
├── axion.html                    # Read-only wallet dashboard
├── axion-script.js               # Wallet account and balance reads
├── axion-style.css               # Axion dashboard styles
├── meridian.html                 # Tokenized real-world asset concept
├── blockscope.html               # Blockchain observability concept
├── verity.html                   # Decentralized identity concept
├── sentinel.html                 # Protocol security concept
├── web3-showcase.css             # Shared styling for the new Web3 concepts
└── images/                       # Project images
```

## 🎨 Design System

### Color Palette

- **Primary**: `#1a237e` (Deep Blue)
- **Primary Light**: `#0d47a1` (Light Blue)
- **Accent**: `#4caf50` (Green)
- **Light Background**: `#f5f7fa`
- **Text**: `#333` (Dark Gray)
- **Borders**: `#ddd` (Light Gray)

### Typography

- **Headers**: Segoe UI, 700-800 weight
- **Body**: Segoe UI, 400-500 weight
- **Monospace**: 'Courier New' (for code)

## 📧 API Endpoints

### Main Portfolio

- `GET /` - Main portfolio page
- `POST /contact` - Contact form submission
- `GET /demo` - Web3 demo page
- `GET /cyber` - Cybersecurity demo
- `GET /tidal` - Tidal on-chain finance demo
- `GET /morrow` - Morrow digital art demo
- `GET /commons` - Common Ground governance demo
- `GET /banking-app.html` - Static banking dashboard concept

### Contact Form Response

```json
{
  "success": true,
  "message": "Email sent successfully!"
}
```

## 🚀 Deployment

### Deployment to Railway

1. **Connect GitHub repository**:
   - Create account on Railway.app
   - Connect your GitHub repository

2. **Set environment variables**:
   - Add `EMAIL_USER` and `EMAIL_PASS` in Railway dashboard

3. **Deploy**:
   - Push code to GitHub
   - Railway will auto-deploy

### Docker Deployment

```bash
docker build -t portfolio-app .
docker run -p 3000:3000 -e EMAIL_USER=your-email -e EMAIL_PASS=your-pass portfolio-app
```

## 🔒 Security Best Practices

- ✅ Environment variables for sensitive data
- ✅ Input validation on all forms
- ✅ CORS protection
- ✅ Secure password storage
- ✅ HTTPS recommended for production
- ✅ Rate limiting on contact form
- ✅ XSS & CSRF protection

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🎯 Performance Optimizations

- Lazy loading for images
- CSS minification
- JavaScript bundling
- Smooth animations with CSS transforms
- Optimized font loading
- Reduced image sizes
- Browser caching strategies

## 📊 SEO Enhancements

- Meta descriptions for all pages
- Open Graph tags for social sharing
- Mobile-friendly design
- Fast loading times
- Structured content hierarchy
- Semantic HTML

## 🤝 Contact & Social

- **LinkedIn**: https://www.linkedin.com/in/bitrus-h-amaza-773296255
- **Twitter/X**: https://x.com/BitrusH82393
- **Facebook**: https://www.facebook.com/bitrush.amaza.7
- **Email**: contact@example.com

## 📝 License

All rights reserved © 2026 Bitrus H Amaza. All rights reserved.

## 🎓 Skills Demonstrated

✅ Full-Stack Web Development
✅ Cybersecurity Best Practices
✅ Modern UI/UX Design
✅ Responsive Web Design
✅ API Integration
✅ Database Design
✅ Performance Optimization
✅ Deployment & DevOps
✅ Team Collaboration
✅ Problem Solving## Features

- Email notifications for contact form submissions
- Static file serving for all assets
- CORS enabled for frontend requests
- Error handling and validation

## Deployment

For production deployment, consider:

- Using environment variables for email credentials
- Setting up a proper email service (SendGrid, Mailgun, etc.)
- Adding rate limiting
- Implementing proper logging
- Using a process manager like PM2

## Security Notes

- Never commit `.env` files to version control
- Use strong app passwords for email
- Consider implementing CAPTCHA for forms
- Validate and sanitize all input data
