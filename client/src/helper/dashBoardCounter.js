// import React, { Component } from 'react'
// import { connect } from 'react-redux';

// class TotalVotes extends React.Component {
//     state = {
//       counter: 0,
//       stepTime: 0,
//     };
//     componentDidMount() {
//       if (this.state.counter < this.props.total_votes < 500) {
//         this.setState({ stepTime: })
//       }
//     }
//     counter1 = () => {
//       this.setState({
//         counter: this.state.counter + 1,
//       });
//       if (this.state.counter < this.props.total_votes) {
//         setTimeout(this.counter2, 10);
//       }
//     };
//     counter2 = () => {
//       this.setState({
//         counter: this.state.counter + 1,
//       });
//       if (this.state.counter < this.props.total_votes) {
//         setTimeout(this.counter1, 10);
//       }
//     };
//     render() {
//       return (
//         <div className="totalvotes--wrapper">
//           <h1 className="totalvotes--h1">{this.state.counter}</h1>
//         </div>
//       );
//     }
//   }

//   const mapStateToProps = (state) => {
//     return {
//       counter: state.counter.counter
//     };
//   };

//   export default connect(mapStateToProps)()