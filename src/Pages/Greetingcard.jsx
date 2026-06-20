import "./GreetingCard.css";

function Greetingcard() {
  const cards = [
    {
     image: "/images/4.jpg",
      text: "Stay blessed always, May all your dreams come true"
    },
    {
      image: "/images/2.jpg",
      text: "📸 No paparazzi, please."
    },
    {
      image: "/images/3.jpg",
      text: "Enjoy your special day"
    },
    {
      image: "/images/1.jpg",
      text: "My Personal photographer"
    },
    {
      image: "/images/5.jpg",
      text: "Keep smiling forever"
    },
    {
      image: "/images/6.jpg",
      text: "My Happy Place"
    }
  ];

  return (
    <div className="birthday-container">

      {/* Main Birthday Banner */}
      <div
        className="main-card"
        style={{
          backgroundImage: "url('/images/happybday.jpg')"
        }}
      >
        <h1>Happy Birthday Rohit 🎂</h1>
      </div>

      {/* Small Cards */}
      <div className="cards-grid">
        {cards.map((card, index) => (
          <div className="small-card" key={index}>
            <img
              src={card.image}
              alt="Birthday"
              className="card-image"
            />
            <p>{card.text}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Greetingcard;