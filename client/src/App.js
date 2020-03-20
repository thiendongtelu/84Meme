import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/home.component';
import Header from './components/header/header.component';

// const toBase64 = file => new Promise((resolve, reject) => {
//   const reader = new FileReader();
//   reader.readAsBinaryString(file);
//   reader.onload = () => resolve(reader.result);
//   reader.onerror = error => reject(error);
// });

class App extends React.Component {
  state = {
    image: null,
    caption: null
  }

  send = async (event) => {
    event.preventDefault();

    try {
      console.log('clicked')
      const formData = new FormData();

      const image = document.querySelectorAll('input')[1].files[0];
      const caption = document.querySelector('input').value;
      formData.append("image", image);
      const imgData = await (await axios.post('https://api.imgbb.com/1/upload?key=430f22ae6e75ba471e67081eec99d78b', formData)).data.data;
      console.log(imgData);
      await axios.post('/img', { caption, imgData });
    } catch (error) {
      console.log(error);
    }

  }

  componentDidMount() {
    axios.get('/api/helloworld', { alo: 1234 })
      .then(result => console.log(result))
      .catch(error => console.log(error));

  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
