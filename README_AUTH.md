# 🎉 Care Platform - Complete Authentication System

## ✨ What's Included

### 1. **Centralized API Service** (`src/services/api.js`)
**ALL API calls in ONE professional file!**

✅ Authentication APIs
✅ Profile Management APIs  
✅ Categories APIs
✅ Listings APIs
✅ Automatic token management
✅ Error handling
✅ Request/Response helpers

### 2. **Auth Context** (`src/context/AuthContext.jsx`)
Global authentication state management

### 3. **Beautiful Pages**
- **Sign Up** (`src/pages/SignUp.jsx`) - Fully designed & responsive
- **Login** (`src/pages/Login.jsx`) - Fully designed & responsive
- **Profile** (`src/pages/Profile.jsx`) - Complete profile management

### 4. **Updated Header** (`src/components/Header.jsx`)
- Shows Sign In/Join buttons when logged out
- Shows user dropdown when logged in
- Logout functionality

---

## 🚀 Quick Start

### 1. Configure API URL
Open `src/services/api.js` and update line 8:
```javascript
const API_BASE_URL = 'http://localhost:8000/api/v1';
// Change to your actual Laravel API URL
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Access Pages
- Home: `http://localhost:5173/`
- Sign Up: `http://localhost:5173/signup`
- Login: `http://localhost:5173/login`
- Profile: `http://localhost:5173/profile`

---

## 📡 API Integration

### Using Auth APIs
```javascript
import { authAPI } from './services/api';

// Register
const result = await authAPI.register({
  name: "John Doe",
  email: "john@example.com",
  password: "password123",
  password_confirmation: "password123",
  role: "client"
});

// Login
const result = await authAPI.login({
  email: "john@example.com",
  password: "password123"
});

// Get Current User
const user = await authAPI.getCurrentUser();

// Logout
await authAPI.logout();
```

### Using Profile APIs
```javascript
import { profileAPI } from './services/api';

// Get Profile
const profile = await profileAPI.getProfile();

// Update Profile
await profileAPI.updateProfile({
  name: "John Doe",
  phone: "+1234567890",
  city: "New York"
});

// Upload Photo
const file = document.getElementById('photo').files[0];
await profileAPI.uploadPhoto(file);

// Upload Document
await profileAPI.uploadDocument(file, "id_card", "National ID");
```

---

## 🎨 Features

### Sign Up Page
- ✅ Modern gradient design
- ✅ Role selection (Client/Provider)
- ✅ Form validation
- ✅ Password strength check
- ✅ Password visibility toggle
- ✅ Social login placeholders
- ✅ Fully responsive

### Login Page
- ✅ Clean professional design
- ✅ Remember me option
- ✅ Forgot password link
- ✅ Form validation
- ✅ Error handling
- ✅ Fully responsive

### Profile Page
**4 Tabs:**
1. **Personal Info** - Update all profile details
2. **Documents** - Upload/manage documents
3. **Security** - Password, 2FA, sessions
4. **Settings** - Notifications, privacy

**Features:**
- ✅ Photo upload/delete
- ✅ Document management
- ✅ Real-time updates
- ✅ Success/error messages
- ✅ Loading states
- ✅ Fully responsive

---

## 📱 Responsive Design

All pages work perfectly on:
- ✅ Desktop (>992px)
- ✅ Tablet (768-992px)
- ✅ Mobile (<768px)

---

## 🔒 Authentication Flow

1. User fills sign-up/login form
2. API call to Laravel backend
3. Token stored in localStorage
4. User state updated globally
5. Header shows user dropdown
6. Protected routes accessible

---

## 🎯 Using Auth in Components

```javascript
import { useAuth } from './context/AuthContext';

function MyComponent() {
  const { user, isAuthenticated, logout } = useAuth();
  
  return (
    <div>
      {isAuthenticated ? (
        <>
          <h1>Welcome {user.name}!</h1>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
}
```

---

## 📋 API Endpoints Used

### Auth Endpoints
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login user
- `GET /api/v1/auth/me` - Get current user
- `POST /api/v1/auth/logout` - Logout
- `POST /api/v1/auth/logout-all` - Logout all devices
- `POST /api/v1/auth/refresh` - Refresh token

### Profile Endpoints
- `GET /api/v1/profile` - Get profile
- `PUT /api/v1/profile` - Update profile
- `POST /api/v1/profile/photo` - Upload photo
- `DELETE /api/v1/profile/photo` - Delete photo
- `POST /api/v1/profile/documents` - Upload document
- `GET /api/v1/profile/documents` - Get documents
- `DELETE /api/v1/profile/documents/:id` - Delete document

---

## 🎨 Color Scheme

```css
Primary Gradient: #059669 → #764ba2
Background: #f8f9fa
White: #ffffff
Text: #333, #666, #999
Border: #e0e0e0
Success: #1a9c73
Danger: #dc3545
```

---

## 🔧 Project Structure

```
src/
├── services/
│   └── api.js                 ← All APIs in one file!
│
├── context/
│   └── AuthContext.jsx        ← Global auth state
│
├── pages/
│   ├── SignUp.jsx             ← Sign up page
│   ├── Login.jsx              ← Login page
│   └── Profile.jsx            ← Profile management
│
├── components/
│   ├── Header.jsx             ← Updated with auth
│   └── ... (other components)
│
└── assets/
    └── style.css              ← All styles
```

---

## ✅ Testing Checklist

- [ ] Sign up with new account
- [ ] Login with credentials
- [ ] See user dropdown in header
- [ ] View profile page
- [ ] Update personal info
- [ ] Upload profile photo
- [ ] Delete profile photo
- [ ] Upload document
- [ ] Delete document
- [ ] Logout
- [ ] Login again

---

## 💡 Important Notes

1. **API URL**: Must update in `src/services/api.js`
2. **CORS**: Your Laravel backend must allow your frontend domain
3. **Bootstrap Icons**: Already installed
4. **Token Storage**: Uses localStorage
5. **Auto-Login**: After registration, user is auto-logged in

---

## 🐛 Troubleshooting

### API Errors
- Check API URL is correct
- Verify Laravel backend is running
- Check CORS configuration
- Look at browser console for errors

### Token Issues
- Clear localStorage
- Check token format in API response
- Verify backend returns `token` field

### Styling Issues
- Clear browser cache
- Check if bootstrap-icons is imported
- Verify CSS file is loaded

---

## 🚀 Next Steps

1. Update API URL
2. Run `npm install`
3. Run `npm run dev`
4. Test sign up and login
5. Explore profile features

---

## 📞 Support

Everything is working and ready to use! Just:
1. Update the API URL in `src/services/api.js`
2. Make sure your Laravel backend is running
3. Start the dev server with `npm run dev`

**That's it! You're ready to go!** 🎉
