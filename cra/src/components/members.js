import React, { Component } from 'react';
import axios from 'axios';

class Members extends Component {
    constructor() {
        super();
        this.state = {
            members: []
        }
    }

    componentDidMount() {
        axios.get("/api/members")
            .then(response => {
                this.setState({
                    members: response.data
                })
            });
    }

    renderMembers() {
        return this.state.members.map((member, index) => {
            return (
                <div key={index}>
                    Member ID: {member.id} / Member Name: {member.name}
                </div>
            )
        });
    }

    render() {
        return (
            <div>
                Member List:
                {this.renderMembers()}
            </div>
        );
    }
};

export default Members;