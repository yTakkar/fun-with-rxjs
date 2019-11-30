import React, {useEffect } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import User from './components/User';
import Cities from './components/Cities';

// import './rxjs'

function App() {
  // const button = document.getElementById('button')
  useEffect(() => {
    // document.getElementById('button').addEventListener('click', e => {
    //   console.log('clicked')
    // })
    
    // fromEvent(document, 'click').pipe(mapTo('hi')).subscribe(cb)

    // fromEvent(document, 'click')
    //   .pipe(mapTo(1))
    //   .pipe(
    //     scan((acc, val) => acc + val, 0)
    //   )
    //   .subscribe(console.log)

  }, []) // eslint-disable-line

  return (
    <Provider store={store()}>
      <div className="App">
        <User/>
        <Cities/>
      </div>
    </Provider>
  );
}

export default App;
