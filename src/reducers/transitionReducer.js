export const CHAT_SELECTED = "CHAT_SELECTED";
export const CHAT_UNSELECTED = "CHAT_UNSELECTED";

export default (state, { type, payload }) => {
  switch (type) {
    case CHAT_SELECTED:
    case CHAT_UNSELECTED:
      console.log(payload);
      return payload;

    default:
      return state;
  }
};
