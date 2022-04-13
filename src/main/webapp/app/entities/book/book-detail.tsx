import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './book.reducer';

export const BookDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const bookEntity = useAppSelector(state => state.book.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="bookDetailsHeading">
          <Translate contentKey="appJhApp.book.detail.title">Book</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{bookEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="appJhApp.book.name">Name</Translate>
            </span>
          </dt>
          <dd>{bookEntity.name}</dd>
          <dt>
            <span id="author">
              <Translate contentKey="appJhApp.book.author">Author</Translate>
            </span>
          </dt>
          <dd>{bookEntity.author}</dd>
          <dt>
            <span id="genre">
              <Translate contentKey="appJhApp.book.genre">Genre</Translate>
            </span>
          </dt>
          <dd>{bookEntity.genre}</dd>
          <dt>
            <Translate contentKey="appJhApp.book.author">Author</Translate>
          </dt>
          <dd>{bookEntity.author ? bookEntity.author.id : ''}</dd>
          <dt>
            <Translate contentKey="appJhApp.book.genre">Genre</Translate>
          </dt>
          <dd>{bookEntity.genre ? bookEntity.genre.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/book" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/book/${bookEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default BookDetail;
