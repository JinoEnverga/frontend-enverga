import React from 'react';

function Hobbies() {
  return (
    <div
      id="hobbies"
      style={{
        padding: '70px 20px',
        background: '#111827', // Dark background
        fontFamily: '"Poppins", sans-serif',
        color: '#F3F4F6',
        minHeight: '100vh', // Full height for consistency
      }}
    >
      {/* Section Title */}
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
          Hobbies
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
          Explore the activities that bring me joy and inspiration. From pets to sports and gaming, here’s what I love doing!
        </p>
      </div>

      {/* Hobbies Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {/* Pets Card */}
        <HobbyCard
          title="Pets"
          items={[
            { img: "src/assets/Image/Pets/Cat(2).jpg", name: "Neku" },
            { img: "src/assets/Image/Pets/Cat(3).jpg", name: "Uken" },
          ]}
        />
        {/* Sports Card */}
        <HobbyCard
          title="Sports"
          items={[
            { img: "src/assets/Image/Sports/MTB.jpg", name: "Bike" },
            { img: "src/assets/Image/Sports/Skate.jpeg", name: "Skate" },
          ]}
        />
        {/* Games Card */}
        <HobbyCard
          title="Games"
          items={[
            { img: "src/assets/Image/Games/MLBB.jpg", name: "Mobile Legends" },
            { img: "src/assets/Image/Games/COC.jpg", name: "Clash of Clans" },
            { img: "src/assets/Image/Games/MCPE.jpg", name: "Minecraft" },
            { img: "src/assets/Image/Games/CODM.jpg", name: "Call of Duty" },
            { img: "src/assets/Image/Games/PUBG(2).png", name: "PUBG" },
          ]}
        />
      </div>
    </div>
  );
}

function HobbyCard({ title, items }) {
  return (
    <div
      style={{
        backgroundColor: '#1F2937', // Slightly lighter dark card background
        borderRadius: '15px',
        padding: '20px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
      }}
    >
      {/* Card Title */}
      <h3
        style={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          color: '#3B82F6', // Accent color
          marginBottom: '20px',
        }}
      >
        {title}
      </h3>

      {/* Items */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '15px',
        }}
      >
        {items.map((item, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #3B82F6', // Accent border color
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
              }}
            />
            <p
              style={{
                fontSize: '1rem',
                marginTop: '10px',
                color: '#9CA3AF',
              }}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hobbies;
