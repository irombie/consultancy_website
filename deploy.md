# Deployment Guide

## Quick Deploy Options

### Option 1: Netlify (Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect GitHub and select `irombie/consultancy_website`
4. Deploy (no build settings needed for static sites)

### Option 2: GitHub Pages
1. Go to repository Settings → Pages
2. Source: Deploy from branch → main → / (root)
3. Save

### Option 3: Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import project from GitHub
3. Select `irombie/consultancy_website`
4. Deploy

## Your Repository
- GitHub: https://github.com/irombie/consultancy_website.git
- All files are ready for deployment
- No build process needed (static HTML/CSS/JS)

## Post-Deployment Checklist
- [ ] Test all pages load correctly
- [ ] Check navigation works
- [ ] Verify contact form (if using Netlify Forms)
- [ ] Test Calendly integration
- [ ] Check mobile responsiveness
- [ ] Set up custom domain (optional)

## Notes
- Your site uses Calendly integration (schedule.html)
- All pages have consistent navigation
- Responsive design included
- No server-side code needed
