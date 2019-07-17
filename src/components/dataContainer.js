import React from 'react';
import superagent from 'superagent';

class DataContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }
  getData = async () => {
    let res = await superagent.get('https://generic-api-server.herokuapp.com/api/v1/book');
    console.log(res.body.results);
    this.setState({data: res.body.results});
  }
  render() {
    return (
      <div>
        <button onClick={this.getData}>Get Data</button>
        <ul>
        {
          this.state.data.map((item, idx) => (
            <li>
              <p>{item.title} by {item.author}</p>
            </li>            
          ))
        }
        </ul>
      </div>
    )
  }
}

export default DataContainer