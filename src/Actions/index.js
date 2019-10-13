export function getSelected(questionNo) {
  return {
    type: 'GET_SELECTED',
    questionNo
  };
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
