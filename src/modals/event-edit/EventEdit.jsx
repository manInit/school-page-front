import { React } from 'react';
import { Card } from 'react-bootstrap';
import eventStore from '../../store/events';
import { useForm, useController } from 'react-hook-form';
import MDEditor from '@uiw/react-md-editor';

import './index.scss';

const EventEdit = ({ event, closeModal }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const {
    //MDEditor form control
    field: { onChange, value },
  } = useController({
    name: 'description',
    control,
    rules: { required: true },
    defaultValue: event?.description,
  });

  const isAddingEvent = event == null;

  const onSubmit = (data) => {
    try {
      if (isAddingEvent) {
        eventStore.createEvent(data);
        closeModal();
      } else {
        data.id = event.id;
        eventStore.changeEvent(data);
        closeModal();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteEvent = async () => {
    await eventStore.removeEvent(event.id);
    closeModal();
  };
  return (
    <>
      <h2 className='text-center'>
        {isAddingEvent ? 'Создание мероприятия' : 'Редактирование мероприятия'}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ width: '80%', marginLeft: '10%' }}>
          <div>
            <input
              {...register('name', {
                required: true,
                value: event?.name,
              })}
              className='form-control brick'
              type='text'
              style={{ fontSize: '1.8em' }}
              placeholder='Название'
            />
            {errors.name && (
              <div className='ms-2 invalid-feedback d-block'>
                Название мероприятия не должно быть пустым
              </div>
            )}
          </div>
          <div className='mt-3'>
            Описание:
            <MDEditor value={value} onChange={onChange} />
            {errors.description && (
              <div className='ms-2 invalid-feedback d-block'>
                Описание мероприятия не должно быть пустым
              </div>
            )}
          </div>
          <div
            style={{
              textAlign: 'center',
              display: 'grid',
              gridTemplateColumns: '30% 40% 30%',
            }}
          >
            <Card className='brick'>
              Начало:
              <br></br>
              <input
                {...register('startDate', {
                  required: true,
                  value: event?.startDate,
                })}
                className='form-control'
                type='text'
                placeholder='Дата начала'
              />
              {errors.startDate && (
                <div className='invalid-feedback d-block'>
                  Поле не должно быть пустым
                </div>
              )}
            </Card>
            <Card className='brick' style={{ margin: '1em 1em 0em 1em' }}>
              Конец:
              <br></br>
              <input
                {...register('endDate', {
                  required: true,
                  value: event?.endDate,
                })}
                className='form-control'
                type='text'
                placeholder='Дата завершения'
              />
              {errors.endDate && (
                <div className='invalid-feedback d-block'>
                  Поле не должно быть пустым
                </div>
              )}
            </Card>
            <Card className='brick' style={{}}>
              Баллы:
              <br></br>
              <input
                {...register('participationPoint', {
                  required: true,
                  value: event?.participationPoint,
                })}
                className='form-control'
                type='text'
                placeholder='Баллы'
              />
              {errors.participationPoint && (
                <div className='invalid-feedback d-block'>
                  Поле не должно быть пустым
                </div>
              )}
            </Card>
          </div>
          <div
            style={{
              textAlign: 'center',
              display: 'grid',
              gridTemplateColumns: '40% 30% 30%',
            }}
          >
            <Card className='brick' style={{}}>
              Количество участников:
              <br></br>
              <input
                {...register('maxParticipants', {
                  required: true,
                  value: event?.maxParticipants,
                })}
                className='form-control'
                type='text'
                placeholder='Количество участников'
              />
              {errors.maxParticipants && (
                <div className='invalid-feedback d-block'>
                  Поле не должно быть пустым
                </div>
              )}
            </Card>
            <Card className='brick' style={{ margin: '1em 1em 0em 1em' }}>
              Тип мероприятия:
              <br></br>
              <input
                {...register('activityType', {
                  required: true,
                  value: event?.activityType,
                })}
                className='form-control'
                type='text'
                placeholder='Тип мероприятия'
              />
              {errors.activityType && (
                <div className='invalid-feedback d-block'>
                  Поле не должно быть пустым
                </div>
              )}
            </Card>
          </div>
          <input
            className='btn btn-light my-3 me-auto me-3'
            onClick={() => {
              handleSubmit();
            }}
            style={{ width: '150px' }}
            type='submit'
            value={'Сохранить'}
          />
          <input
            className='btn btn-light my-3 me-auto me-3'
            onClick={() => {
              closeModal();
            }}
            style={{ width: '150px' }}
            type={'button'}
            value={'Отменить'}
          />
          {!isAddingEvent && (
            <input
              className='btn btn-danger my-3 me-auto me-3'
              onClick={() => {
                deleteEvent();
              }}
              style={{ width: '150px' }}
              type={'button'}
              value={'Удалить'}
            />
          )}
        </div>
      </form>
    </>
  );
};

export default EventEdit;
