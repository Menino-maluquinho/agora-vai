function abrirLocalizacao() {

    const endereco = "Rua Augusto Antônio de Amorim";

    const link = "https://maps.app.goo.gl/wykZdmYFzMaNXed66?g_st=ac"
        + encodeURIComponent(endereco);

    window.open(link, "_blank");
}
function abrirPresentes() {

    const linkPresentes = "https://www.mercadolivre.com.br/celular-samsung-galaxy-a17-com-ia-256gb-8gb-ram-cam-de-50mp-tela-de-67-nfc-ip54-preto-4g/p/MLB55254425#polycard_client=recommendations_home_navigation-recommendations&reco_backend=machinalis-homes-univb-equivalent-offer&wid=MLB4583723537&reco_client=home_navigation-recommendations&reco_item_pos=0&reco_backend_type=function&reco_id=a254e0af-454a-4138-b0b7-5fcbfebc281d&sid=recos&c_id=/home/navigation-recommendations/element&c_uid=7d671110-0475-400f-bc54-f70ed6e80807";

    window.open(linkPresentes, "_blank");
}
function confirmarPresenca() {

    const numero = "5522999965558";

    const mensagem =
        "Olá! Gostaria de confirmar minha presença no evento. 🎉";

    const link =
        "https://wa.me/" +
        numero +
        "?text=" +
        encodeURIComponent(mensagem);

    window.open(link, "_blank");
}