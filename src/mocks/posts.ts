import { User, USERS } from "./users";

export const POSTS: Post[] = [
  {
    user: USERS[0],
    imageUrl:
      "https://instagram.feoh8-1.fna.fbcdn.net/v/t51.2885-15/316856233_5523673551002656_5254974862354072178_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.feoh8-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=npJ83kiPEt4AX99FBss&edm=AJ9x6zYBAAAA&ccb=7-5&ig_cache_key=Mjk3OTU4OTY4NjU0ODU2NjM2MQ%3D%3D.2-ccb7-5&oh=00_AfA2U-78bnopaO2jQnR3nc7bg6aSYWYTLFRZp02hpSDzgA&oe=63888F9D&_nc_sid=cff2a4",
    likes: 4781,
    title: "FORD Raptor 2017",
    caption:
      "Modelo: Ford F150 Raptor\n" +
      "Precio: 253 millones neg\n" +
      "Año: 2017\n" +
      "Motor: 3.5 t\n" +
      "Recorrido: 53 mil kms\n" +
      "Ubicación: Bogota\n" +
      "Descripción:\n" +
      "Se entrega con rines originales o loa de la publicación. Perfecta papeles al dia.\n" +
      "Contacto: 3102511332\n",
    comments: [
      {
        user: USERS[3],
        comment: "Esto si vale la plataaa 🔥",
      },
    ],
  },
  {
    user: USERS[2],
    imageUrl:
      "https://instagram.feoh8-1.fna.fbcdn.net/v/t39.30808-6/317076336_1841290972899144_2679065650417876301_n.jpg?stp=dst-jpg_e15_fr_p1080x1080&_nc_ht=instagram.feoh8-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=KaI7Pf_wm-MAX-G_n_K&edm=AJ9x6zYAAAAA&ccb=7-5&ig_cache_key=Mjk4MDI3OTM1NTI1OTYxMzIzMQ%3D%3D.2-ccb7-5&oh=00_AfAYSpUJPcZL6CvK9HHtzG5ZGV83Vh4K8sV6zR5yz_h57g&oe=6387B1A0&_nc_sid=cff2a4",
    likes: 4781,
    title: "Varios Messista en el staff. 🇦🇷😍",
    caption:
      "La emoción de Pablo Aimar, parte del cuerpo técnico de Scaloni se emocionó en el gol de Lionel. Además, se hizo viral una postal de otro miembro del staff que lleva tatuada la cara del 10 en la pierna. 👏",
    comments: [
      {
        user: USERS[1],
        comment: "Simplemente el GOAT 🔥",
      },
      {
        user: USERS[2],
        comment: "El GOAT es CR7",
      },
    ],
  },
  {
    user: USERS[4],
    imageUrl:
      "https://instagram.feoh8-1.fna.fbcdn.net/v/t39.30808-6/317373943_1841769052851336_5930676182947175214_n.jpg?stp=dst-jpg_e15_fr_p1080x1080&_nc_ht=instagram.feoh8-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=oolFj58wsvUAX-UOsoP&edm=AJ9x6zYAAAAA&ccb=7-5&ig_cache_key=Mjk4MDczMjA1NzYwNTY4NTI5Ng%3D%3D.2-ccb7-5&oh=00_AfCUCdxugmlpHqePcZH4daAombz-qYXO-PHCv_vw-R3SrA&oe=638906AB&_nc_sid=cff2a4",
    likes: 4781,
    title: "FORD Raptor 2017",
    caption:
      "Modelo: Ford F150 Raptor\n" +
      "Precio: 253 millones neg\n" +
      "Año: 2017\n" +
      "Motor: 3.5 t\n" +
      "Recorrido: 53 mil kms\n" +
      "Ubicación: Bogota\n" +
      "Descripción:\n" +
      "Se entrega con rines originales o loa de la publicación. Perfecta papeles al dia.\n" +
      "Contacto: 3102511332\n",
    comments: [
      {
        user: USERS[0],
        comment: "Esto si vale la plataaa 🔥",
      },
    ],
  },
];

export interface Post {
  user: User;
  imageUrl: string;
  likes: number;
  title: string;
  caption: string;
  comments: Comment[];
}

export interface Comment {
  user: User;
  comment: string;
}
