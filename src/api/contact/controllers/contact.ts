
'use strict';

module.exports = {
  async submit(ctx) {
    const { name, email, mobile, service, message } = ctx.request.body || {};

    // Basic guard (optional)
    if (!name || !email || !message) {
      return ctx.badRequest('name, email and message are required');
    }

    // 1) Send to your internal mailbox
    await strapi
      .plugin("email")
      .service("email")
      .send({
        to: "fawasmakkar303@gmail.com", // where you want to receive enquiries
        replyTo: email,
        subject: "New website enquiry",
        text: 
          `You’ve got a new inquiry through your website by: ${name}
          Message: "${message}"
          Email: ${email}
          Mobile: ${mobile}`
     
      });

    // 2) (Optional) Auto-acknowledge the user
    // await strapi.plugin('email').service('email').send({
    //   to: email,
    //   subject: 'We received your message',
    //   text: `Hi ${name}, thanks for contacting us. We’ll get back to you shortly.`,
    // });

    ctx.send({ ok: true });
  },
};

