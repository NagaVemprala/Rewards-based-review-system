import web3 from './web3';

const address = '0x213c666AC07B91B885858B2f8fb629d0cc7d5fBD';

const abi = [{"constant":true,"inputs":[],"name":"getReviewsMappingValue","outputs":[{"components":[{"name":"reviewerAddress","type":"address"},{"name":"productId","type":"uint256"},{"name":"totalUpdates","type":"uint256"},{"name":"reviewText","type":"string"},{"name":"averageRating","type":"uint256"},{"name":"allReviewRatings","type":"uint256[]"}],"name":"","type":"tuple[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"users","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"reviewNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_reviewNumber","type":"uint256"}],"name":"verifyReviewRating","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"productNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"initialMessage","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"newUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"exist","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_senderAddress","type":"address"},{"name":"_reviewNumber","type":"uint256"}],"name":"transferFunds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_reviewNumber","type":"uint256"},{"name":"_rating","type":"uint256"}],"name":"rateReview","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"allProductReviews","outputs":[{"name":"reviewerAddress","type":"address"},{"name":"productId","type":"uint256"},{"name":"totalUpdates","type":"uint256"},{"name":"reviewText","type":"string"},{"name":"averageRating","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"allProducts","outputs":[{"name":"productId","type":"uint256"},{"name":"productDescription","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_reviewText","type":"string"},{"name":"_productId","type":"uint256"}],"name":"writeReview","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_productDescription","type":"string"}],"name":"addProduct","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]
// const abi = [{"constant":false,"inputs":[{"name":"newReview","type":"string"}],"name":"setReview","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"review","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"initialReview","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]

export default new web3.eth.Contract(abi, address);