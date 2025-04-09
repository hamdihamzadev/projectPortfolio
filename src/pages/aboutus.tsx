import imgAbout from '../assets/img/about.jpg'
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
import { CiUser } from "react-icons/ci";


const contact = [
  {
    label: 'nom',
    value: 'Moussa Diop',
    icon: <CiUser/>
  }, {
    label: 'Email',
    value: 'hamdihamza440@gmail.com',
    icon: <CiMail/>
  }, {
    label: 'Adress',
    value: 'maroc,casablanca',
    icon: <CiLocationOn/>
  }, {
    label: 'disponibilité ',
    value: 'Disponible',
    icon: <CiUnlock/>
  }
]

function About() {
  return (
    <div id='aboout'>
      <div className='container'>
        <div id='aboutTitle'>
          <p>À propos de moi</p>
          <h1>Qui suis-je?</h1>
        </div>
        <div id='aboutContent'>
          <div id='aboutImage'>
            <div id='box-img'>
              <img src={imgAbout} alt='img-about'/>
              <div id='box-small-img'>
                <img src={imgAbout} alt='img-about'/>
              </div>
            </div>
          </div>
          <div id='aboutText'>
            <h3>Développeur Web Passionné</h3>
            <p>Je suis un développeur web créatif avec une passion pour la création
              d'expériences numériques exceptionnelles. Avec une solide formation en
              développement front-end et back-end,
            </p>
            <p>je m'efforce de créer des sites web et des applications qui sont à la fois
              esthétiquement plaisants et fonctionnellement robustes.</p>
            <div id='about-contact'>
              {contact.map((item,index)=>(
                <div id='about_contact_item' key={index}>
                  <div id='box_icon' >
                  {item.icon}
                  </div>
                  <div id='box_text' >
                    <p> {item.label} </p>
                    <p> {item.value} </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;