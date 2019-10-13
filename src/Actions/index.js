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

export function setPage(isHome) {
  return {
    type: 'SET_PAGE',
    isHome
  }
}
