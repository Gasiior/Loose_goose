import "./Contact.css";
import Klaudia from "./assets/Klaudia_photo.png";
import Zosia from "./assets/Zosia_photo.png";

const Contact = () => {
  const contacts = [
    {
      name: "Klaudia Gąsiorek",
      email: "Klaudia.Gasiorek@loosegoosestudios.com",
      image: Klaudia,
      socials: [
        { name: "Instagram", url: "https://www.instagram.com/klaudiag_graphic" },
        { name: "Linkedin", url: "https://www.linkedin.com/in/klaudia-g%C4%85siorek-199253239" },
        { name: "Website", url: "https://klaudiagasiorek.pl/" },
      ],
    },
    {
      name: "Zosia Błażejczyk",
      email: "Zosia.Blazejczyk@loosegoosestudios.com",
      image: Zosia,
      socials: [
        { name: "Linkedin", url: "https://www.linkedin.com/in/zofia-b%C5%82a%C5%BCejczyk-437909306/" },
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