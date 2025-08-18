import "./Contact.css";
import Klaudia from "./assets/Klaudia_photo.png";
import Zosia from "./assets/Klaudia_photo.png";

const Contact = () => {
  const contacts = [
    {
      name: "Klaudia Gąsiorek",
      email: "klaudiagasiorek@loosegoose.com",
      image: Klaudia,
      socials: [
        { name: "Instagram", url: "https://instagram.com/klaudia" },
        { name: "Linkedin", url: "https://twitter.com/klaudia" },
        { name: "Website", url: "https://twitter.com/klaudia" },
      ],
    },
    {
      name: "Zosia Błażejczyk",
      email: "klaudiagasiorek@loosegoose.com",
      image: Zosia,
      socials: [
        { name: "Instagram", url: "https://instagram.com/zosia" },
        { name: "Linkedin", url: "https://twitter.com/zosia" },
      ],
    },
  ];

  return (
    <div className="contact-container">
      <h1>CONTACT US!</h1>
      <div className="team-members">
        {contacts.map((person) => (
          <div className="member-card" key={person.email}>
            <img src={person.image} alt={person.name} />
            <h2>{person.name}</h2>
            <a href={`mailto:${person.email}`} className="email-link">
              {person.email}
            </a>
            <div className="social-links">
              {person.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.name}
                </a>
                
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-container">
            </div>
    </div>
    
  );
  
};

export default Contact;