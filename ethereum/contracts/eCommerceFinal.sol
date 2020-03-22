pragma solidity ^0.4.25;
pragma experimental ABIEncoderV2;

contract allProducts {
    productStruct[] public deployedProducts;
    uint public totalProducts; 
    
    struct productStruct {  
        address productOwner;
        string productName; 
    }

    function createProduct(uint minimumReward, string memory _productName) public {
        productStruct memory newProduct;
        newProduct.productOwner = new ecommerceReviews(minimumReward, msg.sender);
        totalProducts = totalProducts + 1; 
        newProduct.productName = _productName;
        deployedProducts.push(newProduct);
    }

    function getDeployedProducts() public view returns (productStruct[]) {
        return deployedProducts;
    }
}

contract ecommerceReviews {
    address public manager;
    uint public rewardValue; 
    reviewStruct[] public reviews;
    mapping(address => uint) public reviewRatings;
    uint public reviewsCount;
    
    struct reviewStruct {  
        address reviewerAddress; 
        string reviewText;
        uint averageRating;
        bool complete;
        uint sumTotalRating;  
        uint totalRatings; 
        mapping(address => uint) raters;
    }

    mapping (uint => reviewStruct) public allProductReviews;
    
    constructor (uint minimumReward, address _productOwner) public {
        manager = _productOwner;
        rewardValue = minimumReward;
    }

    modifier restricted() { 
        require(msg.sender == manager);
        _;
    }
    
    function createReview(string _reviewText, address _reviewer) {
        // Before doing anything on Blockchain perform code to check for duplicate reviews 
        require(checkReviewExist()==false);
        reviewStruct memory newReview = reviewStruct({
            reviewText: _reviewText,
            averageRating: 1,
            reviewerAddress: _reviewer,
            complete: false, 
            totalRatings: 0, 
            sumTotalRating: 0
        });
        
        reviews.push(newReview);
    }
    
    function updateReview(string _reviewText, uint _index) {
        reviewStruct storage review = reviews[_index];
        // Before doing anything on Blockchain perform code to check if the owner of the review is trying to update 
        require(review.reviewerAddress==msg.sender);
        review.reviewText = _reviewText;
    }

    function rateReview(uint _rating, uint _index) {
        reviewStruct storage review = reviews[_index];
        require(review.reviewerAddress!=msg.sender);
        if (review.raters[msg.sender] == 0) {
            review.totalRatings++;
            review.sumTotalRating = review.sumTotalRating + _rating;
        } else { 
            review.sumTotalRating = review.sumTotalRating - review.raters[msg.sender] + _rating;  
        }
        review.raters[msg.sender] = _rating;
    }

    function checkReviewExist() private view returns (bool) {
        for (uint count = 0; count < reviews.length; count++) {
            reviewStruct memory review = reviews[count];
            if (review.reviewerAddress == msg.sender) return true; 
        }
        return false;
    }

    function getReviewIndex() private view returns (uint) {
        for (uint count = 0; count < reviews.length; count++) {
            reviewStruct memory review = reviews[count];
            if (review.reviewerAddress == msg.sender) return count; 
        }
        return 99999999;
    }


    function getProductSummary() public view returns (
      uint, uint, address
      ) {
        return (
          rewardValue,
          reviews.length,
          manager
        );
    }
    
    function getReviewsCount() public view returns (uint) {
        return reviews.length;
    }

}
