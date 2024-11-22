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
              "https://scontent.fcrk2-2.fna.fbcdn.net/v/t39.30808-6/326732437_699195318359352_6442763859889310268_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGu3nHHhkkNbs_6sflku54b7Vf8ttH6ZLDtV_y20fpksHNXDmkzwlfDqjd0Z5lWotuh99oDF6SJJ1oUXT0YQX17&_nc_ohc=fL0p_ZU8FBoQ7kNvgE2UsiU&_nc_zt=23&_nc_ht=scontent.fcrk2-2.fna&_nc_gid=Av4CqGxjOukQOclO8couRyU&oh=00_AYAjOk_mXbOguR1nxmtAyToJiQ4OZK0p9EASB6R9fS8hSQ&oe=6746334D",
              "https://scontent.fcrk2-1.fna.fbcdn.net/v/t39.30808-6/444482382_957023746430903_7731221623452658959_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHu35gDAyl7vApzeXfuqrX8nxr3uQG10yyfGve5AbXTLLS2SFXzRVLZxe4KsAXOKliTg7zT5FkiWrEdrLVagtBJ&_nc_ohc=LJaJ29WOHEgQ7kNvgGKBUDz&_nc_zt=23&_nc_ht=scontent.fcrk2-1.fna&_nc_gid=AD0iCWsobqKZbcrwYo9z0Gc&oh=00_AYA3FuoGVP_oo0PXyWqL8hbt6WhXecm7W_BYLWlx6xZbAA&oe=6746177C",
              "https://scontent.fcrk2-4.fna.fbcdn.net/v/t39.30808-6/457617813_1920688685112734_1012462027902038688_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeElhcuv-KRGyA7FCZJWOYilT2tIU6ae1nBPa0hTpp7WcPYBF0HEtKuZMrC8XjgkDnYcond0I1e9EzuTaOpDl00k&_nc_ohc=yEQdVGoOgW8Q7kNvgFoF7cM&_nc_zt=23&_nc_ht=scontent.fcrk2-4.fna&_nc_gid=Ax-bat0Xj0HyvRKL4M9Yp9V&oh=00_AYDHCdGedV_aKWKBGt5AIbgtyPinTMYpkfuUcmuFlDZz5w&oe=67463645",
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
              "https://scontent.fcrk4-2.fna.fbcdn.net/v/t39.30808-6/285539595_150422214218962_4151772031518605745_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHJbcOtq6RP6WvUo4ODiC28SgIa8i-40AVKAhryL7jQBa6i4BdP_URy0I8gJDe0u7t6ML0-L_6I51HCtpBvcjJg&_nc_ohc=i18OtblHcOkQ7kNvgHQ00rs&_nc_zt=23&_nc_ht=scontent.fcrk4-2.fna&_nc_gid=ATrWAgsC_jxbUSyXk-fVPDk&oh=00_AYD8I_3udmt8sCfDYqjkFsB4vFm7yi-gUeJFOU7LISZfQg&oe=6746257C",
              "https://scontent.fcrk2-2.fna.fbcdn.net/v/t39.30808-6/339663244_1195274564502071_6816423979343438402_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEJID_YP7YYYe4jteZS22EonOO06vp_ho2c47Tq-n-GjUKNpODmG58E_Sr8LaTMZEosqNvsZZlzlcXh4R-w8Nhz&_nc_ohc=7BeJWjBZV8UQ7kNvgEg__Bw&_nc_zt=23&_nc_ht=scontent.fcrk2-2.fna&_nc_gid=Agi1pQAOfUE4VudUiBM5pph&oh=00_AYCcel-osK6aOor4zL8IkU26VtaBRpo2UsowHHdU3sZRsA&oe=67462B24",
              "https://scontent.fcrk2-2.fna.fbcdn.net/v/t39.30808-6/339752642_1382776215881291_4823750589383292543_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFOOQZa_ltZ_NbgZnxiK2WCeh5a53O8fQ56Hlrnc7x9DtgWF6MyoAB2OEatr4h-XRNHqnBdiOlZzlhJIhSBawbd&_nc_ohc=KTMYX7GftWAQ7kNvgHd9xoz&_nc_zt=23&_nc_ht=scontent.fcrk2-2.fna&_nc_gid=Azt04iG3mDmAXarSGqHdYq8&oh=00_AYCCIhRCAmvsNl1R1UhBCaRKFbQYA6dS6jRaOtAEYWNTgQ&oe=67461C64",
              "https://scontent.fcrk2-1.fna.fbcdn.net/v/t39.30808-6/339753894_709631274287136_6529324729785475384_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeErwBjoyLU9agjCYj0IgUlrNtPVppHcdqc209Wmkdx2p09F-74rGJ8QdoeUjwD9cK7KQpCX1maT3VLfnzJaOAme&_nc_ohc=gaeFcGSrVvUQ7kNvgEy7xeK&_nc_zt=23&_nc_ht=scontent.fcrk2-1.fna&_nc_gid=A2rqrzBzBjtH5dViWcteUyw&oh=00_AYCJZz6im-Jo_noFtzlRJv2IHyEWhfD14TUhu-ctT1jUfQ&oe=67461D2C",
              "https://scontent.fcrk4-2.fna.fbcdn.net/v/t39.30808-6/433059337_429924249605498_7470198623850217126_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeExeW4YXAq-gFuWoR2LpKn58VP4d-VZemnxU_h35Vl6aS4KFJ3ZqWf-0yU2a5qBhRyTPjoRbTtOVa6TftJBCXDH&_nc_ohc=mHF3lSK0WNcQ7kNvgFwh1_8&_nc_zt=23&_nc_ht=scontent.fcrk4-2.fna&_nc_gid=AtSju_3ZdjwbZtFDIeghGFK&oh=00_AYCB3MkWWoGcLXMfinYy0yLn5gf17qMhhF0AW372dFpBmw&oe=674625EA",
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
              "https://scontent.fcrk4-2.fna.fbcdn.net/v/t39.30808-1/463286070_942543074585486_5277433814265322358_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeGSHDWrK02QB-0HZOMpSM5ke-SH6Db6UJ575IfoNvpQnmg2zDmVLqYcWQwn9Fbn9PEYkLoV8lZhvvJxVJ4butmV&_nc_ohc=xfO-kfWp5DEQ7kNvgF4_tIH&_nc_zt=24&_nc_ht=scontent.fcrk4-2.fna&_nc_gid=Ab7Gm2ostkBLGk0IEj9duiE&oh=00_AYD30evByAxIeYt405n0DgFwi7aoq56E-7irjwlW-i-Vmw&oe=67464226",
              "https://scontent.fcrk2-4.fna.fbcdn.net/v/t39.30808-6/299080250_472790791523359_2203712742621000475_n.png?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFhMl9pP7PaxIST5oVmurgvCx9jh5T2URwLH2OHlPZRHIrvtnRx-ZGB7uzstQtwsKPGv8-2nloUfY54p24DzMva&_nc_ohc=IXE5XdSM9oMQ7kNvgFesHFa&_nc_zt=23&_nc_ht=scontent.fcrk2-4.fna&_nc_gid=AVAeMnIuo4PRAx2SlgludaJ&oh=00_AYD21kNBOc_kuDbC_fuBTpJYR6t6TXN3VDE8arRygbxT3A&oe=67463B16",
              "https://scontent.fcrk2-4.fna.fbcdn.net/v/t39.30808-6/462188571_514782684688781_7786183106938820460_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE3J8qNqWD8IQtXdhgV2EsdyOuH2DQ1--_I64fYNDX77zGzb3qtad5pZgnVVeRwZVdIPrnIHnVA7yGUUdcSuXsa&_nc_ohc=KdQ0rVihlGoQ7kNvgHL9fIo&_nc_zt=23&_nc_ht=scontent.fcrk2-4.fna&_nc_gid=Aqkc1CJUABGjzukfjLpOE52&oh=00_AYCf9n0o2l190Rghm5wfzV3BDo9-YQviCPdS6DCxvCfkYA&oe=67464C88",
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
