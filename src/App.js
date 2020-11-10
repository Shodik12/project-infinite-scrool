import React from 'react';
import './styles.css';
import Avatar from './avatar.png';
import InfiniteScroll from 'react-infinite-scroller';
import { generateRandomData } from './helpers';
import ContactSkeletonLoading from './ContactSkeletonLoading';
import ReactNextPaging from "react-next-paging";


const App = () => {
  const [contacts, setContacts] = React.useState([
    { "id": 1, "photo": Avatar, "name": "Tamma Everill", "phone": "+351 888 411 5474" },
    { "id": 2, "photo": Avatar, "name": "Alejandrina Alexis", "phone": "+62 188 649 7200" },
    { "id": 3, "photo": Avatar, "name": "Hakim Bruntjen", "phone": "+86 241 773 8545" },
    { "id": 4, "photo": Avatar, "name": "Prudi Dagwell", "phone": "+62 606 216 1097" },
    { "id": 5, "photo": Avatar, "name": "Prent Frizell", "phone": "+86 808 891 5427" },
    { "id": 6, "photo": Avatar, "name": "Curtis Enterlein", "phone": "+64 836 110 1773" },
    { "id": 7, "photo": Avatar, "name": "Tamma Everill", "phone": "+351 888 411 5474" },
    { "id": 8, "photo": Avatar, "name": "Alejandrina Alexis", "phone": "+62 188 649 7200" },
    { "id": 9, "photo": Avatar, "name": "Hakim Bruntjen", "phone": "+86 241 773 8545" },
    { "id": 10, "photo": Avatar, "name": "Prudi Dagwell", "phone": "+62 606 216 1097" },
    { "id": 11, "photo": Avatar, "name": "Prent Frizell", "phone": "+86 808 891 5427" },
    { "id": 12, "photo": Avatar, "name": "Curtis Enterlein", "phone": "+64 836 110 1773" },
    { "id": 13, "photo": Avatar, "name": "Margret Brissard", "phone": "+372 242 306 0100" },
    { "id": 14, "photo": Avatar, "name": "Margret Brissard", "phone": "+372 242 306 0100" },
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







const buttonStyles = {
  border: "1px solid #ccc",
  background: "#fff",
  fontSize: "1em",
  padding: 10,
  margin: 5,
  width: 70
};

const PaginacionTabla = ({ itemsperpage, nocolumns, items, pagesspan }) => {
  return (
    <ReactNextPaging
      itemsperpage={itemsperpage}
      nocolumns={nocolumns}
      items={items}
      pagesspan={pagesspan}
    >
      {({
        getBackButtonProps,
        getFastBackButtonProps,
        getFwdButtonProps,
        getFastFwdButtonProps,
        getSelPageButtonProps,
        nopages,
        inipagearray,
        pagesforarray,
        currentpage,
        noitems,
        initialitem,
        lastitem,
        goBackBdisabled,
        goFastBackBdisabled,
        goFwdBdisabled,
        goFastFwdBdisabled
      }) => (
        <tbody>
          {items.slice(initialitem, lastitem).map((item, index) => {
            return item;
          })}
          {noitems > 0
            ? [
                <tr key={"pagingrow" + 100}>
                  <td colSpan={nocolumns} style={{ textAlign: "center" }}>
                    <button
                      style={buttonStyles}
                      {...getFastBackButtonProps()}
                      disabled={goFastBackBdisabled}
                    >
                      {"<<"}
                    </button>
                    <button
                      style={buttonStyles}
                      {...getBackButtonProps()}
                      disabled={goBackBdisabled}
                    >
                      {"<"}
                    </button>
                    {Array.from(
                      { length: pagesforarray },
                      (v, i) => i + inipagearray
                    ).map(page => {
                      return (
                        <button
                          key={page}
                          {...getSelPageButtonProps({ page: page })}
                          disabled={currentpage == page}
                        >
                          {page}
                        </button>
                      );
                    })}
                    <button
                      style={buttonStyles}
                      {...getFwdButtonProps()}
                      disabled={goFwdBdisabled}
                    >
                      {">"}
                    </button>
                    <button
                      style={buttonStyles}
                      {...getFastFwdButtonProps()}
                      disabled={goFastFwdBdisabled}
                    >
                      {">>"}
                    </button>
                  </td>
                </tr>
              ]
            : null}
        </tbody>
      )}
    </ReactNextPaging>
  );
};



    </div>
  )
}

export default App;
