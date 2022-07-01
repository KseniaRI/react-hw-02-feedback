import React, { Component } from 'react';
import { SectionWrap } from '../section/SectionWrap';
import { Statistics } from '../statistics/Statistics';
import { FeedbackOptions } from '../feedback/FeedbackOptions';
import { Notification } from '../notification/Notification';
import { Container } from './App.styled';

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
}

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
      return Math.floor(good * 100 / this.countTotalFeedback());
  }
  onLeaveFeedback = (evt) => {
    const feedbackName = evt.target.textContent;
    this.setState(prevState => ({
      [feedbackName]: prevState[feedbackName] + 1,
      })
    )
  }
  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
     return (
    <Container>
      <SectionWrap title="Please leave feedback">
           <FeedbackOptions
             options={options}
             onLeaveFeedback={this.onLeaveFeedback}
           />
      </SectionWrap>
         <SectionWrap title="Statistics">
           {this.countTotalFeedback() ? 
             
           <Statistics
             good={good}
             neutral={neutral}
             bad={bad}
             total={this.countTotalFeedback()}
               positivePercentage={this.countPositiveFeedbackPercentage()} />
            
            : <Notification message="There is no feedback"/>}
      </SectionWrap>
    </Container>
  );
  }
 
};
