import * as React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Error404 } from "./pages";
import ChartsPage from "./interface/ChartsPage.react";
import "tabler-react/dist/Tabler.css";

type Props = {||};

function App(props: Props): React.Node {
    const { categories } = props
    return (
        <React.StrictMode>
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route path="/:category/:statistic" component={(props) => <ChartsPage categories={categories} {...props} />}/>
                    <Route component={Error404}/>
                </Switch>
            </Router>
        </React.StrictMode>
    );
}

export default App;
