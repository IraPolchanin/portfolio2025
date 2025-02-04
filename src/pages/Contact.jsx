import React from 'react';

function Contact() {
  const contactMethods = [
    {
      title: 'Email',
      value: 'ira.polchanin@gmail.com',
      link: 'mailto:ira.polchanin@gmail.com'
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
    }
  ];

  return (
    <div className="content-container container-fluid">
      <div className="content">
        <h1 className="mb-5">Let's get in touch!</h1>
        {contactMethods.map((method, index) => (
          <div key={index}>
            <h3>{method.title}</h3>
            <p>
              <a href={method.link} target="_blank" rel="noopener noreferrer">
                {method.value}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;