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
                            full_name={review.full_name}
                        />
                })}
            </div>
        </div>
    )
}

export default ReviewList;