import React from 'react';
import './styles.css';
import Avatar from './avatar.png';
import InfiniteScroll from 'react-infinite-scroller';
import { generateRandomData } from './helpers';
import ContactSkeletonLoading from './ContactSkeletonLoading';
import {connect} from 'react-redux';


componentDidMount() {
        const params = new URLSearchParams(window.location.search);
        const pageQueryParam = params.get('page');
        if (!pageQueryParam) {
            window.history.pushState({page: 1}, "title 1", "?page=1");
        } else {

        }
        this.props.dispatch(loadData({count: 40}));
    }

    filterByInput(e){
        let input = e.target.value;
        this.props.dispatch(filterByValue({value: input}))
    }

    nextPage() {
        this.props.dispatch(loadNewPage({page: 1}))
    }

    previousPage() {
        this.props.dispatch(loadNewPage({page: -1}));
    }

    goToPage(page) {
        this.props.dispatch(loadExactPage({page}))
    }

    sortByInput(e){
        let value = e.target.value;
        let direction = value.endsWith('asc') ? "asc" : "desc";

        if (value.startsWith('price')){
            this.props.dispatch(sortByPrice({direction}))
        }else {
            this.props.dispatch(sortByAlphabet({direction}));
        }
    }


const App = () => {
  const [contacts, setContacts] = React.useState([
    { "id": 1,"photo": Avatar, "name": "Tamma Everill", "phone": "+351 888 411 5474" },
    { "id": 2,"photo": Avatar, "name": "Alejandrina Alexis", "phone": "+62 188 649 7200" },
    { "id": 3,"photo": Avatar, "name": "Hakim Bruntjen", "phone": "+86 241 773 8545" },
    { "id": 4,"photo": Avatar, "name": "Prudi Dagwell", "phone": "+62 606 216 1097" },
    { "id": 5,"photo": Avatar, "name": "Prent Frizell", "phone": "+86 808 891 5427" },
    { "id": 6,"photo": Avatar, "name": "Curtis Enterlein", "phone": "+64 836 110 1773" },
    { "id": 7,"photo": Avatar, "name": "Tamma Everill", "phone": "+351 888 411 5474" },
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
            <img src={photo} alt={name} className="avatar" />
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
