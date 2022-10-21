import React, { Component } from 'react';
import AddInfo from './AddInfo';
import Display from './Display';

class App extends Component {
    state = {
        personData: []
    }

    //create a function inside parent component
    addData = (user) => {
        console.log(user);//add user inside personData(state)

        this.setState({
            personData: [...this.state.personData, user]
        });
    }

    render() {
        return (
            <>
                <AddInfo addData={this.addData} />
                <Display personData={this.state.personData} />
            </>
        )
    }
}


export default App;


