import React, { Component } from 'react';
import './style/App.css';
import Welcome from './component/Welcome';
import About from './component/about/About';
import User from './component/user/User';
import Counter from './component/counter/Counter';
import Product from './component/product/Product';
import Event from './component/event/Event';
import MyForm from './component/event/MyForm';
import SateLessComponent from './component/stateLess/SateLessComponent';
import Books from './component/books/Books';


class App extends Component {

  state = {
    info: [
      { name: 'Laptop', price: 120000, category: 'tech' },
      { name: 'Computer', price: 20000, category: 'tech' },
      { name: 'Router', price: 3400, category: 'tech-2' },
    ],

    books: [
      { id: 1, name: 'Python', author: 'sagor', price: 155 },
      { id: 2, name: 'JavaScript', author: 'sagor', price: 180 },
      { id: 3, name: 'PHP', author: 'Ohi', price: 55 },
    ]
  }

  render() {
    return (
      <div className="App">

        <Welcome />
        <About />

        <User name="Mbr-Sagor" profession="Full-stack developer" />
        <User name="Apple" profession="CEO and Founder JTS" />
        <User name="Meg babu" profession="Student" />

        <Counter />

        {/* <Product name={this.state.info[0].name} price={this.state.info[0].price} category={this.state.info[0].category} />
        <Product name={this.state.info[1].name} price={this.state.info[1].price} category={this.state.info[1].category} />
        <Product name={this.state.info[2].name} price={this.state.info[2].price} category={this.state.info[2].category} /> */}

        {this.state.info && this.state.info.map((i, index) => {
          return <Product
            key={index}
            name={i.name}
            price={i.price}
            category={i.category}
          />
        })}

        <Event />

        <br />
        <br />

        <MyForm />

        <SateLessComponent name="Mbr-Sagor" />

        <br />
        <br />
        <br />

        <Books books={this.state.books} />

      </div>
    )
  }
}

export default App;