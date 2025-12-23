// import cheat card component and navbar
import CheatCard from "../Components/CheatCard";
import Navbar from "../Components/Navbar";

// cheatsheet page
export default function Cheatsheet() {
    return (
        <>
            <Navbar />

            <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative">
                <div className="max-w-7xl mx-auto px-6 py-20 pt-32">

                    {/* PAGE HEADER */}
                    <div className="mb-14">
                        <span className="inline-block text-sm font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full mb-4">
                            SQL Cheatsheet
                        </span>

                        <h1 className="text-4xl md:text-5xl font-bold">
                            SQL Quick Reference
                        </h1>

                        <p className="text-slate-300 mt-4 max-w-2xl">
                            A concise, practical SQL cheatsheet covering the most commonly used
                            commands and patterns — perfect for quick lookups and revision.
                        </p>
                    </div>

                    <section className="mt-24">
                        {/* DDL HEADING */}
                        <div className="mb-10">

                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                DDL Commands
                            </h2>

                            <p className="text-slate-300 mt-3 max-w-2xl">
                                Data Definition Language (DDL) commands are used to define,
                                modify, and manage the structure of database objects.
                            </p>
                        </div>

                        {/* DDL CHEATS GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            <CheatCard
                                title="CREATE"
                                desc="Creates a new database object such as a table or database."
                                code={`CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    age INT
);`}
                            />

                            <CheatCard
                                title="ALTER"
                                desc="Modifies an existing table structure."
                                code={`ALTER TABLE customers
ADD email VARCHAR(100);`}
                            />

                            <CheatCard
                                title="DROP"
                                desc="Deletes an existing table or database permanently."
                                code={`DROP TABLE customers;`}
                            />

                            <CheatCard
                                title="TRUNCATE"
                                desc="Removes all records from a table without deleting the table."
                                code={`TRUNCATE TABLE customers;`}
                            />

                        </div>
                    </section>

                    <section className="mt-24">
                        {/* DML HEADING */}
                        <div className="mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                DML Commands
                            </h2>

                            <p className="text-slate-300 mt-3 max-w-2xl">
                                Data Manipulation Language (DML) commands are used to retrieve,
                                insert, update, and delete data stored inside database tables.
                            </p>
                        </div>

                        {/* DML CHEATS GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            <CheatCard
                                title="SELECT"
                                desc="Retrieves data from one or more tables."
                                code={`SELECT first_name, last_name
FROM customers;`}
                            />

                            <CheatCard
                                title="INSERT"
                                desc="Adds new records into a table."
                                code={`INSERT INTO customers (first_name, last_name)
VALUES ('Mary', 'Doe');`}
                            />

                            <CheatCard
                                title="UPDATE"
                                desc="Modifies existing records in a table."
                                code={`UPDATE employees
SET employee_name = 'John Doe',
    department = 'Marketing'
WHERE employee_id = 1;`}
                            />

                            <CheatCard
                                title="DELETE"
                                desc="Removes records from a table."
                                code={`DELETE FROM employees
WHERE employee_name = 'John Doe';`}
                            />

                        </div>
                    </section>

                    <section className="mt-24">
                        {/* SECTION HEADING */}
                        <div className="mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Querying Data Commands
                            </h2>

                            <p className="text-slate-300 mt-3 max-w-2xl">
                                These commands are used to retrieve, filter, sort, and
                                aggregate data from database tables.
                            </p>
                        </div>

                        {/* QUERY COMMANDS GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            <CheatCard
                                title="SELECT Statement"
                                desc="Retrieves data from one or more tables."
                                code={`SELECT first_name, last_name
FROM customers;`}
                            />

                            <CheatCard
                                title="WHERE Clause"
                                desc="Filters rows based on specified conditions."
                                code={`SELECT *
FROM customers
WHERE age > 30;`}
                            />

                            <CheatCard
                                title="ORDER BY Clause"
                                desc="Sorts the result set in ascending or descending order."
                                code={`SELECT *
FROM products
ORDER BY price DESC;`}
                            />

                            <CheatCard
                                title="GROUP BY Clause"
                                desc="Groups rows based on column values, commonly used with aggregates."
                                code={`SELECT category, COUNT(*)
FROM products
GROUP BY category;`}
                            />

                            <CheatCard
                                title="HAVING Clause"
                                desc="Filters grouped results using aggregate conditions."
                                code={`SELECT category, COUNT(*)
FROM products
GROUP BY category
HAVING COUNT(*) > 5;`}
                            />

                        </div>
                    </section>

                    <section className="mt-24">
                        {/* SECTION HEADING */}
                        <div className="mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Aggregate Functions Commands
                            </h2>

                            <p className="text-slate-300 mt-3 max-w-2xl">
                                Aggregate functions perform calculations on a set of values
                                and return a single summarized result.
                            </p>
                        </div>

                        {/* AGGREGATE FUNCTIONS GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            <CheatCard
                                title="COUNT()"
                                desc="Counts the number of rows or non-null values in a column."
                                code={`SELECT COUNT(age)
FROM employees;`}
                            />

                            <CheatCard
                                title="SUM()"
                                desc="Calculates the total sum of values in a column."
                                code={`SELECT SUM(revenue)
FROM sales;`}
                            />

                            <CheatCard
                                title="AVG()"
                                desc="Returns the average (mean) value of a column."
                                code={`SELECT AVG(price)
FROM products;`}
                            />

                            <CheatCard
                                title="MIN()"
                                desc="Returns the minimum (lowest) value in a column."
                                code={`SELECT MIN(price)
FROM products;`}
                            />

                            <CheatCard
                                title="MAX()"
                                desc="Returns the maximum (highest) value in a column."
                                code={`SELECT MAX(price)
FROM products;`}
                            />

                        </div>
                    </section>

                    <section className="mt-24">
                        {/* SECTION HEADING */}
                        <div className="mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Joining Commands
                            </h2>

                            <p className="text-slate-300 mt-3 max-w-2xl">
                                JOIN commands are used to combine rows from two or more tables
                                based on related columns between them.
                            </p>
                        </div>

                        {/* JOIN COMMANDS GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            <CheatCard
                                title="INNER JOIN"
                                desc="Returns rows with matching values in both tables."
                                code={`SELECT *
FROM employees
INNER JOIN departments
ON employees.department_id = departments.id;`}
                            />

                            <CheatCard
                                title="LEFT JOIN / LEFT OUTER JOIN"
                                desc="Returns all rows from the left table and matching rows from the right table."
                                code={`SELECT *
FROM employees
LEFT JOIN departments
ON employees.department_id = departments.id;`}
                            />

                            <CheatCard
                                title="RIGHT JOIN / RIGHT OUTER JOIN"
                                desc="Returns all rows from the right table and matching rows from the left table."
                                code={`SELECT *
FROM employees
RIGHT JOIN departments
ON employees.department_id = departments.id;`}
                            />

                            <CheatCard
                                title="FULL JOIN / FULL OUTER JOIN"
                                desc="Returns all rows when there is a match in either table."
                                code={`SELECT *
FROM employees
LEFT JOIN departments
ON employees.employee_id = departments.employee_id
UNION
SELECT *
FROM employees
RIGHT JOIN departments
ON employees.employee_id = departments.employee_id;`}
                            />

                            <CheatCard
                                title="CROSS JOIN"
                                desc="Returns the Cartesian product of both tables."
                                code={`SELECT *
FROM employees
CROSS JOIN departments;`}
                            />

                            <CheatCard
                                title="SELF JOIN"
                                desc="Joins a table with itself using aliases."
                                code={`SELECT *
FROM employees t1, employees t2
WHERE t1.employee_id = t2.employee_id;`}
                            />

                            <CheatCard
                                title="NATURAL JOIN"
                                desc="Automatically joins tables using columns with the same name."
                                code={`SELECT *
FROM employees
NATURAL JOIN departments;`}
                            />

                        </div>
                    </section>

                    <section className="mt-24">
                        {/* SECTION HEADING */}
                        <div className="mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Subqueries in SQL
                            </h2>

                            <p className="text-slate-300 mt-3 max-w-2xl">
                                Subqueries are queries nested inside another SQL query.
                                They are commonly used to filter, compare, or compute values
                                dynamically.
                            </p>
                        </div>

                        {/* SUBQUERIES GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            <CheatCard
                                title="IN"
                                desc="Checks whether a value matches any value returned by a subquery."
                                code={`SELECT *
FROM customers
WHERE city IN (
    SELECT city
    FROM suppliers
);`}
                            />

                            <CheatCard
                                title="ANY"
                                desc="Compares a value with any value returned by a subquery using comparison operators."
                                code={`SELECT *
FROM products
WHERE price < ANY (
    SELECT unit_price
    FROM supplier_products
);`}
                            />

                            <CheatCard
                                title="ALL"
                                desc="Compares a value with all values returned by a subquery."
                                code={`SELECT *
FROM orders
WHERE order_amount > ALL (
    SELECT total_amount
    FROM previous_orders
);`}
                            />

                        </div>
                    </section>

                </div>

                {/* Footer */}
                <p className="text-sm text-slate-400 bg-transparent text-center py-5">
                    Made with <span className="text-red-500">❤️</span> by Aditya Chandel
                </p>
            </section>
        </>
    );
}