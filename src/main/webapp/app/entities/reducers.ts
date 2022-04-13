import book from 'app/entities/book/book.reducer';
import author from 'app/entities/author/author.reducer';
import genre from 'app/entities/genre/genre.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  book,
  author,
  genre,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
