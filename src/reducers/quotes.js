
export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [].concat(state, action.payload);
    case "REMOVE_QUOTE":
      let idx = state.map(quote => quote.id).indexOf(action.payload);
      return [].concat(state.slice(0, idx), state.slice(idx + 1, state.length));
    case "UPVOTE_QUOTE":
      let idx = state.map(quote => quote.id).indexOf(action.payload);
      let selectedQuote = state[idx];
      selectedQuote.votes++;
      return [].concat(state.slice(0, idx), state.slice(idx + 1, state.length)).concat(selectedQuote);
    case "DOWNVOTE_QUOTE":
      let idx = state.map(quote => quote.id).indexOf(action.payload);
      let selectedQuote = state[idx];
      selectedQuote.votes--;
      return [].concat(state.slice(0, idx), state.slice(idx + 1, state.length)).concat(selectedQuote);
    default:
      return state;
  };
}
