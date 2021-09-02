import { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import axios from '../../axios';
import './styles.css';

export function CardTinder() {
  const [people, setpeople] = useState();

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/tinder/cards');
      setpeople(req.data);
    }

    fetchData();
  }, []);

  return (
    <section>
      <div className="tinderCard__cardContainer">
        {people ? people.map((person) => (
            <TinderCard
              preventSwipe={['up', 'down']}
              className="swipe"
              key={person.name}
            >
              <div
                style={{ backgroundImage: `url(${person.imgUrl})` }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
        )): 'loading...'}
      </div>
    </section>
  );
}
