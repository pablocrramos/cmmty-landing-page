export interface Service {
  id: string;
  label: string;
  heading: string;
  description: string;
  benefits: string[];
  ctaLabel: string;
  video: string;
}

export const services: Service[] = [
  {
    id: "mps",
    label: "Impresión Gestionada",
    heading: "Servicio de Impresión Gestionada",
    description:
      "Olvídate de consumibles, mantenimientos y fallas técnicas. Nos encargamos de toda tu operación de impresión con monitoreo 24/7 y soporte proactivo.",
    benefits: [
      "Suministro automático de consumibles",
      "Mantenimiento preventivo y correctivo",
      "Monitoreo remoto en tiempo real",
      "Soporte técnico sin costo adicional",
    ],
    ctaLabel: "Explora MPS",
    video: "/assets/imgs/stock/video-1.mp4",
  },
  {
    id: "paperless",
    label: "Sistema Paperless",
    heading: "Solución Paperless",
    description:
      "Transforma tu archivo físico en un sistema digital seguro, accesible y trazable. Reduce costos operativos y acelera tus procesos.",
    benefits: [
      "Digitalización de archivos físicos",
      "Flujos de trabajo digitales",
      "Acceso remoto seguro",
      "Trazabilidad completa de documentos",
    ],
    ctaLabel: "Explora Paperless",
    video: "/assets/imgs/stock/video-2.mp4",
  },
  {
    id: "multifuncionales",
    label: "Renta de Copiadoras",
    heading: "Renta y Venta de Multifuncionales",
    description:
      "Equipos Ricoh de última generación para tu oficina. Opciones flexibles de renta o compra con soporte técnico incluido.",
    benefits: [
      "Equipos Ricoh última generación",
      "Renta flexible o compra directa",
      "Instalación y configuración incluida",
      "Soporte técnico garantizado",
    ],
    ctaLabel: "Explora Equipos",
    video: "/assets/imgs/stock/video-3.mp4",
  },
];
