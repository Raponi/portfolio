export async function POST(request: Request) {
  try {
    const { nome, email, mensagem } = await request.json();

    if (!nome || !email || !mensagem) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not configured");
      return Response.json({ error: "Server not configured" }, { status: 500 });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(RESEND_API_KEY);

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "rogeriobcon@gmail.com",
      subject: `Novo contato do portfólio — ${nome}`,
      text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json({ error: "Internal error" }, { status: 500 });
  }
}
