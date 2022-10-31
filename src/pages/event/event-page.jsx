import { React, useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import EventElement from '../../components/event-element/event-element';
import EventInfoRegistered from '../../modals/registered-students-info/registered-students';
import EventInfo from '../../modals/event-info/event-info';
import eventStore from '../../store/events';
import authStore from '../../store/auth';
import { observer } from 'mobx-react-lite';

import './index.scss';

const EventPage = observer(() => {
  const [isModalActive, setModalActive] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const isAdmin = authStore.isAdmin;
  const showEventCreationModal = () => {
    setModalContent(<div>Тут Создаем мероприятие</div>);
    setModalActive(true);
  };
  const showEventInfoModal = isAdmin
    ? (event) => {
      setModalContent(
        <EventInfoRegistered event={event}></EventInfoRegistered>
      );
      setModalActive(true);
    }
    : (event) => {
      setModalContent(<EventInfo event={event}></EventInfo>);
      setModalActive(true);
    };
  const handleClose = () => {
    setModalActive(false);
  };

  useEffect(() => {
    eventStore.fetchEvents();
  }, []);
  
  const events = eventStore.events;
  return (
    <>
      <Modal show={isModalActive} onHide={handleClose}>
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
          {isAdmin && (
            <div
              className='btn btn-light'
              onClick={showEventCreationModal}
              style={{ width: '240px' }}
            >
              Создать мероприятие
            </div>
          )}
        </div>
        <div className='event-page-content container-fluid mt-3'>
          {events.map((event) => {
            return (
              <EventElement
                key={event.id}
                event={event}
                isAdmin={isAdmin}
                showModalFunction={showEventInfoModal}
              ></EventElement>
            );
          })}
        </div>
      </div>
    </>
  );
});

export default EventPage;
