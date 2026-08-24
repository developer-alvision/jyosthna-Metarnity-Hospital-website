import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FFF0F5',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <div style={{
            background: '#ffffff',
            padding: '3rem 2.5rem',
            borderRadius: '24px',
            boxShadow: '0 20px 50px rgba(216, 27, 96, 0.12)',
            border: '2px solid rgba(216, 27, 96, 0.2)',
            maxWidth: '500px'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌸</div>
            <h2 style={{ color: '#AD1457', fontFamily: 'serif', marginBottom: '1rem', fontSize: '1.8rem' }}>
              Something went wrong
            </h2>
            <p style={{ color: '#555555', lineHeight: 1.6, marginBottom: '1.8rem', fontSize: '0.95rem' }}>
              An unexpected display issue occurred. Click below to refresh and load Jyothsna Maternity Hospital safely.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                background: 'linear-gradient(135deg, #D81B60 0%, #AD1457 100%)',
                color: '#ffffff',
                border: 'none',
                padding: '12px 28px',
                borderRadius: '30px',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(216, 27, 96, 0.3)'
              }}
            >
              🔄 Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
