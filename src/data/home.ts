import { createWhatsAppUrl } from './contact';

export interface CardItem {
  title: string;
  description: string;
  image: 'automobile' | 'suv' | 'performance' | 'electric' | 'sports';
  href: string;
}

export const brand = {
  wordmark: '7LEGUAS',
  market: 'MÉXICO',
} as const;

export const whatsappQuote = {
  label: 'Cotiza por WhatsApp',
  href: createWhatsAppUrl('Hola, quiero solicitar una cotización de llantas.'),
} as const;

export const vehicleCards: CardItem[] = [
  { title: 'Llantas de automóvil', description: 'Diseñadas para cada trayecto, clima y ritmo cotidiano.', image: 'automobile', href: createWhatsAppUrl('Hola, quiero información y una cotización de llantas para automóvil. ¿Me pueden ayudar?') },
  { title: 'Llantas para camioneta y SUV', description: 'Duración, rendimiento y confort para caminos exigentes.', image: 'suv', href: createWhatsAppUrl('Hola, quiero información y una cotización de llantas para camioneta o SUV. ¿Me pueden ayudar?') },
  { title: 'Llantas para Alto Rendimiento', description: 'Tracción estable y respuesta precisa para una conducción exigente.', image: 'performance', href: createWhatsAppUrl('Hola, quiero información y una cotización de llantas para Alto Rendimiento. ¿Me pueden ayudar?') },
  { title: 'Llantas para autos eléctricos', description: 'Eficiencia, silencio y control para movilidad eléctrica.', image: 'electric', href: createWhatsAppUrl('Hola, quiero información y una cotización de llantas para autos eléctricos. ¿Me pueden ayudar?') },
  { title: 'Llantas para Autos Deportivos', description: 'Respuesta precisa en carretera y conducción dinámica.', image: 'sports', href: createWhatsAppUrl('Hola, quiero información y una cotización de llantas para Autos Deportivos. ¿Me pueden ayudar?') },
];

export const featuredTyresDescription =
  'Grupo Llantero Siete Leguas es un distribuidor autorizado de neumáticos Pirelli a nivel nacional - puedes comprar modelos populares para auto, camioneta, deportivos y de alto rendimiento.';

export const featuredServices = [
  {
    id: 'online',
    title: 'Compra en línea',
    description: 'A través de opción digital con envío gratis al comprar un juego completo de 4 llantas.',
  },
  {
    id: 'installation',
    title: 'Instalación',
    description:
      'Contamos con servicio express, instalación a domicilio o montaje con válvula y balanceo incluidos al acudir a sus sucursales participantes, pregúntale a tu asesor.',
  },
] as const;

export const featuredBenefits = ['Marcas originales', 'Cobertura nacional', 'Asesoría especializada'] as const;

export const footerGroups = [
  { title: 'LLANTAS', links: ['Todas las llantas', 'Busca por vehículo', 'Llantas para auto', 'Camioneta y SUV', 'Utilitarios', 'Busca por medida'] },
  { title: 'TECNOLOGÍA Y CONOCIMIENTO', links: ['Tecnología', 'Confort acústico', 'Run flat', 'Sellado interior', 'Marcado específico'] },
  { title: 'AUTOS DE PRESTIGIO', links: ['Prestige', 'Aston Martin', 'Bentley', 'Ferrari', 'Lamborghini', 'Porsche'] },
  { title: 'CONSEJOS', links: ['Lectura de llantas', 'Conducción segura'] },
  { title: 'DISTRIBUIDORES', links: ['Encuentra un distribuidor', 'Todas las ciudades'] },
  { title: 'SOBRE NOSOTROS', links: ['Por qué elegirnos', 'Contacto', 'Innovación de flotas'] },
];
