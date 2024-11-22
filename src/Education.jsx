import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Education() {
  return (
    <div
      id="education"
      style={{
        padding: '70px 20px',
        background: '#1E293B', // Dark background
        fontFamily: '"Poppins", sans-serif',
        color: '#F3F4F6',
      }}
    >
      {/* Section Title */}
      <h2
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#3B82F6', // Accent color
          marginBottom: '40px',
        }}
      >
        My Education
      </h2>

      {/* Education Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Elementary Card */}
        <div
          style={{
            background: '#334155',
            padding: '20px',
            borderRadius: '15px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              color: '#60A5FA',
              marginBottom: '15px',
            }}
          >
            Elementary
          </h3>
          <p style={{ fontSize: '1rem', color: '#E5E7EB', marginBottom: '20px' }}>
            Dalipay Elementary School <br />
            Graduation: March 2017
          </p>

          {/* Carousel */}
          <Carousel>
            {[1, 2, 3].map((num) => (
              <Carousel.Item key={num}>
                <img
                  src={`\\src\\assets\\Image\\elementary(${num}).jpg`}
                  alt={`Elementary Image ${num}`}
                  style={{
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                />
                <Carousel.Caption>
                  <p>Elementary Image {num}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Highschool Card */}
        <div
          style={{
            background: '#334155',
            padding: '20px',
            borderRadius: '15px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              color: '#60A5FA',
              marginBottom: '15px',
            }}
          >
            Highschool
          </h3>
          <p style={{ fontSize: '1rem', color: '#E5E7EB', marginBottom: '20px' }}>
            Devine Mercy National High School <br />
            Graduation: May 2022
          </p>

          {/* Carousel */}
          <Carousel>
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <Carousel.Item key={num}>
                <img
                  src={`\\src\\assets\\Image\\highschool(${num}).jpg`}
                  alt={`Highschool Image ${num}`}
                  style={{
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                />
                <Carousel.Caption>
                  <p>Highschool Image {num}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* College Card */}
        <div
          style={{
            background: '#334155',
            padding: '20px',
            borderRadius: '15px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              color: '#60A5FA',
              marginBottom: '15px',
            }}
          >
            College
          </h3>
          <p style={{ fontSize: '1rem', color: '#E5E7EB', marginBottom: '20px' }}>
            Naga College Foundation Inc. <br />
            Graduation: (Unknown)
          </p>

          {/* Carousel */}
          <Carousel>
            {[1, 2, 3, 4].map((num) => (
              <Carousel.Item key={num}>
                <img
                  src={`\\src\\assets\\Image\\college(${num}).jpg`}
                  alt={`College Image ${num}`}
                  style={{
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                />
                <Carousel.Caption>
                  <p>College Image {num}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Education;
