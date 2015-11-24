import ApiClient from './api/ApiClient'

const initialState = ApiClient().get('./data/books.json')

export default function books(state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}