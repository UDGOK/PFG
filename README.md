# Perfect Food & Gas Website

## Environment Variables Setup

### Local Development
1. Create a `.env` file in the root directory
2. Add your EIA API key:
```
EIA_API_KEY=your_api_key_here
```

### Production Deployment (Vercel)
1. Go to your project in the Vercel dashboard
2. Navigate to Settings > Environment Variables
3. Add a new environment variable:
   - NAME: `EIA_API_KEY`
   - VALUE: `nTDyUk0xuNUa29tFpipsK5hhSrY4epUVkFWVvKQa`
4. Click "Save"
5. Redeploy your application

### Other Hosting Platforms
If using another hosting platform, add the environment variable:
```
EIA_API_KEY=nTDyUk0xuNUa29tFpipsK5hhSrY4epUVkFWVvKQa
```

## Important Notes
- Never commit the `.env` file to version control
- Keep your API keys secure
- The environment variable must be named exactly `EIA_API_KEY`
- After adding environment variables, you may need to rebuild and redeploy your application

## Vercel Quick Setup
1. Visit [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click "Settings"
4. Click "Environment Variables"
5. Add New Variable:
   - NAME: `EIA_API_KEY`
   - VALUE: `nTDyUk0xuNUa29tFpipsK5hhSrY4epUVkFWVvKQa`
6. Click "Save"
7. Go to "Deployments"
8. Click "Redeploy" to apply the new environment variable
