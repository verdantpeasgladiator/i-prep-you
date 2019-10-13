export function getSelected(questionNo) {
  return {
    type: 'GET_SELECTED',
    questionNo
  };
}
