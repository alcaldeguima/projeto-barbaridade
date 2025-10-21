export default function LinhaDoTempoPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Linha do Tempo</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          Explore os eventos marcantes da ditadura militar no Rio Grande do Sul.
        </p>
      </header>

      {/* Container do Iframe */}
      <div style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
        <iframe src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1xuY4upIooEeszZ_lCmeNx24eSFWe0rHe9ZdqH2xqVNk&font=Default&lang=en&initial_zoom=2&height=650" width="100%" height="650" frameborder="0"></iframe>
        </div>
    </div>
  );
}