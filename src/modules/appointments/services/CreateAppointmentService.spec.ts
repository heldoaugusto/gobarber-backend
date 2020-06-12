import CreateAppointmentService from './CreateAppointmentService';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
  });

  it('should not be able to create two appointments in the same date', () => {});
});
