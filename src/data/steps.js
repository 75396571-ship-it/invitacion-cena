export const STEPS = [
  {
    type: "greeting",
    title: "Una Noche Para Nosotros Mi Amor",
    content:
      "Hoy quiero recordarte lo inmensamente afortunado que soy de compartir mi vida contigo, gracias por los momentos a mi lado.",
  },
  {
    type: "reasons",
    title: "Razones para amarte cada día más",
    items: [
      "Porque amo verte sonreír",
      "Porque contigo puedo ser yo mismo",
      "Porque admiro tu gentileza y tu corazón",
      "Porque hasta cuando eres renegona sigues siendo mi persona favorita",
      "Porque simplemente no imagino mi vida sin ti",
    ],
  },
  {
    type: "moments",
    title: "Nuestra historia",
    content: "Cada recuerdo a tu lado es un tesoro que guardo en el alma.",
  },
  {
    type: "photo",
    image: `${import.meta.env.BASE_URL}images/photo-1.jpg`,
  },
  {
    type: "photo",
    image: `${import.meta.env.BASE_URL}images/photo-2.jpg`,
  },
  {
    type: "photo",
    image: `${import.meta.env.BASE_URL}images/photo-3.jpg`,
  },
  {
    type: "photo",
    image: `${import.meta.env.BASE_URL}images/photo-4.jpg`,
  },
  {
    type: "photo",
    image: `${import.meta.env.BASE_URL}images/photo-5.jpg`,
  },
  {
    type: "photo",
    image: `${import.meta.env.BASE_URL}images/photo-6.jpg`,
  },
  {
    type: "question",
    title: "Mi amor...",
    content: "¿Mi Amor Aceptas Una Cena Conmigo?",
  },
];

export const UI_TEXTS = {
  dinner_ticket: {
    emoji: "🎟️",
    title: "Vale por una",
    prize: "Cena Romántica",
    valid_for: "Válido para",
    recipient: "Mi Chiquita Hermosa",
    date: "21 Septiembre 2026",
    location: "Lugar Sorpresa",
    footer: "¡Sabía que dirías que sí! ❤️",
  },
  question: {
    yes_btn: "¡Sí, quiero!",
    no_btn: "No 😢",
  },
  photo: {
    alt: "Moment",
  },
  navigation: {
    next_btn_aria: "Next step",
  },
};
