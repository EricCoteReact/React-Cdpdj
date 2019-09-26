import React from 'react';
import { Input } from 'reactstrap';
import MyContext from './MyContext';


//contextTypes only works with classes
export default class ModifyData extends React.Component {
  static contextType = MyContext;

  render() {
    const ctx = this.context;
    return (
      <>
        <Input
          value={ctx.name}
          name='name'
          placeholder='Name'
          onChange={ctx.onChange}
          className='mb-4'
        />
        <Input
          value={ctx.color}
          name='color'
          placeholder='Color'
          onChange={ctx.onChange}
        />
      </>
    );
  }
}