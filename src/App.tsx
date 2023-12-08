import React from 'react';
import { Provider } from 'react-redux';
import TodoList from './Components/Todo';
import store from './Components/Store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
