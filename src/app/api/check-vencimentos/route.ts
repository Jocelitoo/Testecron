export const GET = () => {
    const sendWhatsAppMessage = async (message:string) => {
        const encoded = encodeURIComponent(message);
        const url = `https://api.callmebot.com/whatsapp.php?phone=558588128191&text=${encoded}&apikey=9328701`

        await fetch(url).then(() => console.log('Mensagem enviada')).catch(() => console.log('Erro ao enviar mensagem'));
    }

    sendWhatsAppMessage('Teste cron')

    return Response.json({ ok: true, value: 123 });
}