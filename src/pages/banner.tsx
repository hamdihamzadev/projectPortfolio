import imgProfile from '../assets/img/profil.png'
import bootstrapLogo from '../assets/img/bootstrap-logo.png'
import vuejslogo from '../assets/img/vuejs-logo.png'
import javascriptLogo from '../assets/img/javascript-logo.png'
import githubLogo from '../assets/img/github-logo.png'
function Banner() {
  return (
    <div id='Banner'>
      <h1>CODE</h1>
      <div className='container'>
        <div id='BannerContent'>
          <div id='BannerText'>
            <h1>Je SUIS HAMZA HAMDI FULLSTACK JAVASCRIPT DEVELOPER WEB</h1>
            <p>Passionné par le développement web depuis plus de 5 ans, je crée des
              applications web innovantes et performantes.
            </p>
            <div>
              <button>Me Contacter</button>
              <button>Mon Portfolio</button>
            </div>
          </div>
          <div id='BannerImage'>
            <div id='box-imgProfil'>
              <img src={imgProfile} alt='Hamza Hamdi'/>
            </div>
            <img src={bootstrapLogo} alt='bootstrapLogo'/>
            <img src={vuejslogo} alt='vuejslogo'/>
            <img src={javascriptLogo} alt='javascriptLogo'/>
            <img src={githubLogo} alt='githubLogo'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner