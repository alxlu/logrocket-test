import { DEFAULT_ACTION } from "./actions";
const initialState = {wat: 0};
export default function reducer1(state = initialState, action) {
	switch (action.type) {
		case DEFAULT_ACTION:
      return { ...state, wat: state.wat+1 };
		default:
			return state;
	}
}
