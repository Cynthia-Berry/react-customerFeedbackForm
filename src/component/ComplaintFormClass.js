/**
 * This form, complaintFormClass.js, is handled using class based,
 *  while that in complaintFormFunctional.js is handled using Functional Based Component
 */

import { Component } from "react";
import Button from "./Button";
import Feedback from "./Feedback";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";

class ComplaintFormClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: "",
            email: "",
            reason: "",
            description: "",
            reasonOptions: [
                "My account was debited erroneously",
                "My card is expired",
                "My transaction failed",
                "Others"
            ],
            feedbackDetails: null,
            showFeedbackDetails: false
        }

    }

    // handleFullNameChange = (event) => {
    //     this.setState({ fullName: event.target.value });
    // }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        //METHOD 1. DESTRUCTURING
        const { fullName, email, reason, description } = this.state;

        const feedbackDetails = {
            fullName: fullName,
            email: email,
            reason: reason,
            description: description
        }

        //METHOD 2.
        // const feedbackDetails = {
        //     fullName: this.state.fullName,
        //     email: this.state.email,
        //     reason: this.state.reason,
        //     description: this.state.description
        // }
        if(fullName !== "" && email !== ""  && reason !== "" && description !== "") {
            this.setState({ feedbackDetails: feedbackDetails, showFeedbackDetails: true});
        }
    }

    handleClearForm = (e) => {
        e.preventDefault();
        this.setState({
            fullName: "",
            email: "",
            reason: "",
            description: "",
            showFeedbackDetails: false
        })
    }

    render() {
        return (
            <div className="row mt-5">
                <form className="col-sm-6">
                    <div>
                        <Input
                            title="Full Name"
                            name="fullName"
                            inputType="text"
                            value={this.state.fullName}
                            handleChange={this.handleInputChange}
                            placeholder="e.g Berry Hills" />
                    </div>
                    <div className="mt-4">
                        <Input
                            title="Email"
                            name="email"
                            inputType="email"
                            value={this.state.email}
                            handleChange={this.handleInputChange}
                            placeholder="e.g berryhills@gmail.com" />
                    </div>
                    <div className="mt-4">
                        <Select
                            title="Reason for Contsct"
                            name="reason"
                            placeholder="Select a reason..."
                            value={this.state.reason}
                            handleChange={this.handleInputChange}
                            options={this.state.reasonOptions}
                        />
                    </div>
                    <div className="mt-4">
                        <TextArea
                            title="Description"
                            rows={7}
                            name="description"
                            value={this.state.description}
                            handleChange={this.handleInputChange}
                            placeholder="Reason for complaint..." />
                    </div>
                    <div className="my-4 d-flex flex-row">
                        <Button onButtonClick={this.handleFormSubmit} title="Submit Complaint" backgroundColor="#27ae60" color="white" />
                        <Button onButtonClick={this.handleClearForm} title="Reset Form" backgroundColor="#7f8c8d" color="white" />
                    </div>
                </form>

                <div className="col-sm-6">
                {this.state.showFeedbackDetails && <Feedback feedbackDetails={this.state.feedbackDetails} />}
                </div>
            </div>
        )
    }
}

export default ComplaintFormClass;