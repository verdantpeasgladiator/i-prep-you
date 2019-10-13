import { combineReducers } from "redux";

const initialState = {
  questions: [ {
    questionNo: 1,
    selected: true,
    messageText: "What is your greatest weakness?",
    criteria: [
      {
        id: 0,
        text: "Use of filler words",
        score: 0
      },
      {
        id: 1,
        text: "Speaking Pace",
        score: 0
      },
      {
        id: 2,
        text: "Body Language/Facial Expression",
        score: 0
      }
    ]
  }],
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
    case "CALCULATE":
      return {
        ...state,
        questions: [ ...state.questions, 
        {
          questionNo: 1,
          selected: true,
          messageText: "What is your greatest weakness?",
          criteria: [
            {
              id: 0,
              text: "Use of filler words",
              score: action.scoreObj.fillerWords
            },
            {
              id: 1,
              text: "Speaking Pace",
              score: action.scoreObj.speakingRate
            },
            {
              id: 2,
              text: "Body Language/Facial Expression",
              score: action.scoreObj.facial
            }
          ]
        }]
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
    case "SET_JOB_DESC":
      return {
        ...state,
        jobDesc: action.string
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
