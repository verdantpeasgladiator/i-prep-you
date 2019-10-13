import { combineReducers } from "redux";

const initialState = {
  questions: [
    {
      questionNo: 1,
      selected: true,
      messageText: "Tell me about yourself",
      criteria: [
        {
          id: 0,
          text: "Some kind of criteria 0",
          score: 10
        },
        {
          id: 1,
          text: "Some kind of criteria 1",
          score: 9
        },
        {
          id: 2,
          text: "Some kind of criteria 2",
          score: 8
        },
        {
          id: 3,
          text: "Some kind of criteria 3",
          score: 9
        },
        {
          id: 4,
          text: "Some kind of criteria 4",
          score: 7
        }
      ]
    },
    {
      questionNo: 2,
      selected: false,
      messageText: "What is your greatest strength?",
      criteria: [
        {
          id: 0,
          text: "Some kind of criteria 0",
          score: 10
        },
        {
          id: 1,
          text: "Some kind of criteria 1",
          score: 9
        },
        {
          id: 2,
          text: "Some kind of criteria 2",
          score: 8
        },
        {
          id: 3,
          text: "Some kind of criteria 3",
          score: 9
        },
        {
          id: 4,
          text: "Some kind of criteria 4",
          score: 7
        }
      ]
    },
    {
      questionNo: 3,
      selected: false,
      messageText: "What is your greatest weakness?",
      criteria: [
        {
          id: 0,
          text: "Some kind of criteria 0",
          score: 10
        },
        {
          id: 1,
          text: "Some kind of criteria 1",
          score: 9
        },
        {
          id: 2,
          text: "Some kind of criteria 2",
          score: 8
        },
        {
          id: 3,
          text: "Some kind of criteria 3",
          score: 9
        },
        {
          id: 4,
          text: "Some kind of criteria 4",
          score: 7
        }
      ]
    }
  ],
  selected: null,
  webcam: {
    emotion: ''
  }
}

function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_SELECTED":
      return {
        ...state,
        selected: state.questions[action.questionNo]
      }
    default:
      return state;
  }
}

function webcamReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_EMOTION":
      return {
        ...state,
        emotion: action.emotion
      }
    default:
      return state;
  }
}

export default combineReducers({
  questionsState: questionsReducer,
  webcamReducer: webcamReducer
});
