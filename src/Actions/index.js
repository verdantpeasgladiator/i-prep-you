export function getSelected(questionNo) {
  return {
    type: 'GET_SELECTED',
    questionNo
  };
}

export function getNextQuestion() {
  return {
    type: "GET_NEXT_Q",
  }
}

export function setEmotion(emotion) {
  return {
    type: 'SET_EMOTION',
    emotion
  }
}

export function addEmotionCount() {
  return {
    type: 'COUNTER_EMOTION'
  }
}

export function addSmile(value) {
  return {
    type: 'COUNT_SMILE',
    value
  }
}

export function setPage(isHome) {
  return {
    type: 'SET_PAGE',
    isHome
  }
}

export function setJobDesc(string) {
  return {
    type: 'SET_JOB_DESC',
    string
  }
}

export function calculateScore(scoreObj) {
  return {
    type: 'CALCULATE',
    scoreObj
  }
}

export function pickQuestion(string) {
  return {
    type: 'PICK_Q',
    string
  }
}