// pages/index.js

export default function Home() {
  return (
    <div style={{
      height: '100vh',
      backgroundImage: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>🎉 Welcome to U-Earth</h1>
      <p style={{ fontSize: '20px', maxWidth: '600px' }}>
        This is not just a homepage. This is the beginning of a new era.  
        <br />AI is now online and listening to your vision.
      </p>
      <div style={{
        marginTop: '40px',
        padding: '10px 20px',
        backgroundColor: '#ffffff22',
        borderRadius: '12px',
        border: '1px solid #fff',
        backdropFilter: 'blur(6px)',
      }}>
        <p style={{ fontSize: '16px', color: '#fff' }}>
          Deployed with ❤️ by <strong>EphraimChuah</strong>
        </p>
      </div>
    </div>
  );
}

