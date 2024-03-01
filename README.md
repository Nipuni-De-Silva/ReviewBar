# ReviewBar

ReviewBar is a MEVN application that allows users to post and get reviews for products identified by their Universal Product Code (UPC).

![Capture](https://github.com/Nipuni-De-Silva/ReviewBar/assets/80912329/4d336f86-1ffc-4a81-af93-023e234dfef3)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### Installing

1. Clone the repository: `https://github.com/Nipuni-De-Silva/ReviewBar.git`
2. Install dependencies: `npm install`
3. Start server: `npm start`


## Usage

The application exposes the following endpoints:

- `POST /reviews/:upc`: Add a review to a product. If the product does not exist, it will be created.
- `GET /reviews/:upc`: Get all reviews for a product.


## Built With

- [Vue.js](https://vuejs.org/) - The Frontend library
- [Node.js](https://nodejs.org/) - The runtime environment
- [Express](https://expressjs.com/) - The web framework used
- [MongoDB](https://www.mongodb.com/) - The database used

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
