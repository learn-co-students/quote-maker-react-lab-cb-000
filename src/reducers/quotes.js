
export default (state = [], action) => {
  let quote, quotes, newQuote, votes, qIndex
  switch(action.type){

    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      // qIndex = state.findIndex(quote => quote.id === action.quoteId);
      // console.log(qIndex)
      // newQuote = {...state[qIndex], votes: state[qIndex].votes +1 }
      // console.log(newQuote)
      // console.log([...state.slice(0, qIndex -1), newQuote, state.slice(qIndex +1)])
      // return [...state.slice(0, qIndex - 1), newQuote, state.slice(qIndex +1)]
      quote = state.filter(quote => quote.id === action.quoteId);
      quotes = state.filter(quote => quote.id !== action.quoteId);
      newQuote = {...quote[0], votes: quote[0].votes + 1}
      return [...quotes, newQuote];

    case 'DOWNVOTE_QUOTE':
    console.log(action.quoteId)
      quote = state.filter(quote => quote.id === action.quoteId);
      if(quote[0].votes > 0) {
        quotes = state.filter(quote => quote.id !== action.quoteId);
        newQuote = {...quote[0], votes: quote[0].votes - 1}
        return [...quotes, newQuote];
      } else {
        return state;
      }

    default:
      return state;
  }
}
