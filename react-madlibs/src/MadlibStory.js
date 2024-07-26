import React from 'react';

function MadlibStory({ story, onReset }) {
  return (
    <div>
      <p>{story}</p>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default MadlibStory;