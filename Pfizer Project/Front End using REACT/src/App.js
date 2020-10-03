import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
// Demos
import SimpleInput from "./examples/forms/SimpleInput";
import InputTextarea from "./examples/forms/InputTextarea";
import SelectRadioButtonCheckbox from "./examples/forms/SelectRadioButtonCheckbox";
import FormSubmit from "./examples/forms/FormSubmit";
import AntFormSubmit from "./examples/forms/AntFormSubmit";
import UseEffect00 from "./examples/useEffect/00";
import UseEffect01 from "./examples/useEffect/01";
import UseEffect02 from "./examples/useEffect/02";
import UseEffect03 from "./examples/useEffect/03";
// import DemoPage1 from "./examples/charts/DemoPage1";
import DemoPage2 from "./examples/charts/DemoPage2";

const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout className="layout-container">
        <Header />
        <Layout>
          <Sidebar />
          <Content className="inner-content">
            <Switch>
              <Route exact path="/forms/simple-input" component={SimpleInput} />
              <Route
                exact
                path="/forms/input-and-textarea"
                component={InputTextarea}
              />
              <Route
                exact
                path="/forms/select-radio-button-checkbox"
                component={SelectRadioButtonCheckbox}
              />
              <Route
                exact
                path="/forms/form-submit-async"
                component={FormSubmit}
              />
              <Route
                exact
                path="/forms/ant-design-form-submit"
                component={AntFormSubmit}
              />

              <Route exact path="/use-effect/00" component={UseEffect00} />
              <Route exact path="/use-effect/01" component={UseEffect01} />
              <Route exact path="/use-effect/02" component={UseEffect02} />
              <Route exact path="/use-effect/03" component={UseEffect03} />

              {/* <Route exact path="/charts/demo-1" component={DemoPage1} /> */}
              <Route exact path="/charts/demo-2" component={DemoPage2} />
            </Switch>
            <footer>
              Made with{" "}
              <span role="img" aria-label="love">
                ❤️
              </span>{" "}
              in Thessaloniki, Greece.
            </footer>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
