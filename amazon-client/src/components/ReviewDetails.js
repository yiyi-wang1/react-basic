import StarRating from "./StartRating";

export default function ReviewDetails(props) {
    const { rating, body, created_at, full_name } = props;
    return (
        <div>
            <small>Rating: </small>
            <StarRating
                max={5}
                current={rating}
            />
            <p>{body}</p>
            <p><small>Reviewed At: {created_at.toLocaleString()}</small></p>
            <p><small>Reviewed By: {full_name}</small></p>
        </div>
    )
}