import React from 'react'
import { useState } from 'react'
import Filter from './component/Filter'
import MovieList from './component/MovieList'
import './App.css'


const App = () => {
    const [movies, setMovies] = useState([
      {
        title: 'Inception',
        description: 'A thief who enters the dreams of others to steal their secrets',
        posterURL: 'https://via.placeholder.com/150',
        rating: 4.5
      },
      {
        title: 'Interstellar',
        description: 'A team of explorers travel through a wormhole in space',
        posterURL: 'https://via.placeholder.com/150',
        rating: 4.7
      },
      {
        title: 'The Matrix',
        description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        posterURL: 'https://via.placeholder.com/150',
        rating: 4.8
      },
      {
        title: 'Blade Runner 2049',
        description: 'A young blade runner\'s discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who\'s been missing for thirty years.',
        posterURL: 'https://via.placeholder.com/150',
        rating: 4.6
      },
      {
        title: 'The Shawshank Redemption',
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        posterURL: 'https://via.placeholder.com/150',
        rating: 4.9
      },
      {
        title: 'The Godfather',
        description: 'An organized crime dynasty\'s aging patriarch transfers control of his clandestine empire to his reluctant son.',
        posterURL: 'https://via.placeholder.com/150',
        rating: 4.9
      },
      {
        title: 'The Dark Knight',
        description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
        posterURL: 'https://via.placeholder.com/150',
        rating: 4.8
      },
      {
        title: 'Pulp Fiction',
        description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        posterURL: 'https://via.placeholder.com/150',
        rating: 4.7
      },
      {
        title: 'Fight Club',
        description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
        posterURL: 'https://via.placeholder.com/150',
        rating: 4.6
      },
      {
        title: 'Forrest Gump',
        description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
        posterURL: 'https://via.placeholder.com/150',
        rating: 4.8
      },
      {
        title: 'Goodfellas',
        description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.',
        posterURL: 'https://via.placeholder.com/150',
        rating: 4.7
      },
      {
        title: 'The Lord of the Rings: The Return of the King',
        description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
        posterURL: 'https://via.placeholder.com/150',
        rating: 4.9
      },
      {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        posterURL: 'https://via.placeholder.com/150',
        rating: 4.8
      },
      {
        title: 'The Lord of the Rings: The Two Towers',
        description: 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron\'s new ally, Saruman, and his hordes of Isengard.',
        posterURL: 'https://via.placeholder.com/150',
        rating: 4.8
      },
      {
        title: 'The Silence of the Lambs',
        description: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
        posterURL: 'https://via.placeholder.com/150',
        rating: 4.6
      }
    ]);
  
    const [filterTitle, setFilterTitle] = useState('');
    const [filterRate, setFilterRate] = useState('');
  
    const handleFilterChange = (type, value) => {
      if (type === 'title') {
        setFilterTitle(value);
      } else if (type === 'rate') {
        setFilterRate(value);
      }
    };
  
    const filteredMovies = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
        (filterRate === '' || movie.rating >= parseFloat(filterRate))
      );
    });
  
    const handleAddMovie = () => {
      const newMovie = {
        title: prompt('Enter movie title:'),
        description: prompt('Enter movie description:'),
        posterURL: prompt('Enter poster URL:'),
        rating: parseFloat(prompt('Enter movie rating:'))
      };
  
      // Check if any of the inputs were cancelled
      if (!newMovie.title || !newMovie.description || !newMovie.posterURL || isNaN(newMovie.rating)) {
        alert('Invalid input! Please try again.');
        return;
      }
  
      // Update the movies state by adding the new movie
      setMovies([...movies, newMovie]);
    };
  
    return (
      <div className="app">
        <h1>Movie Library</h1>
        <Filter
          filterTitle={filterTitle}
          filterRate={filterRate}
          handleFilterChange={handleFilterChange}
        />
        <MovieList movies={filteredMovies} />
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>
    );
  };
  
  export default App;