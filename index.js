// pages/index.js

export default function Home() {
  return (
    <div style={{
      padding: '100px',
      textAlign: 'center',
      backgroundColor: '#000',  // 黑色背景
      border: '4px solid lime'  // 绿色边框
    }}>
      <h1 style={{ color: '#00ff00', fontSize: '36px' }}>🎉 Welcome Home, U-Earth is Online!</h1>
      <p style={{ fontSize: '20px', color: '#ffffff' }}>This is your official homepage. The AI is now listening to your command.</p>
    </div>
  );
}

