import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Compétences() {
  return (
    <div id="compétences">
      <div className="container">
        <div id="compétencesHeader">
          <p>Mes compétences</p>
          <h1>Ce que je maîtrise</h1>
          <p>Voici un aperçu des compétences techniques, soft skills et outils que
            j'utilise quotidiennement pour créer des expériences web exceptionnelles</p>
        </div>
        <div id="tabs_competences">
          <Tabs>
            <TabList>
              <Tab>Title 1</Tab>
              <Tab>Title 2</Tab>
              <Tab>Title 2</Tab>
              <Tab>Title 2</Tab>
            </TabList>

            <TabPanel>
              <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Compétences;