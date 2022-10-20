// Form
import React, { Component } from "react";

class AddInfo extends Component {
    state = {
        firstName: '',
        age: '',
        contact: '',
        error: {
            nameError: '',
            ageError: '',
            contactError: ''
        },
        formValid: false
    }

    //event object: created automatically
    handleChange = (e) => {
        console.log(e);
        console.log(e.target.value);
        console.log(e.target.id);

        // Validation
        if (e.target.id == 'firstName') {
            this.validateName(e.target.value);
        }

        if (e.target.id == 'age') {
            this.validateAge(e.target.value);
        }

        if (e.target.id == 'contact') {
            this.validateContact(e.target.value);
        }

        // this.setState({
        //     [e.target.id]: e.target.value
        // });


    }

    validateName = (name) => {
        let nameError = this.state.error.nameError;
        let formValid = this.state.formValid;

        if (name.trim() === '') {
            nameError = 'Please enter name';
            formValid = false;
        }
        else if (name.trim().length <= 3) {
            nameError = 'Please enter a name having more 3 letters';
            formValid = false;
        }
        // else if(!patten.test(name)){}

        else {
            nameError = '';
            formValid = true;
        }

        this.setState({
            firstName: name,
            error: { ...this.state.error, nameError },
            formValid
        });

        return formValid;
    }

    validateAge = (age) => {
        let ageError = this.state.error.ageError;
        let formValid = this.state.formValid;

        if (age.trim() === '') {
            formValid = false;
            ageError = 'Please enter age';
        }
        else if (age.trim().length > 3) {
            formValid = false;
            ageError = "Age can't be more than 3 digits";
        }
        // else if() {

        // }
        else {
            formValid = true;
            ageError = '';
        }

        this.setState({
            formValid,
            age,
            error: { ...this.state.error, ageError }
        });

        return formValid;

    }

    validateContact = (contact) => {
        let formValid = this.state.formValid;
        let contactError = this.state.error.contactError;

        if (contact.trim() === '') {
            formValid = false;
            contactError = "This field can't be empty";
        }
        else if (contact.trim().length != 10) {
            formValid = false;
            contactError = "contact should be of 10 characters";
        }
        // else if(!/^\d+$/.test(contact)) {

        // }
        else {
            formValid = true;
            contactError = "";
        }

        this.setState({
            contact,
            formValid,
            error: { ...this.state.error, contactError }
        })

        return formValid;
    }

    handleSubmit = (e) => {
        e.preventDefault();//restrict and prevent the default behavior of any event

        // let nameBool = this.validateName();

        if (this.validateName(this.state.firstName) && this.validateAge(this.state.age) && this.validateContact(this.state.contact)) {
            alert('form is submited');
            this.props.addData(this.state);
            
            this.setState({
                firstName: '',
                age: '',
                contact: ''
            });

        }
        else {
            alert('Please check all the fields');
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>First Name</label>
                <input type="text" onChange={this.handleChange} placeholder="Please enter name" id="firstName" value={this.state.firstName} />
                <p style={{ color: 'red' }}>{this.state.error.nameError}</p>

                <label>Age</label>
                <input type="text" onChange={this.handleChange} placeholder="Please enter age" id="age" value={this.state.age} />
                <p style={{ color: 'red' }}>{this.state.error.ageError}</p>

                <label>Contact Number</label>
                <input type="text" onChange={this.handleChange} placeholder="Please enter contact" id="contact" value={this.state.contact} />
                <p style={{ color: 'red' }}>{this.state.error.contactError}</p>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default AddInfo;

{/* <input onchange="add(e)"> */ }
{/* <form onsubmit="">

</form> */}

// HTML
// form
// form attributes
// form elements
// type attribute value