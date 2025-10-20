# Deployment Guide

## Vercel Deployment

This project is optimized for deployment on Vercel.

### Quick Deploy

1. **Import Project to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import from GitHub: `huayaney-exe/bloom-finance`

2. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

3. **Environment Variables** (if needed)
   - No environment variables required for current build
   - Add any future API keys or secrets in Vercel dashboard

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy
   - Your site will be live at: `https://bloom-finance.vercel.app`

### Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `bloom.finance`)
3. Follow Vercel's DNS configuration instructions

### Build Settings

Current optimized settings:
- **Node.js Version**: 20.x (Vercel default)
- **Install Command**: `npm install`
- **Build Command**: `npm run build`
- **Development Command**: `npm run dev`

### Performance Features

✅ Automatic HTTPS
✅ Global CDN distribution
✅ Edge caching for static assets
✅ Image optimization via Next.js
✅ Automatic code splitting
✅ Zero-config deployment

### Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test responsive design on mobile devices
- [ ] Check scroll animations and parallax effects
- [ ] Validate form submission (when backend connected)
- [ ] Run Lighthouse audit for performance metrics
- [ ] Test accessibility with screen reader
- [ ] Verify analytics integration (if added)

### Continuous Deployment

Every push to `main` branch will automatically trigger a new deployment on Vercel.

Feature branches can be previewed with unique URLs:
- Push to any branch → automatic preview deployment
- Preview URL: `https://bloom-finance-<branch>-<username>.vercel.app`

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Troubleshooting

**Build fails on Vercel:**
- Check build logs in Vercel dashboard
- Verify all dependencies are in package.json
- Ensure TypeScript has no errors: `npm run build` locally

**Images not loading:**
- Verify files exist in `/public` directory
- Check Next.js image configuration in next.config.ts

**Styles not applying:**
- Clear Vercel build cache and redeploy
- Verify Tailwind config is correct

### Support

- GitHub Issues: [bloom-finance/issues](https://github.com/huayaney-exe/bloom-finance/issues)
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
