import React from 'react';
import axios from 'axios';

// const toBase64 = file => new Promise((resolve, reject) => {
//   const reader = new FileReader();
//   reader.readAsBinaryString(file);
//   reader.onload = () => resolve(reader.result);
//   reader.onerror = error => reject(error);
// });

class App extends React.Component {

  send = async () => {

    try {
      console.log('clicked')
      const formData = new FormData();
      
      const image = document.querySelector('input').files[0];
      formData.append("image", image);
      axios.post('/img',formData).then(result=>console.log(result));
    } catch (error) {
      console.log(error);
    }

  }

  componentDidMount() {
    axios.get('/api/helloworld',{alo:1234})
      .then(result => console.log(result))
      .catch(error => console.log(error));
      
  }

  render() {
    return (
      <div className="App">
        {/* <input type='text' /> */}
        <input type='file' />
        <button onClick={this.send}>Send</button>
      </div>
    );
  }
}

export default App;
