import QuestionDetails from "./QuestionDetails";

const QuestionList = (props) =>{
  return(
    <>
      {props.list.map((q, i)=> {
        return <QuestionDetails
            key={i}
            title={q.title}
            body={q.body}
            author={q.author}
            created_at={q.created_at}
        />
      })}
    </>
  )
}

export{QuestionList}  