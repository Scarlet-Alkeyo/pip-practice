class Doctor {
    constructor(name, specialty) {
        this.name = name;
        this.specialty = specialty;
        this.availability = []; //
    }
    addAvailability(day,time){
     const available = {day: day , time: time}
     this.availability.push(available)
    }
}
class Patient {
    constructor(name, preferences) {
        this.name = name;
        this.preferences = preferences; // Array of preferred timeslots
    }
}
class Appointment {
    constructor(doctor, patient, time) {
        this.doctor = doctor;
        this.patient = patient;
        this.time = time;
    }
}
function bookAppointment(doctor, patient) {
    const availableTimes = doctor.availability.filter(time =>!patient.preferences.includes(time));
    if (availableTimes.length > 0) {
        const appointmentTime = availableTimes[0]; // Simulate picking the first available time
        const appointment = new Appointment(doctor, patient, appointmentTime);
        console.log(`Appointment booked for ${patient.name} with ${doctor.name} at ${appointmentTime}`);
        return appointment;
    } else {
        console.log("No suitable appointment times found.");
        return null;
    }
}
function sendReminder(appointment) {
    console.log(`Reminder: ${appointment.patient.name} has an appointment with ${appointment.doctor.name} at ${appointment.time}`);
}
const drSmith = new Doctor('Dr. Alan', 'optician', ['09:00', '10:00', '11:00']);
const patientJohn = new Patient('John Doe', ['09:00', '10:00']);
const appointment = bookAppointment(drSmith, patientJohn);
if (appointment) {
    sendReminder(appointment);
} 