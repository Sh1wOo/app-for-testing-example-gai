import { ITicket } from "../tickets";

const Ticket3: ITicket = {
  id: 3,
  questions: [
    {
      id: 1,
      text: "На каком минимальном расстоянии от зоны остановочного пункта маршрутных транспортных средств разрешена стоянка транспортных средств?",
      image: "",
      options: [
        { id: "a", text: "5 метров" },
        { id: "b", text: "10 метров" },
        { id: "c", text: "15 метров" },
        { id: "d", text: "20 метров" },
        { id: "e", text: "40 метров" },
      ],
      correctAnswer: "c",
    },
    {
      id: 2,
      text: "Вам необходимо перевезти доски длиной 2,7 метра. Как их закрепить на багажнике на крыше легкового автомобиля, чтобы не было необходимости получать специальное разрешение на перевозку груза?",
      image: "",
      options: [
        { id: "a", text: "Вдоль кузова автомобиля" },
        { id: "b", text: "Поперек кузова автомобиля" },
        { id: "c", text: "В любом случае необходимо получить специальное разрешение и двигаться в соответствии со специальными правилами" },
      ],
      correctAnswer: "a",
    },
    {
      id: 3,
      text: "Что необходимо сделать, если в пути следования «закипел» двигатель?",
      image: "",
      options: [
        { id: "a", text: "Остановиться, выключить двигатель, открыть крышку расширительного бачка, долить охлаждающую жидкость, обнаружить место возможного подтекания жидкости, устранить подтекание" },
        { id: "b", text: "Остановиться, не выключая двигатель, если температура не падает - выключить двигатель. Осмотреть двигатель на наличие подтеканий и при их обнаружении - устранить. Открывать пробку расширительного бачка только после частичного охлаждения двигателя" },
      ],
      correctAnswer: "b",
    },
    {
      id: 4,
      text: "В каком из перечисленных мест в соответствии с Правилами дорожного движения запрещается выполнить разворот?",
      image: "",
      options: [
        { id: "a", text: "На дорогах с трамвайными путями посередине" },
        { id: "b", text: "На перекрестке, находясь на второстепенной дороге" },
        { id: "c", text: "На расстоянии 10 метров за пешеходным переходом" },
        { id: "d", text: "На расстоянии 10 метров за остановочным пунктом маршрутных транспортных средств" },
        
      ],
      correctAnswer: "c",
    },
    {
      id: 5,
      text: "В каком из перечисленных случаев водитель правильно воспользовался звуковым сигналом?",
      image: "",
      options: [
        { id: "a", text: "Применил звуковой сигнал для предупреждения о намерении произвести обгон вне населенного пункта" },
        { id: "b", text: "Применил звуковой сигнал для предотвращения дорожно-транспортного происшествия в населенном пункте" },
        { id: "c", text: "Применил звуковой сигнал для предотвращения дорожно-транспортного происшествия вне населенного пункта" },
        { id: "d", text: "Во всех перечисленных случаях водитель правильно воспользовался звуковым сигналом" },
      ],
      correctAnswer: "d",
    },
    {
      id: 6,
      text: "В каком случае сигналы регулировщика обязательны для исполнения участниками дорожного движения?",
      image: "",
      options: [
        { id: "a", text: "Только в случае, если они соответствуют сигналам светофоров и других технических средств организации дорожного движения" },
        { id: "b", text: "Во всех случаях, даже если они не соответствуют сигналам светофоров и других технических средств организации дорожного движения" },
      ],
      correctAnswer: "b",
    },
    {
      id: 7,
      text: "На каких из перечисленных участков дорог запрещен обгон?",
      image: "",
      options: [
        { id: "a", text: "На перекрестке, обозначенном знаком «Главная дорога»" },
        { id: "b", text: "На перекрестке при движении на зеленый сигнал светофора" },
        { id: "c", text: "На перекрестке при движении на разрешающий сигнал регулировщика" },
        { id: "d", text: "На всех перечисленных участках дорог обгон запрещен" },
      ],
      correctAnswer: "d",
    },
    {
      id: 8,
      text: "Разрешается ли остановка на обочине дороги с односторонним движением вне населенного пункта?",
      image: "",
      options: [
        { id: "a", text: "Разрешается только на правой по ходу движения обочине" },
        { id: "b", text: "Разрешается как на правой, так и на левой по ходу движения обочине" },
        { id: "c", text: "Остановка вне населенного пункта на обочине запрещена" },
      ],
      correctAnswer: "b",
    },
    {
      id: 9,
      text: "Разрешается ли водителю с водительским стажем до двух лет перевозить пассажиров в кузове грузового автомобиля, не оборудованном для перевозки пассажиров?",
      image: "",
      options: [
        { id: "a", text: "Разрешается только лиц, следующих за получением груза или сопровождающих его, при условии, что они обеспечены местами для сидения, расположенными ниже уровня бортов." },
        { id: "b", text: "Разрешается только лиц, следующих за получением груза или сопровождающих его, при условии, что они обеспечены местами для сидения, расположенными не выше уровня бортов." },
        { id: "c", text: "Запрещается во всех случаях" },
      ],
      correctAnswer: "c",
    },
    {
      id: 10,
      text: "Без чего из перечисленного ниже запрещается легковому автомобилю участвовать в дорожном движении?",
      image: "",
      options: [
        { id: "a", text: "Домкрат" },
        { id: "b", text: "Огнетушитель" },
        { id: "c", text: "Буксировочный трос" },
        { id: "d", text: "Ключ для замены колеса" },
        { id: "e", text: "Без всего перечисленного выше Правила дорожного движения запрещают участвовать в дорожном движении" },
      ],
      correctAnswer: "b",
    },
  ],
};

export { Ticket3 };
