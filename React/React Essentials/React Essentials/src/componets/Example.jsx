
import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from './TabButton.jsx';
import Section from "./Section.jsx";


export default function Example() {

  const [selectedTopic, setSelectedTopic] = useState('');

  function clickHandler(selectedButton) {
    setSelectedTopic(selectedButton);

  }


  return (
    // <Section title="Examples" id="examples">
    <Section title="Examples" id='examples'>
   

      <menu>
        <TabButton isSelected={selectedTopic === 'components'}
          onClick={() => clickHandler('components')}>
          Components</TabButton>

        <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => clickHandler('jsx')}>JSX</TabButton>
        <TabButton isSelected={selectedTopic === 'props'} onClick={() => clickHandler('props')}>Props</TabButton>
        <TabButton isSelected={selectedTopic === 'state'} onClick={() => clickHandler('state')}>States</TabButton>

      </menu>
      {!selectedTopic ? <p>Please select a topic.</p> : null}
      {selectedTopic ? (<div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}

          </code>


        </pre>

      </div>) : null
      }

    </Section>
  );

}