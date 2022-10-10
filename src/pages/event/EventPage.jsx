import { React, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import EventElement from '../../components/event-element/EventElement';
import EventInfoRegistered from '../../modals/registered_students_info/RegisteredStudents';
import EventInfo from '../../modals/event_info/EventInfo';
import './index.scss';

export default function EventPage() {
  const [isModalActive, setModalActive] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const isAdmin = true;
  const showEventCreationModal = () => {
    setModalContent(<div>Тут Создаем мероприятие</div>);
    setModalActive(true);
  };
  const showEventInfoModal = isAdmin ?
    (event) => {
      setModalContent(<EventInfoRegistered event={event}></EventInfoRegistered>);
      setModalActive(true);
    } :
    (event) => {
      setModalContent(<EventInfo event={event}></EventInfo>);
      setModalActive(true);
    };
  const handleClose = () => { setModalActive(false); };

  const events = [{ name: 'Олимпиады школьников 2022', date: '24.09', id: 1 }, { name: 'Инженерные каникулы ИРНИТУ', date: '21.10', id: 2 }, { name: 'Олимпиада школьников', date: '24.09', id: 3 }];
  return (
    <>
      <Modal show={isModalActive} onHide={handleClose}>
        {modalContent}
      </Modal>
      <div className='event-page mx-auto container mt-4'>
        <div className='control-bar d-flex justify-content-between pe-4'>
          <Dropdown style={{ width: '180px' }}>
            <Dropdown.Toggle variant="light" style={{ width: '100%' }}>
              Фильтры
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ width: '180px' }}>
              <Dropdown.Item onClick={() => { console.log('фильтр по дате'); }}>
                По дате
              </Dropdown.Item>
              <Dropdown.Item onClick={() => { console.log('фильтр по количеству'); }}>
                По количеству
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {
            isAdmin &&
            <div className='btn btn-light' onClick={showEventCreationModal} style={{ width: '240px' }}>
              Создать мероприятие
            </div>
          }
        </div>
        <div className='event-page-content container-fluid mt-3'>
          {
            events.map(event => {
              return <EventElement 
                key={event.id}
                event={event} 
                isAdmin={isAdmin}
                showModalFunction={showEventInfoModal}
              >
              </EventElement>;
            })
          }
        </div>
      </div >
    </>
  );

}