import QuestionDetails from "./QuestionDetails";
import AnswerList from "./AnswerList";
import { Component } from "react";
import questionData from "../questionData";


class QuestionShowPage extends Component{

  //two ways to declare the state
  constructor(props) {
    super(props);
    this.state = { question: questionData }
    // this.delete = this.delete.bind(this)
  }

  delete() {
    this.setState({question: null})
  }

  deleteTheAnswer(id){
    this.setState({
      question: {
        ...this.state.question,
        answers: this.state.question.answers.filter(a => a.id !== id)
      }
    })
  }

  render() {
    return(
      <div>
        <QuestionDetails 
          title={ this.state.question.title }
          body={ this.state.question.body }
          author={ this.state.question.author }
          created_at={this.state.question.created_at}
          view_count={this.state.question.view_count}
        />
        <button onClick={()=>{this.delete()}}>Delete the question</button>
        <AnswerList
          list={this.state.question.answers}
          deleteTheAnswer={(id) => this.deleteTheAnswer(id)}/>
      </div>
    )
  }
}

export default QuestionShowPage

