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
          text: "Effective Use of Language and Speech Patterns",
          score: 10
        },
        {
          id: 1,
          text: "Conversational Tone",
          score: 9
        },
        {
          id: 2,
          text: "Body Language, Posture, and Gestures",
          score: 8
        },
        {
          id: 3,
          text: "Agreeableness",
          score: 9
        },
      ]
    },
    {
      questionNo: 2,
      selected: false,
      messageText: "What is your greatest strength?",
      criteria: [
        {
          id: 0,
          text: "Effective Use of Language and Speech Patterns",
          score: 10
        },
        {
          id: 1,
          text: "Conversational Tone",
          score: 10
        },
        {
          id: 2,
          text: "Body Language, Posture, and Gestures",
          score: 10
        },
        {
          id: 3,
          text: "Agreeableness",
          score: 10
        },
      ]
    },
    {
      questionNo: 3,
      selected: false,
      messageText: "What is your greatest weakness?",
      criteria: [
        {
          id: 0,
          text: "Effective Use of Language and Speech Patterns",
          score: 5
        },
        {
          id: 1,
          text: "Conversational Tone",
          score: 5
        },
        {
          id: 2,
          text: "Body Language, Posture, and Gestures",
          score: 5
        },
        {
          id: 3,
          text: "Agreeableness",
          score: 9
        },
      ]
    }
  ],
  selected: null,
  emotion: '',
  emotionCounter: 0,
  smile: 0
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
    case "COUNTER_EMOTION":
      return {
        ...state,
        emotionCounter: state.emotionCounter + 1
      }
    case "COUNT_SMILE":
      return {
        ...state,
        smile: state.smile + action.value
      }
    default:
      return state;
  }
}

function pageReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PAGE":
      return {
        ...state,
        isHome: action.isHome
      }
    default:
      return state;
  }
}

export default combineReducers({
  questionsState: questionsReducer,
  webcamReducer: webcamReducer,
  pageState: pageReducer,
});
