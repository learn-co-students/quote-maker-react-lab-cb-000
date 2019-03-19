function quotesReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote);
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
    case 'UPVOTE_QUOTE':
      return {
        ...state,
        [action.quote.id]: {
          ...quote,
          votes: quote[votes].length + 1
        }
      }
    default:
      return state
  }
}

export default quotesReducer
