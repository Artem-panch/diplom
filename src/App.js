import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullitem from "./components/ShowFullitem";


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items:[
        {
          id:1,
          title: 'Стілець сірий',
          img: 'chair-grey.jpeg',
          desc: `Сірий стілець у сучасному стилі з оксамитовою оббивкою та металевими ніжками, ідеально підходить для кухні, вітальні або офісу. Виробник – Китай.`,
          category: 'chairs',
          price: '49.99'
        },
        {
          id:2,
          title: 'Стіл',
          img: 'table.webp',
          desc: `Сучасний робочий стіл з металевими ніжками та білим корпусом із МДФ, оснащений трьома шухлядами для зберігання. Ідеально підходить для офісу чи домашнього використання. Виробник – Китай.`,
          category: 'tables',
          price: '149.00'
        },
        {
          id:3,
          title: 'Диван',
          img: 'sofa.jpeg',
          desc: `Стильний сірий кутовий диван з м'якою оббивкою та містким відділенням для зберігання. Ідеальний для вітальні, забезпечує комфорт і функціональність. Виробник – В'єтнам.`,
          category: 'sofa',
          price: '549.99'
        },
        {
          id:4,
          title: 'Лампа',
          img: 'wall-light.jpeg',
          desc: `Настінна лампа в сучасному мінімалістичному стилі ідеально підходить для інтер'єрів у стилі лофт або хай-тек, створюючи м'яке підсвічування та затишну атмосферу. Виготовлена з металу та акрилу, що забезпечує довговічність і стильний вигляд. Країна виробника – Китай`,
          category: 'light',
          price: '25.00'
        },
        {
          id:5,
          title: 'Стілець білий',
          img: 'chair-white.jpeg',
          desc: `Стильний білий стілець із ергономічним сидінням і міцними дерев'яними ніжками ідеально підходить для сучасних інтер'єрів. Завдяки поєднанню металевих елементів і натурального дерева він є надійним і довговічним. Матеріал сидіння – екошкіра, каркас – дерево та метал. Країна виробника – Китай`,
          category: 'chairs',
          price: '49.99'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return(
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory}/>
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
      {this.state.showFullItem && <ShowFullitem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
      <Footer/>
    </div>
    )
  };

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category){
    if(category==='all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el =>el.category===category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el=>el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
    this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
