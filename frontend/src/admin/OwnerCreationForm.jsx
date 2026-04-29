import React, { useState } from 'react';

/**
 * OwnerCreationForm Component
 * 
 * Title: Salon Owner Registration
 * Description: A specialized form to onboard new salon partners with automatic account generation.
 * 
 * Logic:
 * - Collects comprehensive data for both the salon entity and its primary owner.
 * - Validates input fields before submission.
 * - Simulates an API call to create the account.
 */
const OwnerCreationForm = ({ onComplete, onCancel }) => {
    const [formData, setFormData] = useState({
        salonName: '',
        category: 'Unisex',
        ownerName: '',
        email: '',
        phone: '',
        password: Math.random().toString(36).slice(-8) // Generate a random initial password
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Basic validation
        if (!formData.salonName || !formData.ownerName || !formData.email) {
            setError('Please fill in all required fields.');
            setIsLoading(false);
            return;
        }

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            onComplete(formData);
        } catch (err) {
            setError('Failed to create account. Please try again.');
            setIsLoading(false);
        }
    };

    return (
        <div className="animate-fade-in" style={{ padding: '20px' }}>
            <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                    <div>
                        <h2 className="gradient-text" style={{ fontSize: '28px', marginBottom: '8px' }}>Register New Salon</h2>
                        <p style={{ color: 'var(--text)', fontSize: '15px' }}>Onboard a new partner to the SmartSalon ecosystem.</p>
                    </div>
                    <button 
                        onClick={onCancel}
                        style={{ 
                            background: 'none', 
                            border: 'none', 
                            color: 'var(--text)', 
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '14px'
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                        Cancel
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                        {/* Salon Details */}
                        <div>
                            <h3 style={{ fontSize: '18px', marginBottom: '20px', color: 'var(--text-h)', borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>Salon Information</h3>
                            
                            <div className="form-group">
                                <label className="form-label">Salon Name *</label>
                                <input 
                                    name="salonName"
                                    className="premium-input" 
                                    placeholder="e.g. Royal Glow Spa"
                                    value={formData.salonName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Category</label>
                                <select 
                                    name="category"
                                    className="premium-input"
                                    value={formData.category}
                                    onChange={handleChange}
                                >
                                    <option value="Unisex">Unisex</option>
                                    <option value="Mens">Men's Only</option>
                                    <option value="Womens">Women's Only</option>
                                    <option value="Spa">Spa & Wellness</option>
                                </select>
                            </div>
                        </div>

                        {/* Owner Details */}
                        <div>
                            <h3 style={{ fontSize: '18px', marginBottom: '20px', color: 'var(--text-h)', borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>Owner Account</h3>
                            
                            <div className="form-group">
                                <label className="form-label">Owner Name *</label>
                                <input 
                                    name="ownerName"
                                    className="premium-input" 
                                    placeholder="Full Name"
                                    value={formData.ownerName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email Address *</label>
                                <input 
                                    name="email"
                                    type="email"
                                    className="premium-input" 
                                    placeholder="owner@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Phone Number</label>
                                <input 
                                    name="phone"
                                    className="premium-input" 
                                    placeholder="+91 00000 00000"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div style={{ 
                        marginTop: '40px', 
                        padding: '24px', 
                        background: 'var(--accent-bg)', 
                        borderRadius: '16px',
                        border: '1px dashed var(--accent-border)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div>
                            <p style={{ fontWeight: '600', color: 'var(--text-h)', marginBottom: '4px' }}>System Generated Password</p>
                            <code style={{ fontSize: '18px', letterSpacing: '2px', color: 'var(--accent)' }}>{formData.password}</code>
                        </div>
                        <p style={{ fontSize: '13px', color: 'var(--text)', maxWidth: '250px' }}>
                            The owner will be prompted to change this password upon their first login.
                        </p>
                    </div>

                    {error && (
                        <div style={{ marginTop: '24px', padding: '12px', background: '#fff5f5', color: '#e53e3e', borderRadius: '8px', fontSize: '14px', textAlign: 'center' }}>
                            {error}
                        </div>
                    )}

                    <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'flex-end' }}>
                        <button 
                            type="submit" 
                            className="premium-button" 
                            disabled={isLoading}
                            style={{ minWidth: '200px' }}
                        >
                            {isLoading ? 'Processing...' : 'Create Account'}
                            {!isLoading && (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="8.5" cy="7" r="4"></circle>
                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                </svg>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OwnerCreationForm;
