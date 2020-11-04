import emailjs from 'emailjs-com';

const ContactForm = () => {
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, e.target, process.env.YOUR_USER_ID)
          .then((result) => {
              const toaster = document.getElementsByClassName('toast')[0];
              toaster.classList.add('show')
              setTimeout(()=>{
                toaster.classList.remove('show')
              },6000)
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }


    return (
        <div>
        <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div className="toast-header">
    <strong className="mr-auto">Email sended <i class="fas fa-check-circle"></i></strong>
    <button 
    type="button" 
    className="ml-2 mb-1 close" 
    data-dismiss="toast" 
    aria-label="Close"
    onClick={()=>{
        const toaster = document.getElementsByClassName('toast')[0];
        toaster.classList.remove('show')
    }}
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div className="toast-body">
    Your email was sended.
    <p>I will contact you as soon as possible.</p>
  </div>
</div>

        <h2>Contact</h2>
        <h4> Use this form to contact me, 
I will respond as soon as possible.</h4>
<form onSubmit={sendEmail}>
<div className="form-group">
    <label for="exampleFormControlInput1">Name</label>
    <input type="text" className="form-control" name="fromName"  id="exampleFormControlInput1" placeholder="name" />
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control" name="userEmail"  id="exampleFormControlInput1" placeholder="name@example.com" />
  </div>
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Content</label>
    <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <input className="btn btn-primary form-button" type="submit" value="Send" />
</form>
</div>

    )
}

export default ContactForm;