const {
	createBook, getAllBook, getOneBook, updateBookById, deleteBook,
} = require('./handler');

const routes = [
	{
		method: 'POST',
		path: '/books',
		handler: createBook,
	},
	{
		method: 'GET',
		path: '/books',
		handler: getAllBook,
	},
	{
		method: 'GET',
		path: '/books/{id}',
		handler: getOneBook,
	},
	{
		method: 'PUT',
		path: '/books/{id}',
		handler: updateBookById,
	},
	{
		method: 'DELETE',
		path: '/books/{id}',
		handler: deleteBook,
	},
];

module.exports = routes;
