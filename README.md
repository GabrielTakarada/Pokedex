# Pokedex em react

### Na minha pokedex em react eu separei ela com a pasta asstes para colocar algumas imagens, em componets e pages, as quais estão alocadas respectivamente os componentes de Loading, Navbar, PokemonCard que são os componentes usados no site e minha pagina Home que é a pagina principal do meu projeto, contendo o import dos meu components, juntamente a Api utilizada com a sua funcionalidade.

### para iniciar a estrutura do meu projeto na pasta POKEMON_REACT.

### npm create-react-app pokedex

### npm i axios

### npm install @mui/material @emotion/react @emotion/styled

### a ideia geral do projeto com estas instalações e criar a estrutura base, instalar o axios que será usado para puxar a API,

### no caso do terceiro comando busquei na pagina inicial do site https://mui.com/material-ui/ para ajudar a monta a Navbar e os Cards.

### OBS: é muito importante lembrar de adicionar os imports necessários durante a montagem para não ter nenhum erro.

### No arquivo Home.jsx da pagina pages nos importamos o axios para utilizar a API no projeto, usamos algumas constantes para definir o que será feito na pagina como a exposição dos pokemons que utilizamos um for() e a busca dos pokemons.

### Além disso com objetivo de organizar melhor os card adicionados colocamos um container spacing={3} para ter o espacamento dos cards e um item xs={2} para definir quantos cards terá na tela.

### Explicando (item xs={2}) este comando funciona serparando a pagina em 12 grids horizontais que podemos definir como a divisão da pagina em 12 partes, em que se voce coloca 2 será 2/12 = 1/6 então será separado obtendo 6 cards, exemplo xs={3} seria dividido em 4, pois 3/12 = 1/4.

### definimos a cor do site e outras estilizações com programação inline para deixar o mais bonito possível.

### Com isso ao abrir no nosso projeto nos deparamos com um loading até terminar de carregar as imagens e um hover com zoom de 110% e de backgrund-color vermelho.


