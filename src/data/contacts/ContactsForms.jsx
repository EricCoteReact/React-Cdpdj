import { send } from 'process';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Alert } from 'reactstrap';

export default function ContactForms() {
  const { register, handleSubmit, watch, errors } = useForm();
  const myForm = useRef();

  const onSubmit = (data) => {
    const formData = new FormData(myForm.current);
    send(formData);
  };

  async function send(data) {
    await fetch('/contacts', {
      method: 'post',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: data,
    });
  }

  return (
    <>
      <h1>Formulaire</h1>
      <form onSubmit={handleSubmit(onSubmit)} ref={myForm}>
        <input
          name='firstName'
          placeholder='First name'
          defaultValue=''
          ref={register({ required: true, minLength: 3 })}
        />
        <input
          name='lastName'
          placeholder='last name'
          defaultValue=''
          ref={register({ required: true, minLength: 3 })}
        />
        <input
          name='email'
          placeholder='email'
          defaultValue=''
          ref={register({
            required: true,
            pattern: '^([a-zA-Z0-9_-.]+)@([a-zA-Z0-9_-.]+).([a-zA-Z]{2,5})$',
          })}
        />
        <br />
        <br />
        Envoyez votre photo
        <input type='file' accept='image/*' name='photo' ref={register()} />
        <br />
        <br />
        {Object.keys(errors).length > 0 && (
          <Alert color='danger'>un champ est en erreur</Alert>
        )}
        <input type='submit' />
      </form>
    </>
  );
}
