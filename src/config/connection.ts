import mysql from 'mysql2';

const db = mysql.createPool({
	host           : process.env.DATABASE_HOST,
	port           : Number(process.env.DATABASE_PORT),
	user           : process.env.DATABASE_USER,
	password       : process.env.DATABASE_PASSWORD,
	database       : process.env.DATABASE,
	timezone       : '+00:00',
	connectionLimit: 2000
});

db.getConnection((err, connection) => {
	if (err) {
		if (connection) {
			connection.release();
		}
		return console.error('error: ' + err.message);
	}
	console.log('Database Connected!');
});

export default db.promise();
