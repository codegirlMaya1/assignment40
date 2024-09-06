import React, { useState } from 'react';

const UserProfile = () => {
  const [name, setName] = useState('John Doe');
  const [showHobbies, setShowHobbies] = useState(false);

  const hobbies = [
    { name: 'Romance', description: 'You prefer watching romance movies.' },
    { name: 'Horror', description: 'Based upon your selections you enjoy watching horror movies' },
    { name: 'Comedy', description: 'It appears you enjoy comedy movies too. Please choose a selection of videos below that are still available to rent or purchase....' },
  ];

  const handleNameChange = () => {
    const newName = prompt('Enter new name:', name);
    if (newName) {
      setName(newName);
    }
  };

  const toggleHobbies = () => {
    setShowHobbies(!showHobbies);
  };

  return (
    <div className='section1'>
      <h1>User Profile</h1>
      <p className='username'>Name: {name}</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={toggleHobbies}>
        {showHobbies ? 'Hide Hobbies' : 'Show Hobbies'}
      </button>
      {showHobbies && (
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>
              <strong>{hobby.name}</strong>: {hobby.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserProfile;