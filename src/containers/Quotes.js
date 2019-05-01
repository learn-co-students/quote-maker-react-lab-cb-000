import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  render() {
    const {quotes} = this.props
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
            {quotes.map(quote => {
              return <QuoteCard
                key={quote.id}
                quote={quote}
                handleUpvote={this.props.upvoteQuote}
                handleDownvote={this.props.downvoteQuote}
                handleRemoveQuote={this.props.removeQuote}
              />
            })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {quotes: state.quotes}
}

export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
