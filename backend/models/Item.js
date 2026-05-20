const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
  task: { type: String, required: true },
  completed: { type: Boolean, default: false }
});
module.exports = mongoose.model('Task', itemSchema);