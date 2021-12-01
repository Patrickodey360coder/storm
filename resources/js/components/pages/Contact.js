import React from 'react';
import {useForm} from 'react-hook-form';
import img from '../images/contact.svg';

function Contact() {
  const {register, handleSubmit, reset, formState: {errors}} = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset({});
  }


  return (
    <div id="contact">
      <div className="container py-5">
        <div className="row">
          <div className="col-10 col-lg-6 col-md-6 mx-auto">
            <img src={img} alt={img} className="img-fluid contact-img" />
          </div>
          <div className="col-12 col-lg-6 col-md-6">
            <h1 className="text-center my-3 mb-4">Contact Us</h1>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-11 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="mb-3">
                    <input className="form-control form-control-lg" type="text" placeholder="name..." aria-label=".form-control-lg example" {...register("name", {required: 'name is required...'})}  />
                    {errors.name && <small className="px-2 pt-5 text-danger"> {errors.name.message}</small>}
                  </div>
                  <div className="mb-3">
                    <input type="email" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="email" {...register('email', {required: 'email is required...', pattern: {
                      value: /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'please enter a valid Email...'
                    } })}/>
                    {errors.email && <small className="px-2 pt-5 text-danger"> {errors.email.message}</small>}
                  </div>
                  <div class="mb-3">
                    <textarea placeholder="message..." class="form-control form-control-lg" id="exampleFormControlTextarea1" rows="3" {...register('message', {required: 'message is required...'})}></textarea>
                    {errors.message && <small className="px-2 pt-5 text-danger"> {errors.message.message}</small>}
                  </div>

                  <div className="mb-3 d-grid">
                    <button className="btn btn-lg btn-pink">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
