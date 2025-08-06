import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    return (
      <>
        <header>
          <div className='logo'>Grid Demo</div>
        </header>
        <section>
          <div className='card'>
            <img src='1.jpeg' alt=''/>
            <lable>Image 01</lable>
          </div>
          <div className='card'>
            <img src='2.jpeg' alt=''/>
            <lable>Image 02</lable>
          </div>
          <div className='card'>
            <img src='3.jpeg' alt=''/>
            <lable>Image 03</lable>
          </div>
          <div className='card'>
            <img src='4.jpeg' alt=''/>
            <lable>Image 04</lable>
          </div>
          <div className='card'>
            <img src='5.jpeg' alt=''/>
            <lable>Image 05</lable>
          </div>
          <div className='card'>
            <img src='6.jpeg' alt=''/>
            <lable>Image 06</lable>
          </div>
          <div className='card'>
            <img src='7.jpeg' alt=''/>
            <lable>Image 07</lable>
          </div>
          <div className='card'>
            <img src='8.jpeg' alt=''/>
            <lable>Image 08</lable>
          </div>
          <div className='card'>
            <img src='9.jpeg' alt=''/>
            <lable>Image 09</lable>
          </div>
        </section>
        <footer>Copyright@2025. All rights reserved. @AKA</footer>
      </>
    );
  }
}

export default App;
