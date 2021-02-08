export default (state = [], action) => {
  console.log(action.type)
  switch (action.type) {
    
    case 'ADD_QUOTE':
      return [].concat(state, action.quote)

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      return state.map(
        quote => (quote.id === action.quoteId ? Object.assign({}, quote, {votes: quote.votes + 1}) : quote )
        )

    case 'DOWNVOTE_QUOTE':
      return state.map(
        quote => (quote.id === action.quoteId && quote.votes > 0 ? Object.assign({}, quote, {votes: quote.votes - 1}) : quote )
        )
    
    default: return state
  }
}
