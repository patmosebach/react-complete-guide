import React, { Component } from 'react';

class Course extends Component {

    getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
            }
        }
        console.log('Query variable %s not found', variable);
    }

    render () {

        const id = this.props.match.params.id;
        const title = this.getQueryVariable('title');
        console.log(title);
        console.log(this.props);

        return (
            <div>
                <h1>{title}</h1>
                <p>You selected the Course with ID: {id}</p>
            </div>
        );
    }
}

export default Course;