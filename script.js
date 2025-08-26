async function initQlik() {
  try {
    // 👇 Cambia la URL al backend en Vercel
    const resp = await fetch("https://qlik-backend.vercel.app/api/access-token");
    const { access_token } = await resp.json();

    if (!access_token) {
      throw new Error("No se recibió access_token del backend");
    }

    // Configura Qlik Embed con el token
    window.QlikEmbed.config({
      host: "https://keyruspt.eu.qlikcloud.com",
      authType: "oauth2",
      accessToken: access_token
    });

    console.log("✅ Qlik configurado con token");
  } catch (err) {
    console.error("❌ Error inicializando Qlik:", err);
  }
}
