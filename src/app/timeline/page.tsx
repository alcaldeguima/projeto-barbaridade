import Script from 'next/script';
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
        <iframe
            src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=v2%3A2PACX-1vQ-Cb_fr6KeKq_bSygE7mAHe45SwC2BqeqPhg9zNnc6JVAu_IDDA5SQ-sr-nNf3o_7eV6C-HlYmpgDj&font=Default&lang=pt-br&initial_zoom=2&width=100%25&height=650'
            width='100%'
            height='650'
            style={{ border: 'none' }}
            // Atributos corrigidos para camelCase e/ou valor booleano
            allowFullScreen={true}
            frameBorder="0" // frameBorder com 'B' maiúsculo e valor como string ou número
          >
        </iframe>  
        <div className="w-full max-w-4xl mx-auto px-4 py-8">
        <p className="text-sm text-white-700 italic text-center">
          A Linha do Tempo reproduz a Cronologia elaborada por Graciene de Ávila, 
          Marcos Machry, Mariana Ferreira e Silva e Marla Barbosa Assumpção 
          para a obra: Ditadura de Segurança Nacional no Rio Grande do Sul 
          (1964-1985) : história e memória. / 
          organizadores Enrique Serra Padrós, Vânia M. Barbosa, Vanessa Albertinence Lopez, Ananda 
          Simões Fernandes. Porto Alegre: Corag, 2009.
        </p>
      </div>
     
         </div>
        <Script id="chatling-config" strategy="afterInteractive">
        {`window.chtlConfig = { chatbotId: "6961324368" };`}
      </Script>

      <Script
        src="https://chatling.ai/js/embed.js"
        async
        data-id="6961324368"
        id="chtl-script"
        strategy="afterInteractive"
      />
    </div>
    

    
  );
}