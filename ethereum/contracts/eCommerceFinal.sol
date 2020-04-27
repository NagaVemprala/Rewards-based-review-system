pragma solidity ^0.4.25;
pragma experimental ABIEncoderV2;

contract allProducts {
    productStruct[] public deployedProducts;
    uint public totalProducts;
    address public contractOwner; 
    
    struct productStruct {  
        address productOwner;
        string productName; 
    }

    constructor () public {
        contractOwner = msg.sender;
    }

    function createProduct(uint _minimumReward, uint _minimumRequiredThreshold, string memory _productName) public {
        productStruct memory newProduct;
        newProduct.productOwner = new ecommerceReviews(_minimumReward, _minimumRequiredThreshold, msg.sender);
        totalProducts = totalProducts + 1; 
        newProduct.productName = _productName;
        deployedProducts.push(newProduct);
    }

    function getDeployedProducts() public view returns (productStruct[]) {
        return deployedProducts;
    }

    function getProductsCount() public view returns (uint) {
        return deployedProducts.length;
    }

}

contract ecommerceReviews {
    address public manager;
    uint public rewardValue; 
    uint public minimumRequiredThreshold;
    address[] public approvers; 
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

    constructor (uint _minimumReward, uint _minimumRequiredThreshold, address _productOwner) public {
        manager = _productOwner;
        rewardValue = _minimumReward;
        minimumRequiredThreshold = _minimumRequiredThreshold;
        //contractOwner.transfer(msg.value);
    }
    
    function contribute() public payable {
        require(msg.value == rewardValue);
    }

    modifier restricted() { 
        require(msg.sender == manager);
        _;
    }
    
    function rewardReviewers() public payable {
        uint allRewards = 0;
        uint total_ratings;
        uint reviews_length = reviews.length;

        for (uint i=0; i < reviews_length ; i++) {
            reviewStruct storage temp_review_struct = reviews[i];
            uint average_rating = (temp_review_struct.sumTotalRating/temp_review_struct.totalRatings);
            if (average_rating >= 2) {
                total_ratings = total_ratings + average_rating;
            }
        }
        for (i=0; i < reviews_length; i++) {
            reviewStruct storage temp_review_struct1 = reviews[i];
            temp_review_struct1 = reviews[i];
            average_rating = temp_review_struct1.sumTotalRating/temp_review_struct1.totalRatings;

            if (average_rating >= 2) {
                uint total_reward = (rewardValue*average_rating)/total_ratings;
                allRewards = total_reward + allRewards;
                temp_review_struct1.reviewerAddress.transfer(total_reward);
            }
            temp_review_struct.complete = true;
        }
    }
    
    function createReview(string _reviewText, address _reviewer) public {
        // Before doing anything on Blockchain perform code to check for duplicate reviews 
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
    
    function updateReview(string _reviewText, uint _index) public {
        reviewStruct storage review = reviews[_index];
        // Before doing anything on Blockchain perform code to check if the owner of the review is trying to update 
        require(review.reviewerAddress==msg.sender);
        review.reviewText = _reviewText;
    }

    function rateReview (uint _rating, uint _index) public {
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
