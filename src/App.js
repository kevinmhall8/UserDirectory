import React from 'react'
import Header from './components/Header'
import List from './components/List'

// class App extends React.Component {
//   constructor(props) {
//       super(props)
//       this.state = {
//           search: "",
//           users: []
//       }
//       this.sortUsers = this.sortUsers.bind(this)
//   }


// getUsers() {
//   axios.get("https://randomuser.me/api/?results=50&nat=us")
//     .then(res => {
//       const employees = res.data;
//       this.setState({ employees: res.data.results });
//       console.log(this.state.employees.length)
//     }).catch(err => console.log(err));

// }

// componentDidMount() {
//   this.getUsers();
// }


function App() {
  return (
    <div>
      <Header />
      <List />
    </div>
  );
}

export default App
