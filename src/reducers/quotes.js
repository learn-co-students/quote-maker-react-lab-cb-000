
export default (state = [], action) => {
  let quote, quotes, newQuote, votes
  switch(action.type){

    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      quote = state.filter(quote => quote.id === action.quoteId);
      quotes = state.filter(quote => quote.id !== action.quoteId);
      quote.vote = quote.votes + 1
      return [...quotes, quote];

    case 'DOWNVOTE_QUOTE':
      quote = state.filter(quote => quote.id === action.quoteId);
      if(quote.votes > 0) {
        quotes = state.filter(quote => quote.id !== action.quoteId);
        quote.votes = quote.votes > 0 ? quote.votes - 1:quote.votes;
        return [...quotes, quote];
      } else {
        return state;
      }

    default:
      return state;
  }
}
