import React from 'react';

function Home() {
  return (
    <div
      id="home"
      style={{
        padding: '70px 20px',
        background: '#111827', // Dark background
        fontFamily: '"Poppins", sans-serif',
        color: '#F3F4F6',
      }}
    >
      {/* Welcome Section */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '50px',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#3B82F6', // Accent color
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          Welcome!
        </h1>
        <p
          style={{
            fontSize: '1.1rem',
            color: '#9CA3AF',
            marginTop: '10px',
            maxWidth: '700px',
            margin: '10px auto',
          }}
        >
          Dive in to discover my journey, passions, and the things that inspire me. Feel free to explore and connect—
          there’s so much to share!
        </p>
      </div>

      {/* Profile Section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        {/* Main Profile Picture */}
        <div
          style={{
            position: 'relative',
            borderRadius: '50%',
            overflow: 'hidden',
            width: '200px',
            height: '200px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
          }}
        >
          <img
            src="\src\Jino.jpg"
            alt="Profile"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              margin: '10px 0',
            }}
          >
            Jino E. Enverga
          </h2>
          <p
            style={{
              fontSize: '1.2rem',
              color: '#9CA3AF',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.8',
            }}
          >
            A passionate learner and beginner coder striving to make a meaningful impact in the tech world.
          </p>
        </div>
      </div>

      {/* Social Links Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '40px',
          gap: '20px',
        }}
      >
        {/* Facebook Link */}
        <a
          href="https://www.facebook.com/envergajino"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
            transition: 'transform 0.3s ease',
          }}
        >
          <img
            src="\src\assets\Image\facebook.jpg"
            alt="Facebook Profile"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </a>
      </div>
    </div>
  );
}

export default Home;
