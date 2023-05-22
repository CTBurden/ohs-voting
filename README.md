<a name="readme-top"></a>

<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="">
    <img src="" alt="Logo" width="80" height="80">
  </a> -->

  <h1 align="center">OHS Voting</h3>

  <!-- <p align="center">
    <br />
    <a href=""><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="">View Demo</a>
    ·
    <a href="">Report Bug</a>
    ·
    <a href="">Request Feature</a>
  </p> -->
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#other-commands">Other Commands</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <!-- <li><a href="#roadmap">Roadmap</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project is a monorepo housing a UI and API, more information about monorepos can be found [here](https://nx.dev/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Angular][Angular.io]][Angular-url]
- [![Tailwindcss][TailwindCSS]][Tailwind-url]
- [![NestJS][NestJS]][NestJS-url]
- [![Prisma][Prisma]][Prisma-url]
- [![Railway][Railway]][Railway-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

You will need Node and the Nx CLI in order to run the application

- [Node](https://nodejs.org/en/download)
- Nx CLI

```sh
npm i -g @nrwl/cli
```

### Installation

Follow the steps below to install and serve the application

1. Clone the repo
   ```sh
   git clone https://github.com/CTBurden/ohs-voting.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Establish database connection
   ```sh
   npx prisma db pull
   npx prisma generate
   ```
4. Serve a development server - front-end = ui - backend = api<br>
   _The same commands are used for the UI and API, just replace the **appName** with which one you would like to serve_

   ```sh
   npm run start-<appName>
   ```

#### Other Commands

- Run Tests

```sh
npm run test-<appName>
```

- Run Linting

```sh
npm run lint-<appName>
```

- Run Production Build

```sh
npm run build-<appName>
```

- Prisma data studio (view database tables and data)

```sh
npx prisma studio
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Api Endpoints

- GET /players - will retrieve the two test players currently in the database

- [Swagger](https://swagger.io/docs/) Documentation can be viewed by nvaigating to the [base url](http://localhost:3000/api) while the api is running

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

<!-- ## Roadmap

- [x]
- [x]
- [ ]
- [ ]
- [ ]
  - [ ]
  - [ ]  -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[TailwindCSS]: https://img.shields.io/static/v1?style=for-the-badge&message=Tailwind+CSS&color=222222&logo=Tailwind+CSS&logoColor=06B6D4&label
[Tailwind-url]: https://tailwindui.com/
[NestJS]: https://img.shields.io/static/v1?style=for-the-badge&message=NestJS&color=E0234E&logo=NestJS&logoColor=FFFFFF&label
[NestJS-url]: https://nestjs.com/
[Prisma]: https://img.shields.io/static/v1?style=for-the-badge&message=Prisma&color=2D3748&logo=Prisma&logoColor=FFFFFF&label
[Prisma-url]: https://www.prisma.io/
[Railway]: https://img.shields.io/static/v1?style=for-the-badge&message=Railway&color=0B0D0E&logo=Railway&logoColor=FFFFFF&label
[Railway-url]: https://railway.app/
