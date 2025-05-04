export const responses = {
  "proximo jogo": [
    "O próximo jogo da FURIA é contra a G2 no BLAST Premier. Vai ser insano! 🔥",
    "Já separa a pipoca! Tem FURIA x G2 vindo aí no BLAST. 🎮",
    "Fique ligado! A FURIA encara a G2 em breve pelo campeonato BLAST. 🦁",
    "Prepare-se para mais uma batalha: FURIA vs G2 no BLAST Premier. ⚔️",
    "O duelo contra a G2 já tem data marcada. Bora torcer! 📅"
  ],
  "historia": [
    "A FURIA foi criada em 2017 com o sonho de ser uma potência no eSports. 🚀",
    "Desde 2017, a FURIA representa o Brasil com garra no CS:GO.",
    "Fundada por Akkari, Pádua e Guedes, a FURIA surgiu para fazer história. 📖",
    "Com origem em 2017, a FURIA conquistou seu espaço no cenário competitivo. 🏆",
    "A história da FURIA começou com um sonho e virou referência mundial. 🌎"
  ],
  "ranking": [
    "A FURIA está no top 20 do mundo no ranking da HLTV. 📊",
    "Atualmente, a FURIA ocupa a 17ª posição no ranking global. 🔝",
    "Consistência é tudo! A FURIA segue firme entre as melhores do mundo. 🎯",
    "No cenário internacional, a FURIA segue entre as gigantes. 🌍",
    "A evolução da FURIA no ranking mostra a força do time. 💪"
  ],
  "jogadores": [
    "O time atual da FURIA tem FalleN, yuurih, YEKINDAR, kscerato e molodoy. 👊",
    "FalleN chegou com tudo pra somar ao elenco da FURIA. 🔫",
    "yuurih e kscerato são os pilares da FURIA desde o início. 🧱",
    "YEKINDAR e molodoy trazem sangue novo e agressividade ao time. ⚡",
    "A line da FURIA é pura experiência e talento misturados. 🎯"
  ],
  "vitórias": [
    "A FURIA venceu a ESL Pro League S12 NA e brilhou no IEM Rio 2022. 🥇",
    "Entre os maiores feitos, a FURIA foi top 3 no IEM Rio Major. 🥉",
    "A ESL Pro League e a DreamHack Masters marcaram grandes vitórias da FURIA. 🏆",
    "O time já mostrou sua força em campeonatos como BLAST, ESL e DH. 📣",
    "A FURIA coleciona títulos e boas campanhas ao redor do mundo. 🌎"
  ],
  "redes sociais": [
    "Quer acompanhar tudo? Segue a FURIA no Insta, Twitter e YouTube! 📱",
    "A FURIA tá sempre ativa nas redes, é só seguir! 🧡",
    "Fique por dentro dos bastidores da FURIA nas redes sociais. 🎥",
    "As redes da FURIA mostram tudo: treinos, bastidores e memes. 😎",
    "Instagram, Twitter, YouTube… onde tiver FURIA, a gente tá! 🦁"
  ],
  "curiosidades": [
    "A FURIA foi o 1º time BR campeão da DreamHack Masters. 🏅",
    "Sabia que a FURIA nasceu em uma gaming house em São Paulo? 🏠",
    "O nome FURIA representa intensidade, ousadia e brasilidade. 🔥",
    "A FURIA foi uma das primeiras orgs BR com sede nos EUA. 🌎",
    "Além de CS, a FURIA também investe em LoL, VALORANT e outros jogos. 🎮"
  ],
  "default": [
    "Essa não entendi, Furioso(a)... tenta mandar de outro jeito aí. 🤔",
    "Hmm, essa me bugou. Manda outra! 😅",
    "Não saquei! Reformula e me testa de novo. 😉",
    "Pega leve, Furioso(a)! Essa aí foi difícil. 😵",
    "Ainda não aprendi isso... mas tô evoluindo! 💡"
  ]
};

// Escolhe aleatoriamente uma resposta
const getRandomResponse = (category) => {
  const categoryResponses = responses[category];
  const randomIndex = Math.floor(Math.random() * categoryResponses.length);
  return categoryResponses[randomIndex];
};

// Mapeia a mensagem do usuário para a categoria e pega resposta aleatória
export const getResponse = (input) => {
  const lowerCaseInput = input.toLowerCase();

  if (lowerCaseInput.includes("jogo") || lowerCaseInput.includes("desafio") || lowerCaseInput.includes("próximo")) {
    return getRandomResponse("proximo jogo");
  }
  if (lowerCaseInput.includes("história") || lowerCaseInput.includes("fundação") || lowerCaseInput.includes("historia")) {
    return getRandomResponse("historia");
  }
  if (lowerCaseInput.includes("ranking") || lowerCaseInput.includes("posição")) {
    return getRandomResponse("ranking");
  }
  if (lowerCaseInput.includes("jogadores") || lowerCaseInput.includes("time") || lowerCaseInput.includes("elenco")) {
    return getRandomResponse("jogadores");
  }
  if (lowerCaseInput.includes("vitórias") || lowerCaseInput.includes("campeonatos") || lowerCaseInput.includes("títulos")) {
    return getRandomResponse("vitórias");
  }
  if (lowerCaseInput.includes("redes sociais") || lowerCaseInput.includes("instagram") || lowerCaseInput.includes("twitter") || lowerCaseInput.includes("youtube")) {
    return getRandomResponse("redes sociais");
  }
  if (lowerCaseInput.includes("curiosidades") || lowerCaseInput.includes("sabia")) {
    return getRandomResponse("curiosidades");
  }

  return getRandomResponse("default");
};
