import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchResults } from '../../actions';
import { useHistory } from 'react-router-dom';
import './style.css'

const SearchForm = () => {

    const [userLocation, setUserLocation] = useState('');
    const [category, setCategory] = useState('Dining');
    const dispatch = useDispatch();
    let history = useHistory();

    const updateUserLocation = (e) => {
        const input = e.target.value;
        setUserLocation(input);
    };

    const updateCategory = (e) => {
        const input = e.target.value;
        setCategory(input);
    };

    const redirect = () => {
        history.push('/search-results');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchSearchResults(userLocation, category));
        redirect();
        setUserLocation('');
        setCategory('');
    };

    return (
        <form className='search__form' onSubmit={handleSubmit}>
                <div className='search__box'>
                    <select onChange={updateCategory}>
                        <option value="Dining">Dining</option>
                        <option value="ALL">All Events</option>
                        <option value="FEST">Festivals</option>
                        <option value="LIVE">Live Music</option>
                        <option value="CLUB">Clubbing/Dance Music</option>
                        <option value="DATE">Dating Event</option>
                        <option value="THEATRE">Theatre/ Dance</option>
                        <option value="COMEDY">Comedy</option>
                        <option value="EXHIB">Exhibitions and Attractions</option>
                        <option value="BARPUB">Bar/ Pub Events</option>
                        <option value="LGB">LGBTQ+ Events</option>
                        <option value="SPORT">Sporting Events</option>
                        <option value="ARTS">The Arts</option>
                    </select>
                </div>
                <input type="input" className="form__field" placeholder="Enter london area" name="search" id='search' value={userLocation} onChange={updateUserLocation} required />
                <input type="submit" value='Search' className='search__submit'/>
        </form>
    )
}

export default SearchForm;