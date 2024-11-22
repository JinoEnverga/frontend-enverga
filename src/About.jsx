import React from 'react';

function About() {
  return (
    <div
      id="about"
      style={{
        padding: '70px 20px',
        background: '#111827', // Dark background
        fontFamily: '"Poppins", sans-serif',
        color: '#F3F4F6',
      }}
    >
      {/* Title Section */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '50px',
        }}
      >
        <h2
          style={{
            fontSize: '2.8rem',
            fontWeight: 'bold',
            color: '#3B82F6', // Bright accent color
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          About Me
        </h2>
        <p
          style={{
            fontSize: '1.1rem',
            color: '#9CA3AF',
            marginTop: '10px',
          }}
        >
          Learn more about who I am and what drives me forward.
        </p>
      </div>

      {/* Content Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Card Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '40px',
            justifyContent: 'center',
          }}
        >
          {/* Image Card */}
          <div
            style={{
              flex: '1',
              minWidth: '300px',
              maxWidth: '400px',
              position: 'relative',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
            }}
          >
            <img
              src="\src\Jino.jpg"
              alt="Jino Enverga"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                padding: '15px',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                textAlign: 'center',
                color: '#F3F4F6',
              }}
            >
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                }}
              >
                Jino Enverga
              </h3>
              <p style={{ fontSize: '0.9rem' }}>Budding Programmer | Tech Enthusiast</p>
            </div>
          </div>

          {/* Text Card */}
          <div
            style={{
              flex: '2',
              backgroundColor: '#1F2937',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
            }}
          >
            <p
              style={{
                fontSize: '1.2rem',
                marginBottom: '15px',
                lineHeight: '1.8',
              }}
            >
              Hi, I’m <strong style={{ color: '#3B82F6' }}>Jino Enverga</strong>, a passionate learner and a beginner in the world of coding. Born on{' '}
              <strong>June 1, 2005</strong>, and raised in the inspiring town of{' '}
              <strong>Dalipay Milaor, Camarines Sur</strong>, I’ve always been fascinated by technology and its ability
              to transform lives.
            </p>
            <p
              style={{
                fontSize: '1.2rem',
                marginBottom: '15px',
                lineHeight: '1.8',
              }}
            >
              My focus is on learning <strong style={{ color: '#3B82F6' }}>Computer Science</strong>, unraveling how the digital
              world operates, and contributing to meaningful projects. I’m driven by the belief that perseverance and
              progress matter more than perfection.
            </p>
            <p
              style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
              }}
            >
              In my free time, you’ll find me <strong>exploring the outdoors</strong> on my bike or spending time with my pets,
              which helps refresh my mind and spark new ideas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
