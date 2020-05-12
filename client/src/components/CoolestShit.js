<<<<<<< HEAD
import React from 'react'
import {connect} from "react-redux";

export function CoolestShit(props) {
    
 
 {/*componentDidMount = () => {
        if(this.props.subzero_technology) {
            let max = props.combined_votes.reduce(function(prev, current) {
                return prev.subzero_votes > current.subzero_votes? prev: current;
                console.log(max);
             });  }

    }; */}
    


    return (
        <div>
            
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        combined_votes: state.votes.votes,
    };
};

export default connect(mapStateToProps)(CoolestShit);
=======
import React, { Component } from "react";

export default class CoolestShit extends Component {
  render() {
    return <div></div>;
  }
}
>>>>>>> feature-admin-register
