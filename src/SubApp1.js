import LogRocket from "logrocket";
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer1 from "./reducer1";
import Stuff1 from "./Stuff1";
const store = createStore(
	reducer1,
	applyMiddleware(LogRocket.reduxMiddleware())
);
export default () => (
	<Provider store={store}>
		<Stuff1 />
	</Provider>
);
