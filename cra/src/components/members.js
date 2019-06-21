import React, { Component } from 'react';

class Members extends Component {
    constructor() {
        super();
        this.state = {
            members: []
        }
    }

    renderMembers() {
        return this.state.members.forEach((member, index) => {
            return (
                <div>
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