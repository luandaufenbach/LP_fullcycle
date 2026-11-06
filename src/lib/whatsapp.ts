// TODO: número de teste, trocar pelo WhatsApp real da Gabriela (só dígitos, com DDI e DDD)
const WHATSAPP_NUMBER = '5511999999999';

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
