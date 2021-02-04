import React from 'react';
import { Input } from 'reactstrap';
import MyContext from './MyContext';

//Hooks only work with functions
export default function ModifyDataHooks() {
  const ctx = React.useContext(MyContext);

  return (
    <>
      <Input
        value={ctx.firstName}
        name='firstName'
        placeholder='First Name'
        onChange={ctx.onChange}
        className='mb-4'
      />
      <Input
        value={ctx.lastName}
        name='lastName'
        placeholder='Last Name'
        onChange={ctx.onChange}
        className='mb-4'
      />
      <Input
        value={ctx.color}
        name='color'
        placeholder='Color'
        onChange={ctx.onChange}
        className='mb-4'
      />
      <Input
        value={ctx.lastNameColor}
        name='lastNameColor'
        placeholder='Last Name Color'
        onChange={ctx.onChange}
      />
    </>
  );
}
