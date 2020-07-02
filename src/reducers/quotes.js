export default (state = [], action) => {
   let idx;
  let selectedQuote;
  switch (action.type) {
    case "ADD_QUOTE":
      return [].concat(state, action.quote);
    case "REMOVE_QUOTE":
      idx = state.map(quote => quote.id).indexOf(action.quoteId);
      return [].concat(state.slice(0, idx), state.slice(idx + 1, state.length));
    case "UPVOTE_QUOTE":
      idx = state.map(quote => quote.id).indexOf(action.quoteId);
      selectedQuote = state[idx];
      selectedQuote.votes++;
      return [].concat(state.slice(0, idx), state.slice(idx + 1, state.length)).concat(selectedQuote);
    case "DOWNVOTE_QUOTE":
      idx = state.map(quote => quote.id).indexOf(action.quoteId);
      selectedQuote = state[idx];
      if (selectedQuote.votes > 0 ) {
          selectedQuote.votes--;
      }
      return [].concat(state.slice(0, idx), state.slice(idx + 1, state.length)).concat(selectedQuote);
    default:
      return state;
  };
}
