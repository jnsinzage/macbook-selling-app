'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  useEffect(() => {
    emailjs.init("t7cIZPyykx6FkcpsH");
  }, []);
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message
      };

      await emailjs.send(
        'service_q9ff6m8',
        'template_cjsrjxo',
        templateParams
      );
      
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitError('Failed to send your message. Please try again later or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Interested? Contact the Seller!</h1>
      

      {submitSuccess ? (
        <div style={{ 
          backgroundColor: '#e8f5e9', 
          padding: '1.5rem', 
          borderRadius: '8px',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          <p style={{ color: '#2e7d32', fontWeight: 'bold', marginBottom: '1rem' }}>
            Your message has been sent successfully! We'll get back to you soon.
          </p>
          <button 
            className="btn" 
            style={{ 
              padding: '0.75rem 1.5rem',
              backgroundColor: '#2e7d32',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
            onClick={() => setSubmitSuccess(false)}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} style={{ padding: '1rem' }}>
          {submitError && (
            <div style={{ 
              backgroundColor: '#ffebee', 
              padding: '1rem', 
              borderRadius: '4px',
              marginBottom: '1.5rem'
            }}>
              <p style={{ color: '#c62828' }}>{submitError}</p>
            </div>
          )}
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              Name
            </label>
            <input
              type="text"
              {...register('name', { required: "Name is required" })}
              style={{ 
                width: '200%',
                maxWidth: '350px',
                padding: '0.75rem', 
                borderRadius: '6px',
                border: errors.name ? '2px solid #d32f2f' : '1px solid #ddd',
                display: 'block',
                margin: '0 auto',
                fontSize: '1rem'
              }}
            />
            {errors.name && (
              <p style={{ color: '#d32f2f', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                {errors.name.message}
              </p>
            )}
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              Email
            </label>
            <input
              type="email"
              {...register('email', { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              style={{ 
                width: '200%',
                maxWidth: '350px',
                padding: '0.75rem', 
                borderRadius: '6px',
                border: errors.email ? '2px solid #d32f2f' : '1px solid #ddd',
                display: 'block',
                margin: '0 auto',
                fontSize: '1rem'
              }}
            />
            {errors.email && (
              <p style={{ color: '#d32f2f', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                {errors.email.message}
              </p>
            )}
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              Phone Number
            </label>
            <input
              type="tel"
              {...register('phone', { required: "phone is required" })}
              style={{ 
                width: '200%',
                maxWidth: '350px',
                padding: '0.75rem', 
                borderRadius: '6px',
                border: '1px solid #ddd',
                display: 'block',
                margin: '0 auto',
                fontSize: '1rem'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              Message
            </label>
            <textarea
              rows="5"
              {...register('message', { required: "Message is required" })}
              style={{ 
                width: '200%',
                maxWidth: '350px',
                padding: '0.01rem', 
                borderRadius: '6px',
                border: errors.message ? '2px solid #d32f2f' : '1px solid #ddd',
                display: 'block',
                margin: '0 auto',
                fontSize: '1rem',
                resize: 'vertical'
              }}
            ></textarea>
            {errors.message && (
              <p style={{ color: '#d32f2f', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                {errors.message.message}
              </p>
            )}
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <button 
              type="submit" 
              className="btn" 
              disabled={isSubmitting}
              style={{ 
                padding: '0.75rem 2rem',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                opacity: isSubmitting ? 0.7 : 1,
                width: '200%',
                maxWidth: '350px'
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          {/* <p>    contact seller direct via +255 759 138 103/ jumansinzage10@gmail.com</p> */}
        </form>
      )}
    </section>
  );
}