import React from 'react';

function Contact() {
  const contactMethods = [
    {
      title: 'Email',
      value: 'ira.polchanin@gmail.com',
      link: 'mailto:ira.polchanin@gmail.com'
    },
    {
      title: 'LinkedIn',
      value: 'in/iryna-polchaninova',
      link: 'https://www.linkedin.com/in/iryna-polchaninova-b191b3268/'
    },
    {
      title: 'GitHub',
      value: 'github.com/IraPolchanin',
      link: 'https://github.com/IraPolchanin'
    },
    {
      title: 'Facebook',
      value: 'iryna.polchaninova',
      link: 'https://www.facebook.com/iryna.polchaninova'
    },
    {
      title: 'Telegram',
      value: '@PolchaninovaIrina',
      link: 'https://t.me/PolchaninovaIrina'
    },
    {
      title: 'Skype',
      value: 'Iryna Polchaninova',
      link: 'live:.cid.7f4338400c48f5cc'
    },
  ];

  return (
    <div className="content-container container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="content">
            <h1 className="mb-5">Let's get in touch!</h1>
            <div className="mb-5">
              I'm excited to connect and discuss potential collaborations! 🤝  Whether you have a project in mind,
              questions about my work, or just want to say hello - I'm always open to new opportunities and
              interesting conversations. Feel free to reach out through any of the channels below ⬇️, and I'll get back to you as soon as possible.
            </div>
            <div className="row g-4">
              {contactMethods.map((method, index) => (
                <div key={index} className="col-lg-6">
                  <h3>{method.title}</h3>
                  <p>
                    <a href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {method.value}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;