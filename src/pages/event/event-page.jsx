import { React, useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import EventElement from '../../components/event-element/event-element';
import EventEdit from '../../modals/event-edit/EventEdit';
import EventInfoRegistered from '../../modals/registered-students-info/registered-students';
import EventInfo from '../../modals/event-info/event-info';
import SearchBar from '../../components/search-bar/search-bar';
import eventStore from '../../store/events';
import authStore from '../../store/auth';
import { observer } from 'mobx-react-lite';

import './index.scss';

const EventPage = observer(() => {
  const [isModalActive, setModalActive] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalOptions, setModalOptions] = useState({
    size: 'lg',
    backdrop: true,
    keyboard: true,
  });
  const isAdmin = authStore.isAdmin;
  const isAuth = authStore.isAuth;
  const showEventAddModal = () => {
    setModalContent(<EventEdit closeModal={handleClose}></EventEdit>);
    setModalOptions({ ...modalOptions, backdrop: 'static', keyboard: false });
    setModalActive(true);
  };
  const showEventInfoModal = isAdmin
    ? (event) => {
      setModalContent(
        <EventEdit event={event} closeModal={handleClose}></EventEdit>
      );
      setModalOptions({
        ...modalOptions,
        backdrop: 'static',
        keyboard: false,
      });
      setModalActive(true);
    }
    : (event) => {
      setModalContent(<EventInfo event={event} isAuth={isAuth} closeModal={handleClose}></EventInfo>);
      setModalOptions({ ...modalOptions, backdrop: true, keyboard: true });
      setModalActive(true);
    };
  const showEventRegisteredModal = (event) => {
    setModalContent(<EventInfoRegistered event={event}></EventInfoRegistered>);
    setModalOptions({ ...modalOptions, backdrop: true, keyboard: true });
    setModalActive(true);
  };
  const handleClose = () => {
    setModalActive(false);
  };
  
  const [searchResults, setSearchResults] = useState([]);
  const events = eventStore.events;

  useEffect(() => {
    const fetch = async () => {
      const events = await eventStore.fetchEvents();
      setSearchResults(events);
    };
    fetch();
  }, []);

  
  return (
    <>
      <Modal
        show={isModalActive}
        onHide={handleClose}
        size={modalOptions.size}
        backdrop={modalOptions.backdrop}
        keyboard={modalOptions.keyboard}
      >
        {modalContent}
      </Modal>
      <div className='event-page mx-auto container mt-4'>
        <div className='control-bar d-flex justify-content-between pe-4'>
          <Dropdown style={{ width: '180px' }}>
            <Dropdown.Toggle variant='light' style={{ width: '100%' }}>
              Фильтры
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ width: '180px' }}>
              <Dropdown.Item
                onClick={() => {
                  console.log('фильтр по дате');
                }}
              >
                По дате
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  console.log('фильтр по количеству');
                }}
              >
                По количеству
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <SearchBar
            elem={events}
            setSearchResults={setSearchResults}
            type={'name'}
          />
          {isAdmin && (
            <div
              className='btn btn-light'
              onClick={showEventAddModal}
              style={{ width: '240px' }}
            >
              Создать мероприятие
            </div>
          )}
        </div>
        <div className='event-page-content container-fluid mt-3'>
          {searchResults.map((event) => {
            return (
              <EventElement
                key={event.id}
                event={event}
                isAdmin={isAdmin}
                showModalFunction={showEventInfoModal}
                showEventRegisteredModal={showEventRegisteredModal}
              ></EventElement>
            );
          })}
        </div>
      </div>
    </>
  );
});

export default EventPage;
