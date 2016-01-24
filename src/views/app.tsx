import * as React from 'react';
import { Link } from 'react-router';

interface IAppProps {
  children: Object;
}

export class App extends React.Component<IAppProps, {}> {
  public render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
