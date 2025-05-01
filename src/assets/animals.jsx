const animals = [
    {
      type: "cat",
      name: "Didi",
      shelter: "Abrigo Animalis",
      weight: 3,
      age: "4 meses",
      description: "Didi é uma gatinha muito linda e boazinha, já realiza suas necessidades em uma caixinha de areia e ama um carinho.",
      picture: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg"
    },
    {
      type: "cat",
      name: "Sofia",
      shelter: "Abrigo Bichos",
      weight: 5,
      age: "1 mês",
      description: "Sofia é uma gatinha muito linda e boazinha, já realiza suas necessidades em uma caixinha de areia e ama um carinho.",
      picture: "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg"
    },
    {
      type: "dog",
      name: "Furacão",
      shelter: "Abrigo Animalis",
      weight: 8,
      age: "3 meses",
      description: "Furacão é um cão muito lindo e bonzinho.",
      picture: "https://images.pexels.com/photos/4587991/pexels-photo-4587991.jpeg"
    },
    {
      type: "dog",
      name: "Lukinhu",
      shelter: "ONG Floramor",
      weight: 4,
      age: "5 meses",
      description: "Lukinhu é um cão muito lindo e bonzinho.",
      picture: "https://images.pexels.com/photos/4587993/pexels-photo-4587993.jpeg"
    },
    {
      type: "cat",
      name: "Mimi",
      shelter: "Abrigo Bichos",
      weight: 2.5,
      age: "2 meses",
      description: "Mimi é uma gatinha brincalhona e adora explorar novos lugares.",
      picture: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
    },
    {
      type: "dog",
      name: "Rex",
      shelter: "Abrigo Animalis",
      weight: 10,
      age: "6 meses",
      description: "Rex é um cão enérgico que adora correr e brincar ao ar livre.",
      picture: "https://images.pexels.com/photos/4587995/pexels-photo-4587995.jpeg"
    },
    {
      type: "cat",
      name: "Luna",
      shelter: "ONG Floramor",
      weight: 3.2,
      age: "3 meses",
      description: "Luna é uma gatinha carinhosa que adora colo e carinho.",
      picture: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg"
    },
    {
      type: "dog",
      name: "Bolt",
      shelter: "Abrigo Bichos",
      weight: 7,
      age: "4 meses",
      description: "Bolt é um cãozinho rápido e esperto, sempre atento ao seu redor.",
      picture: "https://images.pexels.com/photos/4587997/pexels-photo-4587997.jpeg"
    },
    {
      type: "cat",
      name: "Nina",
      shelter: "Abrigo Animalis",
      weight: 2.8,
      age: "2 meses",
      description: "Nina é uma gatinha curiosa que adora brincar com bolinhas de lã.",
      picture: "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg"
    },
    {
      type: "dog",
      name: "Max",
      shelter: "ONG Floramor",
      weight: 9,
      age: "5 meses",
      description: "Max é um cão amigável que se dá bem com outros animais.",
      picture: "https://images.pexels.com/photos/4587999/pexels-photo-4587999.jpeg"
    },
    {
      type: "cat",
      name: "Simba",
      shelter: "Abrigo Bichos",
      weight: 3.5,
      age: "3 meses",
      description: "Simba é um gatinho aventureiro que adora escalar móveis.",
      picture: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
    },
    {
      type: "dog",
      name: "Charlie",
      shelter: "Abrigo Animalis",
      weight: 6,
      age: "4 meses",
      description: "Charlie é um cãozinho dócil que adora receber atenção.",
      picture: "https://images.pexels.com/photos/4588001/pexels-photo-4588001.jpeg"
    },
    {
      type: "cat",
      name: "Lily",
      shelter: "ONG Floramor",
      weight: 2.9,
      age: "2 meses",
      description: "Lily é uma gatinha meiga que adora cochilar no sol.",
      picture: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg"
    },
    {
      type: "dog",
      name: "Rocky",
      shelter: "Abrigo Bichos",
      weight: 8.5,
      age: "5 meses",
      description: "Rocky é um cão protetor que está sempre alerta.",
      picture: "https://images.pexels.com/photos/4588003/pexels-photo-4588003.jpeg"
    },
    {
      type: "cat",
      name: "Chloe",
      shelter: "Abrigo Animalis",
      weight: 3.1,
      age: "3 meses",
      description: "Chloe é uma gatinha elegante que caminha com graça.",
      picture: "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg"
    },
    {
      type: "dog",
      name: "Buddy",
      shelter: "ONG Floramor",
      weight: 7.2,
      age: "4 meses",
      description: "Buddy é um cão leal que está sempre ao lado do seu tutor.",
      picture: "https://images.pexels.com/photos/4588005/pexels-photo-4588005.jpeg"
    },
    {
      type: "cat",
      name: "Oscar",
      shelter: "Abrigo Bichos",
      weight: 3.3,
      age: "2 meses",
      description: "Oscar é um gatinho esperto e adora perseguir brinquedos com penas.",
      picture: "https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg"
    },
    {
      type: "dog",
      name: "Thor",
      shelter: "Abrigo Animalis",
      weight: 10.5,
      age: "6 meses",
      description: "Thor é um cão forte e brincalhão, ideal para famílias ativas.",
      picture: "https://images.pexels.com/photos/4588010/pexels-photo-4588010.jpeg"
    },
    {
      type: "cat",
      name: "Mel",
      shelter: "ONG Floramor",
      weight: 2.7,
      age: "1 mês",
      description: "Mel é uma gatinha dócil, perfeita para quem busca um animal calmo.",
      picture: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg"
    },
    {
      type: "dog",
      name: "Ziggy",
      shelter: "Abrigo Bichos",
      weight: 6.8,
      age: "4 meses",
      description: "Ziggy é um cachorro amoroso que adora brincar com crianças.",
      picture: "https://images.pexels.com/photos/4588015/pexels-photo-4588015.jpeg"
    },
    {
      type: "cat",
      name: "Tigrinho",
      shelter: "Abrigo Animalis",
      weight: 3.4,
      age: "3 meses",
      description: "Tigrinho é curioso, brincalhão e está sempre atrás de uma aventura.",
      picture: "https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg"
    }
]
   
  

export default animals;