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
            src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t39.30808-6/466146943_882368107381677_8631814977632440880_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHp4J4YGWB3DbSm7Wk9TWa4CAvD0dGXVGEIC8PR0ZdUYWeUOZHEvEtQC7G49nbTFdNAD2H2Kad6OunS3bH6hUMN&_nc_ohc=mJBNGEGhDgYQ7kNvgECO3p0&_nc_zt=23&_nc_ht=scontent.fmnl8-2.fna&_nc_gid=AV2uUPBlSVSeKvt98Yp6a79&oh=00_AYBGQsGvzVWpEvRouNerkfOLmLwNLcDBsPeOuHLn9-UgzQ&oe=674D8166"
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
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAgVBMVEUAAAAQcP8IZf8IZ/8JZv8HZf8IZv8IZv8IaP8JZ/8HZv8IZv8FZf8YcP9FjP+TvP/g7P/////R4/9Vlf8QYP+Es/9kn/8IZv8nef8JZf8AYP/v9f/Q4v/B2P9GjP8HZv+yz//Q4/83g/8HZv/g6/+Dsv8HZf/n7//////////e6//ZLyHjAAAAK3RSTlMAEGCfz+//XyCQj98w/////////xD//6D/kBD/////7////8///5Cgz+/vONkvXQAAAPJJREFUeAF9kkUCwzAMBGVSGMrM3P//rxBaB+e6s0YREFJpw2y0cgS1cT3DQLmNWPjcwK/XA24RWIuEdg4j7OtHUX0NYedxko5+jCeZMc0En8FsVDDHSd1WDoFdIlogX46awopozWA+ythsd7s9ZxymJBkcs3wcMZC0YHDKhDNbKLowuGYC21zINIWUbQ7EwwJT7YogqgTTKaTY4tIp7HDIRadwwzVlKVyv11HG9cekFBxam8FbTInuQ4LCd3cL2Uzd+4UV/VkHfUIgMLRdQuBi7JsCxh5rQEAfrO9NYSWojruwBOOhDoR8PF+j0fuipNX+AmbCIviMIiwCAAAAAElFTkSuQmCC"
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
