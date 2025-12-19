// import resuable components
import CodeBlock from "./Components/CodeBlock";
import NoteBox from "./Components/NoteBox";
import ImageBlock from "./Components/ImageBlock";

// Content for each page

// Get started pages
// page 1
export function Page1() {
    return (
        <div className="min-h-full w-full lg:px-6 md:px-4 px-2 pb-10">

            {/* PAGE TITLE */}
            <h1 className="font-bold tracking-tight text-slate-100 pt-6 pb-6 border-b border-slate-800 min-lg:text-8xl max-lg:text-7xl
            max-md:text-6xl max-sm:text-5xl">
                SQL Introduction
            </h1>

            <div className="text-slate-300 pt-8 space-y-10">

                {/* SECTION: WHAT IS SQL */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        What is SQL?
                    </h2>

                    <div className="mt-6 space-y-4 leading-relaxed min-a:text-2xl max-a:text-xl">
                        <p>
                            SQL stands for{" "}
                            <span className="font-semibold text-slate-100">
                                Structured Query Language
                            </span>.
                        </p>

                        <p>
                            SQL is <span className="font-semibold">not a database</span>.
                            Instead, it is a standard language used to communicate with databases.
                        </p>

                        <p>
                            It is mainly used with{" "}
                            <span className="font-semibold text-slate-100">
                                relational databases
                            </span>{" "}
                            where data is stored in tables consisting of rows and columns.
                        </p>

                        <p>
                            SQL allows us to efficiently{" "}
                            <span className="font-semibold">store</span>,{" "}
                            <span className="font-semibold">manipulate</span>, and{" "}
                            <span className="font-semibold">retrieve</span> data.
                        </p>
                    </div>
                </section>

                {/* SECTION: CRUD */}
                <section>
                    <p className="min-a:text-2xl max-a:text-xl">
                        Most SQL operations revolve around{" "}
                        <span className="font-semibold text-slate-100">CRUD</span> actions:
                    </p>

                    <ul className="mt-4 space-y-3 min-a:text-2xl max-a:text-xl list-disc list-inside">
                        <li>
                            <span className="font-semibold text-emerald-400">Create</span> – Create
                            databases, tables, and insert new data.
                        </li>
                        <li>
                            <span className="font-semibold text-emerald-400">Read</span> – Retrieve
                            data from databases.
                        </li>
                        <li>
                            <span className="font-semibold text-emerald-400">Update</span> – Modify
                            existing records.
                        </li>
                        <li>
                            <span className="font-semibold text-emerald-400">Delete</span> – Remove
                            data, tables, or entire databases.
                        </li>
                    </ul>
                </section>

                {/* NOTE BOX */}
                <NoteBox>
                    SQL keywords are <span className="font-semibold">not case-sensitive</span>.
                    This means{" "}
                    <code className="mx-1 px-2 py-0.5 rounded bg-slate-900 text-emerald-300 font-mono">
                        select
                    </code>
                    and{" "}
                    <code className="mx-1 px-2 py-0.5 rounded bg-slate-900 text-emerald-300 font-mono">
                        SELECT
                    </code>
                    behave the same.
                </NoteBox>

                {/* SECTION: SQL VS MYSQL */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        SQL vs MySQL
                    </h2>

                    <div className="mt-5 space-y-3 min-a:text-2xl max-a:text-xl leading-relaxed">
                        <p>
                            <span className="font-semibold text-slate-100">SQL</span> is a
                            programming language used to query and manage relational databases.
                        </p>

                        <p>
                            <span className="font-semibold text-slate-100">MySQL</span> is a popular{" "}
                            <span className="font-semibold">
                                Relational Database Management System (RDBMS)
                            </span>{" "}
                            that uses SQL to store, manage, and retrieve data.
                        </p>
                    </div>
                </section>

                {/* NEXT PAGE */}
                <section className="pt-6 border-t border-slate-800 min-a:text-2xl max-a:text-xl">
                    <p>
                        Now that you understand what SQL is, let’s move forward and explore{" "}
                        <span className="font-semibold text-slate-100">
                            Database Management Systems (DBMS)
                        </span>{" "}
                        in the next section.
                    </p>
                </section>

            </div>
        </div>
    );
}

// page 2
export function Page2() {
    return (
        <div className="min-h-full w-full lg:px-6 md:px-4 px-2 pb-10">

            {/* PAGE TITLE */}
            <h1 className="font-bold tracking-tight text-slate-100 pt-6 pb-6 border-b border-slate-800 min-lg:text-8xl max-lg:text-7xl\
            max-md:text-6xl max-sm:text-5xl">
                DBMS
            </h1>

            <div className="text-slate-300 pt-8 space-y-12">

                {/* WHAT IS DATABASE */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        What is a Database?
                    </h2>

                    <ul className="mt-6 space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside">
                        <li>
                            A database is a structured collection of{" "}
                            <span className="font-semibold text-slate-100">
                                interrelated data
                            </span>.
                        </li>
                        <li>
                            It stores information in a way that allows easy{" "}
                            <span className="font-semibold">access</span>,{" "}
                            <span className="font-semibold">management</span>, and{" "}
                            <span className="font-semibold">updates</span> using digital systems.
                        </li>
                    </ul>
                </section>

                {/* WHAT IS DBMS */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        What is DBMS?
                    </h2>

                    <ul className="mt-6 space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside">
                        <li>
                            DBMS stands for{" "}
                            <span className="font-semibold text-slate-100">
                                Database Management System
                            </span>.
                        </li>
                        <li>
                            It is software used to{" "}
                            <span className="font-semibold">
                                create, manage, organize, and control access
                            </span>{" "}
                            to databases.
                        </li>
                        <li>
                            A DBMS provides a structured way to{" "}
                            <span className="font-semibold">
                                store, retrieve, update, and delete
                            </span>{" "}
                            data efficiently.
                        </li>
                    </ul>
                </section>

                {/* TYPES OF DATABASES */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        Types of Databases
                    </h2>

                    <div className="mt-8 space-y-10 min-a:text-2xl max-a:text-xl">

                        {/* RELATIONAL */}
                        <div>
                            <h3 className="font-semibold text-slate-100 text-2xl">
                                Relational Databases (RDBMS)
                            </h3>

                            <ul className="mt-4 space-y-3 list-disc list-inside">
                                <li>
                                    Data is stored in{" "}
                                    <span className="font-semibold">
                                        tables (rows and columns)
                                    </span>.
                                </li>
                                <li>
                                    Information follows a structured and consistent schema.
                                </li>
                                <li>
                                    Examples:{" "}
                                    <span className="font-semibold">
                                        MySQL, PostgreSQL, Oracle, SQL Server
                                    </span>.
                                </li>
                            </ul>

                            {/* NOTE */}

                            <NoteBox>
                                SQL is used to interact with relational databases.
                            </NoteBox>
                        </div>

                        {/* NON RELATIONAL */}
                        <div>
                            <h3 className="font-semibold text-slate-100 text-2xl">
                                Non-Relational Databases (NoSQL)
                            </h3>

                            <ul className="mt-4 space-y-3 list-disc list-inside">
                                <li>
                                    Do not rely on traditional tables for storing data.
                                </li>
                                <li>
                                    Data can be stored as{" "}
                                    <span className="font-semibold">
                                        key-value pairs, documents, graphs, or wide-columns
                                    </span>.
                                </li>
                                <li>
                                    Example:{" "}
                                    <span className="font-semibold">
                                        MongoDB
                                    </span>.
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>

                {/* NEXT PAGE */}
                <section className="pt-6 border-t border-slate-800 min-a:text-2xl max-a:text-xl">
                    <p>
                        Now that you understand what a DBMS is, let’s explore{" "}
                        <span className="font-semibold text-slate-100">
                            MySQL
                        </span>{" "}
                        — a popular relational database system we’ll use to learn SQL
                        in the next section.
                    </p>
                </section>

            </div>
        </div>
    );
}

// page 3
export function Page3() {
    return (
        <div className="min-h-full w-full lg:px-6 md:px-4 px-2 pb-10">

            {/* PAGE TITLE */}
            <h1 className="font-bold tracking-tight text-slate-100 pt-6 pb-6 border-b border-slate-800
            min-lg:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl">
                MySQL
            </h1>

            <div className="text-slate-300 pt-8 space-y-12">

                {/* SECTION: WHAT IS MYSQL */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        What is MySQL?
                    </h2>

                    <ul className="mt-6 space-y-4 leading-relaxed min-a:text-2xl max-a:text-xl list-disc list-inside">
                        <li>
                            MySQL is an{" "}
                            <span className="font-semibold text-slate-100">
                                open-source Relational Database Management System (RDBMS)
                            </span>.
                        </li>

                        <li>
                            It uses{" "}
                            <span className="font-semibold text-slate-100">
                                SQL (Structured Query Language)
                            </span>{" "}
                            to manage and manipulate data.
                        </li>

                        <li>
                            In this course, we’ll use MySQL to practice and understand SQL concepts
                            in a{" "}
                            <span className="font-semibold">hands-on</span> manner.
                        </li>
                    </ul>
                </section>

                {/* SECTION: INSTALLING MYSQL */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        Installing MySQL
                    </h2>

                    <p className="mt-5 leading-relaxed min-a:text-2xl max-a:text-xl">
                        If MySQL is not installed on your system yet, you can download it directly
                        from the official website:
                    </p>

                    <a
                        href="https://www.mysql.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 font-semibold text-emerald-400 hover:text-emerald-300 transition min-a:text-2xl max-a:text-xl"
                    >
                        → Download MySQL
                    </a>

                    {/* NOTE BOX */}
                    <NoteBox>
                        While installing, make sure to properly set up both{" "}
                        <span className="font-semibold">MySQL Server</span> and{" "}
                        <span className="font-semibold">MySQL Workbench</span>.
                        Following a video tutorial is highly recommended.
                    </NoteBox>
                </section>

                {/* SECTION: MYSQL WORKBENCH */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        What is MySQL Workbench?
                    </h2>

                    <ul className="mt-6 space-y-4 leading-relaxed min-a:text-2xl max-a:text-xl list-disc list-inside">
                        <li>
                            MySQL Workbench is an{" "}
                            <span className="font-semibold text-slate-100">IDE</span>{" "}
                            used to work with MySQL databases.
                        </li>

                        <li>
                            It provides a graphical interface to{" "}
                            <span className="font-semibold">
                                write, execute, and manage SQL queries
                            </span>.
                        </li>

                        <li>
                            Throughout this course, we’ll use MySQL Workbench to run all our SQL
                            commands.
                        </li>
                    </ul>

                    {/* IMAGE */}
                    <ImageBlock
                        src="/images/workbench.png"
                        alt="MySQL Workbench Interface"
                    />
                </section>

                {/* NEXT PAGE */}
                <section className="pt-6 border-t border-slate-800 min-a:text-2xl max-a:text-xl">
                    <p>
                        You’re all set! 🚀
                        Let’s write our first{" "}
                        <span className="font-semibold text-slate-100">
                            SQL command
                        </span>{" "}
                        on the next page.
                    </p>
                </section>

            </div>
        </div>
    );
}

// Learn sql pages
// page 4
export function Page4() {
    return (
        <div className="min-h-full w-full lg:px-6 md:px-4 px-2 pb-10">

            {/* PAGE TITLE */}
            <h1 className="font-bold tracking-tight text-slate-100 pt-6 pb-6 border-b border-slate-800
            min-lg:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl">
                Create Database
            </h1>

            <div className="text-slate-300 pt-8 space-y-12">

                {/* SECTION: INTRO */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        Creating Your First Database
                    </h2>

                    <ul className="mt-6 space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            To create a database in MySQL, we use the following syntax:
                        </li>
                    </ul>

                    <CodeBlock>
                        CREATE DATABASE database_name;
                    </CodeBlock>
                </section>

                {/* SECTION: EXAMPLE */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Let’s create a database named{" "}
                            <span className="font-semibold text-slate-100">xyz</span>:
                        </li>
                    </ul>

                    <CodeBlock>
                        CREATE DATABASE xyz;
                    </CodeBlock>

                    <ul className="mt-4 space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside">
                        <li>
                            Select the query and click the{" "}
                            <span className="font-semibold">second lightning (⚡) icon</span>
                            in MySQL Workbench to execute it.
                        </li>
                    </ul>

                    <NoteBox>
                        The second lightning icon runs only the selected query,
                        while the first one executes the entire file.
                        Use the first icon only when the file hasn’t been executed before.
                    </NoteBox>
                </section>

                {/* SECTION: VERIFY DATABASE */}
                <section>
                    <ul className="min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Refresh the{" "}
                            <span className="font-semibold text-slate-100">Schemas</span>{" "}
                            panel to see your newly created database.
                        </li>
                    </ul>

                    <ImageBlock
                        src="/images/img1.png"
                        alt="Workbench schema preview"
                    />
                </section>

                {/* SECTION: USE DATABASE */}
                <section>
                    <ul className="min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed space-y-4">
                        <li>
                            🎉 Congratulations! Your database is created successfully.
                        </li>
                        <li>
                            To start using a database, use the following syntax:
                        </li>
                    </ul>

                    <CodeBlock>
                        USE database_name;
                    </CodeBlock>

                    <ul className="mt-4 min-a:text-2xl max-a:text-xl list-disc list-inside">
                        <li>
                            Activate the{" "}
                            <span className="font-semibold text-slate-100">xyz</span>{" "}
                            database:
                        </li>
                    </ul>

                    <CodeBlock>
                        USE xyz;
                    </CodeBlock>

                    <ImageBlock
                        src="/images/img2.png"
                        alt="Workbench active database"
                    />

                    <NoteBox>
                        If you close and reopen MySQL Workbench, you must run{" "}
                        <span className="font-semibold">USE xyz;</span> again
                        to activate the database.
                    </NoteBox>
                </section>

                {/* SECTION: DROP DATABASE */}
                <section>
                    <ul className="min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed space-y-4">
                        <li>
                            To delete a database, use the following syntax:
                        </li>
                    </ul>

                    <CodeBlock>
                        DROP DATABASE database_name;
                    </CodeBlock>

                    <ul className="mt-4 min-a:text-2xl max-a:text-xl list-disc list-inside">
                        <li>
                            Delete the{" "}
                            <span className="font-semibold text-slate-100">xyz</span>{" "}
                            database:
                        </li>
                    </ul>

                    <CodeBlock>
                        DROP DATABASE xyz;
                    </CodeBlock>
                </section>

                {/* NEXT PAGE */}
                <section className="pt-6 border-t border-slate-800 min-a:text-2xl max-a:text-xl">
                    <p>
                        Up next — let’s explore the most important part of a database:{" "}
                        <span className="font-semibold text-slate-100">Tables</span> 🚀
                    </p>
                </section>

            </div>
        </div>
    );
}

// page 5
export function Page5() {
    return (
        <div className="min-h-full w-full lg:px-6 md:px-4 px-2 pb-10">

            {/* PAGE TITLE */}
            <h1 className="font-bold tracking-tight text-slate-100 pt-6 pb-6 border-b border-slate-800 min-lg:text-8xl max-lg:text-7xl
            max-md:text-6xl max-sm:text-5xl">
                Create Table
            </h1>

            <div className="text-slate-300 pt-8 space-y-12">

                {/* SECTION: INTRO */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        Creating Your First Table
                    </h2>

                    <ul className="mt-6 space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            To create a table in MySQL, we use the following syntax:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`CREATE TABLE table_name (
  column_name1 datatype constraint,
  column_name2 datatype constraint,
  column_name3 datatype constraint
);`}
                    </CodeBlock>
                </section>

                {/* SECTION: REAL EXAMPLE */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            You can add as many columns as required based on your data needs.
                        </li>
                        <li>
                            Let’s create our first real table in MySQL Workbench:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`CREATE TABLE student (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  age INT NOT NULL
);`}
                    </CodeBlock>

                    <ul className="mt-4 space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside">
                        <li>
                            Select the full query and execute it using the{" "}
                            <span className="font-semibold">second lightning (⚡) icon</span>.
                        </li>
                        <li>
                            Refresh the{" "}
                            <span className="font-semibold text-slate-100">Schemas</span>{" "}
                            panel to see your newly created table.
                        </li>
                    </ul>

                    <ImageBlock
                        src="/images/img3.png"
                        alt="Workbench preview of created table"
                    />
                </section>

                {/* SECTION: CLARIFICATION */}
                <section>
                    <ul className="min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            You might be wondering what terms like{" "}
                            <span className="font-semibold">INT</span>,{" "}
                            <span className="font-semibold">VARCHAR(50)</span>,{" "}
                            <span className="font-semibold">NOT NULL</span>, and{" "}
                            <span className="font-semibold">PRIMARY KEY</span>{" "}
                            mean.
                        </li>
                        <li>
                            Don’t worry — we’ll explore all of these concepts in detail
                            in the upcoming sections.
                        </li>
                    </ul>
                </section>

                {/* NEXT PAGE */}
                <section className="pt-6 border-t border-slate-800 min-a:text-2xl max-a:text-xl">
                    <p>
                        Great! 🎉 Your first table is ready.
                        Up next — let’s understand the different{" "}
                        <span className="font-semibold text-slate-100">
                            data types
                        </span>{" "}
                        used in SQL.
                    </p>
                </section>

            </div>
        </div>
    );
}

// page 6
export function Page6() {
    return (
        <div className="min-h-full w-full lg:px-6 md:px-4 px-2 pb-10">

            {/* PAGE TITLE */}
            <h1 className="font-bold tracking-tight text-slate-100 pt-6 pb-6 border-b border-slate-800 min-lg:text-8xl max-lg:text-7xl
            max-md:text-6xl max-sm:text-5xl">
                SQL Datatypes
            </h1>

            <div className="text-slate-300 pt-8 space-y-12">

                {/* SECTION: INTRO */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        Understanding SQL Data Types
                    </h2>

                    <p className="mt-6 leading-relaxed min-a:text-2xl max-a:text-xl">
                        SQL data types define the kind of data that can be stored in a table column.
                        Choosing the correct data type ensures efficient storage, accuracy, and
                        better query performance.
                    </p>

                    <p className="mt-4 min-a:text-2xl max-a:text-xl">
                        Below are the most commonly used SQL data types, grouped by category.
                    </p>
                </section>

                {/* SECTION: NUMERIC */}
                <section>
                    <h3 className="font-semibold text-slate-100 min-md:text-3xl max-md:text-2xl">
                        Numeric Data Types
                    </h3>

                    <ul className="mt-4 space-y-3 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li><span className="font-semibold">INT</span> – Integer values (e.g. 1, 100, -23)</li>
                        <li><span className="font-semibold">SMALLINT</span> – Smaller range of integers</li>
                        <li><span className="font-semibold">BIGINT</span> – Larger range of integers</li>
                        <li><span className="font-semibold">DECIMAL(p,s)</span> – Fixed-point numbers</li>
                        <li><span className="font-semibold">FLOAT / REAL</span> – Approximate floating-point values</li>
                    </ul>
                </section>

                {/* SECTION: STRING */}
                <section>
                    <h3 className="font-semibold text-slate-100 min-md:text-3xl max-md:text-2xl">
                        Character / String Data Types
                    </h3>

                    <ul className="mt-4 space-y-3 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li><span className="font-semibold">CHAR(n)</span> – Fixed-length string</li>
                        <li><span className="font-semibold">VARCHAR(n)</span> – Variable-length string</li>
                        <li><span className="font-semibold">TEXT</span> – Large variable-length text</li>
                    </ul>
                </section>

                {/* SECTION: DATE TIME */}
                <section>
                    <h3 className="font-semibold text-slate-100 min-md:text-3xl max-md:text-2xl">
                        Date and Time Data Types
                    </h3>

                    <ul className="mt-4 space-y-3 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li><span className="font-semibold">DATE</span> – Stores date (YYYY-MM-DD)</li>
                        <li><span className="font-semibold">TIME</span> – Stores time (HH:MM:SS)</li>
                        <li><span className="font-semibold">DATETIME</span> – Stores date and time</li>
                        <li><span className="font-semibold">TIMESTAMP</span> – Date & time with timezone handling</li>
                    </ul>
                </section>

                {/* SECTION: BOOLEAN */}
                <section>
                    <h3 className="font-semibold text-slate-100 min-md:text-3xl max-md:text-2xl">
                        Boolean Data Type
                    </h3>

                    <ul className="mt-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li><span className="font-semibold">BOOLEAN</span> – Stores TRUE or FALSE</li>
                    </ul>
                </section>

                {/* SECTION: BINARY */}
                <section>
                    <h3 className="font-semibold text-slate-100 min-md:text-3xl max-md:text-2xl">
                        Binary Data Types
                    </h3>

                    <ul className="mt-4 space-y-3 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li><span className="font-semibold">BINARY(n)</span> – Fixed-length binary data</li>
                        <li><span className="font-semibold">VARBINARY(n)</span> – Variable-length binary data</li>
                        <li><span className="font-semibold">BLOB</span> – Binary Large Object (images, files, etc.)</li>
                    </ul>
                </section>

                {/* NEXT PAGE */}
                <section className="pt-6 border-t border-slate-800 min-a:text-2xl max-a:text-xl">
                    <p>
                        Understanding data types is essential for building efficient and reliable databases.
                        Up next — let’s learn about{" "}
                        <span className="font-semibold text-slate-100">
                            SQL commands
                        </span> 🚀
                    </p>
                </section>

            </div>
        </div>
    );
}

// page 7
export function Page7() {
    return (
        <div className="min-h-full w-full lg:px-6 md:px-4 px-3">
            {/* Page Title */}
            <h1 className="font-bold tracking-tight text-slate-100 pt-6 pb-6 border-b border-slate-800 min-lg:text-8xl max-lg:text-7xl
            max-md:text-6xl max-sm:text-5xl">
                SQL Commands
            </h1>

            <div className="text-gray-200 pt-8 space-y-10">
                {/* Intro */}
                <div className="font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">
                    Understanding the Types of SQL Commands
                </div>

                {/* DDL */}
                <div className="space-y-4">
                    <div className="font-semibold text-slate-100 min-md:text-3xl max-md:text-2xl">
                        DDL (Data Definition Language)
                    </div>
                    <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 space-y-3">
                        <li>
                            Used for defining and managing the structure of database objects such as
                            tables, indexes, and constraints.
                        </li>
                        <li>
                            Helps create, modify, and delete database structures.
                        </li>
                        <li>
                            Common DDL commands:
                            <ul className="list-disc pl-6 pt-3 space-y-2">
                                <li className="list-inside">CREATE TABLE</li>
                                <li className="list-inside">ALTER TABLE</li>
                                <li className="list-inside">DROP TABLE</li>
                                <li className="list-inside">TRUNCATE TABLE</li>
                                <li className="list-inside">CREATE INDEX</li>
                                <li className="list-inside">DROP INDEX</li>
                                <li className="list-inside">CREATE CONSTRAINT</li>
                                <li className="list-inside">DROP CONSTRAINT</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                {/* DQL */}
                <div className="space-y-4">
                    <div className="font-semibold text-slate-100 min-md:text-3xl max-md:text-2xl">
                        DQL (Data Query Language)
                    </div>
                    <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 space-y-3">
                        <li>
                            Focuses on retrieving data from one or more tables.
                        </li>
                        <li>
                            The core command is <span className="font-bold">SELECT</span>, used to extract
                            specific records.
                        </li>
                        <li>
                            Common DQL commands and clauses:
                            <ul className="list-disc pl-6 pt-3 space-y-2">
                                <li className="list-inside">SELECT</li>
                                <li className="list-inside">WHERE</li>
                                <li className="list-inside">AND / OR / NOT</li>
                                <li className="list-inside">DISTINCT</li>
                                <li className="list-inside">LIKE</li>
                                <li className="list-inside">IN</li>
                                <li className="list-inside">BETWEEN</li>
                                <li className="list-inside">IS NULL</li>
                                <li className="list-inside">AS</li>
                                <li className="list-inside">ORDER BY</li>
                                <li className="list-inside">GROUP BY</li>
                                <li className="list-inside">
                                    Aggregate Functions (COUNT, SUM, AVG)
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                {/* DML */}
                <div className="space-y-4">
                    <div className="font-semibold text-slate-100 min-md:text-3xl max-md:text-2xl">
                        DML (Data Manipulation Language)
                    </div>
                    <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 space-y-3">
                        <li>
                            Used to manage data stored inside tables.
                        </li>
                        <li>
                            Allows inserting, updating, and deleting records to maintain data accuracy.
                        </li>
                        <li>
                            Common DML commands:
                            <ul className="list-disc pl-6 pt-3 space-y-2">
                                <li className="list-inside">INSERT</li>
                                <li className="list-inside">UPDATE</li>
                                <li className="list-inside">DELETE</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                {/* DCL */}
                <div className="space-y-4">
                    <div className="font-semibold text-slate-100 min-md:text-3xl max-md:text-2xl">
                        DCL (Data Control Language)
                    </div>
                    <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 space-y-3">
                        <li>
                            Manages user access rights and permissions in a database.
                        </li>
                        <li>
                            Essential for database security and controlled access.
                        </li>
                        <li>
                            Common DCL commands:
                            <ul className="list-disc pl-6 pt-3 space-y-2">
                                <li className="list-inside">GRANT</li>
                                <li className="list-inside">REVOKE</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                {/* TCL */}
                <div className="space-y-4">
                    <div className="font-semibold text-slate-100 min-md:text-3xl max-md:text-2xl">
                        TCL (Transaction Control Language)
                    </div>
                    <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 space-y-3">
                        <li>
                            Controls database transactions to ensure data integrity.
                        </li>
                        <li>
                            Helps commit or roll back changes based on transaction success.
                        </li>
                        <li>
                            Common TCL commands:
                            <ul className="list-disc pl-6 pt-3 space-y-2">
                                <li className="list-inside">COMMIT</li>
                                <li className="list-inside">ROLLBACK</li>
                                <li className="list-inside">SAVEPOINT</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                {/* Footer Note */}
                <div className="min-a:text-2xl max-a:text-xl pt-6 pb-8 border-t-2 border-slate-700">
                    Now let’s explore more <span className="font-bold">database-related queries</span> on the next page.
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
                    <li className="pt-5">
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
                    <li className="pt-5">
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

// page 9
export function Page9() {
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
                    <li className="pt-5">
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
                    <li className="pt-5">
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

// page 10
export function Page10() {
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
                    <li className="pt-5"><span className="font-bold">Foreign key : </span>
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

// page 11
export function Page11() {
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
                    <li className="pt-5"><span className="font-bold">FOREIGN KEY : </span>
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
                    <li className="pt-5"><span className="font-bold">DEFAULT : </span>
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
                    <li className="pt-5"><span className="font-bold">CHECK : </span>
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
                    <li className="pt-5">Let's take another example :</li>
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

// page 12
export function Page12() {
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

                <div className="min-a:text-2xl max-a:text-xl pt-4 pb-2">
                    Let’s break it down:
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
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
                    <li className="pt-5">As you can see, only the id and name columns are displayed.</li>
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

// page 13
export function Page13() {
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
                    <li className="pt-5">Now you’ve learned how to filter data using the WHERE clause.</li>
                    <li className="pt-3">You can combine it with different types of operators to define complex conditions.</li>
                </ul>

                <div className="min-a:text-2xl max-a:text-xl pt-3 pb-7 border-t-2 border-slate-700">
                    Up next, we’ll learn about SQL <span className="font-bold">Operators</span> in detail.
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
            min-lg:text-8xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-a:text-5xl">SQL Operators</h1>

            <div className="text-gray-200 pt-5">
                <div className="font-semibold min-md:text-4xl max-md:text-4xl max-sm:text-3xl">
                    Let’s learn about different types of SQL Operators</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-5">
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

                <div className="font-semibold min-md:text-3xl max-md:text-3xl max-sm:text-3xl">
                    Let’s explore some Logical Operators with examples:</div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
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
                    <li className="pt-5 font-semibold">2. Logical OR (returns rows where at least one condition is true):</li>
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
                    <li className="pt-5 font-semibold">3. Logical BETWEEN (returns rows within a given range):</li>
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
                    <li className="pt-5 font-semibold">4. Logical IN (returns rows that match any value from a list):</li>
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
                    <li className="pt-5 font-semibold">5. Logical NOT (negates the given condition):</li>
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

// page 15
export function Page15() {
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
                    <li className="pt-5">As you can see, there’s a clear difference in the output.</li>
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

// page 16
export function Page16() {
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
                    <li className="pt-5">As you can see, the rows are sorted alphabetically by city in ascending order.</li>
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

// page 17
export function Page17() {
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
                    <li className="pt-5">
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
                    <li className="pt-5">
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

// page 18
export function Page18() {
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

// page 19
export function Page19() {
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
                    <li className="pt-5">
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

// page 20
export function Page20() {
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

// page 21
export function Page21() {
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
                    <li className="pt-3">Let's understand it with an example :</li>
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
                    <li className="pt-3">Let's understand it with an example :</li>
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
                    <li className="pt-5"><span className="font-bold">Alter : </span>
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
                    <li className="pt-3">Let's understand it with an example :</li>
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
                    <li className="pt-5"><span className="font-bold">DROP Column :</span> used to delete a column</li>
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
                    <li className="pt-3">Let's understand it with an example :</li>
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
                    <li className="pt-5"><span className="font-bold">RENAME Table :</span> used to rename a table.</li>
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
                    <li className="pt-3">Let's understand it with an example :</li>
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
                    <li className="pt-5"><span className="font-bold">CHANGE </span>Column (rename)</li>
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
                    <li className="pt-3">Let's understand it with an example :</li>
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
                    <li className="pt-5"><span className="font-bold">MODIFY </span>Column (modify datatype/ constraint)</li>
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
                    <li className="pt-3">Let's understand it with an example :</li>
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
                    <li className="pt-5"><span className="font-bold">TRUNCATE : </span>to delete table's data</li>
                    <li className="pt-3">We use the following syntax :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 min-xl:w-[800px]
                max-xl:w-full max-lg:w-full">
                    TRUNCATE table_name;
                </div>

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-3">Let's understand it with an example :</li>
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

// page 22
export function Page22() {
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
                    <li className="pt-5">Now let's insert sample data:</li>
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
                    <li className="pt-5">Now let's insert sample data:</li>
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
                    <li className="pt-5">Now let's dive into the types of joins in SQL:</li>
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
                    <li className="pt-5"><span className="font-bold">Left Join : </span>
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
                    <li className="pt-5"><span className="font-bold">Right Join : </span>
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
                    <li className="pt-5"><span className="font-bold">Full Join : </span>
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
                    <li className="pt-5">Before learning Self join we have to make another sample table for it's better
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
                    <li className="pt-5">Now let's insert sample data:</li>
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
                    <li className="pt-5">Now let's dive into self join:</li>
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

                <ul className="min-a:text-2xl max-a:text-xl list-disc pl-6 pb-2">
                    <li className="pt-5">It is used to combine the result of the set of two or more SELECT statements.</li>
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

// page 23
export function Page23() {
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
                    <li className="pt-5">Let's understand Sub-queries with some examples:</li>
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
                    <li className="pt-5"><span className="font-bold">Example 2:</span> get names of all students who
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

// page 24
export function Page24() {
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
// page 25
export function Page25() {
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
                    <a
                        href="https://github.com/TonyStark-19/SQL-Projects"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-400 italic underline"
                    >
                        sql-projects
                    </a>
                    <br />
                    <span className="text-sm text-slate-400">
                        This is the main repository containing all of my SQL-based learning projects and practice files.
                    </span>
                </p>

                <p>
                    📘 <span className="text-slate-400 italic">SQL Syntax Examples:</span>{' '}
                    <a
                        href="https://github.com/TonyStark-19/SQL-Projects/blob/main/SQL-Syntax.sql"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-400 italic underline"
                    >
                        sql_syntax.sql
                    </a>
                    <br />
                    <span className="text-sm text-slate-400">
                        A compilation of commonly used SQL commands and syntax examples — great for quick revision or reference.
                    </span>
                </p>

                <p>
                    📁 <span className="text-slate-400 italic">Student Management System Project:</span>{' '}
                    <a
                        href="https://github.com/TonyStark-19/SQL-Projects/blob/main/Project1.sql"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-400 italic underline"
                    >
                        student-management-system4
                    </a>
                    <br />
                    <span className="text-sm text-slate-400">
                        A simple database project that manages student records using SQL queries — including table
                        creation, data insertion, updates, and filtering.
                    </span>
                </p>

                <div className="min-a:text-2xl max-a:text-xl pt-3 pb-7 border-t-2 border-slate-700">
                    Stay tuned! More projects will be published here as they are completed. 🚀
                </div>
            </div>
        </div>
    )
}

// page 26
export function Page26() {
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