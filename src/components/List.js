import React, {Component} from 'react'
import CardData from './CardData'
import API from '../utils/API'
import '../index.css'

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            users : []
    
        }

    }
    componentDidMount(){
    API.getUsers().then(data => {
        console.log(data)
        this.setState({users: data.data.results})
    })
    }
    render() 
    {
        return (<div className="list">
        <CardData users={this.state.users}/>
        </div>)

    }
}


export default List