export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      const quote = state.find(quote => quote.id === action.quoteId)
      quote.votes++
      return state
      
    case 'DOWNVOTE_QUOTE':
      const quote2 = state.find(quote => quote.id === action.quoteId)
      if (quote2.votes === 0) {
        return state
      } else {
        quote2.votes--
        return state
      }

    default:
      return state;
  }
}
