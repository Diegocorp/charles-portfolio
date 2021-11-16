import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import HomeScreen from "./screens/HomeScree";
import AppDetailScreen from "./screens/AppDetailsScreen";
import AppScreen from "./screens/AppScreen";
import { useDispatch } from "react-redux";
import { initialData } from "./redux/action/initialDataAction";
import WebsitesScreen from "./screens/WebsitesScreen";
import WebsitesDetailScren from "./screens/websitesDetailsScreen";
import DesignsDetailScreen from "./screens/designDetailsScreen";

//team slide

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initialData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Route path="/" component={HomeScreen} exact={true} />
          <Route path="/apps/:id" component={AppDetailScreen} />
          <Route path="/app" component={AppScreen} />
          <Route path="/website" component={WebsitesScreen} />
          <Route path="/websites/:id" component={WebsitesDetailScren} />
          <Route path="/designs/:id" component={DesignsDetailScreen} />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
