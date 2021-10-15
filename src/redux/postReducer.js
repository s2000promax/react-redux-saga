import { CREATE_POST } from "./types"

const initialState = {
posts: [],
fetchedPosts: []
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
          default: return state

          case CREATE_POST: return {
              ...state, posts: state.posts.concat([action.payload])
              //...state, posts: [...state.posts, action.payload]
          }
    }
    
}