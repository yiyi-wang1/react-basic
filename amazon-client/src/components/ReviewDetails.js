import StarRating from "./StartRating";

export default function ReviewDetails(props) {
    const { rating, body, created_at, reviewer } = props;
    return (
        <div>
            <small>Rating: </small>
            <StarRating
                max={5}
                current={rating}
            />
            <p>{body}</p>
            {/* <p><small>Reviewed At: {created_at.toLocaleString()}</small></p> */}
            <p><small>Reviewed By: {reviewer.full_name}</small></p>
            <button onClick={props.deleteReview }>Delete this review</button>
        </div>
    )
}