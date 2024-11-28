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
            {[
              "https://scontent.fmnl8-2.fna.fbcdn.net/v/t39.30808-6/326732437_699195318359352_6442763859889310268_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGu3nHHhkkNbs_6sflku54b7Vf8ttH6ZLDtV_y20fpksHNXDmkzwlfDqjd0Z5lWotuh99oDF6SJJ1oUXT0YQX17&_nc_ohc=CjoIZi5M6z8Q7kNvgFJAToS&_nc_zt=23&_nc_ht=scontent.fmnl8-2.fna&_nc_gid=AhQ4NNXl_rl5XsKheaFz7WB&oh=00_AYC9U4_R-EwdXPPEPrrFWQJVkkNn-XRx9tFu8YUtbHc7rg&oe=674DABCD",
              "https://scontent.fmnl8-4.fna.fbcdn.net/v/t39.30808-6/444482382_957023746430903_7731221623452658959_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHu35gDAyl7vApzeXfuqrX8nxr3uQG10yyfGve5AbXTLLS2SFXzRVLZxe4KsAXOKliTg7zT5FkiWrEdrLVagtBJ&_nc_ohc=hmmnPywF9SoQ7kNvgG6poz0&_nc_zt=23&_nc_ht=scontent.fmnl8-4.fna&_nc_gid=AeBKcfo_s-Sj_4JbpKqiybA&oh=00_AYCSvAjeiFYVEPKC5pmDxTTy5utgzZ2U-O6t9Xu6wNSKQw&oe=674D8FFC",
              "https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/457809757_1920688541779415_2705711123235550500_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeG944y5IfTyjeLsXV5_OnBf3Qk2aWeC5hDdCTZpZ4LmEOtKqkKJEbUqeTLpYN84YhGfVwWcMtQf-uCcRXxlBWzs&_nc_ohc=ekDRZTpCWWAQ7kNvgEZ1rsH&_nc_zt=23&_nc_ht=scontent.fmnl8-3.fna&_nc_gid=AwJjHnlqZZlu79oVVbMjmT-&oh=00_AYA13UllI25gMC8ZbR_qUjKV0MbF32LWv2fLf25TN2O15Q&oe=674D9C6C",
            ].map((img, index) => (
              <Carousel.Item key={index}>
                <img
                  src={img}
                  alt={`Elementary Image ${index + 1}`}
                  style={{
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                />
                <Carousel.Caption>
                  <p>Elementary Image {index + 1}</p>
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
            Graduation: May 2023
          </p>

          {/* Carousel */}
          <Carousel>
            {[
              "https://scontent.fmnl8-5.fna.fbcdn.net/v/t39.30808-6/285539595_150422214218962_4151772031518605745_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHJbcOtq6RP6WvUo4ODiC28SgIa8i-40AVKAhryL7jQBa6i4BdP_URy0I8gJDe0u7t6ML0-L_6I51HCtpBvcjJg&_nc_ohc=Hmta9qMkkdUQ7kNvgFOosqv&_nc_zt=23&_nc_ht=scontent.fmnl8-5.fna&_nc_gid=Afrk4Ol6euvJ2kDH6X3_dnr&oh=00_AYD-9WyOv0nDB-FXrswO472HBzKa6w5dafFvNUg9eG1gDA&oe=674D9DFC",
              "https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/356425828_288602427071015_6059363000751382258_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGNBgxZQuCHOMCrFiTLMH22vpk2FxxiTAW-mTYXHGJMBYBQyxjKH156sqOm2AnqChtM5idlYD51BJWKNA-bgTd_&_nc_ohc=70HrsZBKZ6MQ7kNvgG6wgUW&_nc_zt=23&_nc_ht=scontent.fmnl8-3.fna&_nc_gid=AuDP_-lERH1dN9C11PaYsjf&oh=00_AYBbsLLH_WgH7HkaIfDk9XzrD6xzI9J9CR7w-y5ZM3AzNg&oe=674DABDD",
              "https://scontent.fmnl8-2.fna.fbcdn.net/v/t39.30808-6/339663244_1195274564502071_6816423979343438402_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEJID_YP7YYYe4jteZS22EonOO06vp_ho2c47Tq-n-GjUKNpODmG58E_Sr8LaTMZEosqNvsZZlzlcXh4R-w8Nhz&_nc_ohc=-LzFVCQfuF0Q7kNvgH4uZr3&_nc_zt=23&_nc_ht=scontent.fmnl8-2.fna&_nc_gid=AHSSZCT6xsoUkR2IAszCuMJ&oh=00_AYCoYb6MNa2Pi0Ej7AkyShYYdTJs_IF8Mx5PkhPpJ4bjjg&oe=674DA3A4",
              "https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/339752642_1382776215881291_4823750589383292543_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFOOQZa_ltZ_NbgZnxiK2WCeh5a53O8fQ56Hlrnc7x9DtgWF6MyoAB2OEatr4h-XRNHqnBdiOlZzlhJIhSBawbd&_nc_ohc=9efG8-zB2aIQ7kNvgEfPMvw&_nc_zt=23&_nc_ht=scontent.fmnl8-3.fna&_nc_gid=AdxE2jZdMkwOPQUxxYkE_08&oh=00_AYAyL08ch9QpxPXa5rYz1kJnbd2ocBbnBTyJh8N9nPno5g&oe=674D94E4",
              "https://scontent.fmnl8-5.fna.fbcdn.net/v/t39.30808-6/339756380_749120216760772_8088337982083690779_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGlQKD5JEgQK-TyHkW1GvTwFcbP1Pi0pwMVxs_U-LSnA1mZagrnH5Ft_ZmCRZPMrwU2kXDEZCRb_WSvKlAaiboS&_nc_ohc=KdJKKcJosEkQ7kNvgEMJnON&_nc_zt=23&_nc_ht=scontent.fmnl8-5.fna&_nc_gid=AGo9X3gT9IpcdqGtL6v_HPI&oh=00_AYBsnWRlr3kiDN3i1bjcxIT9s72s9_6xlZ3NPo2rgKbLaw&oe=674D8E04",
            ].map((img, index) => (
              <Carousel.Item key={index}>
                <img
                  src={img}
                  alt={`Highschool Image ${index + 1}`}
                  style={{
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                />
                <Carousel.Caption>
                  <p>Highschool Image {index + 1}</p>
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
            {[
              "https://scontent.fmnl8-5.fna.fbcdn.net/v/t39.30808-6/463286070_942543074585486_5277433814265322358_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGSHDWrK02QB-0HZOMpSM5ke-SH6Db6UJ575IfoNvpQnmg2zDmVLqYcWQwn9Fbn9PEYkLoV8lZhvvJxVJ4butmV&_nc_ohc=B91qpKuXS5AQ7kNvgEnBN2A&_nc_zt=23&_nc_ht=scontent.fmnl8-5.fna&_nc_gid=Ae6lqcSCKHyyF6Eb0EUUErx&oh=00_AYB1Z4NsK22hJo8DnBbwg2mKhwrfBfxl-V-Rl74S2wqDsA&oe=674D8524",
              "https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/299080250_472790791523359_2203712742621000475_n.png?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFhMl9pP7PaxIST5oVmurgvCx9jh5T2URwLH2OHlPZRHIrvtnRx-ZGB7uzstQtwsKPGv8-2nloUfY54p24DzMva&_nc_ohc=sz4vkT2CyBgQ7kNvgF_J6IN&_nc_zt=23&_nc_ht=scontent.fmnl8-3.fna&_nc_gid=AKgBWbwTkmwZLZX8V-AkTYU&oh=00_AYAGuLR-enEY5ZM7MoE4jxuCslL3Ll30Z9JrUaH-VjyuOQ&oe=674D7B56",
              "https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/462188571_514782684688781_7786183106938820460_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE3J8qNqWD8IQtXdhgV2EsdyOuH2DQ1--_I64fYNDX77zGzb3qtad5pZgnVVeRwZVdIPrnIHnVA7yGUUdcSuXsa&_nc_ohc=8p36LIBr5AQQ7kNvgFM1cYo&_nc_zt=23&_nc_ht=scontent.fmnl8-3.fna&_nc_gid=AouI0Mf2vBtcEDaN_pw-MU2&oh=00_AYDPcWJRZmfedQTb47AIPC_qmgvBVHxaIkOJLAhMLgjwUg&oe=674D8CC8",
            ].map((img, index) => (
              <Carousel.Item key={index}>
                <img
                  src={img}
                  alt={`College Image ${index + 1}`}
                  style={{
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                />
                <Carousel.Caption>
                  <p>College Image {index + 1}</p>
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
