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
  handleSubmit() {
    // fetch(`download`)
    // .then(response => {response.blob().then(blob=>{
    //   let url = window.URL.createObjectURL(blob);
    //   let a = document.createElement('a');
    //   a.href=url;
    //   a.download = 'zvit.pdf';
    //   a.click();
    // })});
    // window.open('../../public.zvit.pdf');
    var link = document.createElement('a');
link.href = 'zvit.pdf';
link.download = 'zvit.pdf';
link.dispatchEvent(new MouseEvent('click'));
    
       
  }

setWorks = works =>{
  let projects = works.map(item=>{
    const id = item.sys.id;
    const img = item.fields.image.fields.file.url;
    const all = {id,...item.fields,img};
    return all;

  });
  
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
          closeNav:this.closeNav,
          handleSubmit:this.handleSubmit
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
