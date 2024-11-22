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
            { img: "https://scontent.fcrk4-2.fna.fbcdn.net/v/t1.6435-9/38412067_898830343638356_4678384734525456384_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0b6b33&_nc_eui2=AeHwv4tZiXMttvetQGIF5sj6GalpuormyjkZqWm6iubKOZpMwbGCKDuqKZ2hR3Fny0DuXsJo_1w7pgLit0rOKiRz&_nc_ohc=0YJgt_-UrtIQ7kNvgEAD0pc&_nc_zt=23&_nc_ht=scontent.fcrk4-2.fna&_nc_gid=Ari2VuZoDoEQhO7In3zTGoQ&oh=00_AYA0UpvOXx1EeAOoEkfGr4hhFfx-e4hMlbSecJNc8wburQ&oe=6767C276", name: "Neku" },
            { img: "https://scontent.fcrk2-2.fna.fbcdn.net/v/t39.30808-6/466124268_1108112894222856_2193330990048620909_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGKwpTwaEqbrcrtGBmFFi1sMEyrg17uMD8wTKuDXu4wP6fPYfnICkxIjRLuS4tWl6KMDf8SOPehVv5rwDpLvDFW&_nc_ohc=XZ4XD2SwFE4Q7kNvgGnGcpn&_nc_zt=23&_nc_ht=scontent.fcrk2-2.fna&_nc_gid=AqQgIirFaFgKFmRtKFqqcNX&oh=00_AYCVyXb0IpmBdnjhjz5QITVThvyPFIYoAWnEaQY0xNRhBw&oe=674645C1", name: "Uken" },
          ]}
        />
        {/* Sports Card */}
        <HobbyCard
          title="Sports"
          items={[
            { img: "https://c4.wallpaperflare.com/wallpaper/60/689/309/bike-commencal-bicycle-mountain-bike-wallpaper-preview.jpg", name: "Bike" },
            { img: "https://images.squarespace-cdn.com/content/v1/54b93453e4b06e38ad5db55b/1423597273404-YWEL4MMEW3K3OWGQ8F2T/image-asset.jpeg?format=1000w", name: "Skate" },
          ]}
        />
        {/* Games Card */}
        <HobbyCard
          title="Games"
          items={[
            { img: "https://i.pinimg.com/236x/39/ed/d8/39edd848fd3e8959a152047188ea6646.jpg", name: "Mobile Legends" },
            { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeq3U9gQCCLQd6geuZKREjmC2icoyQnCGuFQ&s", name: "Clash of Clans" },
            { img: "https://thumbs.dreamstime.com/b/minecraft-logo-online-game-dirt-block-illustrations-concept-design-isolated-186775550.jpg", name: "Minecraft" },
            { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNzdIjX96ZROPJy5KAsx2Y1M_ynHIcF6fLQg&s", name: "Call of Duty" },
            { img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/PlayerUnknown%27s_Battlegrounds_Mobile.webp/180px-PlayerUnknown%27s_Battlegrounds_Mobile.webp.png", name: "PUBG" },
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
