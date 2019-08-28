import React from "react";
import { Container } from "reactstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./custom.scss";
import Menu from "./menu";
import Footer from "./footer";
import Home from "../home/home";
import Counter from "../counter/counter";
import Employees from "../employees/employees";
import EmployeeDetails from "../employee-details/employee-details";
import NotFound from "../404/404";
import TodosClassic from "../todos/state/todos";
import TodosContextHooks from "../todos/context-use-reducer/todos";
import ReduxClassic from "../todos/redux/classic/connect/todos";
import ReduxHooks from "../todos/redux/classic/hooks/todos";
import StarterClassic from "../todos/redux/starter-kit/connect/todos";
import StarterHooks from "../todos/redux/starter-kit/hooks/todos";
import Reddits from "../reddit/reddits";
import Clock from "../clock/clock";
import Mouser from "../mouse/display-mouse";
import About from "../about/about";
//const About = React.lazy(() => import('./about/about'));

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Container>
          {/* <React.Suspense fallback={<h1>Loading...</h1>}   > */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/counter" render={() => <Counter init={5} />} />
            <Route path="/employees" component={Employees} />
            <Route exact path="/employee" component={EmployeeDetails} />
            <Route path="/employee/:id" component={EmployeeDetails} />
            <Route path="/todos/ClassicState" component={TodosClassic} />
            <Route path="/todos/ContextHooks" component={TodosContextHooks} />
            <Route path="/todos/ReduxClassic" component={ReduxClassic} />
            <Route path="/todos/ReduxHooks" component={ReduxHooks} />
            <Route path="/todos/StarterClassic" component={StarterClassic} />
            <Route path="/todos/StarterHooks" component={StarterHooks} />
            <Route path="/reddits" component={Reddits} />
            <Route path="/clock" component={Clock} />
            <Route path="/mouser" component={Mouser} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
          {/* </React.Suspense> */}
        </Container>
      </BrowserRouter>
    );
  }
}