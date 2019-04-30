import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote, downvoteQuote } from '../actions/quotes';
class Quotes extends Component {
  displayQuotes = () => this.props.quotes.map(quote => <QuoteCard key={quote.id} quote={quote} handleUpvote ={this.props.upvoteQuote} handleDownvote={this.props.downvoteQuote}/>)
  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.displayQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
export default connect(state => ({ quotes: state.quotes }), { upvoteQuote, downvoteQuote })(Quotes);
