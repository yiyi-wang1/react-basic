import ReviewDetails from "./ReviewDetails";

const ReviewList = (props) => {
    return (
        <div>
            <h3>Reviews</h3>
            <div>
                {props.list.map((review, index) => {
                    return <ReviewDetails
                            key={index}
                            rating={review.rating}
                            body={review.body}
                            created_at={review.created_at}
                            reviewer={review.reviewer}
                            deleteReview={()=>props.deleteReview(review.id)}
                        />
                })}
            </div>
        </div>
    )
}

export default ReviewList;