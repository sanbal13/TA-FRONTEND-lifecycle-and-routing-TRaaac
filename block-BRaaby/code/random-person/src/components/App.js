import { Component } from 'react';
import Spinner from './Spinner';
import UserCard from './UserCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {    
    fetch('https://randomuser.me/api')
      .then((res) => res.json())
      .then((data) => this.setState({data: data.results[0]}));
  }

  componentDidUpdate() {
    fetch('https://randomuser.me/api')
    .then((res) => res.json())
    .then((data) => this.setState({data: data.results[0]}));
  }
  changeProfile = () => {    
      this.setState({
        data: null
      });
  }

  render() {
    if (!this.state.data) {
      return <Spinner />;
    }
    return (
      <>
        <UserCard data={this.state.data} changeProfile={this.changeProfile} />
      </>
    );
  }
}

export default App;
