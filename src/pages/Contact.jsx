export const Contact = () => {
  const handleFormSubmit = (formData) => {
    // console.log(formData.entries());

    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };
  return (
    <section className="container-contact">
      <h2 className="container-title">Contact us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            required
            autoComplete="false"
            placeholder="Enter your Name"
            name="username"
          />
          <input
            type="email"
            className="form-control"
            required
            autoComplete="false"
            placeholder="Enter your email"
            name="email"
          />
          <textarea
            className="form-control"
            rows="10"
            required
            autoComplete="false"
            placeholder="Enter your message"
            name="message"
          />
          <button type="Submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
