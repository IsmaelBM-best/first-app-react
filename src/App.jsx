import React from 'react';
import { useState } from 'react';
import { getRandomNumber as random } from './assets/utils/getRandomNumber';

import users from './assets/data.json';
import UserCard from './components/UserCard';

const App = () => {
  const [userIndex, setUserIndex] = useState(random(0, users.length - 1));
  const user = users[userIndex];
  const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;

  const changeUser = () => {
    const newUserIndex = random(0, users.length - 1);

    while (newUserIndex === userIndex) {
      newUserIndex = random(0, users.length - 1);
    }

    setUserIndex(newUserIndex);
  };

  return (
    <div className="h-full flex flex-col justify-center items-center p-10">
      <UserCard user={user}/>
      <div className="flex flex-row justify-center items-center">
        <img src={user.picture.large} alt="User profile" />
      </div>
      <div className="text-white text-center mt-5">
        <h2>{fullName}</h2>
        <p>Email: {user.email}</p>
        <p>Gender: {user.gender}</p>
      </div>
      <button
        onClick={changeUser}
        className="bg-amber-400 px-4 py-2 mt-4 hover:bg-amber-500 rounded "
      >
        <i class="fa-solid fa-repeat"></i>
      </button>
    </div>
  );
};

export default App;
