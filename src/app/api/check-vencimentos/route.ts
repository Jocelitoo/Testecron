import { boletos } from "@/utils/boletos"
import dayjs from "dayjs"

// export const GET = async () => {
//     const sendWhatsAppMessage = async (message:string) => {
//         const encoded = encodeURIComponent(message);
//         const url = `https://api.callmebot.com/whatsapp.php?phone=558588128191&text=${encoded}&apikey=9328701`
//         await fetch(url).then(() => console.log('Mensagem enviada')).catch(() => console.log('Erro ao enviar mensagem'));
//     }

//     await sendWhatsAppMessage('Teste cron')

//     const sendWhatsAppMessage2 = async (message:string) => {
//         const encoded = encodeURIComponent(message);
//         const url = `https://api.callmebot.com/whatsapp.php?phone=558589836423&text=${encoded}&apikey=6562936`

//         await fetch(url).then(() => console.log('Mensagem enviada')).catch(() => console.log('Erro ao enviar mensagem'));
//     }

//     await sendWhatsAppMessage2('Teste cron')

//     return Response.json({ ok: true, value: 123 });
// }

export const GET = async () => {
    const today = dayjs().date() // Data de hoje
    // const twoDays = dayjs().add(2, 'day').date() // Data daqui 2 dias

    boletos.map(async (boleto) => {
        if ((boleto.vencimento - 2) === today && !boleto.pago) {
            const sendWhatsAppMessage = async (message: string) => {
                const encoded = encodeURIComponent(message);
                const url = `https://api.callmebot.com/whatsapp.php?phone=558588128191&text=${encoded}&apikey=9328701`

                await fetch(url).then(() => console.log('Mensagem enviada')).catch(() => console.log('Erro ao enviar mensagem'));
            }

            await sendWhatsAppMessage(`${boleto.nome} vence no dia ${boleto.vencimento}. ${boleto.obs}`)

            // const sendWhatsAppMessage2 = async (message: string) => {
            //     const encoded = encodeURIComponent(message);
            //     const url = `https://api.callmebot.com/whatsapp.php?phone=558589836423&text=${encoded}&apikey=6562936`

            //     await fetch(url).then(() => console.log('Mensagem enviada')).catch(() => console.log('Erro ao enviar mensagem'));
            // }

            // await sendWhatsAppMessage2(`${boleto.nome} vence no dia ${boleto.vencimento}. ${boleto.obs}`)
        }
    })


    return Response.json({ ok: true, value: 123 });
}