const express = require('express');
const { getTasks, createTask, deleteTask, toggleTask } = require('../controllers/itemController');
const router = express.Router();

router.get('/', getTasks);
router.post('/', createTask);
router.delete('/:id', deleteTask);
router.patch('/:id', toggleTask);

module.exports = router;