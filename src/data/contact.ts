export const whatsappContact = {
  displayNumber: '55 3444 08890',
  internationalNumber: '5255344408890',
} as const;

export const dealerMapUrl = 'https://maps.app.goo.gl/WmVPw8Qq9PzxkqA89';

export const createWhatsAppUrl = (message: string): string =>
  `https://wa.me/${whatsappContact.internationalNumber}?text=${encodeURIComponent(message)}`;
