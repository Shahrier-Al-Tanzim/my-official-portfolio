# 🚀 Deployment Guide for Your Portfolio

## Step-by-Step Guide to Deploy on Vercel

### Step 1: Commit and Push to GitHub

Since you've already linked this folder to your GitHub repository, let's push all the new code:

```bash
# Add all files to git
git add .

# Commit with a descriptive message
git commit -m "Add complete portfolio website with Next.js, TypeScript, and Tailwind CSS"

# Push to GitHub
git push origin main
```

### Step 2: Deploy to Vercel

#### Option A: Using Vercel Website (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in with your GitHub account
3. Click **"New Project"**
4. Select your repository: `Shahrier-Al-Tanzim/my-official-portfolio`
5. Vercel will automatically detect it's a Next.js project
6. Click **"Deploy"**
7. Wait 2-3 minutes for deployment to complete
8. Your site will be live at: `your-portfolio.vercel.app`

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from your project directory)
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - What's your project's name? shahrier-portfolio (or any name)
# - In which directory is your code located? ./
# - Want to override the settings? No

# For production deployment
vercel --prod
```

### Step 3: Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to your project on Vercel dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Follow the DNS configuration instructions

### Step 4: Update Profile Image

**Important**: Replace the placeholder image before going live!

1. Replace `/public/image.png` with your professional photo
2. Commit and push:
```bash
git add public/image.png
git commit -m "Update profile image"
git push origin main
```
3. Vercel will automatically redeploy with the new image

## Environment Variables (If Needed Later)

If you add features that need environment variables:

1. Create `.env.local` file in your project root
2. Add your variables (never commit this file!)
3. In Vercel dashboard:
   - Go to **Settings** → **Environment Variables**
   - Add each variable
   - Redeploy

## Monitoring Your Site

After deployment, Vercel provides:
- **Analytics**: Track visitor statistics
- **Performance Metrics**: Lighthouse scores
- **Deployment History**: Rollback if needed
- **Preview Deployments**: Test changes before going live

## Continuous Deployment

Once connected to GitHub, every push to the main branch will:
1. Trigger an automatic build
2. Run tests (if configured)
3. Deploy to production
4. Give you a deployment preview URL

## Troubleshooting

### Build Failed?
- Check the Vercel deployment logs
- Ensure all dependencies are in package.json
- Verify TypeScript has no errors: `npm run build`

### Image Not Loading?
- Ensure image is in `/public` folder
- Check file name matches exactly (case-sensitive)
- Clear browser cache

### Dark Mode Not Working?
- Ensure JavaScript is enabled in browser
- Check browser console for errors

## Quick Commands Reference

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production Build
npm run build        # Build for production
npm start           # Run production server

# Linting
npm run lint        # Check for code issues

# Git Commands
git status          # Check what changed
git add .           # Stage all changes
git commit -m "msg" # Commit changes
git push           # Push to GitHub

# Vercel Commands
vercel             # Deploy to preview
vercel --prod      # Deploy to production
vercel logs        # View deployment logs
```

## Next Steps After Deployment

1. ✅ Share your portfolio URL on LinkedIn
2. ✅ Add the link to your GitHub profile
3. ✅ Include it in your resume
4. ✅ Share with potential employers
5. ✅ Update content regularly

## Support

If you encounter any issues:
- Check [Next.js Documentation](https://nextjs.org/docs)
- Check [Vercel Documentation](https://vercel.com/docs)
- Review GitHub repository for updates

---

🎉 **Congratulations on your new portfolio!** 🎉
