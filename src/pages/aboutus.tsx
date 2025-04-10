import { Badge } from "@/components/ui/badge";

const contactInfo=[
  {icon:'',label:'name',value:'hamdi hamza'},
  {icon:'',label:'adress',value:'Maroc,casablanca'},
  {icon:'',label:'Disponibilité',value:'Disponible'},
  {icon:'',label:'Email',value:'Hamdihamza440@gmail.com'},
]
function About() {
return (
<div id="aboutus">
  <div className="container">
    <div id="about_header">
      <Badge variant="outline">A PROPOS DE MOI</Badge>
      <h1 id="title_setion">Qui suis-je ?</h1>
    </div>
    <div id="aboutus_content">
      <div id="about_boximg" >
        
      </div>
      <div id="aboutus_text">
        <h4 id="title_text">Développeur Web Passionné</h4>
        <p id="para_text">Je suis un développeur web créatif avec une passion pour la création d'expériences numériques
          exceptionnelles. Avec une solide formation en développement front-end et back-end, 
          </p>
        <p id="para_text">je m'efforce de créer des sites web et des applications qui sont à la fois esthétiquement
          plaisants et fonctionnellement robustes.
          </p>
          <div id="contact">
            {contactInfo.map((item,index)=>(
              <div key={index} id="contact_item" >
                <div id="box_icon" >
                </div>
                <div id="contact_item_text" >
                  <p id="contact_item_label" >{item.label}</p>
                  <p id="contact_item_value" >{item.value}</p>
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