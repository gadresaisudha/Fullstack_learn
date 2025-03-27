________________________________________
Databases in MySQL
1. Introduction to Databases
•	A database is like a folder that acts as a container for tables.
•	Tables are like files stored within the folder.
•	MySQL is not case-sensitive, but it is a convention to write SQL keywords in uppercase.
________________________________________
2. Creating a Database
SQL Syntax:
CREATE DATABASE mydb;
•	Always end SQL statements with a semicolon (;) to indicate completion.
•	Click the lightning bolt button in MySQL Workbench to execute the query.
•	After execution, refresh the schemas tab to view the new database.
________________________________________
3. Using a Database
SQL Syntax:
USE mydb;
•	This selects the database for executing further SQL commands.
•	Alternatively, you can right-click the database and select "Set as Default Schema."
________________________________________
4. Dropping a Database
SQL Syntax:
DROP DATABASE mydb;
•	Deletes the database permanently along with all its tables and data.
•	If the database is read-only, the system will prevent deletion.
________________________________________
5. Altering a Database
Making a Database Read-Only:
ALTER DATABASE mydb READ ONLY = 1;
•	Prevents any modifications to the database while still allowing access.
Disabling Read-Only Mode:
ALTER DATABASE mydb READ ONLY = 0;
•	Restores full access to the database.
________________________________________
Tables in MySQL
1. Introduction to Tables
•	Tables consist of rows (records) and columns (fields), similar to an Excel spreadsheet.
•	The columns store different data types, and the rows hold the actual data.
________________________________________
2. Creating a Table
SQL Syntax:
CREATE TABLE employees (
    employee_id INT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    hourly_pay DECIMAL(5,2),
    hire_date DATE
);
•	Data Types Explained:
o	INT → Integer (whole number)
o	VARCHAR(n) → Text with max length n
o	DECIMAL(m,d) → Decimal number (m = total digits, d = decimal places)
o	DATE → Stores only the date
•	Use ; to terminate SQL statements.
•	Refresh schemas to see the new table.
________________________________________
3. Viewing a Table Structure and Data
To view table structure:
DESCRIBE employees;
To view all records in a table:
SELECT * FROM employees;
•	* selects all columns from the table.
________________________________________
4. Renaming a Table
SQL Syntax:
RENAME TABLE employees TO workers;
•	Use this command to rename an existing table.
•	If needed, rename back using:
RENAME TABLE workers TO employees;
________________________________________
5. Dropping a Table
SQL Syntax:
DROP TABLE employees;
•	Deletes the table permanently along with all its records.
________________________________________
6. Altering a Table
Adding a New Column
ALTER TABLE employees ADD phone_number VARCHAR(15);
•	Adds a new column named phone_number to the table.
Renaming a Column
ALTER TABLE employees RENAME COLUMN phone_number TO email;
•	Renames an existing column.
Modifying Column Data Type
ALTER TABLE employees MODIFY COLUMN email VARCHAR(100);
•	Changes the data type and length of a column.
Moving a Column
ALTER TABLE employees MODIFY COLUMN email VARCHAR(100) AFTER last_name;
•	Moves the email column to appear after last_name.
________________________________________
Conclusion
•	Databases store multiple tables.
•	Tables store structured data in rows and columns.
•	We can create, alter, delete, and manage databases and tables using SQL commands.
•	Next steps: Populating and manipulating table data.
________________________________________
________________________________________
SQL Queries: SELECT, UPDATE, DELETE, COMMIT & ROLLBACK
1. SELECT - Retrieving Data from a Table
•	SELECT * FROM table_name; → Retrieves all columns and rows.
•	SELECT column1, column2 FROM table_name; → Retrieves specific columns.
•	Changing order: SELECT last_name, first_name FROM employees;
•	WHERE Clause: Filters data based on conditions.
o	SELECT * FROM employees WHERE employee_ID = 1; → Retrieves a specific employee.
o	SELECT * FROM employees WHERE first_name = 'SpongeBob';
o	SELECT * FROM employees WHERE hourly_pay >= 15;
o	SELECT * FROM employees WHERE hire_date <= '2023-01-03';
•	Operators in WHERE Clause:
o	= → Equal to
o	!= or <> → Not equal to
o	> , < → Greater/Less than
o	>=, <= → Greater/Less than or equal to
o	IS NULL / IS NOT NULL → Checks for NULL values
________________________________________
2. UPDATE - Modifying Data in a Table
•	Updating a single column:
UPDATE employees SET hourly_pay = 10.25 WHERE employee_ID = 6;
•	Updating multiple columns:
UPDATE employees SET hourly_pay = 10.50, hire_date = '2023-07-10' WHERE employee_ID = 6;
•	Setting a field to NULL:
UPDATE employees SET hire_date = NULL WHERE employee_ID = 6;
•	Caution:
o	Without WHERE → Updates all rows in the table.
o	Example: UPDATE employees SET hourly_pay = 10.25; → All employees now have the same hourly pay.
________________________________________
3. DELETE - Removing Data from a Table
•	Deleting a specific row:
DELETE FROM employees WHERE employee_ID = 6;
•	Deleting all rows (DANGEROUS):
DELETE FROM employees; → Removes all data (Use with caution!)
•	Always include a WHERE Clause when deleting data!
________________________________________
4. AUTOCOMMIT, COMMIT & ROLLBACK
•	AUTOCOMMIT Mode:
o	By default, MySQL automatically saves transactions.
o	To disable: SET AUTOCOMMIT = OFF;
•	COMMIT (Saving Changes):
o	Manually saves changes to the database.
o	Example: COMMIT;
•	ROLLBACK (Undo Changes):
o	Restores the last committed state.
o	Example: ROLLBACK;
•	Savepoint Example:
•	SET AUTOCOMMIT = OFF;
•	COMMIT; -- Savepoint
•	DELETE FROM employees; -- Oops! Deleted all rows
•	ROLLBACK; -- Restores the table to the last commit state
________________________________________
Key Takeaways
✅ Use SELECT to retrieve data efficiently.
✅ Use UPDATE carefully with WHERE to modify specific records.
✅ Use DELETE cautiously—always include WHERE to avoid deleting everything.
✅ Use COMMIT to save changes and ROLLBACK to undo uncommitted changes.
✅ Disable AUTOCOMMIT if you need manual control over transactions.
________________________________________
__________________________________
Retrieving Current Date & Time in SQL
1. Getting the Current Date & Time
•	SELECT NOW(); → Returns the current date and time (YYYY-MM-DD HH:MI:SS).
•	SELECT CURRENT_TIMESTAMP; → Similar to NOW(), returns both date and time.
2. Getting Only the Current Date
•	SELECT CURDATE(); → Returns the current date (YYYY-MM-DD).
•	SELECT CURRENT_DATE; → Same as CURDATE().
3. Getting Only the Current Time
•	SELECT CURTIME(); → Returns the current time (HH:MI:SS).
•	SELECT CURRENT_TIME; → Same as CURTIME().
4. Extracting Date or Time Parts
•	Get the year: SELECT YEAR(NOW());
•	Get the month: SELECT MONTH(NOW());
•	Get the day: SELECT DAY(NOW());
•	Get the hour: SELECT HOUR(NOW());
•	Get the minute: SELECT MINUTE(NOW());
•	Get the second: SELECT SECOND(NOW());
5. Formatting the Date
•	SELECT DATE_FORMAT(NOW(), '%M %d, %Y'); → Formats the date as "March 08, 2025"
•	SELECT DATE_FORMAT(NOW(), '%W, %M %d, %Y'); → "Saturday, March 08, 2025"




