
// I had to create this file that implements a duplicate store so the tests would not crash? UGH. Not sure why the tests go looking for this separate src/store when the precoded index.js makes it quite clear that we should follow its lead and create the store right there in the index. This file probably should have been included in the source repo to avoid confusion. It doesn't "give away" any of the lesson's work. 


import { createStore } from 'redux'
import rootReducer from './reducers/index'

export function configureStore(){
  return createStore(rootReducer)
}

export const store = configureStore()