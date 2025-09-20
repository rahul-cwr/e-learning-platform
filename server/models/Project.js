const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'],
    default: 'Not Started',
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Clients',
  },
});

const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;
