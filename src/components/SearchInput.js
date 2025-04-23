import React from 'react';
import Button from './Button';

class SearchInput extends React.Component {
    render() {
        return (<div className='container'>
                <input type="text" className="search-input" placeholder="Поиск..." />
                <Button />  
        </div>
            
        )
    }
}

export default SearchInput