import React from 'react';
import BooksForm from './BooksForm';
import BooksList from './BooksList';

class App extends React.Component {
    render(){
        return (
            <div>
                <BooksList />
                <BooksForm />
            </div>

        );
    }
}

export default App;