// Content for each page

// Get started pages
// page 1
export function Page1() {
    return (
        <div className="min-h-full w-full lg:px-4 md:px-2">
            <h1 className="font-semibold pt-3 pb-5 text-slate-100 border-b-2 border-slate-700
            min-lg:text-8xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-a:text-5xl">SQL Introduction</h1>

            <div className="text-gray-200 pt-5">
                <div className="font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">What is SQL?</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-7">
                    <li className="pt-7">SQL stands for <span className="font-bold">Structured Query Language</span>.</li>
                    <li className="pt-3">It is not a database itself, but a language used to communicate with databases.</li>
                    <li className="pt-3">SQL is a powerful language used to interact with <span className="font-bold">
                        relational databases</span>.</li>
                    <li className="pt-3">It allows us to <span className="font-bold">store</span>, <span className="font-bold">
                        manipulate</span>, and <span className="font-bold">retrieve</span> data efficiently.</li>

                    <li className="pt-3">SQL is primarily used to perform <span className="font-bold">CRUD</span> operations:
                        <ul className="min-a:text-2xl max-a:text-xl list-disc list-inside">
                            <li className="pt-3"><span className="font-bold">C</span>reate – To create databases,
                                tables, and insert data.</li>
                            <li className="pt-3"><span className="font-bold">R</span>ead – To read or retrieve data
                                from databases.</li>
                            <li className="pt-3"><span className="font-bold">U</span>pdate – To modify existing data.</li>
                            <li className="pt-3"><span className="font-bold">D</span>elete – To remove data, tables, or
                                even entire databases.</li>
                        </ul>
                    </li>
                </ul>

                <div className="min-a:text-2xl max-a:text-xl pt-1 border-l-4 border-slate-700 pl-3">
                    <span className="font-bold">Note:</span> SQL keywords are not case-sensitive. For example,
                    <code className="font-mono text-green-300"> select</code> and <code className="font-mono
                    text-green-300">SELECT</code> are treated the same.
                </div>

                <div className="pt-7 font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">SQL vs MySQL</div>

                <div className="min-a:text-2xl max-a:text-xl pt-5 pb-5">
                    <span className="font-bold">SQL</span> is the standard language used to interact with relational databases.
                    <br />
                    <span className="font-bold">MySQL</span>, on the other hand, is a popular <span className="font-bold">
                        Relational Database Management System (RDBMS)</span> that uses SQL to manage and query data.
                </div>

                <div className="min-a:text-2xl max-a:text-xl pt-3 pb-7 border-t-2 border-slate-700">
                    Now that you understand what SQL is, let’s dive into the world of <span className="font-bold">
                        Database Management Systems (DBMS)</span> on the next page.
                </div>
            </div>
        </div>
    );
}

// page 2
export function Page2() {
    return (
        <div className="min-h-full w-full lg:px-4 md:px-2">
            <h1 className="font-semibold pt-3 pb-5 text-slate-100 border-b-2 border-slate-700
            min-lg:text-8xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-a:text-5xl">DBMS</h1>

            <div className="text-gray-200 pt-5">
                <div className="font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">What is a Database?</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">A database is a structured collection of interrelated data.</li>
                    <li className="pt-3">It stores information in a format that can be easily accessed, managed,
                        and updated digitally.</li>
                </ul>

                <div className="pt-5 font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">What is DBMS?</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">
                        DBMS stands for <span className="font-bold">Database Management System</span>.
                    </li>
                    <li className="pt-3">
                        It is a software used to create, manage, organize, and control access to databases.
                    </li>
                    <li className="pt-3">
                        DBMS provides a systematic way to perform operations like storing, modifying, retrieving,
                        and deleting data.
                    </li>
                </ul>

                <div className="pt-5 font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">Types of Databases</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-5">

                    <li className="pt-7">
                        <span className="font-bold">Relational Databases</span> (RDBMS)
                        <ul className="min-a:text-2xl max-a:text-xl list-disc pl-8 pb-5">
                            <li className="pt-3">Based on the concept of tables (rows and columns).</li>
                            <li className="pt-3">Data is organized in a structured and consistent format.</li>
                            <li className="pt-3">Examples: MySQL, PostgreSQL, Oracle, SQL Server.</li>
                        </ul>
                        <div className="min-a:text-2xl max-a:text-xl pt-1 pl-3 border-l-4 border-slate-700">
                            <span className="font-bold">Note:</span> SQL is used to interact with relational databases.
                        </div>
                    </li>

                    <li className="pt-7 pb-3">
                        <span className="font-bold">Non-Relational Databases</span> (NoSQL)
                        <ul className="min-a:text-2xl max-a:text-xl list-disc pl-8">
                            <li className="pt-3">Do not use tables for storing data.</li>
                            <li className="pt-3">Can store data as key-value pairs, documents, graphs, or wide-columns.</li>
                            <li className="pt-3">Example: MongoDB.</li>
                        </ul>
                    </li>
                </ul>

                <div className="min-a:text-2xl max-a:text-xl pt-3 pb-7 border-t-2 border-slate-700">
                    Now that you understand what DBMS is, let's explore <span className="font-bold">MySQL</span> —
                    a popular relational database system that we’ll use to learn SQL in the next page.
                </div>
            </div>
        </div>
    );
}

// page 3
export function Page3() {
    return (
        <div className="min-h-full w-full lg:px-4 md:px-2">
            <h1 className="text-8xl font-semibold pt-3 pb-5 text-slate-100 border-b-2 border-slate-700
            min-lg:text-8xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-a:text-5xl">MySQL</h1>

            <div className="text-gray-200 pt-5">
                <div className="font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">What is MySQL?</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">MySQL is an open-source Relational Database Management System (RDBMS).</li>
                    <li className="pt-3">It uses SQL (Structured Query Language) to manage and manipulate data in relational
                        databases.</li>
                    <li className="pt-3">Throughout this course, we'll use MySQL to practice and learn SQL concepts and
                        commands.</li>
                </ul>

                <div className="pt-5 font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">Installing MySQL</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-5">
                    <li className="pt-7">If you haven't installed MySQL yet, download it from the official website:</li>
                    <li className="pt-3">
                        <a
                            className="hover:underline text-blue-400"
                            href="https://www.mysql.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download MySQL
                        </a>
                    </li>
                </ul>

                <div className="min-a:text-2xl max-a:text-xl pt-1 pl-3 border-l-4 border-slate-700">
                    <span className="font-bold">Note:</span> It’s recommended to follow a video or article tutorial during
                    installation to ensure proper setup of both MySQL and MySQL Workbench.
                </div>

                <div className="pt-7 font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">What is MySQL Workbench?</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-7">
                    <li className="pt-7">MySQL Workbench is an integrated development environment (IDE) used to work with
                        MySQL databases.</li>
                    <li className="pt-3">It provides a graphical interface where we will write and execute all our SQL
                        queries.</li>
                    <li className="pt-3">Below is a preview image of the MySQL Workbench:</li>
                </ul>

                <div className="rounded-lg overflow-hidden pb-5">
                    <img src="/images/workbench.png" alt="MySQL Workbench Preview" />
                </div>

                <div className="min-a:text-2xl max-a:text-xl pt-3 pb-7 border-t-2 border-slate-700">
                    That’s it for the MySQL introduction! Let’s begin writing our first <span className="font-bold">
                        SQL command</span> in the next page.
                </div>
            </div>
        </div>
    );
}

// Learn sql pages
// page 4
export function Page4() {
    return (
        <div className="min-h-full w-full lg:px-4 md:px-2">
            <h1 className="text-8xl font-semibold pt-3 pb-5 text-slate-100 border-b-2 border-slate-700
            min-lg:text-8xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-a:text-5xl">Create Database</h1>

            <div className="text-gray-200 pt-5">
                <div className="font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">Creating Your First Database</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">
                        To create your first database in MySQL, we use the following syntax:
                    </li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    CREATE DATABASE database_name;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">
                        Let's create a <span className="font-bold">xyz</span> database as an example in MySQL Workbench:
                    </li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md my-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    CREATE DATABASE xyz;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-5">
                    <li className="pt-3">
                        After writing the command, select it and click on the second bolt icon at the top of Workbench to run it.
                    </li>
                </ul>

                <div className="min-a:text-2xl max-a:text-xl pt-1 pl-3 border-l-4 border-slate-700">
                    <span className="font-bold">Note:</span> The second bolt icon runs only the selected portion of the
                    code, while the first bolt runs the entire file.
                    It’s recommended to use the second one when executing specific queries. The first one should only be
                    used when no code has been run from that file, otherwise it may throw an error.
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-3 pt-2">
                    <li className="pt-3">
                        Now, refresh the <span className="font-bold">Schemas</span> section on the
                        left pane of Workbench to see your newly created database.
                    </li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img1.png" alt="Workbench schema preview" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">
                        🎉 Congratulations! You’ve successfully created your first database.
                    </li>
                    <li className="pt-5">
                        To start using the database we created for writing queries, we use the following syntax:
                    </li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md my-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    USE database_name;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">
                        To start using the <span className="font-bold">xyz</span> database for writing queries
                        , run the following command:
                    </li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md my-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    USE xyz;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">
                        After running this, the <span className="font-bold">xyz</span> database will be highlighted
                        — you can now run queries in it. As you can see below:
                    </li>
                </ul>

                <div className="pt-3 pl-3 pb-4 overflow-hidden">
                    <img className="rounded-lg" src="/images/img2.png" alt="Workbench active database" />
                </div>

                <div className="min-a:text-2xl max-a:text-xl pt-1 pl-3 border-l-4 border-slate-700">
                    <span className="font-bold">Note:</span> If you close and reopen MySQL Workbench, you will need to
                    run the <span className="font-bold">USE xyz;</span> command again to activate your database.
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2 pt-2">
                    <li className="pt-3">
                        If you ever want to delete your database, we use the following syntax:
                    </li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md my-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    DROP DATABASE database_name;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">
                        So, If you ever want to delete your database <span className="font-bold">xyz</span>,
                        you can do so with the following command:
                    </li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md my-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    DROP DATABASE xyz;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-5">
                    <li className="pt-3">
                        You can recreate it anytime by using the <span className="font-bold">CREATE DATABASE</span> command again.
                    </li>
                </ul>

                <div className="min-a:text-2xl max-a:text-xl pt-3 pb-7 border-t-2 border-slate-700">
                    Up next — let’s explore the most important part of a database: <span className="font-bold">TABLES!</span>
                </div>
            </div>
        </div>
    );
}

// page 6
export function Page6() {
    return (
        <div className="min-h-full w-full lg:px-4 md:px-2">
            <h1 className="text-8xl font-semibold pt-3 pb-5 text-slate-100 border-b-2 border-slate-700
            min-lg:text-8xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-a:text-5xl">Create Table</h1>

            <div className="text-gray-200 pt-5">
                <div className="font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">Creating Your First Table</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">
                        To create a table in MySQL, we use the following syntax:
                    </li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono py-3 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full min-a:px-5 max-a:px-3">
                    <code>
                        CREATE TABLE table_name ({"\n"}
                        &nbsp;&nbsp;column_name1 datatype constraint,{"\n"}
                        &nbsp;&nbsp;column_name2 datatype constraint,{"\n"}
                        &nbsp;&nbsp;column_name3 datatype constraint{"\n"}
                        );
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">
                        You can add as many columns as needed, based on your requirements.
                    </li>
                    <li className="pt-3">
                        Now let’s create our first real table in your MySQL Workbench:
                    </li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        CREATE TABLE student ({"\n"}
                        &nbsp;&nbsp;id INT PRIMARY KEY,{"\n"}
                        &nbsp;&nbsp;name VARCHAR(50),{"\n"}
                        &nbsp;&nbsp;age INT NOT NULL{"\n"}
                        );
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">
                        After writing the above code, select all of it and click the second bolt icon to run it.
                    </li>
                    <li className="pt-3">
                        Then, refresh the <span className="font-bold">Schemas</span> section. You’ll see your table
                        created under the selected database, as shown below:
                    </li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img3.png" alt="Workbench preview of created table" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-5">
                    <li className="pt-7">
                        Now you might be curious about the terms like "INT", "NOT NULL", "PRIMARY KEY", "VARCHAR(50)", etc.
                        Don’t worry — we’ll explore each of these in detail in the upcoming pages.
                    </li>
                </ul>

                <div className="min-a:text-2xl max-a:text-xl pt-3 pb-7 border-t-2 border-slate-700">
                    Great! Your first table is ready. Let's move ahead and understand the different <span className=
                        "font-bold">data types</span> used in SQL.
                </div>
            </div>
        </div>
    );
}

// page 7
export function Page7() {
    return (
        <div className="min-h-full w-full lg:px-4 md:px-2">
            <h1 className="text-8xl font-semibold pt-3 pb-5 text-slate-100 border-b-2 border-slate-700
            min-lg:text-8xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-a:text-5xl">
                SQL Datatypes
            </h1>

            <div className="text-gray-200 pt-5">
                <div className="font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3x">Understanding SQL Data Types</div>

                <p className="min-a:text-2xl max-a:text-xl pt-6 pb-2">
                    SQL data types define the kind of data that can be stored in a table column. Choosing the correct
                    data type ensures efficient storage, accuracy, and better performance in queries.
                </p>

                <p className="min-a:text-2xl max-a:text-xl pb-2">
                    Here are the most commonly used SQL data types, grouped by category:
                </p>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-6">
                    <li className="pt-4">
                        <span className="font-bold">Numeric Data Types:</span> Used to store numbers, both integers
                        and floating points.
                        <ul className="pl-6 list-disc pt-2">
                            <li className="pt-2 list-inside"><span className="font-bold">INT</span> – Integer values
                                (e.g., 1, 100, -23)</li>
                            <li className="pt-2 list-inside"><span className="font-bold">SMALLINT</span> – Smaller
                                range of integers</li>
                            <li className="pt-2 list-inside"><span className="font-bold">BIGINT</span> – Larger
                                range of integers</li>
                            <li className="pt-2 list-inside"><span className="font-bold">DECIMAL(p,s)</span> – Fixed-point
                                number with precision and scale</li>
                            <li className="pt-2 list-inside"><span className="font-bold">FLOAT</span> /
                                <span className="font-bold">REAL</span> – Approximate floating-point numbers</li>
                        </ul>
                    </li>

                    <li className="pt-6">
                        <span className="font-bold">Character/String Data Types:</span> Used to store text and characters.
                        <ul className="pl-6 list-disc pt-2">
                            <li className="pt-2 list-inside"><span className="font-bold">CHAR(n)</span> – Fixed-length string</li>
                            <li className="pt-2 list-inside"><span className="font-bold">VARCHAR(n)</span> – Variable-length
                                string</li>
                            <li className="pt-2 list-inside"><span className="font-bold">TEXT</span> – Large variable-length
                                string</li>
                        </ul>
                    </li>

                    <li className="pt-6">
                        <span className="font-bold">Date and Time Data Types:</span> Used to store temporal values.
                        <ul className="pl-6 list-disc pt-2">
                            <li className="pt-2 list-inside"><span className="font-bold">DATE</span> – Stores only the date
                                (YYYY-MM-DD)</li>
                            <li className="pt-2 list-inside"><span className="font-bold">TIME</span> – Stores time of day
                                (HH:MM:SS)</li>
                            <li className="pt-2 list-inside"><span className="font-bold">DATETIME</span> – Stores date and
                                time together</li>
                            <li className="pt-2 list-inside"><span className="font-bold">TIMESTAMP</span> – Stores date and
                                time with automatic time zone conversion</li>
                        </ul>
                    </li>

                    <li className="pt-6">
                        <span className="font-bold">Boolean Data Type:</span>
                        <ul className="pl-6 list-disc pt-2">
                            <li className="pt-2 list-inside"><span className="font-bold">BOOLEAN</span> – Stores TRUE or
                                FALSE values</li>
                        </ul>
                    </li>

                    <li className="pt-6">
                        <span className="font-bold">Binary Data Types:</span> Used to store raw binary data such as files,
                        images, etc.
                        <ul className="pl-6 list-disc pt-2">
                            <li className="pt-2 list-inside"><span className="font-bold">BINARY(n)</span> – Fixed-length
                                binary data</li>
                            <li className="pt-2 list-inside"><span className="font-bold">VARBINARY(n)</span> – Variable-
                                length binary data</li>
                            <li className="pt-2 list-inside"><span className="font-bold">BLOB</span> – Binary Large
                                Object</li>
                        </ul>
                    </li>
                </ul>

                <div className="min-a:text-2xl max-a:text-xl pt-3 pb-7 border-t-2 border-slate-700">
                    Understanding these data types is essential for building efficient and reliable databases.
                    Now let’s move on to learn about <span className="font-bold">SQL commands</span> on the next page.
                </div>
            </div>
        </div>
    );
}

// page 8
export function Page8() {
    return (
        <div className="min-h-full w-full lg:px-4 md:px-2">
            <h1 className="text-8xl font-semibold pt-3 pb-5 text-slate-100 border-b-2 border-slate-700
            min-lg:text-8xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-a:text-5xl">SQL Commands</h1>

            <div className="text-gray-200 pt-5">
                <div className="font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">
                    Understanding the Types of SQL Commands</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-5">
                    <li className="pt-7">
                        <span className="font-bold">DDL</span> (Data Definition Language): A subset of SQL
                        used for defining and managing the structure of database objects such as tables, indexes, and constraints.
                    </li>
                    <li className="pt-3">
                        DDL commands are used to create, modify, and delete database structures.
                    </li>
                    <li className="pt-3">
                        Common DDL commands include:
                        <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-5">
                            <li className="pt-3 list-inside">CREATE TABLE</li>
                            <li className="pt-3 list-inside">ALTER TABLE</li>
                            <li className="pt-3 list-inside">DROP TABLE</li>
                            <li className="pt-3 list-inside">CREATE INDEX</li>
                            <li className="pt-3 list-inside">DROP INDEX</li>
                            <li className="pt-3 list-inside">CREATE CONSTRAINT</li>
                            <li className="pt-3 list-inside">DROP CONSTRAINT</li>
                            <li className="pt-3 list-inside">TRUNCATE TABLE</li>
                        </ul>
                    </li>

                    <li className="pt-3">
                        <span className="font-bold">DQL</span> (Data Query Language): Focuses on retrieving
                        data from the database.
                    </li>
                    <li className="pt-3">
                        The primary command in DQL is <span className="font-bold">SELECT</span>, which is used to
                        extract specific data from one or more tables.
                    </li>
                    <li className="pt-3">
                        Common DQL commands and clauses include:
                        <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-5">
                            <li className="pt-3 list-inside">SELECT</li>
                            <li className="pt-3 list-inside">WHERE</li>
                            <li className="pt-3 list-inside">AND, OR, NOT</li>
                            <li className="pt-3 list-inside">DISTINCT</li>
                            <li className="pt-3 list-inside">LIKE</li>
                            <li className="pt-3 list-inside">IN</li>
                            <li className="pt-3 list-inside">BETWEEN</li>
                            <li className="pt-3 list-inside">IS NULL</li>
                            <li className="pt-3 list-inside">AS</li>
                            <li className="pt-3 list-inside">ORDER BY</li>
                            <li className="pt-3 list-inside">GROUP BY</li>
                            <li className="pt-3 list-inside">Aggregate Functions (e.g., COUNT, SUM, AVG)</li>
                        </ul>
                    </li>

                    <li className="pt-3">
                        <span className="font-bold">DML</span> (Data Manipulation Language): Deals with managing data
                        within tables.
                    </li>
                    <li className="pt-3">
                        DML commands allow you to insert, update, and delete records, helping maintain data accuracy
                        and consistency.
                    </li>
                    <li className="pt-3">
                        Common DML commands include:
                        <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-5">
                            <li className="pt-3 list-inside">INSERT</li>
                            <li className="pt-3 list-inside">UPDATE</li>
                            <li className="pt-3 list-inside">DELETE</li>
                        </ul>
                    </li>

                    <li className="pt-3">
                        <span className="font-bold">DCL</span> (Data Control Language): Manages access rights and
                        permissions for users in a database.
                    </li>
                    <li className="pt-3">
                        DCL commands help control who can access or modify the database and perform administrative tasks.
                    </li>
                    <li className="pt-3">
                        These commands are essential for maintaining data security and privacy.
                    </li>
                    <li className="pt-3">
                        Common DCL commands include:
                        <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-5">
                            <li className="pt-3 list-inside">GRANT</li>
                            <li className="pt-3 list-inside">REVOKE</li>
                        </ul>
                    </li>

                    <li className="pt-3">
                        <span className="font-bold">TCL</span> (Transaction Control Language): Focuses on managing
                        transactions in a database.
                    </li>
                    <li className="pt-3">
                        TCL commands ensure that a group of operations (a transaction) are completed successfully before
                        the data is saved permanently.
                    </li>
                    <li className="pt-3">
                        These commands help maintain data integrity by allowing operations to be committed or rolled back
                        based on the outcome.
                    </li>
                    <li className="pt-3">
                        Common TCL commands include:
                        <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6">
                            <li className="pt-3 list-inside">COMMIT</li>
                            <li className="pt-3 list-inside">ROLLBACK</li>
                            <li className="pt-3 list-inside">SAVEPOINT</li>
                        </ul>
                    </li>
                </ul>

                <div className="min-a:text-2xl max-a:text-xl pt-3 pb-7 border-t-2 border-slate-700">
                    Now let's explore more <span className="font-bold">database-related queries</span> on the next page.
                </div>
            </div>
        </div>
    );
}

// page 9
export function Page9() {
    return (
        <div className="min-h-full w-full lg:px-4 md:px-2">
            <h1 className="text-8xl font-semibold pt-3 pb-5 text-slate-100 border-b-2 border-slate-700
            min-lg:text-8xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-a:text-5xl">
                Database Related Queries</h1>

            <div className="text-gray-200 pt-5">
                <div className="font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">
                    Common SQL Queries for Databases</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">
                        We created our first database <span className="font-bold">xyz</span> using the following command:
                    </li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    CREATE DATABASE xyz;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">
                        To avoid errors in the Action Output tab (especially when a database already exists), it's a
                        good practice to use this command instead:
                    </li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    CREATE DATABASE IF NOT EXISTS xyz;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">
                        This command checks if a database named <span className="font-bold">xyz </span>
                        already exists. If it doesn't, it creates one; otherwise, it does nothing—thus preventing an error.
                    </li>
                    <li className="pt-7">
                        Similarly, we can safely delete a database using this basic command:
                    </li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    DROP DATABASE xyz;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">
                        Again, to avoid errors when deleting a database that may not exist, it's recommended to use:
                    </li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    DROP DATABASE IF EXISTS xyz;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">
                        This command checks whether the database <span className="font-bold">xyz </span> exists.
                        If it does, it deletes it. If not, it does nothing and avoids throwing an error.
                    </li>
                    <li className="pt-7">
                        You can also view all existing databases and tables using built-in SQL commands.
                    </li>
                    <li className="pt-3">
                        To see a list of all databases:
                    </li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    SHOW DATABASES;
                </div>

                <div className="pt-5 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img20.png" alt="workbench preview" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">
                        As you can see above, it shows the list of databases created or present in my MySQL.
                    </li>
                </ul>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">
                        To view all tables within the currently selected database:
                    </li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    SHOW TABLES;
                </div>

                <div className="pt-5 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img21.png" alt="workbench preview" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-5">
                    <li className="pt-3">
                        As you can see above, it shows the list of tables and view created in the database
                        <span className="font-bold"> xyz.</span>
                    </li>
                </ul>

                <div className="min-a:text-2xl max-a:text-xl pt-2 pb-7 border-t-2 border-slate-700">
                    Great! Now let’s move ahead and learn more about <span className="font-bold">table-related queries </span>
                    in the next page.
                </div>
            </div>
        </div>
    );
}

// page 10
export function Page10() {
    return (
        <div className="min-h-full w-full lg:px-4 md:px-2">
            <h1 className="text-8xl font-semibold pt-3 pb-5 text-slate-100 border-b-2 border-slate-700
            min-lg:text-8xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-a:text-5xl">Table Related Queries</h1>

            <div className="text-gray-200 pt-5">
                <div className="font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">Working with Tables in SQL</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">
                        We created our first table using the following command:
                    </li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        CREATE TABLE student ({"\n"}
                        &nbsp;&nbsp;id INT PRIMARY KEY,{"\n"}
                        &nbsp;&nbsp;name VARCHAR(50),{"\n"}
                        &nbsp;&nbsp;age INT NOT NULL{"\n"}
                        );
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">
                        To view the table we created, run the following query:
                    </li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    SELECT * FROM student;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">
                        This will open a result grid showing the contents of the table, like this:
                    </li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img4.png" alt="workbench preview" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">
                        As you can see, the table is empty for now. That’s because we haven’t inserted any data yet.
                    </li>
                    <li className="pt-3">
                        To insert data, we use the following syntax:
                    </li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        INSERT INTO table_name{"\n"}
                        (colname1, colname2){"\n"}
                        VALUES{"\n"}
                        (col1_v1, col2_v1),{"\n"}
                        (col1_v2, col2_v2);
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">
                        Let’s understand this with a practical example:
                    </li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        INSERT INTO student{"\n"}
                        (id, name, age){"\n"}
                        VALUES{"\n"}
                        (101, "karan", 20),{"\n"}
                        (102, "arjun", 21);
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">
                        After writing this query, select and run it. If the Action Output tab shows a green tick,
                        it means the data was successfully inserted.
                    </li>
                    <li className="pt-3">
                        Now let’s check the data again using:
                    </li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    SELECT * FROM student;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">
                        This time, you should see the following result in the result grid:
                    </li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img5.png" alt="workbench preview" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-5">
                    <li className="pt-7">
                        Congratulations! 🎉 You’ve not only created your first table but also learned how to
                        insert and view data in it.
                    </li>
                </ul>

                <div className="min-a:text-2xl max-a:text-xl pt-3 pb-7 border-t-2 border-slate-700">
                    Let’s move ahead and learn about <span className="font-bold">SQL Keys</span> in the next page.
                </div>
            </div>
        </div>
    );
}

// page 11
export function Page11() {
    return (
        <div className="min-h-full w-full lg:px-4 md:px-2">
            <h1 className="text-8xl font-semibold pt-3 pb-5 text-slate-100 border-b-2 border-slate-700
            min-lg:text-8xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-a:text-5xl">SQL Keys</h1>

            <div className="text-gray-200 pt-5">
                <div className="font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">
                    Let's learn about types of keys</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7"><span className="font-bold">Primary key : </span>
                        it is a column (or set of columns) in a table that uniquely identifies each row.</li>
                    <li className="pt-3">It is a unique id. There is only one Primary key and it should be NOT null.</li>
                    <li className="pt-3">To understand how we declare Primary key, you can see the following example:</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        CREATE TABLE student ({"\n"}
                        &nbsp;&nbsp;id INT PRIMARY KEY,{"\n"}
                        &nbsp;&nbsp;name VARCHAR(50),{"\n"}
                        &nbsp;&nbsp;age INT NOT NULL{"\n"}
                        );
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">In the above example we declared <span className="font-bold">id</span> as
                        the Priamry key of <span className="font-bold">type INT</span>.</li>
                    <li className="pt-3">As you can see below, the <span className="font-bold">column rollno</span> is
                        an example of primary key:</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img22.png" alt="workbench preview" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7"><span className="font-bold">Foreign key : </span>
                        it is a column (or set of columns) in a table that refers to the Primary key in another table.</li>
                    <li className="pt-3">There can be multiple Foreign keys.</li>
                    <li className="pt-3">Foreign keys can have duplicate and null values.</li>
                    <li className="pt-3">To understand how we declare Foreign key, you can see the following example:</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        CREATE TABLE student ( {"\n"}
                        &nbsp;&nbsp;id INT PRIMARY KEY, {"\n"}
                        &nbsp;&nbsp;courseID INT, {"\n"}
                        &nbsp;&nbsp;FOREIGN KEY (courseID)  {"\n"}
                        &nbsp;&nbsp;REFERENCES course(id) {"\n"}
                        &nbsp;&nbsp;&nbsp;&nbsp;ON DELETE CASCADE {"\n"}
                        &nbsp;&nbsp;&nbsp;&nbsp;ON UPDATE CASCADE {"\n"}
                        );
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">In the above example we declared <span className="font-bold">courseId</span> as
                        the Foreign key of <span className="font-bold">type INT</span> which points to the
                        primary key <span className="font-bold">id</span> of the table <span className="font-bold">course.</span>
                    </li>
                    <li className="pt-3">And as you can see below, the column <span className="font-bold">departmentId</span> is
                        an example of foreign key.</li>
                </ul>

                <div className="pt-3 pl-3 pb-5 overflow-hidden">
                    <img className="rounded-lg" src="/images/img23.png" alt="workbench preview" />
                </div>

                <div className="min-a:text-2xl max-a:text-xl pt-3 pb-7 border-t-2 border-slate-700">Now let's learn about
                    <span className="font-bold"> SQL Constraints</span> in the next page.</div>
            </div>
        </div>
    )
}

// page 12
export function Page12() {
    return (
        <div className="min-h-full w-full lg:px-4 md:px-2">
            <h1 className="text-8xl font-semibold pt-3 pb-5 text-slate-100 border-b-2 border-slate-700
            min-lg:text-8xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-a:text-5xl">SQL Constraints</h1>

            <div className="text-gray-200 pt-5">
                <div className="font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">
                    Let's learn about SQL Constraints and it's types</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">SQL Constraints are used to specify rules for data in a table.</li>
                    <li className="pt-3">Let's see the types of SQL Constraints:</li>
                    <li className="pt-7"><span className="font-bold">NOT NULL : </span>
                        columns cannot have a null value</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    col1 INT NOT NULL;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7"><span className="font-bold">UNIQUE : </span>
                        all values in column are different</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    col1 INT UNIQUE;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7"><span className="font-bold">PRIMARY KEY : </span>
                        makes a column unique and not null but used only for one.</li>
                    <li className="pt-3">It can be written in two of the following syntax :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    id INT PRIMARY KEY;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">It the first one, we declare it in a single line, specifiy the Primary key id.
                        Now let's see the second syntax :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        CREATE TABLE temp ( {"\n"}
                        &nbsp;&nbsp;id INT NOT NULL, {"\n"}
                        &nbsp;&nbsp;PRIMARY KEY (id) {"\n"}
                        );
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">It the second one, we declare it in two lines. In the first line we declare id
                        as int type and not null and in the second line we make it (id) a Primary key.</li>
                </ul>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7"><span className="font-bold">FOREIGN KEY : </span>
                        prevents action that would destroy links between tables</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        CREATE TABLE temp ( {"\n"}
                        &nbsp;&nbsp;cust_id INT, {"\n"}
                        &nbsp;&nbsp;FOREIGN KEY (cust_id) {"\n"}
                        &nbsp;&nbsp;REFERENCES customer(id) {"\n"}
                        );
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">Here cust_id is a foreign key which refers to primary kry (id) of the customer
                        table.</li>
                </ul>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7"><span className="font-bold">DEFAULT : </span>
                        sets the default value of a column</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    salary INT DEFAULT 25000;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">Here 25000 is set to be the default value for the salary column.</li>
                </ul>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7"><span className="font-bold">CHECK : </span>
                        it can limit the values allowed in a column.</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        CREATE TABLE city ( {"\n"}
                        &nbsp;&nbsp;id INT PRIMARY KEY, {"\n"}
                        &nbsp;&nbsp;city VARCHAR(50), {"\n"}
                        &nbsp;&nbsp;age INT, {"\n"}
                        &nbsp;&nbsp;CONSTRAINT age_check CHECK {"\n"}
                        &nbsp;&nbsp;(age &gt;= 18 AND city="Delhi") {"\n"}
                        );
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">Here we defined a constraint age_check which skips the values which have
                        age greater or equal to 18 and where city is delhi.</li>
                    <li className="pt-7">Let's take another example :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        CREATE TABLE newTab ( {"\n"}
                        &nbsp;&nbsp;age INT CHECK (age &gt;= 18), {"\n"}
                        );
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-5">
                    <li className="pt-3">Here we are creating a table newTab in which column age will fill age values
                        greater or equal to 18 only.</li>
                </ul>

                <div className="min-a:text-2xl max-a:text-xl pt-3 pb-7 border-t-2 border-slate-700">Now let's learn about
                    <span className="font-bold"> Select</span> query in
                    detail in the next page.</div>
            </div>
        </div>
    )
}

// page 13
export function Page13() {
    return (
        <div className="min-h-full w-full lg:px-4 md:px-2">
            <h1 className="text-8xl font-semibold pt-3 pb-5 text-slate-100 border-b-2 border-slate-700
            min-lg:text-8xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-a:text-5xl">SQL SELECT</h1>

            <div className="text-gray-200 pt-5">
                <div className="font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">Understanding the SELECT Query</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">The <span className="font-bold">SELECT</span> statement is used to
                        retrieve data from a database.</li>
                    <li className="pt-3">Earlier, we used <span className="font-bold">SELECT </span>
                        to fetch all data from our table using this command:</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    SELECT * FROM student;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5 pb-2 list-none font-semibold">Let’s break it down:</li>
                    <li className="pt-3"><span className="font-bold">SELECT</span>: Keyword used to specify the columns
                        to retrieve.</li>
                    <li className="pt-3"><span className="font-bold">* </span>: A wildcard character that means "all columns".</li>
                    <li className="pt-3"><span className="font-bold">FROM</span>: Specifies the table to retrieve data from.</li>
                    <li className="pt-3">So this query means: "Select all columns from the student table".</li>
                    <li className="pt-7">But what if you want to fetch only specific columns instead of the entire table?
                        You can do that using this syntax:</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    SELECT col1, col2 FROM table_name;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">Here’s a practical example:</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    SELECT id, name FROM student;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">Run the above query and you’ll see the following result:</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img6.png" alt="workbench preview" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">As you can see, only the id and name columns are displayed.</li>
                    <li className="pt-3">You can also select just one column if needed. For example:</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    SELECT name FROM student;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-5">
                    <li className="pt-5">Now only the name column will be shown. You can try the same with id or age.</li>
                </ul>

                <div className="min-a:text-2xl max-a:text-xl pt-3 pb-7 border-t-2 border-slate-700">
                    Great job! Now let’s move forward and learn about the <span className="font-bold">WHERE </span>
                    clause in the next page.
                </div>
            </div>
        </div>
    );
}

// page 14
export function Page14() {
    return (
        <div className="min-h-full w-full lg:px-4 md:px-2">
            <h1 className="text-8xl font-semibold pt-3 pb-5 text-slate-100 border-b-2 border-slate-700
            min-lg:text-8xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-a:text-5xl">WHERE Clause</h1>

            <div className="text-gray-200 pt-5">
                <div className="font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">
                    Before we learn about the WHERE clause, let's first create a sample database:
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">Create a database named <code>college</code>:</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        CREATE DATABASE college;{"\n"}
                        USE college;
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">Now create a table inside this database:</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        CREATE TABLE studenttable ({"\n"}
                        &nbsp;&nbsp;rollno INT PRIMARY KEY,{"\n"}
                        &nbsp;&nbsp;name VARCHAR(50),{"\n"}
                        &nbsp;&nbsp;marks INT NOT NULL,{"\n"}
                        &nbsp;&nbsp;grade VARCHAR(1),{"\n"}
                        &nbsp;&nbsp;city VARCHAR(20){"\n"}
                        );
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">Now let's insert some sample data into this table:</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full min-a:px-5 max-a:px-3">
                    <code>
                        INSERT INTO studenttable {"\n"}
                        (rollno, name, marks, grade, city){"\n"}
                        VALUES{"\n"}
                        (101, "anil", 78, "C", "Pune"),{"\n"}
                        (102, "bhumika", 93, "A", "Mumbai"),{"\n"}
                        (103, "chetan", 85, "B", "Mumbai"),{"\n"}
                        (104, "dhruv", 96, "A", "Delhi"),{"\n"}
                        (105, "emanuel", 12, "F", "Delhi"),{"\n"}
                        (106, "farah", 82, "B", "Delhi");
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">We'll continue using this table in upcoming lessons to explore SQL concepts.</li>
                    <li className="pt-3">Now let’s dive into the WHERE clause.</li>
                </ul>

                <div className="pt-5 font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">What is the WHERE Clause?</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">The <span className="font-bold">WHERE</span> clause is used to specify
                        conditions for filtering data.</li>
                    <li className="pt-3">It returns only those records that meet the defined conditions.</li>
                    <li className="pt-3">Here’s the basic syntax:</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        SELECT col1, col2 FROM table_name{"\n"}
                        WHERE condition;
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">Let's understand it with an example:</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    SELECT * FROM studenttable WHERE marks &gt; 80;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">This query returns only those students who scored more than 80 marks:</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img9.png" alt="students with marks > 80" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">Let’s try another example:</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    SELECT * FROM studenttable WHERE city = "Mumbai";
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">This query returns all students who are from Mumbai:</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img10.png" alt="students from Mumbai" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-5">
                    <li className="pt-7">Now you’ve learned how to filter data using the WHERE clause.</li>
                    <li className="pt-3">You can combine it with different types of operators to define complex conditions.</li>
                </ul>

                <div className="min-a:text-2xl max-a:text-xl pt-3 pb-7 border-t-2 border-slate-700">
                    Up next, we’ll learn about SQL <span className="font-bold">Operators</span> in detail.
                </div>
            </div>
        </div>
    );
}

// page 15
export function Page15() {
    return (
        <div className="min-h-full w-full lg:px-4 md:px-2">
            <h1 className="text-8xl font-semibold pt-3 pb-5 text-slate-100 border-b-2 border-slate-700
            min-lg:text-8xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-a:text-5xl">SQL Operators</h1>

            <div className="text-gray-200 pt-5">
                <div className="font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">
                    Let’s learn about different types of SQL Operators</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">
                        <span className="font-bold">Arithmetic Operators:</span> + (Addition), - (Subtraction),
                        * (Multiplication), / (Division), % (Modulus)
                    </li>
                    <li className="pt-5">
                        <span className="font-bold">Comparison Operators:</span> = (Equal to), != (Not equal to),
                        &gt;, &gt;=, &lt;, &lt;=
                    </li>
                    <li className="pt-5">
                        <span className="font-bold">Logical Operators:</span> AND, OR, NOT, IN, BETWEEN, ALL, LIKE, ANY
                    </li>
                    <li className="pt-5">
                        <span className="font-bold">Bitwise Operators:</span> & (Bitwise AND), | (Bitwise OR)
                    </li>
                </ul>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5 list-none">
                        <span className="font-semibold min-md:text-3xl max-md:text-3xl max-sm:text-3xl">
                            Let’s explore some Logical Operators with examples:</span>
                    </li>
                    <li className="pt-7 font-semibold">1. Logical AND (returns rows where both conditions are true):</li>
                    <li className="pt-3">Let's see an example:</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    SELECT * FROM studenttable WHERE marks &gt; 80 AND city = "Mumbai";
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">This query returns rows where marks are greater than 80 and the city is Mumbai.
                        As you can see below:
                    </li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img24.png" alt="workbench preview full table" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7 font-semibold">2. Logical OR (returns rows where at least one condition is true):</li>
                    <li className="pt-3">Let's see an example:</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    SELECT * FROM studenttable WHERE marks &gt; 90 OR city = "Mumbai";
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">This returns rows where marks are greater than 90 or the city is Mumbai.
                        As you can see below:
                    </li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img25.png" alt="workbench preview full table" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7 font-semibold">3. Logical BETWEEN (returns rows within a given range):</li>
                    <li className="pt-3">Let's see an example:</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    SELECT * FROM studenttable WHERE marks BETWEEN 80 AND 90;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-3">
                    <li className="pt-5">This query returns rows where marks are between 80 and 90 (inclusive).
                        As you can see below:
                    </li>
                </ul>

                <div className="pt-3 pl-3 pb-5 overflow-hidden">
                    <img className="rounded-lg" src="/images/img26.png" alt="workbench preview full table" />
                </div>

                <div className="min-a:text-2xl max-a:text-xl pt-1 pl-3 border-l-4 border-slate-700">
                    <span className="font-bold">Note:</span> Here, <code>AND</code> is not the logical AND operator —
                    it's part of the BETWEEN syntax.
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7 font-semibold">4. Logical IN (returns rows that match any value from a list):</li>
                    <li className="pt-3">Let's see an example:</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    SELECT * FROM studenttable WHERE city IN ("Delhi", "Mumbai");
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">Returns all students whose city is either Delhi or Mumbai. As you can see below:</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img27.png" alt="workbench preview full table" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7 font-semibold">5. Logical NOT (negates the given condition):</li>
                    <li className="pt-3">Let's see an example:</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    SELECT * FROM studenttable WHERE city NOT IN ("Delhi", "Mumbai");
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">This query returns rows where the city is neither Delhi nor Mumbai. As you can
                        see below:
                    </li>
                </ul>

                <div className="pt-3 pl-3 pb-5 overflow-hidden">
                    <img className="rounded-lg" src="/images/img28.png" alt="workbench preview full table" />
                </div>

                <div className="min-a:text-2xl max-a:text-xl pt-3 pb-7 border-t-2 border-slate-700">
                    Up next, we’ll learn about another useful clause — the <span className="font-bold">LIMIT</span> clause.
                </div>
            </div>
        </div>
    );
}

// page 16
export function Page16() {
    return (
        <div className="min-h-full w-full lg:px-4 md:px-2">
            <h1 className="text-8xl font-semibold pt-3 pb-5 text-slate-100 border-b-2 border-slate-700
            min-lg:text-8xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-a:text-5xl">LIMIT Clause</h1>

            <div className="text-gray-200 pt-5">
                <div className="font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">
                    Let’s learn about the LIMIT Clause</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">The <span className="font-bold">LIMIT</span> clause is used to set an upper
                        limit on the number of rows returned in the result.</li>
                    <li className="pt-3">Even if the query matches more rows, the LIMIT clause restricts the output
                        to the specified number.</li>
                    <li className="pt-3">You can use the LIMIT clause with the following syntax:</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        SELECT col1, col2 FROM table_name {"\n"}
                        LIMIT number;
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">Let’s understand this with an example.</li>
                    <li className="pt-3">First, run the <span className="font-mono font-bold">SELECT *</span> query
                        to view the entire table:</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    SELECT * FROM studenttable;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">This will return the entire table as shown below:</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img7.png" alt="workbench preview full table" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">Now, let’s run the same query but with a <span className="font-mono font-bold">
                        LIMIT</span> of 3 rows:</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    SELECT * FROM studenttable LIMIT 3;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">This will return only the first 3 rows from the result set:</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img8.png" alt="workbench preview limited table" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-5">
                    <li className="pt-7">As you can see, there’s a clear difference in the output.</li>
                    <li className="pt-3">The first query returned all rows, while the second limited the output
                        to only 3 rows using the <span className="font-mono font-bold">LIMIT</span> clause.</li>
                </ul>

                <div className="min-a:text-2xl max-a:text-xl pt-3 pb-7 border-t-2 border-slate-700">
                    Up next, we’ll learn about another useful clause — the <span className="font-bold">ORDER BY</span> clause.
                </div>
            </div>
        </div>
    );
}

// page 17
export function Page17() {
    return (
        <div className="min-h-full w-full lg:px-4 md:px-2">
            <h1 className="text-8xl font-semibold pt-3 pb-5 text-slate-100 border-b-2 border-slate-700
            min-lg:text-8xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-a:text-5xl">ORDER BY Clause</h1>

            <div className="text-gray-200 pt-5">
                <div className="font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">
                    Let’s learn about the ORDER BY clause</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">
                        The <span className="font-bold">ORDER BY</span> clause is used to sort the result in either
                        ascending (<span className="font-mono font-bold">ASC</span>) or descending (<span className=
                            "font-mono font-bold">DESC</span>) order.
                    </li>
                    <li className="pt-3">
                        This means you can arrange your results based on a specific column — either from smallest to
                        largest (ASC) or largest to smallest (DESC).
                    </li>
                    <li className="pt-3">
                        You can use the <span className="font-bold">ORDER BY</span> clause with the following syntax:
                    </li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 mb-6 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        SELECT col1, col2 FROM table_name {"\n"}
                        ORDER BY col_name ASC;
                    </code>
                </pre>

                <div className="min-a:text-2xl max-a:text-xl pt-1 pl-3 border-l-4 border-slate-700">
                    <span className="font-bold">Note:</span> You don’t need to write <span className="font-mono font-bold">
                        ASC</span> explicitly for ascending order. It is the default. However, you must write <span
                            className="font-mono font-bold">DESC</span> to sort in descending order.
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">Let’s understand this with an example:</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        SELECT * FROM studenttable {"\n"}
                        ORDER BY city ASC;
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">The above query will return the following result:</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img11.png" alt="MySQL sorted table preview by city ASC" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-5">
                    <li className="pt-7">As you can see, the rows are sorted alphabetically by city in ascending order.</li>
                    <li className="pt-3">That’s why the city “Delhi” appears at the top, and “Pune” appears last.</li>
                    <li className="pt-3">You can also use the <span className="font-bold">ORDER BY</span> clause to sort
                        by other columns like <span className="font-mono font-bold">rollno</span>, <span className="
                     font-mono font-bold">name</span>, <span className="font-mono font-bold">marks</span>, or <span
                            className="font-mono font-bold">grade</span> — in either ascending or descending order.</li>
                </ul>

                <div className="min-a:text-2xl max-a:text-xl pt-3 pb-7 border-t-2 border-slate-700">
                    Now let’s learn about <span className="font-bold">Aggregate Functions</span> in the next page.
                </div>
            </div>
        </div>
    );
}

// page 18
export function Page18() {
    return (
        <div className="min-h-full w-full lg:px-4 md:px-2">
            <h1 className="text-8xl font-semibold pt-3 pb-5 text-slate-100 border-b-2 border-slate-700
            min-lg:text-8xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-a:text-5xl">
                Aggregate Functions</h1>

            <div className="text-gray-200 pt-5">
                <div className="font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">
                    Let’s learn about Aggregate Functions</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">
                        Aggregate functions perform a calculation on a set of values and return a single result.
                    </li>
                    <li className="pt-3">Here are the most commonly used aggregate functions:</li>
                </ul>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">
                        <span className="font-bold">COUNT()</span>: Returns the total number of entries in a column.
                    </li>
                    <li className="pt-3">Let's understand it with an example:</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    SELECT COUNT(name) FROM studenttable;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">This will return the total number of students (non-null names):</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img15.png" alt="COUNT(name) result preview" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">
                        <span className="font-bold">MAX()</span>: Returns the highest value from a column.
                    </li>
                    <li className="pt-3">Let's understand it with an example:</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    SELECT MAX(marks) FROM studenttable;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">This returns the highest marks from the table:</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img16.png" alt="MAX(marks) result preview" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">
                        <span className="font-bold">MIN()</span>: Returns the lowest value from a column.
                    </li>
                    <li className="pt-3">Let's understand it with an example:</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    SELECT MIN(marks) FROM studenttable;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">This will return the lowest marks in the table:</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img17.png" alt="MIN(marks) result preview" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">
                        <span className="font-bold">SUM()</span>: Returns the total sum of a numeric column.
                    </li>
                    <li className="pt-3">Let's understand it with an example:</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    SELECT SUM(marks) FROM studenttable;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">This returns the total of all marks:</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img18.png" alt="SUM(marks) result preview" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">
                        <span className="font-bold">AVG()</span>: Returns the average value of a numeric column.
                    </li>
                    <li className="pt-3">Let's understand it with an example:</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    SELECT AVG(marks) FROM studenttable;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">This returns the average of all marks:</li>
                </ul>

                <div className="pt-3 pl-3 pb-5 overflow-hidden">
                    <img className="rounded-lg" src="/images/img19.png" alt="AVG(marks) result preview" />
                </div>

                <div className="min-a:text-2xl max-a:text-xl pt-3 pb-7 border-t-2 border-slate-700">
                    Now let’s move on to another important clause — the <span className="font-bold">GROUP BY </span>
                    clause in the next page.
                </div>
            </div>
        </div>
    );
}

// page 19
export function Page19() {
    return (
        <div className="min-h-full w-full lg:px-4 md:px-2">
            <h1 className="text-8xl font-semibold pt-3 pb-5 text-slate-100 border-b-2 border-slate-700
            min-lg:text-8xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-a:text-5xl">GROUP BY Clause</h1>

            <div className="text-gray-200 pt-5">
                <div className="font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">
                    Let’s learn about the GROUP BY clause</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-5">
                    <li className="pt-7">
                        <span className="font-bold">GROUP BY</span> is used to group rows that have the same values
                        into summary rows.
                    </li>
                    <li className="pt-3">
                        It collects data from multiple records and groups the result by one or more columns.
                    </li>
                </ul>

                <div className="min-a:text-2xl max-a:text-xl pt-1 pl-3 border-l-4 border-slate-700">
                    <span className="font-bold">Note:</span> We usually use the <span className="font-bold">GROUP BY </span>
                    clause along with aggregate functions like <span className="font-mono font-bold">COUNT()</span>,
                    <span className="font-mono font-bold">SUM()</span>, etc.
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">Let’s understand the GROUP BY clause with an example:</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        SELECT city, COUNT(name) {"\n"}
                        FROM studenttable {"\n"}
                        GROUP BY city;
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">
                        In this query, we are selecting the <span className="font-mono font-bold">city</span> column
                        and counting how many students belong to each city using <span className="font-mono font-bold">
                            COUNT(name)</span>.
                    </li>
                    <li className="pt-3">
                        The <span className="font-mono font-bold">COUNT(name)</span> function wouldn’t work meaningfully
                        on its own in this case. So we group the data by <span className="font-mono font-bold">city </span>
                        to make the count meaningful.
                    </li>
                    <li className="pt-3">
                        As a result, we get the number of students in each city, like shown below:
                    </li>
                </ul>

                <div className="pt-3 pl-3 pb-5 overflow-hidden">
                    <img className="rounded-lg" src="/images/image12.png" alt="GROUP BY result preview" />
                </div>

                <div className="min-a:text-2xl max-a:text-xl pt-3 pb-7 border-t-2 border-slate-700">
                    Now let’s learn about another important clause — the <span className="font-bold">HAVING </span>
                    clause in the next page.
                </div>
            </div>
        </div>
    );
}

// page 20
export function Page20() {
    return (
        <div className="min-h-full w-full lg:px-4 md:px-2">
            <h1 className="text-8xl font-semibold pt-3 pb-5 text-slate-100 border-b-2 border-slate-700
            min-lg:text-8xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-a:text-5xl">HAVING Clause</h1>

            <div className="text-gray-200 pt-5">
                <div className="font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">
                    Let’s learn about the HAVING Clause</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">
                        The <span className="font-bold">HAVING</span> clause is similar to the <span className="font-bold">
                            WHERE</span> clause because it is also used to filter data.
                    </li>
                    <li className="pt-3">
                        However, <span className="font-bold">HAVING</span> is used to apply conditions on groups, not
                        individual rows.
                    </li>
                    <li className="pt-3">
                        In other words, when we group data using <span className="font-bold">GROUP BY</span>, and want to
                        filter those groups, we use the <span className="font-bold">HAVING</span> clause.
                    </li>
                    <li className="pt-7">Let’s understand this better with an example:</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        SELECT COUNT(name), city {'\n'}
                        FROM studenttable {'\n'}
                        GROUP BY city {'\n'}
                        HAVING MAX(marks) &gt; 90;
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">
                        In this query:
                        <ul className="list-disc pl-6">
                            <li className="pt-3">We are selecting the <span className="font-mono font-bold">city </span>
                                column.</li>
                            <li className="pt-3">
                                We are using <span className="font-mono font-bold">COUNT(name)</span> to count how many
                                students belong to each city.
                            </li>
                            <li className="pt-3">Then, we group the data by city using <span className="font-mono font-bold">
                                GROUP BY city</span>.</li>
                            <li className="pt-3">
                                After grouping, we use the <span className="font-mono font-bold">HAVING</span> clause to
                                filter only those cities where the maximum marks are greater than 90.
                            </li>
                        </ul>
                    </li>
                    <li className="pt-5">As a result, we get the following output:</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img13.png" alt="HAVING clause result preview" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-5">
                    <li className="pt-7">
                        This result shows that only the cities <span className="font-bold">Mumbai</span> and <span className=
                            "font-bold">Delhi</span> have students whose maximum marks are greater than 90.
                    </li>
                </ul>

                <div className="min-a:text-2xl max-a:text-xl pt-3 pb-7 border-t-2 border-slate-700">
                    Now let’s move on and learn about <span className="font-bold">Cascading in Foreign Keys</span> in the
                    next page.
                </div>
            </div>
        </div>
    );
}

// page 21
export function Page21() {
    return (
        <div className="min-h-full w-full lg:px-4 md:px-2">
            <h1 className="text-8xl font-semibold pt-3 pb-5 text-slate-100 border-b-2 border-slate-700
            min-lg:text-8xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-a:text-5xl">Cascading
                for Foreign Key</h1>

            <div className="text-gray-200 pt-5">
                <div className="font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">
                    Let’s learn about Cascading for Foreign Keys</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">
                        <span className="font-bold">ON DELETE CASCADE:</span> This ensures that if a row in the parent
                        table is deleted, all related rows in the child table are also automatically deleted.
                    </li>
                    <li className="pt-5">
                        <span className="font-bold">ON UPDATE CASCADE:</span> This ensures that if a value in the parent
                        table (usually the primary key) is updated, the related values in the child table are also updated
                        accordingly.
                    </li>
                    <li className="pt-5">
                        Using both of these options when defining foreign keys is considered a best practice. It helps
                        maintain data integrity and prevents errors when updating or deleting rows from the parent table.
                    </li>
                    <li className="pt-5">
                        Let’s look at an example of how to use them in SQL:
                    </li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        CREATE TABLE student ( {"\n"}
                        &nbsp;&nbsp;id INT PRIMARY KEY, {"\n"}
                        &nbsp;&nbsp;courseID INT, {"\n"}
                        &nbsp;&nbsp;FOREIGN KEY (courseID) {"\n"}
                        &nbsp;&nbsp;REFERENCES course(id) {"\n"}
                        &nbsp;&nbsp;&nbsp;&nbsp;ON DELETE CASCADE {"\n"}
                        &nbsp;&nbsp;&nbsp;&nbsp;ON UPDATE CASCADE {"\n"}
                        );
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-5">
                    <li className="pt-5">
                        That’s it! Just by adding these two lines, we enable cascading behavior on our foreign key.
                    </li>
                </ul>

                <div className="min-a:text-2xl max-a:text-xl pt-3 pb-7 border-t-2 border-slate-700">
                    Now let’s move forward and explore more <span className="font-bold">table-related queries </span>
                    in the next page.
                </div>
            </div>
        </div>
    );
}

// page 22
export function Page22() {
    return (
        <div className="min-h-full w-full lg:px-4 md:px-2">
            <h1 className="text-8xl font-semibold pt-3 pb-5 text-slate-100 border-b-2 border-slate-700
            min-lg:text-8xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-a:text-5xl">More Table
                Related Queries</h1>

            <div className="text-gray-200 pt-5">
                <div className="font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">
                    Let's learn about more Table related Queries</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7"><span className="font-bold">Update : </span>
                        to update existing rows</li>
                    <li className="pt-3">We use the following syntax :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        UPDATE table_name {"\n"}
                        SET col1 = val1, col2 = val2 {"\n"}
                        WHERE condition; {"\n"}
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">Let's understand in with an example :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        UPDATE studenttable {"\n"}
                        SET grade = "O" {"\n"}
                        WHERE grade = "A"; {"\n"}
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">The above code replaces grade value to O where the value of grade is A. As you can
                        see below:
                    </li>
                </ul>

                <div className="pt-3 pl-3 pb-5 overflow-hidden">
                    <img className="rounded-lg" src="/images/img29.png" alt="HAVING clause result preview" />
                </div>

                <div className="min-a:text-2xl max-a:text-xl pt-1 border-l-4 border-slate-700 pl-3">
                    <span className="font-bold">Note : </span>
                    before running the above command in MySQL, you have to turn off the safe mode using the following code :</div>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-6 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    SET SQL_SAFE_UPDATES = 0;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7"><span className="font-bold">Delete : </span>
                        to delete existing rows</li>
                    <li className="pt-3">We use the following syntax :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        DELETE FROM table_name {"\n"}
                        WHERE condition; {"\n"}
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">Let's understand in with an example :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        DELETE FROM studenttable {"\n"}
                        WHERE MARKS &lt; 33; {"\n"}
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">The above code delete rows where value of marks is less than 33. As you can
                        see below:
                    </li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img30.png" alt="HAVING clause result preview" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7"><span className="font-bold">Alter : </span>
                        to change the schema</li>
                    <li className="pt-3">It has follwing types :</li>
                    <li className="pt-7"><span className="font-bold">ADD Column :</span> used to add a column.</li>
                    <li className="pt-3">We use the following syntax :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        ALTER TABLE table_name {"\n"}
                        ADD COLUMN {"\n"}
                        column_name datatype constraint; {"\n"}
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">Let's understand in with an example :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        ALTER TABLE studenttable {"\n"}
                        ADD COLUMN {"\n"}
                        age INT NOT NULL DEFAULT 19; {"\n"}
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">The above code adds a column age of type int with 19 as default values. As you can
                        see below:
                    </li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img31.png" alt="HAVING clause result preview" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7"><span className="font-bold">DROP Column :</span> used to delete a column</li>
                    <li className="pt-3">We use the following syntax :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        ALTER TABLE table_name {"\n"}
                        DROP COLUMN column_name; {"\n"}
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">Let's understand in with an example :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        ALTER TABLE studenttable {"\n"}
                        DROP COLUMN age; {"\n"}
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">The above code deletes the column age. As you can see below:</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img30.png" alt="HAVING clause result preview" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7"><span className="font-bold">RENAME Table :</span> used to rename a table.</li>
                    <li className="pt-3">We use the following syntax :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        ALTER TABLE table_name {"\n"}
                        RENAME TO new_table_name; {"\n"}
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">Let's understand in with an example :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        ALTER TABLE studenttable {"\n"}
                        RENAME TO student; {"\n"}
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">The above code renames the table name from "studenttable" to "student".</li>
                </ul>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7"><span className="font-bold">CHANGE </span>Column (rename)</li>
                    <li className="pt-3">We use the following syntax :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full min-a:px-5 max-a:px-3">
                    <code>
                        ALTER TABLE table_name {"\n"}
                        CHANGE COLUMN old_name  {"\n"}
                        new_name new_datatype new_contraint;
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">Let's understand in with an example :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        ALTER TABLE studenttable {"\n"}
                        CHANGE marks stu_marks INT; {"\n"}
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">The above code renames the column name from "marks" to "stu_marks". As you can see
                        below:
                    </li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img32.png" alt="HAVING clause result preview" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7"><span className="font-bold">MODIFY </span>Column (modify datatype/ constraint)</li>
                    <li className="pt-3">We use the following syntax :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        ALTER TABLE table_name {"\n"}
                        MODIFY col_name {"\n"}
                        new_datatype new_contraint; {"\n"}
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">Let's understand in with an example :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        ALTER TABLE studenttable {"\n"}
                        MODIFY age VARCHAR(2); {"\n"}
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">The above code modifies the column age from "type int" to "type VARCHAR(2)".</li>
                </ul>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7"><span className="font-bold">TRUNCATE : </span>to delete table's data</li>
                    <li className="pt-3">We use the following syntax :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    TRUNCATE table_name;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">Let's understand in with an example :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    TRUNCATE studenttable;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6">
                    <li className="pt-3">The above code deletes all data which was inserted in this table. As you can see
                        below:
                    </li>
                </ul>

                <div className="pt-3 pl-3 pb-5 overflow-hidden">
                    <img className="rounded-lg" src="/images/img33.png" alt="HAVING clause result preview" />
                </div>

                <div className="min-a:text-2xl max-a:text-xl pt-3 pb-7 border-t-2 border-slate-700">Now let's learn about
                    <span className="font-bold"> Joins in SQL</span> in the next page.</div>
            </div>
        </div>
    )
}

// page 23
export function Page23() {
    return (
        <div className="min-h-full w-full lg:px-4 md:px-2">
            <h1 className="text-8xl font-semibold pt-3 pb-5 text-slate-100 border-b-2 border-slate-700
            min-lg:text-8xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-a:text-5xl">Joins In SQL</h1>

            <div className="text-gray-200 pt-5">
                <div className="font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">Let's learn about Joins in SQL</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">Join is used to combine rows from two or more tables, based on a related
                        column between them.</li>
                    <li className="pt-3">Before learning types of joins, we will make sample tables to understand
                        joins easily.</li>
                    <li className="pt-5">Let's create first table student</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        CREATE TABLE student ( {'\n'}
                        &nbsp;&nbsp;student_id INT PRIMARY KEY, {'\n'}
                        &nbsp;&nbsp;name VARCHAR(50) {'\n'}
                        );
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">Now let's insert sample data:</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        INSERT INTO student  {'\n'}
                        (student_id, name) {'\n'}
                        VALUES {'\n'}
                        (101, "adam"), {'\n'}
                        (102, "bob"), {'\n'}
                        (103, "casey");
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">Now let's create second table course</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        CREATE TABLE course ( {'\n'}
                        &nbsp;&nbsp;student_id INT PRIMARY KEY, {'\n'}
                        &nbsp;&nbsp;course VARCHAR(50) {'\n'}
                        );
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">Now let's insert sample data:</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        INSERT INTO course  {'\n'}
                        (student_id, course) {'\n'}
                        VALUES {'\n'}
                        (102, "english"), {'\n'}
                        (105, "math"), {'\n'}
                        (103, "science"), {'\n'}
                        (107, "computer science");
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">Now let's dive into the types of joins in SQL:</li>
                </ul>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5"><span className="font-bold">Inner Join : </span>
                        returns records that have matching values in both tables.</li>
                    <li className="pt-3">It has the following syntax :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        SELECT column(s) {'\n'}
                        FROM tableA AS a {'\n'}
                        INNER JOIN tableB AS b {'\n'}
                        ON a.col_name = b.col_name;
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">Let's understand this syntax with an example :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        SELECT * {'\n'}
                        FROM student AS s {'\n'}
                        INNER JOIN course AS c {'\n'}
                        ON s.student_id = c.student_id;
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">This code will have the follwing result:</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img34.png" alt="HAVING clause result preview" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7"><span className="font-bold">Left Join : </span>
                        returns all records from the left table, and the matched records from the right table.</li>
                    <li className="pt-3">It has the following syntax :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        SELECT column(s) {'\n'}
                        FROM tableA AS a {'\n'}
                        LEFT JOIN tableB AS b {'\n'}
                        ON a.col_name = b.col_name;
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">Let's understand this syntax with an example :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        SELECT * {'\n'}
                        FROM student AS a {'\n'}
                        LEFT JOIN course AS b {'\n'}
                        ON a.student_id = b.student_id;
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">This code will have the follwing result:</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img35.png" alt="HAVING clause result preview" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7"><span className="font-bold">Right Join : </span>
                        returns all records from the right table, and the matched records from the left table.</li>
                    <li className="pt-3">It has the following syntax :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        SELECT column(s) {'\n'}
                        FROM tableA AS a {'\n'}
                        RIGHT JOIN tableB AS b {'\n'}
                        ON a.col_name = b.col_name;
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">Let's understand this syntax with an example :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        SELECT * {'\n'}
                        FROM student AS a {'\n'}
                        RIGHT JOIN course AS b {'\n'}
                        ON a.student_id = b.student_id;
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">This code will have the follwing result:</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img36.png" alt="HAVING clause result preview" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7"><span className="font-bold">Full Join : </span>
                        returns all records when there is a match in either left or right side.</li>
                    <li className="pt-3">It has the following syntax :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        LEFT JOIN {'\n'}
                        UNION {'\n'}
                        RIGHT JOIN
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">Let's understand this syntax with an example :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        SELECT * {'\n'}
                        FROM student AS a {'\n'}
                        LEFT JOIN course AS b {'\n'}
                        ON a.student_id = b.student_id {'\n'}
                        UNION {'\n'}
                        SELECT * {'\n'}
                        FROM student AS a {'\n'}
                        RIGHT JOIN course AS b {'\n'}
                        ON a.student_id = b.student_id;
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">This code will have the follwing result:</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img37.png" alt="HAVING clause result preview" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">Before learning Self join we have to make another sample table for it's better
                        understanding.</li>
                    <li className="pt-3">Let's create the table employee</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        CREATE TABLE employee ( {'\n'}
                        &nbsp;&nbsp;id INT PRIMARY KEY, {'\n'}
                        &nbsp;&nbsp;name VARCHAR(50), {'\n'}
                        &nbsp;&nbsp;manager_id INT {'\n'}
                        );
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">Now let's insert sample data:</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        INSERT INTO employee  {'\n'}
                        (id, name, manager_id) {'\n'}
                        VALUES {'\n'}
                        (101, "adam", 103), {'\n'}
                        (102, "bob", 104), {'\n'}
                        (103, "casey", NULL), {'\n'}
                        (104, "donald", 103);
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">Now let's dive into self join:</li>
                    <li className="pt-5"><span className="font-bold">Self Join : </span>
                        it is a regular join but the table is joined with itself.</li>
                    <li className="pt-3">It has the following syntax :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        SELECT column(s) {'\n'}
                        FROM tableA AS a {'\n'}
                        JOIN tableB AS b {'\n'}
                        ON a.col_name = b.col_name;
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">Let's understand this syntax with an example :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        SELECT {"\n"}
                        a.name AS manager_name, b.name {'\n'}
                        FROM employee AS a {'\n'}
                        JOIN employee AS b {'\n'}
                        ON a.id = b.manager_id {'\n'}
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">This code will have the follwing result:</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img38.png" alt="HAVING clause result preview" />
                </div>

                <div className="font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl pt-5">Union in SQL</div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">It is used to combine the result of the set of two or more SELECT statements.</li>
                    <li className="pt-3">To use it :</li>
                    <li className="pt-3 list-inside">every SELECT should have same number of columns</li>
                    <li className="pt-3 list-inside">columns must have similar datatypes</li>
                    <li className="pt-3 list-inside">columns in every SELECT should be in same order</li>
                    <li className="pt-5">It has the following syntax :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        SELECT column(s) FROM tableA {'\n'}
                        UNION {'\n'}
                        SELECT column(s) FROM tableB
                    </code>
                </pre>

                <div className="pb-5"></div>

                <div className="min-a:text-2xl max-a:text-xl pt-3 pb-7 border-t-2 border-slate-700">Now let's learn about
                    <span className="font-bold"> SQL sub queries</span> in the next page.</div>
            </div>
        </div>
    )
}

// page 24
export function Page24() {
    return (
        <div className="min-h-full w-full lg:px-4 md:px-2">
            <h1 className="text-8xl font-semibold pt-3 pb-5 text-slate-100 border-b-2 border-slate-700
            min-lg:text-8xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-a:text-5xl">SQL Sub-Queries</h1>

            <div className="text-gray-200 pt-5">
                <div className="font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">
                    Let's learn about SQL Sub-queries</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">A Subquery or inner query or a nested query within another SQL query.</li>
                    <li className="pt-3">It involves two SELECT statements.</li>
                    <li className="pt-3">It has the following syntax :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        SELECT column(s) {'\n'}
                        FROM table_name {'\n'}
                        WHERE col_name operator {'\n'}
                        (Subquery);
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">Let's understand Sub-queries with some examples:</li>
                    <li className="pt-5"><span className="font-bold">Example 1:</span> get names of all students who
                        scrored more than the class average.</li>
                    <li className="pt-3">It can be solved using sub-queires like this:</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        SELECT name, marks {'\n'}
                        FROM studenttable {'\n'}
                        WHERE marks &gt; {'\n'}
                        (SELECT avg(marks) {"\n"}
                        FROM studenttable);
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">So what we did here?</li>
                    <li className="pt-3">First we selected name, marks columns from the table, then added a condition that
                        where marks are greater than (Subquery).
                    </li>
                    <li className="pt-3">In the Subquery we selected average marks from the table.</li>
                    <li className="pt-3">So this complete statement means to select name, marks from table where marks are
                        greater than the average makrs.</li>
                    <li className="pt-3">It will give the following result:</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img39.png" alt="HAVING clause result preview" />
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7"><span className="font-bold">Example 2:</span> get names of all students who
                        have even roll numbers.</li>
                    <li className="pt-3">It can be solved using sub-queires like this:</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        SELECT name, rollno {'\n'}
                        FROM studenttable {'\n'}
                        WHERE rollno IN {'\n'}
                        (SELECT rollno {"\n"}
                        FROM studenttable {"\n"}
                        WHERE rollno % 2 = 0);
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">So what we did here?</li>
                    <li className="pt-3">First we selected name, rollno columns from the table, then added a condition that
                        where rollno IN (Subquery) Here rollno IN means that rollno in the list of (Subquery).
                    </li>
                    <li className="pt-3">In the Subquery we selected rollno from the table where rollno is even.</li>
                    <li className="pt-3">So this complete statement means to select name, rollno from table where rollno is
                        even.</li>
                    <li className="pt-3">It will give the following result:</li>
                </ul>

                <div className="pt-3 pl-3 pb-5 overflow-hidden">
                    <img className="rounded-lg" src="/images/img40.png" alt="HAVING clause result preview" />
                </div>

                <div className="min-a:text-2xl max-a:text-xl pt-3 pb-7 border-t-2 border-slate-700">Now let's learn about
                    <span className="font-bold"> MySQL Views</span> in the next page.</div>
            </div>
        </div>
    )
}

// page 25
export function Page25() {
    return (
        <div className="min-h-full w-full lg:px-4 md:px-2">
            <h1 className="text-8xl font-semibold pt-3 pb-5 text-slate-100 border-b-2 border-slate-700
            min-lg:text-8xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-a:text-5xl">MySQL Views</h1>

            <div className="text-gray-200 pt-5">
                <div className="font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">Let's learn about MySQL Views</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-7">A view is a virtual table based on the result-set of an SQL statement.</li>
                    <li className="pt-3">A view always shows up-to-date data. The database engine recreates the view
                        , every time a user queries it.</li>
                    <li className="pt-7">Let's understand MySQL Views with an example :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    <code>
                        CREATE VIEW view1 AS {'\n'}
                        SELECT rollno, name {"\n"}
                        FROM studenttable; {'\n'}
                    </code>
                </pre>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">The above statemet create a MySQL View "view1".</li>
                    <li className="pt-3">This "view1" is created on the statement "SELECT rollno, name FROM studenttable"
                        which selects rollno and name column from the studenttable.</li>
                    <li className="pt-3">Now to see thie MySQL View "view1" we can run this follwing code : </li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    SELECT * FROM view1;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">This statement will give us the follwing result :</li>
                </ul>

                <div className="pt-3 pl-3 pb-5 overflow-hidden">
                    <img className="rounded-lg" src="/images/img14.png" alt="workbench preview"></img>
                </div>

                <div className="min-a:text-2xl max-a:text-xl pt-3 pb-7 border-t-2 border-slate-700">This marks the end of the
                    <span className="font-bold">SQL Learning</span> But i have some more <span className="font-bold">
                        Resources</span> for you in the next two pages.</div>
            </div>
        </div>
    )
}

// Resources pages
// page 26
export function Page26() {
    return (
        <div className="min-h-full w-full lg:px-4 md:px-2">
            <h1 className="text-8xl font-semibold pt-3 pb-5 text-slate-100 border-b-2 border-slate-700
            min-lg:text-8xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-a:text-5xl">
                SQL Projects
            </h1>

            <div className="text-gray-200 pt-5 min-a:text-2xl max-a:text-xl space-y-6">
                <p>
                    This section will showcase all the SQL-based projects I've created as part of my learning and practice journey.
                </p>

                <p>
                    These projects are built using concepts from <span className="font-bold">Apna College's SQL
                        course</span> combined with real-world data handling, query writing, and optimization techniques.
                </p>

                <p>
                    I’ll also be sharing the source code and live demos (if applicable) to help you understand how SQL
                    works in practical applications.
                </p>

                <p>
                    🔗 <span className="text-slate-400 italic">GitHub Repository Link:</span>{' '}
                    <span className="text-yellow-400 italic">Coming soon...</span>
                </p>

                <p className="pt-6 border-t-2 border-slate-700">
                    Stay tuned! The projects will be published here once they're complete. 🚀
                </p>
            </div>
        </div>
    )
}

// page 27
export function Page27() {
    return (
        <div className="min-h-full w-full lg:px-4 md:px-2">
            <h1 className="text-8xl font-semibold pt-3 pb-5 text-slate-100 border-b-2 border-slate-700
            min-lg:text-8xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-a:text-5xl">
                More Links
            </h1>

            <div className="text-gray-200 pt-5 min-a:text-2xl max-a:text-xl space-y-6">
                <p>
                    This website was created as part of my learning journey in SQL. <br /> I learned SQL concepts from apna
                    college's <a href="https://www.youtube.com/watch?v=hlGoQC332VM&t=11487s" target="_blank"
                        rel="noopener noreferrer" className="text-blue-400 hover:underline mx-1">SQL one shot tutorial</a>
                    on YouTube.
                </p>

                <p>
                    I followed notes provided by Apna College and combined them with my own structuring techniques and
                    design ideas to build this project using <span className="font-bold">React JS</span> and
                    <span className="font-bold">Tailwind CSS</span>.
                </p>

                <p>
                    If you are serious about learning SQL, I highly recommend that you not only study the theory but also
                    <span className="font-bold text-green-400"> practice it regularly</span>. <br /> <br /> Two excellent
                    platforms for SQL practice are:
                    <ul className="list-disc pl-8 pt-2">
                        <li>
                            <a href="https://www.hackerrank.com/domains/sql" target="_blank" rel="noopener noreferrer"
                                className="text-blue-400 hover:underline">HackerRank SQL Practice
                            </a>
                        </li>
                        <li>
                            <a href="https://leetcode.com/problemset/database/" target="_blank" rel="noopener noreferrer"
                                className="text-blue-400 hover:underline">LeetCode SQL Questions
                            </a>
                        </li>
                    </ul>
                </p>

                <p>
                    Some additional helpful resources for learning and mastering SQL:
                    <ul className="list-disc pl-8 pt-2">
                        <li>
                            <a href="https://www.w3schools.com/sql/" target="_blank" rel="noopener noreferrer"
                                className="text-blue-400 hover:underline">W3Schools SQL Tutorial
                            </a>
                        </li>
                        <li>
                            <a href="https://sqlzoo.net/" target="_blank" rel="noopener noreferrer"
                                className="text-blue-400 hover:underline">SQLZoo - Interactive SQL Tutorials
                            </a>
                        </li>
                        <li>
                            <a href="https://mode.com/sql-tutorial/" target="_blank" rel="noopener noreferrer"
                                className="text-blue-400 hover:underline">Mode SQL Tutorial for Analysts
                            </a>
                        </li>
                    </ul>
                </p>

                <div className="min-a:text-2xl max-a:text-xl pt-3 pb-7 border-t-2 border-slate-700">Keep learning,
                    keep practicing, and most importantly, keep building! ✨</div>
            </div>
        </div>
    )
}