import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { profileAPI } from '../services/api';

const Profile = () => {
  const { user, updateUserData } = useAuth();
  
  const [activeTab, setActiveTab] = useState('info');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  
  // Profile data
  const [profileData, setProfileData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zip_code: '',
    bio: ''
  });

  // Photo state
  const [photoPreview, setPhotoPreview] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);
  
  // Documents state
  const [documents, setDocuments] = useState([]);
  const [documentUpload, setDocumentUpload] = useState({
    file: null,
    type: 'id_card',
    description: ''
  });

  useEffect(() => {
    loadProfile();
    loadDocuments();
  }, []);

  const loadProfile = async () => {
    try {
      const data = await profileAPI.getProfile();
      setProfileData({
        name: data.name || '',
        phone: data.phone || '',
        address: data.address || '',
        city: data.city || '',
        state: data.state || '',
        country: data.country || '',
        zip_code: data.zip_code || '',
        bio: data.bio || ''
      });
      if (data.photo) {
        setPhotoPreview(data.photo);
      }
    } catch (error) {
      console.error('Failed to load profile:', error);
    }
  };

  const loadDocuments = async () => {
    try {
      const data = await profileAPI.getDocuments();
      setDocuments(data.documents || []);
    } catch (error) {
      console.error('Failed to load documents:', error);
    }
  };

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 5000);
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const data = await profileAPI.updateProfile(profileData);
      updateUserData(data.user || data);
      showMessage('success', 'Profile updated successfully!');
    } catch (error) {
      showMessage('danger', error.message || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePhotoUpload = async () => {
    if (!photoFile) return;
    
    setLoading(true);
    try {
      const data = await profileAPI.uploadPhoto(photoFile);
      setPhotoPreview(data.photo_url);
      setPhotoFile(null);
      showMessage('success', 'Photo uploaded successfully!');
    } catch (error) {
      showMessage('danger', error.message || 'Failed to upload photo');
    } finally {
      setLoading(false);
    }
  };

  const handlePhotoDelete = async () => {
    if (!window.confirm('Are you sure you want to delete your profile photo?')) return;
    
    setLoading(true);
    try {
      await profileAPI.deletePhoto();
      setPhotoPreview(null);
      setPhotoFile(null);
      showMessage('success', 'Photo deleted successfully!');
    } catch (error) {
      showMessage('danger', error.message || 'Failed to delete photo');
    } finally {
      setLoading(false);
    }
  };

  const handleDocumentChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setDocumentUpload(prev => ({ ...prev, file: files[0] }));
    } else {
      setDocumentUpload(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleDocumentUpload = async (e) => {
    e.preventDefault();
    if (!documentUpload.file) return;
    
    setLoading(true);
    try {
      await profileAPI.uploadDocument(
        documentUpload.file,
        documentUpload.type,
        documentUpload.description
      );
      await loadDocuments();
      setDocumentUpload({ file: null, type: 'id_card', description: '' });
      document.getElementById('documentFile').value = '';
      showMessage('success', 'Document uploaded successfully!');
    } catch (error) {
      showMessage('danger', error.message || 'Failed to upload document');
    } finally {
      setLoading(false);
    }
  };

  const handleDocumentDelete = async (documentId) => {
    if (!window.confirm('Are you sure you want to delete this document?')) return;
    
    setLoading(true);
    try {
      await profileAPI.deleteDocument(documentId);
      await loadDocuments();
      showMessage('success', 'Document deleted successfully!');
    } catch (error) {
      showMessage('danger', error.message || 'Failed to delete document');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-page">
      <div className="container py-5">
        {/* Page Header */}
        <div className="profile-header mb-4">
          <h1 className="display-6 mb-2">My Profile</h1>
          <p className="text-muted">Manage your account settings and preferences</p>
        </div>

        {/* Message Alert */}
        {message.text && (
          <div className={`alert alert-${message.type} alert-dismissible fade show`} role="alert">
            <i className={`bi ${message.type === 'success' ? 'bi-check-circle' : 'bi-exclamation-circle'} me-2`}></i>
            {message.text}
            <button type="button" className="btn-close" onClick={() => setMessage({ type: '', text: '' })}></button>
          </div>
        )}

        <div className="row g-4">
          {/* Sidebar */}
          <div className="col-lg-3">
            <div className="profile-sidebar">
              {/* Profile Card */}
              <div className="profile-card text-center mb-4">
                <div className="profile-avatar-wrapper">
                  {photoPreview ? (
                    <img src={photoPreview} alt="Profile" className="profile-avatar" />
                  ) : (
                    <div className="profile-avatar-placeholder">
                      <i className="bi bi-person-circle"></i>
                    </div>
                  )}
                  <label htmlFor="photoUpload" className="profile-avatar-edit">
                    <i className="bi bi-camera"></i>
                  </label>
                  <input
                    type="file"
                    id="photoUpload"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    style={{ display: 'none' }}
                  />
                </div>
                <h4 className="mt-3 mb-1">{user?.name || 'User'}</h4>
                <p className="text-muted small mb-2">{user?.email}</p>
                <span className={`badge ${user?.role === 'provider' ? 'bg-success' : 'bg-primary'}`}>
                  {user?.role === 'provider' ? 'Care Provider' : 'Client'}
                </span>
                
                {photoFile && (
                  <div className="mt-3">
                    <button
                      className="btn btn-sm btn-primary me-2"
                      onClick={handlePhotoUpload}
                      disabled={loading}
                    >
                      <i className="bi bi-upload me-1"></i>
                      Upload
                    </button>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => {
                        setPhotoFile(null);
                        loadProfile();
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                )}
                
                {photoPreview && !photoFile && (
                  <button
                    className="btn btn-sm btn-outline-danger mt-3"
                    onClick={handlePhotoDelete}
                    disabled={loading}
                  >
                    <i className="bi bi-trash me-1"></i>
                    Delete Photo
                  </button>
                )}
              </div>

              {/* Navigation Tabs */}
              <div className="profile-nav">
                <button
                  className={`profile-nav-item ${activeTab === 'info' ? 'active' : ''}`}
                  onClick={() => setActiveTab('info')}
                >
                  <i className="bi bi-person me-2"></i>
                  Personal Info
                </button>
                <button
                  className={`profile-nav-item ${activeTab === 'documents' ? 'active' : ''}`}
                  onClick={() => setActiveTab('documents')}
                >
                  <i className="bi bi-file-text me-2"></i>
                  Documents
                </button>
                <button
                  className={`profile-nav-item ${activeTab === 'security' ? 'active' : ''}`}
                  onClick={() => setActiveTab('security')}
                >
                  <i className="bi bi-shield-lock me-2"></i>
                  Security
                </button>
                <button
                  className={`profile-nav-item ${activeTab === 'settings' ? 'active' : ''}`}
                  onClick={() => setActiveTab('settings')}
                >
                  <i className="bi bi-gear me-2"></i>
                  Settings
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-9">
            <div className="profile-content">
              {/* Personal Info Tab */}
              {activeTab === 'info' && (
                <div className="profile-section">
                  <div className="section-header">
                    <h3>Personal Information</h3>
                    <p className="text-muted">Update your personal details</p>
                  </div>

                  <form onSubmit={handleProfileSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          value={profileData.name}
                          onChange={handleProfileChange}
                          required
                        />
                      </div>
                      
                      <div className="col-md-6">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          className="form-control"
                          value={profileData.phone}
                          onChange={handleProfileChange}
                          placeholder="+1234567890"
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label">Address</label>
                        <input
                          type="text"
                          name="address"
                          className="form-control"
                          value={profileData.address}
                          onChange={handleProfileChange}
                          placeholder="Street address"
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">City</label>
                        <input
                          type="text"
                          name="city"
                          className="form-control"
                          value={profileData.city}
                          onChange={handleProfileChange}
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">State/Province</label>
                        <input
                          type="text"
                          name="state"
                          className="form-control"
                          value={profileData.state}
                          onChange={handleProfileChange}
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">Country</label>
                        <input
                          type="text"
                          name="country"
                          className="form-control"
                          value={profileData.country}
                          onChange={handleProfileChange}
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">Zip/Postal Code</label>
                        <input
                          type="text"
                          name="zip_code"
                          className="form-control"
                          value={profileData.zip_code}
                          onChange={handleProfileChange}
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label">Bio</label>
                        <textarea
                          name="bio"
                          className="form-control"
                          rows="4"
                          value={profileData.bio}
                          onChange={handleProfileChange}
                          placeholder="Tell us about yourself..."
                        ></textarea>
                      </div>

                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2"></span>
                              Saving...
                            </>
                          ) : (
                            <>
                              <i className="bi bi-save me-2"></i>
                              Save Changes
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}

              {/* Documents Tab */}
              {activeTab === 'documents' && (
                <div className="profile-section">
                  <div className="section-header">
                    <h3>Documents</h3>
                    <p className="text-muted">Upload and manage your documents</p>
                  </div>

                  {/* Upload Form */}
                  <div className="document-upload-form mb-4">
                    <form onSubmit={handleDocumentUpload}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label">Document Type</label>
                          <select
                            name="type"
                            className="form-select"
                            value={documentUpload.type}
                            onChange={handleDocumentChange}
                            required
                          >
                            <option value="id_card">ID Card</option>
                            <option value="passport">Passport</option>
                            <option value="license">License</option>
                            <option value="certificate">Certificate</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">Choose File</label>
                          <input
                            type="file"
                            id="documentFile"
                            name="file"
                            className="form-control"
                            onChange={handleDocumentChange}
                            accept=".pdf,.jpg,.jpeg,.png"
                            required
                          />
                        </div>

                        <div className="col-12">
                          <label className="form-label">Description</label>
                          <input
                            type="text"
                            name="description"
                            className="form-control"
                            value={documentUpload.description}
                            onChange={handleDocumentChange}
                            placeholder="e.g., National ID Card"
                          />
                        </div>

                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={loading || !documentUpload.file}
                          >
                            {loading ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2"></span>
                                Uploading...
                              </>
                            ) : (
                              <>
                                <i className="bi bi-upload me-2"></i>
                                Upload Document
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  {/* Documents List */}
                  <div className="documents-list">
                    {documents.length === 0 ? (
                      <div className="text-center py-5">
                        <i className="bi bi-file-earmark-text" style={{ fontSize: '3rem', color: '#ddd' }}></i>
                        <p className="text-muted mt-3">No documents uploaded yet</p>
                      </div>
                    ) : (
                      <div className="row g-3">
                        {documents.map((doc) => (
                          <div key={doc.id} className="col-md-6">
                            <div className="document-card">
                              <div className="document-icon">
                                <i className="bi bi-file-earmark-pdf"></i>
                              </div>
                              <div className="document-info">
                                <h5>{doc.description || doc.type}</h5>
                                <p className="text-muted small mb-1">
                                  Type: {doc.type}
                                </p>
                                <p className="text-muted small mb-0">
                                  Uploaded: {new Date(doc.created_at).toLocaleDateString()}
                                </p>
                              </div>
                              <div className="document-actions">
                                <button
                                  className="btn btn-sm btn-outline-danger"
                                  onClick={() => handleDocumentDelete(doc.id)}
                                >
                                  <i className="bi bi-trash"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Security Tab */}
              {activeTab === 'security' && (
                <div className="profile-section">
                  <div className="section-header">
                    <h3>Security Settings</h3>
                    <p className="text-muted">Manage your account security</p>
                  </div>

                  <div className="security-options">
                    <div className="security-item">
                      <div className="security-info">
                        <i className="bi bi-key"></i>
                        <div>
                          <h5>Change Password</h5>
                          <p className="text-muted small">Update your password regularly</p>
                        </div>
                      </div>
                      <button className="btn btn-outline-primary">Change</button>
                    </div>

                    <div className="security-item">
                      <div className="security-info">
                        <i className="bi bi-shield-check"></i>
                        <div>
                          <h5>Two-Factor Authentication</h5>
                          <p className="text-muted small">Add an extra layer of security</p>
                        </div>
                      </div>
                      <button className="btn btn-outline-primary">Enable</button>
                    </div>

                    <div className="security-item">
                      <div className="security-info">
                        <i className="bi bi-device-hdd"></i>
                        <div>
                          <h5>Active Sessions</h5>
                          <p className="text-muted small">Manage your logged in devices</p>
                        </div>
                      </div>
                      <button className="btn btn-outline-danger">Logout All</button>
                    </div>
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div className="profile-section">
                  <div className="section-header">
                    <h3>Account Settings</h3>
                    <p className="text-muted">Manage your preferences</p>
                  </div>

                  <div className="settings-options">
                    <div className="setting-item">
                      <div className="setting-info">
                        <h5>Email Notifications</h5>
                        <p className="text-muted small">Receive updates via email</p>
                      </div>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" defaultChecked />
                      </div>
                    </div>

                    <div className="setting-item">
                      <div className="setting-info">
                        <h5>SMS Notifications</h5>
                        <p className="text-muted small">Receive text message updates</p>
                      </div>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </div>

                    <div className="setting-item">
                      <div className="setting-info">
                        <h5>Profile Visibility</h5>
                        <p className="text-muted small">Make your profile public</p>
                      </div>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" defaultChecked />
                      </div>
                    </div>

                    <div className="setting-item border-danger">
                      <div className="setting-info">
                        <h5 className="text-danger">Delete Account</h5>
                        <p className="text-muted small">Permanently delete your account</p>
                      </div>
                      <button className="btn btn-danger">Delete</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
