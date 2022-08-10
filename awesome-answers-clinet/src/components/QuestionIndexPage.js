import { Component } from "react";
import QuestionDetails from "./QuestionDetails";
import questionIndexData from "../questionIndexData"
import NewQuestionForm from "./NewQuestionForm";

class QuestionIndexPage extends Component{
  state = {
    questions: questionIndexData
  }
  deleteQuestion(id){
    console.log(id)
    //we can't reset the value of state in this way
    // this.state.questions = this.state.questions.filter(q => q.id != id)
    //you can only reset the value by using this.setState()

    this.setState({
        questions: this.state.questions.filter(q => q.id !== id)
    })
  }

  createNewQuestion(params) {
    this.setState({
      questions: [
        params,
        ...this.state.questions
      ]
    })
  }

  render() {
    return (
      <>
        <ul>
          {
            this.state.questions.map((q,i) => {
              return <li key={i}>{q.id} - {q.title} <button onClick={() => { this.deleteQuestion(q.id)}}>Delete</button></li>
            })  
          }
        </ul>
        <NewQuestionForm submitForm={ (params) => this.createNewQuestion(params)} />
      </>

    )
  }
}

export default QuestionIndexPage;