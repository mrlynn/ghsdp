import React, { Component } from 'react';
import Faq from 'react-faq-component';
 
const data = {
  title: "FAQ",
  rows: [
    {
      title: "Who is eligible for this offer?",
      content: `All active members of the GitHub Student Developer Pack are eligible to receive these benefits.
      `
    },
    {
      title: "I am not a student, can I still participate?",
      content: "These offers are only available for students. If you are a startup you may apply to the startup program instead."
    },
    {
      title: "Do I need a credit card to redeem the offer?",
      content: `Yes, you will need a valid credit card or debit card to redeem this offer. You can add a new card on the billing page. For smaller projects, we suggest getting started with a shared M2 or M5 instance.`
    },
    {
      title: "I have another question",
      content: "Get in touch at gitubsdp@mongodb.com"
    }]
}
 
const styles = {
  bgColor: 'white',
  titleTextColor: 'black',
  rowTitleColor: 'grey',
  // rowContentColor: 'grey'
}
 
export default class Pfaq extends Component {
  render() {
    return (
      <div>
        <Faq data={data} styles={styles}/>
      </div>
    )
  }
}
 