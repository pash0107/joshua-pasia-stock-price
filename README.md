# Stock Price UI

Using ReactJS framework UI, get real-time quote data for US stocks.

### ENV

Make sure to manually create your .env file on the root directory. You can copy the `.env.example` file and rename it to `.env`. In this file you have to add your database connection information.

To make sure the API is running, please add a value on REACT_APP_FINHUB_API_KEY. To generate new key, please follow the steps:

- Visit [FINNHUB](https://finnhub.io/).
- Click `Get Free API Key`.
- Sign up for an account.
- Once done, you will be redirected to dashboard page. You can now copy your generate API Key.
- Paste the value on `REACT_APP_FINHUB_API_KEY` located on `.env` file.

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ nvm install 16.18.0
$ nvm use 16.18.0
$ npm install
$ npm run start
```

## Project Structure

| Name               | Description                                   |
| ------------------ | --------------------------------------------- |
| **src/**           | Parent folder of project files                |
| **src/containers** | Modules folder for all project files          |
| **src/helpers**    | Consist of helper functions on the project    |
| **src/redux**      | Redux Saga for state management for API calls |
| .env.example       | Environment configuration template            |

## Related Projects

- [ReactJS](https://react.dev/) - React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components by Facebook Inc.
- [FINNHUB](https://finnhub.io/) - Real-Time RESTful APIs and Websocket for Stocks, Currencies, and Crypto.

## Documentations of our main dependencies

- [Redux Saga](https://redux-saga.js.org/)
- [Material UI](https://mui.com/material-ui/)
- [Axios](https://axios-http.com/docs/intro)
