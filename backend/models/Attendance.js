
const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    date: { type: Date, default: Date.now },
    status: { type: String, default: 'Present' }  // Added status field
});

module.exports = mongoose.model('Attendance', attendanceSchema);
