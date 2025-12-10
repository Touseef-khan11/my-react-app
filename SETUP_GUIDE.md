# 🎯 COMPLETE SETUP GUIDE

## 📦 What's Inside This Package

### ✅ Complete Authentication System
- **Sign Up Page** - Beautiful gradient design with role selection
- **Login Page** - Modern interface with validation
- **Profile Page** - 4 tabs (Personal Info, Documents, Security, Settings)
- **Centralized API Service** - All APIs in one file
- **Auth Context** - Global state management
- **Updated Header** - User dropdown with logout

---

## 🚀 Setup Instructions

### Step 1: Extract Files
Extract this ZIP to your desired location.

### Step 2: Configure API URL
Open `src/services/api.js` and change line 8:

```javascript
const API_BASE_URL = 'http://localhost:8000/api/v1';
```

Change to your actual Laravel backend URL (e.g., `http://your-domain.com/api/v1`)

### Step 3: Install Dependencies
```bash
npm install
```

### Step 4: Run Development Server
```bash
npm run dev
```

### Step 5: Open in Browser
- Home: http://localhost:5173/
- Sign Up: http://localhost:5173/signup
- Login: http://localhost:5173/login
- Profile: http://localhost:5173/profile (after login)

---

## 📁 File Structure

```
care-platform-auth/
├── src/
│   ├── services/
│   │   └── api.js                 ← ALL APIs IN ONE FILE! 🎯
│   │
│   ├── context/
│   │   └── AuthContext.jsx        ← Global auth state
│   │
│   ├── pages/
│   │   ├── SignUp.jsx             ← Sign up page (/signup)
│   │   ├── Login.jsx              ← Login page (/login)
│   │   ├── Profile.jsx            ← Profile page (/profile)
│   │   ├── Home.jsx               ← Home page
│   │   ├── Community.jsx          ← Community page
│   │   ├── FindCare.jsx           ← Find Care page
│   │   └── PageCaregivers.jsx     ← Caregivers page
│   │
│   ├── components/
│   │   ├── Header.jsx             ← Updated with auth dropdown
│   │   ├── Footer.jsx
│   │   └── ... (other components)
│   │
│   ├── assets/
│   │   ├── style.css              ← All styles (auth + profile)
│   │   └── images/
│   │
│   └── App.jsx                    ← Main app with routes
│
├── package.json                   ← Dependencies
├── vite.config.js                 ← Vite config
├── index.html                     ← HTML entry point
│
└── Documentation:
    ├── README_AUTH.md             ← Complete documentation
    ├── QUICK_START.md             ← Quick start guide
    └── SETUP_GUIDE.md             ← This file
```

---

## 🔑 Key Features

### Sign Up Page (`/signup`)
✅ Modern gradient purple design
✅ Role selection (Looking for Care / Providing Care)
✅ Form validation with real-time errors
✅ Password strength indicator
✅ Password visibility toggle
✅ Terms & conditions checkbox
✅ Social login placeholders
✅ Fully responsive

### Login Page (`/login`)
✅ Clean professional interface
✅ Remember me checkbox
✅ Forgot password link
✅ Form validation
✅ Error handling
✅ Social login placeholders
✅ Fully responsive

### Profile Page (`/profile`)
**4 Tabs:**

1. **Personal Info Tab**
   - Full Name
   - Phone Number
   - Complete Address (Street, City, State, Country, Zip)
   - Bio

2. **Documents Tab**
   - Upload documents (ID Card, Passport, License, Certificate)
   - View all documents
   - Delete documents

3. **Security Tab**
   - Change Password
   - Two-Factor Authentication
   - Active Sessions Management

4. **Settings Tab**
   - Email Notifications toggle
   - SMS Notifications toggle
   - Profile Visibility toggle
   - Delete Account option

**Additional Features:**
- Profile photo upload/delete with preview
- Real-time form validation
- Success/error messages
- Loading states
- Fully responsive on all devices

### Header Component
**When Logged Out:**
- "Sign In" button → links to /login
- "Join Now" button → links to /signup

**When Logged In:**
- User avatar with first letter of name
- User name (on desktop)
- Dropdown arrow
- **Dropdown Menu:**
  - My Profile
  - My Bookings
  - Messages
  - Logout (red)

---

## 📡 API Integration

### Centralized API Service (`src/services/api.js`)

**All API calls are in ONE file!** This is the professional approach.

### Available APIs:

#### Authentication APIs (`authAPI`)
```javascript
import { authAPI } from './services/api';

// Register
await authAPI.register({
  name: "John Doe",
  email: "john@example.com",
  password: "password123",
  password_confirmation: "password123",
  role: "client" // or "provider"
});

// Login
await authAPI.login({
  email: "john@example.com",
  password: "password123"
});

// Get current user
const user = await authAPI.getCurrentUser();

// Logout
await authAPI.logout();

// Logout all devices
await authAPI.logoutAll();

// Refresh token
await authAPI.refreshToken();
```

#### Profile APIs (`profileAPI`)
```javascript
import { profileAPI } from './services/api';

// Get profile
const profile = await profileAPI.getProfile();

// Update profile
await profileAPI.updateProfile({
  name: "John Doe",
  phone: "+1234567890",
  address: "123 Main St",
  city: "New York",
  state: "NY",
  country: "USA",
  zip_code: "10001",
  bio: "Experienced caregiver"
});

// Upload photo
const photoFile = document.getElementById('photo').files[0];
await profileAPI.uploadPhoto(photoFile);

// Delete photo
await profileAPI.deletePhoto();

// Upload document
const docFile = document.getElementById('doc').files[0];
await profileAPI.uploadDocument(docFile, "id_card", "National ID");

// Get all documents
const docs = await profileAPI.getDocuments();

// Delete document
await profileAPI.deleteDocument(documentId);
```

---

## 🎨 Design Features

### Color Scheme
```
Primary Gradient:  #059669 → #764ba2
Background:        #f8f9fa
White:             #ffffff
Text Dark:         #333333
Text Medium:       #666666
Text Light:        #999999
Border:            #e0e0e0
Success:           #1a9c73
Danger:            #dc3545
```

### Responsive Breakpoints
- **Desktop:** >992px - Full side-by-side layout
- **Tablet:** 768-992px - Adjusted layout
- **Mobile:** <768px - Stacked layout

### Animations
- Fade in page transitions (0.3s)
- Slide down dropdowns (0.2s)
- Smooth hover effects
- Loading spinners

---

## 🔒 Authentication Flow

1. User visits `/signup` or `/login`
2. Fills form with validation
3. Form submits to Laravel API
4. API returns token + user data
5. Token stored in localStorage
6. User state updated in AuthContext
7. Header updates to show user dropdown
8. User redirected to home page
9. Profile page accessible at `/profile`

---

## 💻 Using Auth in Components

```javascript
import { useAuth } from './context/AuthContext';

function MyComponent() {
  const { user, isAuthenticated, loading, logout } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <p>Please login</p>;
  }
  
  return (
    <div>
      <h1>Welcome {user.name}!</h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

---

## 📋 API Endpoints Integrated

### Auth Endpoints
✅ `POST /api/v1/auth/register` - Register new user
✅ `POST /api/v1/auth/login` - Login user
✅ `GET /api/v1/auth/me` - Get current authenticated user
✅ `POST /api/v1/auth/logout` - Logout current session
✅ `POST /api/v1/auth/logout-all` - Logout from all devices
✅ `POST /api/v1/auth/refresh` - Refresh authentication token

### Profile Endpoints
✅ `GET /api/v1/profile` - Get user profile
✅ `PUT /api/v1/profile` - Update profile information
✅ `POST /api/v1/profile/photo` - Upload profile photo
✅ `DELETE /api/v1/profile/photo` - Delete profile photo
✅ `POST /api/v1/profile/documents` - Upload document
✅ `GET /api/v1/profile/documents` - Get all documents
✅ `DELETE /api/v1/profile/documents/:id` - Delete document

---

## ✅ Testing Checklist

### Authentication
- [ ] Navigate to `/signup`
- [ ] Fill registration form
- [ ] Select role (Client or Provider)
- [ ] Submit form
- [ ] Verify auto-login after registration
- [ ] Check token in localStorage
- [ ] See user dropdown in header
- [ ] Click dropdown to see menu
- [ ] Logout
- [ ] Navigate to `/login`
- [ ] Login with credentials
- [ ] Verify successful login

### Profile Management
- [ ] Navigate to `/profile`
- [ ] View Personal Info tab
- [ ] Update profile information
- [ ] Save changes
- [ ] Upload profile photo
- [ ] Delete profile photo
- [ ] Switch to Documents tab
- [ ] Upload a document
- [ ] View uploaded documents
- [ ] Delete a document
- [ ] Switch to Security tab
- [ ] Switch to Settings tab
- [ ] Toggle notification settings

### Responsive Testing
- [ ] Test on desktop (>1200px)
- [ ] Test on tablet (768-992px)
- [ ] Test on mobile (<768px)
- [ ] Check all forms are usable
- [ ] Verify dropdown menus work
- [ ] Test photo upload on mobile

---

## 🐛 Troubleshooting

### Issue: API Connection Failed
**Solution:**
1. Check if Laravel backend is running
2. Verify API URL in `src/services/api.js`
3. Check CORS configuration on backend
4. Look at browser console for errors

### Issue: Token Not Saving
**Solution:**
1. Check localStorage in browser DevTools
2. Verify API returns `token` field
3. Check token format (should be string)

### Issue: Login Not Working
**Solution:**
1. Verify credentials are correct
2. Check API endpoint URL
3. Look at network tab in DevTools
4. Check backend logs for errors

### Issue: Profile Not Updating
**Solution:**
1. Verify token is valid
2. Check API endpoint
3. Verify all required fields are filled
4. Check backend validation rules

### Issue: Photos Not Uploading
**Solution:**
1. Check file size (backend may have limit)
2. Verify file type is allowed
3. Check FormData is being sent correctly
4. Look at network request in DevTools

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Then drag & drop the 'dist' folder to Netlify
```

---

## 📝 Important Notes

1. **API URL Configuration**
   - Must update `API_BASE_URL` in `src/services/api.js`
   - This is the MOST IMPORTANT step!

2. **CORS Setup**
   - Your Laravel backend must allow requests from frontend domain
   - Add frontend URL to allowed origins

3. **Token Management**
   - Tokens are stored in localStorage
   - Automatically added to request headers
   - Cleared on logout

4. **Auto-Login**
   - After registration, user is automatically logged in
   - No need to login again

5. **Bootstrap Icons**
   - Already installed and imported
   - Used throughout the application

---

## 📚 Documentation Files

- **README_AUTH.md** - Complete project documentation
- **QUICK_START.md** - Quick start guide with examples
- **SETUP_GUIDE.md** - This file

---

## 💡 Tips

1. **Development**
   - Use React DevTools to inspect AuthContext state
   - Use Network tab to monitor API calls
   - Check localStorage for token

2. **Debugging**
   - Open browser console for errors
   - Check network requests
   - Verify API responses

3. **Customization**
   - Change colors in `src/assets/style.css`
   - Modify forms as needed
   - Add more API endpoints in `src/services/api.js`

---

## 🎯 Next Steps

1. ✅ Extract this ZIP file
2. ✅ Update API URL in `src/services/api.js`
3. ✅ Run `npm install`
4. ✅ Run `npm run dev`
5. ✅ Test sign up and login
6. ✅ Explore profile features
7. ✅ Customize as needed

---

## 🎉 You're All Set!

Everything is working and production-ready. Just update the API URL and start using it!

**Need Help?**
- Check README_AUTH.md for complete API documentation
- Check QUICK_START.md for quick examples
- Look at the code - it's well-commented!

**Happy Coding! 🚀**
