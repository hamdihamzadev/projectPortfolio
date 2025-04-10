const Education = [
    {
      school: 'University school of the arts',
      date: '2008 - 2010',
      diplome: 'Licence fondamentale en gestion des entreprises'
    }, {
      school: 'University school of the arts',
      date: '2008 - 2010',
      diplome: 'Licence fondamentale en gestion des entreprises'
    }
  ]
  
  // const Experience = [
  //   {
  //     job: 'Creative director',
  //     date: '03-05-2022',
  //     Worktasks: [
  //         'Création de boutiques électroniques sur des plateformes comme WooCommerce et Shopify',
  //         'Création de boutiques électroniques sur des plateformes comme WooCommerce et Shopify',
  //         'Création de boutiques électroniques sur des plateformes comme WooCommerce et Shopify',
  //         'Création de boutiques électroniques sur des plateformes comme WooCommerce et Shopify',
  //     ]
  //   },
  //   {
  //     job: 'Creative director',
  //     date: '03-05-2022',
  //     Worktasks: [
  //         'Création de boutiques électroniques sur des plateformes comme WooCommerce et Shopify',
  //         'Création de boutiques électroniques sur des plateformes comme WooCommerce et Shopify',
  //         'Création de boutiques électroniques sur des plateformes comme WooCommerce et Shopify',
  //         'Création de boutiques électroniques sur des plateformes comme WooCommerce et Shopify',
  //     ]
  //   },
  //   {
  //     job: 'Creative director',
  //     date: '03-05-2022',
  //     Worktasks: [
  //         'Création de boutiques électroniques sur des plateformes comme WooCommerce et Shopify',
  //         'Création de boutiques électroniques sur des plateformes comme WooCommerce et Shopify',
  //         'Création de boutiques électroniques sur des plateformes comme WooCommerce et Shopify',
  //         'Création de boutiques électroniques sur des plateformes comme WooCommerce et Shopify',
  //     ]
  //   },
  // ]
  function Resume() {
    return (
      <div id="resume">
        <h1 id="title">Resume</h1>
        <div id="education">
          {Education.map((item, index) => (
            <div id="education-item" key={index}>
              <h4>{item.diplome}
              </h4>
              <p id="date">{item.date}
              </p>
              <p id="school">{item.school}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default Resume