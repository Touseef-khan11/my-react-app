import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SignUp = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    user_type: 'client'
  });
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.first_name.trim()) newErrors.first_name = 'First name is required';
    if (!formData.last_name.trim()) newErrors.last_name = 'Last name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (!formData.password_confirmation) {
      newErrors.password_confirmation = 'Please confirm your password';
    } else if (formData.password !== formData.password_confirmation) {
      newErrors.password_confirmation = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setLoading(true);
    setErrors({});
    
    try {
      const result = await register(formData);
      
      if (result.success) {
        navigate('/');
      } else {
        if (result.error.errors) {
          setErrors(result.error.errors);
        } else {
          setErrors({ general: result.error.message || 'Registration failed. Please try again.' });
        }
      }
    } catch (error) {
      setErrors({ general: 'An unexpected error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-card-inner">
            {/* Brand */}
            <div className="auth-brand">
              <div className="auth-brand-icon">
                <i className="bi bi-heart-pulse"></i>
              </div>
              <h1>Create your account</h1>
              <p>Join our care community today</p>
            </div>

            {/* Error Alert */}
            {errors.general && (
              <div className="alert alert-danger">
                <i className="bi bi-exclamation-circle"></i>
                <span>{errors.general}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="auth-form">
              {/* Name Fields */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first_name" className="form-label form-label-required">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    className={`form-input ${errors.first_name ? 'error' : ''}`}
                    placeholder="John"
                    value={formData.first_name}
                    onChange={handleChange}
                    disabled={loading}
                  />
                  {errors.first_name && (
                    <div className="error-message">
                      <i className="bi bi-exclamation-circle"></i>
                      <span>{errors.first_name}</span>
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="last_name" className="form-label form-label-required">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    className={`form-input ${errors.last_name ? 'error' : ''}`}
                    placeholder="Doe"
                    value={formData.last_name}
                    onChange={handleChange}
                    disabled={loading}
                  />
                  {errors.last_name && (
                    <div className="error-message">
                      <i className="bi bi-exclamation-circle"></i>
                      <span>{errors.last_name}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email" className="form-label form-label-required">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                  autoComplete="email"
                />
                {errors.email && (
                  <div className="error-message">
                    <i className="bi bi-exclamation-circle"></i>
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>

              {/* User Type */}
              <div className="form-group">
                <label className="form-label form-label-required">I am looking to</label>
                <div className="role-selector">
                  <div className="role-option">
                    <input
                      type="radio"
                      id="client"
                      name="user_type"
                      value="client"
                      checked={formData.user_type === 'client'}
                      onChange={handleChange}
                      disabled={loading}
                    />
                    <label htmlFor="client" className="role-option-label">
                      <div className="role-option-icon">
                        <i className="bi bi-search"></i>
                      </div>
                      <span className="role-option-text">Find Care</span>
                    </label>
                  </div>
                  
                  <div className="role-option">
                    <input
                      type="radio"
                      id="provider"
                      name="user_type"
                      value="provider"
                      checked={formData.user_type === 'provider'}
                      onChange={handleChange}
                      disabled={loading}
                    />
                    <label htmlFor="provider" className="role-option-label">
                      <div className="role-option-icon">
                        <i className="bi bi-briefcase"></i>
                      </div>
                      <span className="role-option-text">Provide Care</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="form-group">
                <label htmlFor="password" className="form-label form-label-required">
                  Password
                </label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    className={`form-input ${errors.password ? 'error' : ''}`}
                    placeholder="Min. 8 characters"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={loading}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={loading}
                  >
                    <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                  </button>
                </div>
                {errors.password && (
                  <div className="error-message">
                    <i className="bi bi-exclamation-circle"></i>
                    <span>{errors.password}</span>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div className="form-group">
                <label htmlFor="password_confirmation" className="form-label form-label-required">
                  Confirm Password
                </label>
                <div className="password-input-wrapper">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="password_confirmation"
                    name="password_confirmation"
                    className={`form-input ${errors.password_confirmation ? 'error' : ''}`}
                    placeholder="Re-enter password"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                    disabled={loading}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    disabled={loading}
                  >
                    <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                  </button>
                </div>
                {errors.password_confirmation && (
                  <div className="error-message">
                    <i className="bi bi-exclamation-circle"></i>
                    <span>{errors.password_confirmation}</span>
                  </div>
                )}
              </div>

              {/* Terms */}
              <div className="form-checkbox">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  disabled={loading}
                />
                <label htmlFor="terms">
                  I agree to the <Link to="/terms">Terms of Service</Link> and{' '}
                  <Link to="/privacy">Privacy Policy</Link>
                </label>
              </div>

              {/* Submit */}
              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? (
                  <>
                    <div className="spinner"></div>
                    <span>Creating account...</span>
                  </>
                ) : (
                  <>
                    <i className="bi bi-check-circle"></i>
                    <span>Create Account</span>
                  </>
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="auth-footer">
              <p>
                Already have an account? <Link to="/login">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
