import React from 'react';
import { useForm } from 'react-hook-form';
import '../components/App.css';

export default function Footer() {
  const {register, handleSubmit, reset, formState: { errors }} = useForm({
    defaultValues: {email: ''}
  });

  const onSubmit = (data) => {
    console.log(data);
    reset({});
  }


  return (
    <div id="contact">
      <footer id="footer">
        <div class="footer-newsletter">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <h4 className="text-center">Join Our Newsletter</h4>
                <p className="text-center">Sign up today for free and be the first to get notified on new updates.</p>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <input type="email" {...register('email', { required: 'email is required...', pattern: {
                    value: /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Please enter a valid email...'
                  } })}/>
                  <input type="submit" value="Subscribe"/>
                </form>
                  {errors.email && <div className="row"><small className="px-4 mt-1 text-danger">{errors.email.message}</small></div>}

              </div>
            </div>
          </div>
        </div>

      <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 footer-contact">
            <h4>Akshiptika</h4>
            <p>
              Vill Sapralu Tip N P.O Surani Tehsil<br/>
              Khundian Distt Kangra Himachal<br/>
              Pradesh India <br/><br/>
              <strong>Phone:</strong> +9 180 9152 6192<br/>
              <strong>Email:</strong> info@akshiptikainfotech.com <br/>
            </p>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#hero">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#about">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#services">Services</a></li>
              {/* <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li> */}
              {/* <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li> */}
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#services">Web Design</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#services">Web Development</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#services">Product Management</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#services">Marketing</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#services">Graphic Design</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Social Networks</h4>
            <p>Follow us on all our social media platforms to stay updated.</p>
            <div class="social-links mt-3">
              <a href="https://twitter.com/AkshiptikaI" rel="noreferrer" target="_blank" class="twitter"><i class="icofont-twitter"></i></a>
              <a href="https://www.facebook.com/akshiptikainfotech" rel="noreferrer" target="_blank" class="facebook"><i class="icofont-facebook"></i></a>
              <a href="https://www.instagram.com/akshiptikainfotech/" rel="noreferrer" target="_blank" class="instagram"><i class="icofont-instagram"></i></a>
              <a href="https://www.linkedin.com/company/77111635/admin/recommend/" rel="noreferrer" target="_blank" class="linkedin"><i class="icofont-linkedin"></i></a>
            </div>
          </div>

        </div>
      </div>
      </div>

      <div class="container py-4">
        <div class="copyright">
          &copy; Copyright <strong><span>Akshiptika</span></strong>. All Rights Reserved
        </div>
      </div>
      </footer>
    </div>
  )
}
