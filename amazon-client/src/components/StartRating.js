import Star from "./Star"

const StarRating = ({ max, current }) => {
    return (
        <p>
            {[...Array(max)].map((e, i) => {
                if (i < current) {
                    return <Star
                    key={i}
                    style={{ color: "yellow", width: "1%" }}
                    />
                } else {
                    return <Star
                    key={i}
                    style={{ color: "gray", width: "1%" }}
                />
                }
               
            })}
        </p>
    )
    
}

export default StarRating