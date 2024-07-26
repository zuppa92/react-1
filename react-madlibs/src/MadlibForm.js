import React, { useState } from 'react';

function MadlibForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    noun1: '',
    noun2: '',
    verb: '',
    adjective1: '',
    adjective2: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="noun1">Noun 1: </label>
        <input type="text" id="noun1" name="noun1" value={formData.noun1} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="noun2">Noun 2: </label>
        <input type="text" id="noun2" name="noun2" value={formData.noun2} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="verb">Verb: </label>
        <input type="text" id="verb" name="verb" value={formData.verb} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="adjective1">Adjective 1: </label>
        <input type="text" id="adjective1" name="adjective1" value={formData.adjective1} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="adjective2">Adjective 2: </label>
        <input type="text" id="adjective2" name="adjective2" value={formData.adjective2} onChange={handleChange} />
      </div>
      <button type="submit">Create Story</button>
    </form>
  );
}

export default MadlibForm;