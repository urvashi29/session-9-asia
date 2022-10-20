import React, { Component } from 'react';
import AddInfo from './AddInfo';

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
            </>
        )
    }
}


export default App;



