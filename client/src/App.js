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
      const formData = new FormData();
      const image = document.querySelector('input').value;
      console.log(image);
      axios.post('/img', {image}).then(result=>console.log(result.data));
      
      // axios.post(`https://api.imgbb.com/1/upload?key=430f22ae6e75ba471e67081eec99d78b&image=${file}`)
      //   .then(result => console.log(result))
      //   .catch(error => console.log(error));
    } catch (error) {
      console.log(error);
    }

  }

  componentDidMount() {
    axios.get('/api/helloworld')
      .then(result => console.log(result))
      .catch(error => console.log(error));
      
  }

  render() {
    return (
      <div className="App">
        <input type='text' />
        {/* <input type='file' /> */}
        <button onClick={this.send}>Send</button>
      </div>
    );
  }
}

export default App;
