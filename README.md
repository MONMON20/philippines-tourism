# It's More Fun in the Philippines 🇵🇭

A vibrant, interactive website showcasing the beauty and culture of the Philippines.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging scroll animations and hover effects
- **Interactive Sections**:
  - Hero banner with animated waves
  - Top attractions showcase
  - Island paradise guide (Luzon, Visayas, Mindanao)
  - Filipino culture highlights
  - Contact form for travel inquiries
- **Modern UI**: Gradient backgrounds, smooth transitions, and vibrant colors

## How to Deploy Online

### Option 1: GitHub Pages (Recommended - Free)

1. **Create a GitHub account** (if you don't have one): https://github.com/signup

2. **Create a new repository**:
   - Go to https://github.com/new
   - Name it: `philippines-tourism` (or any name)
   - Click "Create repository"

3. **Upload files**:
   - Click "uploading an existing file"
   - Drag and drop all files (index.html, styles.css, script.js, README.md)
   - Commit changes

4. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Branch: main
   - Folder: / (root)
   - Click Save

5. **Your site will be live at**:
   ```
   https://yourusername.github.io/philippines-tourism
   ```

### Option 2: Netlify (Free, Even Easier)

1. Go to https://netlify.com
2. Sign up with GitHub
3. Click "New site from Git"
4. Connect your GitHub repository
5. Build settings: Leave blank (no build needed)
6. Deploy
7. Your site goes live automatically!

### Option 3: Vercel (Free, Firebase Alternative)

1. Go to https://vercel.com
2. Import your GitHub repository
3. Deploy with one click
4. Get a live URL instantly

## File Structure

```
philippines-tourism/
├── index.html      # Main webpage
├── styles.css      # Styling and animations
├── script.js       # Interactive features
├── README.md       # This file
└── .gitignore      # Git configuration
```

## Local Testing

To test locally before uploading:

1. Open `index.html` directly in your browser, or
2. Use Python's simple server:
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`

## Customization

- **Colors**: Edit `:root` variables in `styles.css`
- **Content**: Update text and attractions in `index.html`
- **Contact**: Replace email/phone in the Contact section
- **Images**: Add background images to sections for more visual appeal

## Technology Stack

- HTML5
- CSS3 (with animations and gradients)
- Vanilla JavaScript (no frameworks needed)

## License

Free to use and modify for personal or commercial projects.

---

**Enjoy sharing the Philippines with the world! 🇵🇭**
