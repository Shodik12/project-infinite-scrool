import React from 'react';
import './styles.css';
import Avatar from './avatar.png';
import InfiniteScroll from 'react-infinite-scroller';
import { generateRandomData } from './helpers';
import ContactSkeletonLoading from './ContactSkeletonLoading';



const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
 ... // more users here
]

import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

// implemented without image with header
<Card>
  <Card.Title>CARD WITH DIVIDER</Card.Title>
  <Card.Divider/>
  {
    users.map((u, i) => {
      return (
        <View key={i} style={styles.user}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: u.avatar }}
          />
          <Text style={styles.name}>{u.name}</Text>
        </View>
      );
    })
  }
</Card>

// implemented without image without header, using ListItem component
 <Card containerStyle={{padding: 0}} >
  {
    users.map((u, i) => {
      return (
        <ListItem
          key={i}
          roundAvatar
          title={u.name}
          leftAvatar={{ source: { uri: u.avatar } }}
        />
      );
    })
  }
</Card>


// implemented with Text and Button as children
<Card>
  <Card.Title>HELLO WORLD</Card.Title>
  <Card.Divider/>
  <Card.Image source={require('../images/pic2.jpg')} />
  <Text style={{marginBottom: 10}}>
      The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>

const App = () => {
  const [contacts, setContacts] = React.useState([
    { "id": 1, "photo": Avatar, "name": "Tamma Everill", "phone": "+351 888 411 5474" },
    { "id": 2, "photo": Avatar, "name": "Alejandrina Alexis", "phone": "+62 188 649 7200" },
    { "id": 3, "photo": Avatar, "name": "Hakim Bruntjen", "phone": "+86 241 773 8545" },
    { "id": 4, "photo": Avatar, "name": "Prudi Dagwell", "phone": "+62 606 216 1097" },
    { "id": 5, "photo": Avatar, "name": "Prent Frizell", "phone": "+86 808 891 5427" },
    { "id": 6, "photo": Avatar, "name": "Curtis Enterlein", "phone": "+64 836 110 1773" },
    { "id": 7, "photo": Avatar, "name": "Margret Brissard", "phone": "+372 242 306 0100" },
  ]);

  const fetchMoreData = () => {
    const newData = [...contacts, ...generateRandomData(5)];
    setTimeout(() => {
      setContacts(newData);
    }, 2000);
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
