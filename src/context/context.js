import React, { Component } from 'react';
import {linkData} from './linkData'
import {projects} from './projectsData'


const ProductContext = React.createContext();

class ProductProvider extends Component {

  state ={
    navOpen:false,
    links:linkData,
    works:[]
  };

  componentDidMount(){
    this.setWorks(projects);
  }
setWorks = works =>{
  let projects = works.map(item=>{
    const id = item.sys.id;
    const img = item.fields.image.fields.file.url;
    const all = {id,...item.fields,img};
    return all;

  });
console.log(projects);
  this.setState({
    works:projects
  })
}
  handleNav =()=>{
    this.setState({
      navOpen:!this.state.navOpen
    })
  }
  closeNav =()=>{
    this.setState({
      navOpen:false
    })
  }
  render() {
    return (
      <>
        <ProductContext.Provider
        value={{
          ...this.state,
          handleNav:this.handleNav,
          closeNav:this.closeNav
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
      </>
    );
  }
}
const DataConsumer = ProductContext.Consumer;

export { ProductProvider, DataConsumer };
