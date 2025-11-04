export const prerender = false;

export const POST = async ({ request }) => {
  const formData = await request.formData();
  const prenom = formData.get('prenom');
  const nom = formData.get('nom');
  const email = formData.get('email');
  const message = formData.get('message');

  const payload = {
    from: 'contact@les-massages-de-laurent.fr',
    to: 'remipradere@gmail.com',
    subject: `Message de ${prenom} ${nom}`,
    html: `<p><b>De :</b> ${prenom} ${nom} (${email})</p><p>${message}</p>`,
  };

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${import.meta.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const text = await response.text();
  return new Response(text, { status: response.status });
};
