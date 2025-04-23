import React from 'react';
import Header from '../components/Header';
import Searcher from '../components/Searcher';
  
class CatalogPage extends React.Component {
    
    render() {
      return (
        <div>
            <Header title="Каталог" />
            <Searcher />
            <aside></aside>
        </div>
            
      )   
    }
}
  export default CatalogPage