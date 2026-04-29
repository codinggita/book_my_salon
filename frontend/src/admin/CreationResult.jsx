import React, { useState } from 'react';

/**
 * CreationResult Component
 * 
 * Title: Creation Successful
 * Description: Displays the final account details and provides easy sharing of login credentials.
 * 
 * Logic:
 * - Displays a summary of the newly created salon and owner account.
 * - Provides a "Copy to Clipboard" utility for sharing credentials.
 * - Offers navigation options to continue or exit the flow.
 */
const CreationResult = ({ data, onReset, onFinish }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        const text = `Salon: ${data.salonName}\nOwner: ${data.ownerName}\nEmail: ${data.email}\nPassword: ${data.password}`;
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="animate-fade-in" style={{ padding: '20px' }}>
            <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto', padding: '48px', textAlign: 'center' }}>
                {/* Success Animation Container */}
                <div style={{ marginBottom: '32px' }}>
                    <div style={{ 
                        width: '80px', 
                        height: '80px', 
                        background: '#dcfce7', 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        margin: '0 auto 24px',
                        border: '2px solid #22c55e'
                    }}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                    <h2 style={{ fontSize: '32px', marginBottom: '8px', color: '#15803d' }}>Successfully Created!</h2>
                    <p style={{ color: 'var(--text)', fontSize: '16px' }}>The salon owner account is now active and ready for use.</p>
                </div>

                {/* Summary Card */}
                <div style={{ 
                    background: 'var(--bg)', 
                    border: '1px solid var(--border)', 
                    borderRadius: '20px', 
                    padding: '32px', 
                    textAlign: 'left',
                    marginBottom: '40px'
                }}>
                    <div style={{ marginBottom: '24px' }}>
                        <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>Salon Entity</span>
                        <p style={{ fontSize: '20px', fontWeight: '600', color: 'var(--text-h)', marginTop: '4px' }}>{data.salonName}</p>
                        <p style={{ fontSize: '14px', color: 'var(--text)' }}>{data.category} Salon</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div>
                            <span style={{ fontSize: '12px', color: 'var(--text)', display: 'block', marginBottom: '4px' }}>Owner</span>
                            <p style={{ fontWeight: '500', color: 'var(--text-h)' }}>{data.ownerName}</p>
                        </div>
                        <div>
                            <span style={{ fontSize: '12px', color: 'var(--text)', display: 'block', marginBottom: '4px' }}>Login Email</span>
                            <p style={{ fontWeight: '500', color: 'var(--text-h)', fontSize: '14px' }}>{data.email}</p>
                        </div>
                    </div>

                    <div style={{ 
                        marginTop: '24px', 
                        padding: '16px', 
                        background: 'var(--code-bg)', 
                        borderRadius: '12px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div>
                            <span style={{ fontSize: '11px', color: 'var(--text)', display: 'block' }}>Initial Password</span>
                            <code style={{ fontSize: '16px', color: 'var(--text-h)' }}>{data.password}</code>
                        </div>
                        <button 
                            onClick={copyToClipboard}
                            style={{ 
                                padding: '8px 12px', 
                                borderRadius: '8px', 
                                border: '1px solid var(--border)',
                                background: copied ? '#22c55e' : 'var(--bg)',
                                color: copied ? 'white' : 'var(--text-h)',
                                fontSize: '12px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px'
                            }}
                        >
                            {copied ? (
                                <>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Copied!
                                </>
                            ) : (
                                <>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                    Copy Credentials
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '16px' }}>
                    <button 
                        onClick={onReset}
                        style={{ 
                            flex: 1,
                            padding: '16px',
                            borderRadius: '12px',
                            border: '1px solid var(--border)',
                            background: 'transparent',
                            color: 'var(--text-h)',
                            fontWeight: '600',
                            cursor: 'pointer'
                        }}
                    >
                        Create Another
                    </button>
                    <button 
                        onClick={onFinish}
                        className="premium-button"
                        style={{ flex: 1.5 }}
                    >
                        Return to Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreationResult;
