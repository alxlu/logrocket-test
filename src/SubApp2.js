import LogRocket from "logrocket";
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer2 from "./reducer2";
import Stuff2 from "./Stuff2";
const store = createStore(
	reducer2,
	applyMiddleware(LogRocket.reduxMiddleware())
);
export default () => (
	<Provider store={store}>
		<Stuff2 />
	</Provider>
);
