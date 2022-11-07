import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Header from "./components/Navbar";
import Tourism from "./pages/Tourism";

function App() {
	const [bg, setBG] = useState("home");
	return (
		<Router className="App">
			<div className={`page-wrap ${bg}`}>
				<Header />
				<Routes>
					<Route
						path="/Tourism"
						element={<Tourism changeBG={(x) => setBG(x)} />}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
