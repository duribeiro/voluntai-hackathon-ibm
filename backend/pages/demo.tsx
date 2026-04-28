export default function DemoPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        margin: 0,
        background: '#0f172a',
        color: '#f8fafc',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        padding: '32px',
      }}
    >
      <section style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '32px', margin: '0 0 16px' }}>
          Video de demonstracao - VoluntAI
        </h1>
        <video
          controls
          preload="metadata"
          src="/video/demo-voluntai.mp4"
          style={{
            width: '100%',
            maxHeight: '76vh',
            background: '#000',
            borderRadius: '8px',
          }}
        />
      </section>
    </main>
  )
}
