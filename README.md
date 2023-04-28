# desafio_vr
Desafio Técnico pra empresa VR

# React Native App Login

[![Moove It](https://circleci.com/gh/moove-it/react-native-template.svg?style=svg)](https://app.circleci.com/pipelines/github/moove-it/react-native-template?branch=master)

#### Este projeto é o resultado de um desafio técnico para a empresa VR.
#### O projeto escolhido foi Login

## Prerequisitos

- [Node.js 20.0.0](https://nodejs.org)
  - [npm 9.6.5](https://nodejs.org)
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 14.3](https://developer.apple.com/xcode)
- [Cocoapods 1.12.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Dependências do projeto

- [@react-native-async-storage/async-storage 1.18.1](https://github.com/react-native-async-storage/async-storage)
- [@react-native-material/core 1.3.7](https://www.react-native-material.com/)
- [@react-navigation/native 6.1.6](https://reactnavigation.org/)
- [@react-navigation/native-stack 6.9.12](https://reactnavigation.org/)
- [@reduxjs/toolkit 1.9.5](https://redux.js.org/)
- [axios 1.3.6](https://github.com/axios/axios)
- [react 8.2.0](https://react.dev])
- [react-native .71.7](https://reactnative.dev)
- [react-native-flex-layout 0.1.5](https://www.react-native-material.com/docs/layout/flex)
- [react-native-paper 5.7.0](https://callstack.github.io/react-native-paper)
- [react-native-safe-area-context 4.5.1](https://github.com/th3rdwave/react-native-safe-area-context)
- [react-native-screens 3.20.0](https://github.com/software-mansion/react-native-screens)
- [react-native-vector-icons 9.2.0](https://github.com/oblador/react-native-vector-icons)
- [react-redux 8.0.5](https://redux.js.org/)
- [redux-saga 1.2.3](https://redux-saga.js.org/)

## Dependências de desenvolvimento

- [@babel/core: ^7.21.4]()
- [@babel/runtime: ^7.20.0]()
- [@react-native-community/eslint-config: ^3.2.0]()
- [@testing-library/jest-native: ^5.4.2]()
- [@testing-library/react-native: ^12.0.1]()
- [@types/jest: ^29.2.1]()
- [@types/react: ^18.2.0]()
- [@types/react-test-renderer: ^18.0.0]()
- [babel-jest: ^29.5.0]()
- [eslint: ^8.19.0]()
- [jest: ^29.2.1]()
- [metro-react-native-babel-preset: 0.73.9]()
- [prettier: ^2.4.1]()
- [react-test-renderer: 18.2.]()

## Usage

## Estrutura de pastas

This template follows a very simple project structure:

- `android`: Projeto Android.
- `ios`: Projeto iOS.
- `coverage`: Cobertura de testes.
- `img`: This folder is the main container of all the code inside your application.
  - `logo_round.png`: Logo redonda.
  - `logo_square.png`: Logo quadrada.
- `vendor`: Dependências de terceiros relacionadas com o projeto iOS.
- `src`: Source.
  - `features`: Todas as funcionalidades.
    - `home`: Feature Home.
      - `ui`: UI da feature.
        - `pages`: Screens.
          - `HomePage.js`
    - `login`: Feature Login.
      - `domain`: Domínio da feature.
        - `repositories`: Repositories da feature.
          - `LoginActions.js`
          - `LoginSagaRepository.js`
          - `LoginTypeActions.js`
        - `useCases`: UseCases da feature.
          - `LoginUseCase.js`
      - `ui`: UI da feature.
        - `pages`: Screens.
          - `LoginPage.js`
    - `profile`: Feature Profile.
      - `ui`: UI da feature.
        - `pages`: Screens.
          - `ProfilePage.js`
  - `shared`: Tudo que for usado pelas features.
    - `redux`: Gerenciamento de estado do app.
      - `saga`: Controle da sincronia para redux.
        - `ApiWrapper.js`: Wrapper da API.
        - `RootSagaRepository.js`: Todos os sagas do app.
        - `Uris.js`: Constantes para urls.
      - `store`: Estado do app.
    - `routes`: Navegação.
      - `AppNavigator.js`: Rotas para usuário logado.
      - `AppRootRoute.js`: Abstração para gerenciar se o usuário está logado ou não e mostrar rodas para cada caso.
      - `AppNavigator.js`: Rotas para quem está deslogado.
      - `RootNavigation.js`: Abstração para usar navegação dentro dos sagas.
    - `ui`: UI.
      - `Alert.test.js`
      - `BodyText.test.js`
      - `Button.test.js`
      - `Header.test.js`
      - `Image.test.js`
      - `Input.test.js`
      - `TitleText.test.js`
    - `components`: UI shared components.
      - `AlertDesafio.js`
      - `BodyTextDesafio.js`
      - `ButtonDesagfio.js`
      - `HeaderDesafio.js`
      - `ImageDesafio.js`
      - `InputDesafio.js`
      - `TitleTextDesafio.js`
    - `utils`: Utils.
        - `Screen.js`
        - `Screen.styles.js`
        - `Screen.test.js`
  - `App.js`: Main component that starts your whole app.
  - `index.js`: Entry point of your application as per React-Native standards.

## Setup environments

### Using scripts from console

Para iniciar a aplicação abra um janela do terminal/cmd e digite: `yarn` paga baixar as dependências.
Em seguida digite `yarn start` para iniciar o aplicativo `i` para emular no simulador iOS ou `a` para emular no emulador Android 

Você pode seguir os passos convencionais para testar a aplicação, conforme abaixo: 

DEV: `yarn ios` or `yarn android`
