import React from 'react';
import './styles.css';
import Avatar from './avatar.png';
import InfiniteScroll from 'react-infinite-scroller';
import { generateRandomData } from './helpers';
import ContactSkeletonLoading from './ContactSkeletonLoading';

const App = () => {
  const [contacts, setContacts] = React.useState([
    { "id": 1, "image":"<img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>","photo": Avatar, "name": "Tamma Everill", "phone": "+351 888 411 5474" },
    { "id": 2, "image":"<img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>","photo": Avatar, "name": "Alejandrina Alexis", "phone": "+62 188 649 7200" },
    { "id": 3, "image":"<img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>","photo": Avatar, "name": "Hakim Bruntjen", "phone": "+86 241 773 8545" },
    { "id": 4, "image":"<img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>","photo": Avatar, "name": "Prudi Dagwell", "phone": "+62 606 216 1097" },
    { "id": 5, "image":"<img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>","photo": Avatar, "name": "Prent Frizell", "phone": "+86 808 891 5427" },
    { "id": 6, "image":"<img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>","photo": Avatar, "name": "Curtis Enterlein", "phone": "+64 836 110 1773" },
    { "id": 7, "image":"<img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>","photo": Avatar, "name": "Tamma Everill", "phone": "+351 888 411 5474" },
      ]);

  const fetchMoreData = () => {
    const newData = [...contacts];
    setTimeout(() => {
      setContacts(newData);
    }, 20);
  }

  return (
    <div className="container">
      <h1 className="title">My Contacts</h1>
      <InfiniteScroll
        initialLoad={false}
        loadMore={fetchMoreData}
        hasMore={true}
        loader={(
          <ContactSkeletonLoading />
        )}
      >
        {contacts.map(({ id, photo, name, phone }) => (
          <div className="contact-container" key={id}>
            <img src={image} alt={name} className="avatar" />
            <div className="text-container">
              <h5 className="name">{name}</h5>
              <p className="phone">{phone}</p>
            </div>
          </div>
        ))}
      </InfiniteScroll>










    </div>
  )
}

export default App;
