export default (state = [], action) => {
  let q;
  let index;
  switch (action.type) {
    case "ADD_QUOTE":
      return [].concat(state, action.quote)

    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)
    
    case "UPVOTE_QUOTE":
      index = state.findIndex(quote => quote.id === action.quoteId)
      q = state[index]
      q['votes'] += 1
      return [].concat(state.slice(0, index), q, state.slice(index + 1, state.length))

    case "DOWNVOTE_QUOTE":
      index = state.findIndex(quote => quote.id === action.quoteId)
      q = state[index]
      if (q.votes !== 0) {
        q['votes'] -= 1
      }
      return [].concat(state.slice(0, index), q, state.slice(index + 1, state.length))

    default:
      return state;
  }
}
