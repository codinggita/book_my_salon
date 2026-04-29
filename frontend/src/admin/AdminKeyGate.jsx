import React, { useState } from 'react';

/**
 * AdminKeyGate Component
 * 
 * Title: Admin Security Gate
 * Description: Ensures only authorized high-level administrators can create new salon owner accounts.
 * 
 * Logic:
 * - Manages local state for the entered key.
 * - Validates the key against a predefined environment variable or placeholder.
 * - Triggers an onSuccess callback to unlock the creation form.
 */
const AdminKeyGate = ({ onSuccess }) => {
    const [key, setKey] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // In a real app, this would be validated via a backend call
    // For now, we use a placeholder check
    const MASTER_KEY = import.meta.env.VITE_ADMIN_MASTER_KEY || 'SALON_ADMIN_2024';

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Artificial delay for premium feel
        setTimeout(() => {
            if (key === MASTER_KEY) {
                onSuccess();
            } else {
                setError('Invalid Master Key. Access Denied.');
                setIsLoading(false);
            }
        }, 800);
    };

    return (
        <div className="animate-fade-in" style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: '60vh',
            padding: '20px'
        }}>
            <div className="glass-card" style={{ 
                width: '100%', 
                maxWidth: '450px', 
                padding: '48px',
                textAlign: 'center'
            }}>
                <div style={{ marginBottom: '32px' }}>
                    <div style={{ 
                        width: '64px', 
                        height: '64px', 
                        background: 'var(--accent-bg)', 
                        borderRadius: '16px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        margin: '0 auto 24px',
                        border: '1px solid var(--accent-border)'
                    }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                    </div>
                    <h2 className="gradient-text" style={{ fontSize: '28px', marginBottom: '12px' }}>Security Gate</h2>
                    <p style={{ color: 'var(--text)', fontSize: '15px' }}>
                        Please enter the Master Key to access the Salon Owner Creation portal.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Master Key</label>
                        <input 
                            type="password" 
                            className="premium-input" 
                            placeholder="••••••••••••"
                            value={key}
                            onChange={(e) => setKey(e.target.value)}
                            autoFocus
                        />
                        {error && <p style={{ color: '#ff4d4d', fontSize: '13px', marginTop: '8px', fontWeight: '500' }}>{error}</p>}
                    </div>

                    <button 
                        type="submit" 
                        className="premium-button" 
                        style={{ width: '100%' }}
                        disabled={isLoading || !key}
                    >
                        {isLoading ? 'Verifying...' : 'Unlock Portal'}
                        {!isLoading && (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        )}
                    </button>
                </form>

                <p style={{ marginTop: '32px', fontSize: '12px', color: 'var(--text)', opacity: 0.6 }}>
                    Layer 2 Authorization Required • IP Logged
                </p>
            </div>
        </div>
    );
};

export default AdminKeyGate;
