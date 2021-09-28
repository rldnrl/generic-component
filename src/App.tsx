import React from 'react';
import List from './components/List';
import { bigList } from './data'
import './App.css';

function App() {
  const renderEmpty = <p>Data is Empty</p>

  return (
    <div>
      <List
        items={bigList}
        renderEmpty={renderEmpty}
        renderItem={(item) => (
          <>
            <img src={item.avatar} alt="avatar" width={50} />
            <p>
              {item.name} - {item.email}
            </p>
          </>
        )}
      />
    </div>
  );
}

export default App;
