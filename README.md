# PROJETO PokeList
  
  **Informações do aplicativo**
  - Na home do projeto, quando você deslizar o dedo para baixo, vai aparecer um load e na sequencia uma mensagem dizendo que a tela foi atualizada com sucesso.
    - Para fazer o load foi usado o RefreshControl do próprio react-native;
    - Para aparecer a mensagem dizendo que foi atualizado com sucesso, foi usada uma lib chamada: flash-message, parametrizei a mesma para sempre que eu for usar, ao invés de sempre importar várias coisas, eu    somente importo um "show" e passo as mensagens como um objeto aonde eu desejar.
    - Sempre que o usuário estiver sem conexão com a internet, caso ele atualize a tela, irá aparecer um outro layout dizendo que ele está sem conexão. **OBS:** Eu confeço que fiquei na dúvida sobre colocar essa lib, mas na minha cabeça como os dados vem de uma api, eu decidi manter, sei também que o certo é assim que o usuário perder a conexão com a internet, ele perder a conexão com o aplicativo e quando a internet do mesmo se estabilizar, o aplicativo voltar sem ter que sair e entrar novamente, mas confeço que não consegui focar nisso, como eu disse, eu não ia manter ela, mas decidi deixar hehe.

    - Na tela de mostrar informações do pokémon, ao entrar ela carrega com um activityIndicator (a home também carrega), depois disso as informações do pokémon escolhido é apresentada.  
