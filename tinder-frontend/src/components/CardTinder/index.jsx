import { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './styles.css';

export function CardTinder() {
  const [people, setpeople] = useState([
    {
      name: 'Mônica',
      url: 'https://images.unsplash.com/photo-1514813482567-2858e6c00ee1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
    {
      name: 'Joseph',
      url: 'https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
    {
      name: 'Rachel',
      url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
    },
  ]);

  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen');
  };

  return (
    <section>
        <div className="tinderCard__cardContainer">
        {people.map((person) => (
        <>
          <TinderCard
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen('fooBar')}
            preventSwipe={['up', 'down']}
            className="swipe"
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        </>
      ))}
        </div>
      
    </section>
  );
}
