import React, { useState } from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState('');
    const [times, setTimes] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm({ date, times, guests, occasion });
    }

    const handleChange = (e) => {
        setDate(e.target.value);
        props.dispatch({ type: 'UPDATE_TIMES', date: new Date(e.target.value) });
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date:</label>
                            <input id="book-date" value={date} onChange={handleChange} type='date' required/>
                        </div>
                        <div>
                            <label htmlFor='book-time'>Choose Time:</label>
                            <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTime => (
                                        <option key={availableTime}>{availableTime}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor='book-guests'>Number of Guests:</label>
                            <input id="book-guests" min='1' value={guests} onChange={(e) => setGuests(e.target.value)} type='number' required/>
                        </div>
                        <div>
                            <label htmlFor='book-occasion'>Occasion:</label>
                            <select id='book-occasion' value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                                <option value="">Select an Occasion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                            </select>
                        </div>
                        <div className='btnReceive'>
                            <input aria-label='On Click' type='submit' value={"Make Your Reservation"}/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;
