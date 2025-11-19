export const GET = async () => {
    const sendWhatsAppMessage = async (message:string) => {
        const encoded = encodeURIComponent(message);
        const url = `https://api.callmebot.com/whatsapp.php?phone=558588128191&text=${encoded}&apikey=9328701`

        await fetch(url).then(() => console.log('Mensagem enviada')).catch(() => console.log('Erro ao enviar mensagem'));
    }

    await sendWhatsAppMessage('Teste cron')

    const sendWhatsAppMessage2 = async (message:string) => {
        const encoded = encodeURIComponent(message);
        const url = `https://api.callmebot.com/whatsapp.php?phone=558589836423&text=${encoded}&apikey=6562936`

        await fetch(url).then(() => console.log('Mensagem enviada')).catch(() => console.log('Erro ao enviar mensagem'));
    }

    await sendWhatsAppMessage2('Teste cron')

    return Response.json({ ok: true, value: 123 });
}