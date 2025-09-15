export default function About() {
  return (
    <section style={{ maxWidth: '600px', margin: 'auto' }}>
      <h1>This is the about for Lalian Local Mosques.</h1>

      <div
        style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'flex-start',
          marginTop: '20px',
          flexWrap: 'wrap',
        }}
      >
        {/* Left Column: Paragraphs with fixed width */}
        <div
          style={{
            width: '280px',
            border: '2px solid #333',
            borderRadius: '8px',
            padding: '20px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <p
            style={{
              fontSize: '20px',
              fontWeight: '700',
              lineHeight: '1.8',
              color: '#111',
              marginBottom: '20px',
            }}
          >
            Lalian mein kuch purani aur mashhoor masajid hain, jo na sirf ibadat ke liye balki 
            ilaqai logon ke liye markazi jagah ka kaam deti hain. un mein se ek ye hai.
          </p>

          <p
            style={{
              fontSize: '20px',
              fontWeight: '700',
              lineHeight: '1.8',
              color: '#111',
            }}
          >
            <strong>Markazi Jamia Masjid, Lalian:</strong> Yeh masjid Lalian Tehsil ka markazi ibadatgah hai. 
            Yahan jummah aur Eid ke namazon ke liye log ikatha hote hain. Yeh masjid apni saadi 
            aur purani imaarat ke liye mashhoor hai.
          </p>
        </div>

        {/* Right Column: Images with same width */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            width: '280px',
          }}
        >
          <img
            src="/hero.jpg"
            alt="Markazi Jamia Masjid"
            style={{ width: '280px', height: 'auto', borderRadius: '8px' }}
          />
          <img
            src="/masjid2.jpg"
            alt="Masjid view 2"
            style={{ width: '280px', height: 'auto', borderRadius: '8px' }}
          />
          <img
            src="/masjid3.jpg"
            alt="Masjid view 3"
            style={{ width: '280px', height: 'auto', borderRadius: '8px' }}
          />
        </div>
      </div>
    </section>
  );
}
