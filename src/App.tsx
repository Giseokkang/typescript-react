import React from "react";
import Styled from "styled-components";
import Number from "./Number";
import { Input, Form } from "./Input";

interface IState {
  counter: number;
  name: string;
}

class App extends React.Component<{}, IState> {
  state = {
    counter: 0,
    name: "key"
  };

  render() {
    const { counter, name } = this.state;
    return (
      <div>
        <Number count={counter} />
        <Form onFormSubmit={this.onFormSubmit}>
          <Input value={name} onChange={this.onChange} />
        </Form>
      </div>
    );
  }

  onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    {
      console.log(event.target);
    }
  };

  onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  add = (): void => {
    this.setState(prev => {
      return {
        counter: prev.counter + 1
      };
    });
  };
}

export default App;
