import React from 'react';

class Items extends React.Component {
    items = [
        {
            id: 1,
            name: 'Bob',
            lastname: 'Marley',
            bio: 'Dont worry, be happy!',
            age: 40,
            isHappy: true
        },
        {
            id: 2,
            name: 'Bob',
            lastname: 'Dylan',
            bio: 'A complete unknown!',
            age: 83,
            isHappy: false
        },
    ]

    render() {
        return (
                <div className="container">
                    {this.items.map((el) => (<div key={el.id}>
                        <h3>{el.firstname} {el.lastname}</h3>
                        <p>{el.bio}</p>
                    </div>))}
                </div>
              
        )
    }
}

export default Items