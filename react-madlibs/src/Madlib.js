import React, { useState } from 'react';
import MadlibForm from './MadlibForm';
import MadlibStory from './MadlibStory';

function Madlib() {
  const [story, setStory] = useState(null);

  const handleStory = (formData) => {
    const newStory = `Once upon a time, there was a ${formData.adjective1} ${formData.noun1} who loved to ${formData.verb}. Every day, it would ${formData.verb} with its ${formData.adjective2} ${formData.noun2}.`;
    setStory(newStory);
  };

  const resetStory = () => {
    setStory(null);
  };

  return (
    <div>
      <h1>MadLibs Game</h1>
      {!story ? <MadlibForm onSubmit={handleStory} /> : <MadlibStory story={story} onReset={resetStory} />}
    </div>
  );
}

export default Madlib;