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
        <div className="min-h-full w-full lg:px-6 md:px-4 px-2 pb-10">

            {/* PAGE TITLE */}
            <h1 className="font-bold tracking-tight text-slate-100 pt-6 pb-6 border-b border-slate-800
            min-lg:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl">
                Database Related Queries
            </h1>

            <div className="text-slate-300 pt-8 space-y-12">

                {/* SECTION: INTRO */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        Common SQL Queries for Databases
                    </h2>

                    <ul className="mt-6 space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            In the previous sections, we created our first database named{" "}
                            <span className="font-semibold text-slate-100">xyz</span>.
                        </li>
                        <li>
                            Let’s now explore the most commonly used SQL queries for managing databases.
                        </li>
                    </ul>
                </section>

                {/* SECTION: CREATE DATABASE */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            To create a database, we use the following command:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`CREATE DATABASE xyz;`}
                    </CodeBlock>

                    <ul className="mt-4 space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside">
                        <li>
                            If the database already exists, this command may throw an error.
                        </li>
                        <li>
                            To safely avoid such errors, it’s recommended to use:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`CREATE DATABASE IF NOT EXISTS xyz;`}
                    </CodeBlock>

                    <ul className="mt-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            This command checks whether the database exists before creating it.
                        </li>
                    </ul>
                </section>

                {/* SECTION: DROP DATABASE */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            To delete an existing database, use:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`DROP DATABASE xyz;`}
                    </CodeBlock>

                    <ul className="mt-4 space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside">
                        <li>
                            Similar to creation, this command may cause errors if the database does not exist.
                        </li>
                        <li>
                            A safer version is:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`DROP DATABASE IF EXISTS xyz;`}
                    </CodeBlock>

                    <ul className="mt-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            This prevents errors by deleting the database only if it exists.
                        </li>
                    </ul>
                </section>

                {/* SECTION: SHOW DATABASES */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            To view all databases available in MySQL, use:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`SHOW DATABASES;`}
                    </CodeBlock>

                    <ImageBlock
                        src="/images/img20.png"
                        alt="MySQL Workbench showing databases"
                    />

                    <ul className="mt-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            This displays all databases created or present in your MySQL server.
                        </li>
                    </ul>
                </section>

                {/* SECTION: SHOW TABLES */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            To view all tables inside the currently selected database, use:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`SHOW TABLES;`}
                    </CodeBlock>

                    <ImageBlock
                        src="/images/img21.png"
                        alt="MySQL Workbench showing tables"
                    />

                    <ul className="mt-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            This command lists all tables and views created inside the{" "}
                            <span className="font-semibold text-slate-100">xyz</span> database.
                        </li>
                    </ul>
                </section>

                {/* NEXT PAGE */}
                <section className="pt-6 border-t border-slate-800 min-a:text-2xl max-a:text-xl">
                    <p>
                        Awesome! 🚀 You now know how to manage databases using SQL.
                        Up next — we’ll dive deeper into{" "}
                        <span className="font-semibold text-slate-100">
                            table-related queries
                        </span>.
                    </p>
                </section>

            </div>
        </div>
    );
}

// page 9
export function Page9() {
    return (
        <div className="min-h-full w-full lg:px-6 md:px-4 px-2 pb-10">

            {/* PAGE TITLE */}
            <h1 className="font-bold tracking-tight text-slate-100 pt-6 pb-6 border-b border-slate-800
            min-lg:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl">
                Table Related Queries
            </h1>

            <div className="text-slate-300 pt-8 space-y-12">

                {/* SECTION: INTRO */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        Working with Tables in SQL
                    </h2>

                    <ul className="mt-6 space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Earlier, we created our first table named{" "}
                            <span className="font-semibold text-slate-100">student</span>.
                        </li>
                        <li>
                            Now let’s learn how to view, insert, and retrieve data from a table.
                        </li>
                    </ul>
                </section>

                {/* SECTION: CREATE TABLE (RECAP) */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            This is the command we used to create the table:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`CREATE TABLE student (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  age INT NOT NULL
);`}
                    </CodeBlock>
                </section>

                {/* SECTION: VIEW TABLE DATA */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            To view all records from a table, we use:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`SELECT * FROM student;`}
                    </CodeBlock>

                    <ImageBlock
                        src="/images/img4.png"
                        alt="Empty student table in MySQL Workbench"
                    />

                    <ul className="mt-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            The result grid is empty because no data has been inserted yet.
                        </li>
                    </ul>
                </section>

                {/* SECTION: INSERT DATA */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            To insert data into a table, we use the following syntax:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`INSERT INTO table_name
(column_name1, column_name2)
VALUES
(value1, value2),
(value3, value4);`}
                    </CodeBlock>

                    <ul className="mt-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Let’s apply this using a real example:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`INSERT INTO student
(id, name, age)
VALUES
(101, "karan", 20),
(102, "arjun", 21);`}
                    </CodeBlock>

                    <ul className="mt-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            If you see a green tick in the Action Output tab, the data was inserted successfully.
                        </li>
                    </ul>
                </section>

                {/* SECTION: VIEW INSERTED DATA */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Run the SELECT query again to verify the inserted data:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`SELECT * FROM student;`}
                    </CodeBlock>

                    <ImageBlock
                        src="/images/img5.png"
                        alt="Student table with inserted data"
                    />

                    <ul className="mt-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            You can now see the records stored inside the table.
                        </li>
                    </ul>
                </section>

                {/* CONCLUSION */}
                <section>
                    <ul className="min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Congratulations! 🎉 You’ve learned how to create a table, insert data, and retrieve it using SQL.
                        </li>
                    </ul>
                </section>

                {/* NEXT PAGE */}
                <section className="pt-6 border-t border-slate-800 min-a:text-2xl max-a:text-xl">
                    <p>
                        Up next — we’ll explore an important concept in SQL:{" "}
                        <span className="font-semibold text-slate-100">
                            SQL Keys
                        </span>.
                    </p>
                </section>

            </div>
        </div>
    );
}

// page 10
export function Page10() {
    return (
        <div className="min-h-full w-full lg:px-6 md:px-4 px-2 pb-10">

            {/* PAGE TITLE */}
            <h1 className="font-bold tracking-tight text-slate-100 pt-6 pb-6 border-b border-slate-800
            min-lg:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl">
                SQL Keys
            </h1>

            <div className="text-slate-300 pt-8 space-y-12">

                {/* SECTION: INTRO */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        Types of Keys in SQL
                    </h2>

                    <ul className="mt-6 space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Keys are used in SQL to uniquely identify records and create relationships between tables.
                        </li>
                        <li>
                            The two most commonly used keys are{" "}
                            <span className="font-semibold text-slate-100">Primary Key</span> and{" "}
                            <span className="font-semibold text-slate-100">Foreign Key</span>.
                        </li>
                    </ul>
                </section>

                {/* SECTION: PRIMARY KEY */}
                <section>
                    <h3 className="font-semibold text-slate-100 min-md:text-3xl max-md:text-2xl">
                        Primary Key
                    </h3>

                    <ul className="mt-6 space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            A <span className="font-semibold">Primary Key</span> uniquely identifies each row in a table.
                        </li>
                        <li>
                            A table can have only <span className="font-semibold">one</span> primary key.
                        </li>
                        <li>
                            Primary key values must be <span className="font-semibold">unique</span> and{" "}
                            <span className="font-semibold">NOT NULL</span>.
                        </li>
                        <li>
                            Let’s see how a primary key is declared:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`CREATE TABLE student (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  age INT NOT NULL
);`}
                    </CodeBlock>

                    <ul className="mt-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            In this example, the column{" "}
                            <span className="font-semibold text-slate-100">id</span> is the primary key.
                        </li>
                    </ul>

                    <ImageBlock
                        src="/images/img22.png"
                        alt="Primary key example in MySQL Workbench"
                    />
                </section>

                {/* SECTION: FOREIGN KEY */}
                <section>
                    <h3 className="font-semibold text-slate-100 min-md:text-3xl max-md:text-2xl">
                        Foreign Key
                    </h3>

                    <ul className="mt-6 space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            A <span className="font-semibold">Foreign Key</span> is used to link one table with another.
                        </li>
                        <li>
                            It refers to the <span className="font-semibold">Primary Key</span> of another table.
                        </li>
                        <li>
                            A table can have <span className="font-semibold">multiple</span> foreign keys.
                        </li>
                        <li>
                            Foreign keys can contain <span className="font-semibold">duplicate</span> and{" "}
                            <span className="font-semibold">NULL</span> values.
                        </li>
                        <li>
                            Let’s see how a foreign key is declared:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`CREATE TABLE student (
  id INT PRIMARY KEY,
  courseID INT,
  FOREIGN KEY (courseID)
    REFERENCES course(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);`}
                    </CodeBlock>

                    <ul className="mt-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Here,{" "}
                            <span className="font-semibold text-slate-100">courseID</span> is a foreign key.
                        </li>
                        <li>
                            It references the primary key{" "}
                            <span className="font-semibold text-slate-100">id</span> of the{" "}
                            <span className="font-semibold text-slate-100">course</span> table.
                        </li>
                    </ul>

                    <ImageBlock
                        src="/images/img23.png"
                        alt="Foreign key example in MySQL Workbench"
                    />
                </section>

                {/* NEXT PAGE */}
                <section className="pt-6 border-t border-slate-800 min-a:text-2xl max-a:text-xl">
                    <p>
                        Great work! 🎯 Now that you understand SQL keys,
                        let’s move ahead and learn about{" "}
                        <span className="font-semibold text-slate-100">
                            SQL Constraints
                        </span>.
                    </p>
                </section>

            </div>
        </div>
    );
}

// page 11
export function Page11() {
    return (
        <div className="min-h-full w-full lg:px-6 md:px-4 px-2 pb-10">

            {/* PAGE TITLE */}
            <h1 className="font-bold tracking-tight text-slate-100 pt-6 pb-6 border-b border-slate-800
            min-lg:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl">
                SQL Constraints
            </h1>

            <div className="text-slate-300 pt-8 space-y-12">

                {/* SECTION: INTRO */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        Understanding SQL Constraints
                    </h2>

                    <ul className="mt-6 space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            SQL constraints are used to apply rules on the data stored in a table.
                        </li>
                        <li>
                            They help maintain the accuracy, reliability, and integrity of the data.
                        </li>
                        <li>
                            Let’s explore the most commonly used SQL constraints.
                        </li>
                    </ul>
                </section>

                {/* SECTION: NOT NULL */}
                <section>
                    <h3 className="font-semibold text-slate-100 min-md:text-3xl max-md:text-2xl">
                        NOT NULL
                    </h3>

                    <ul className="mt-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Ensures that a column cannot contain <span className="font-semibold">NULL</span> values.
                        </li>
                    </ul>

                    <CodeBlock>
                        {`col1 INT NOT NULL;`}
                    </CodeBlock>
                </section>

                {/* SECTION: UNIQUE */}
                <section>
                    <h3 className="font-semibold text-slate-100 min-md:text-3xl max-md:text-2xl">
                        UNIQUE
                    </h3>

                    <ul className="mt-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Ensures that all values in a column are different.
                        </li>
                    </ul>

                    <CodeBlock>
                        {`col1 INT UNIQUE;`}
                    </CodeBlock>
                </section>

                {/* SECTION: PRIMARY KEY */}
                <section>
                    <h3 className="font-semibold text-slate-100 min-md:text-3xl max-md:text-2xl">
                        PRIMARY KEY
                    </h3>

                    <ul className="mt-4 space-y-3 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Combines <span className="font-semibold">UNIQUE</span> and{" "}
                            <span className="font-semibold">NOT NULL</span>.
                        </li>
                        <li>
                            A table can have only <span className="font-semibold">one</span> primary key.
                        </li>
                        <li>
                            It can be declared in two ways.
                        </li>
                    </ul>

                    <CodeBlock>
                        {`id INT PRIMARY KEY;`}
                    </CodeBlock>

                    <ul className="mt-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Another way to define a primary key:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`CREATE TABLE temp (
  id INT NOT NULL,
  PRIMARY KEY (id)
);`}
                    </CodeBlock>
                </section>

                {/* SECTION: FOREIGN KEY */}
                <section>
                    <h3 className="font-semibold text-slate-100 min-md:text-3xl max-md:text-2xl">
                        FOREIGN KEY
                    </h3>

                    <ul className="mt-4 space-y-3 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Maintains a relationship between two tables.
                        </li>
                        <li>
                            Prevents actions that would break links between tables.
                        </li>
                    </ul>

                    <CodeBlock>
                        {`CREATE TABLE temp (
  cust_id INT,
  FOREIGN KEY (cust_id)
    REFERENCES customer(id)
);`}
                    </CodeBlock>

                    <ul className="mt-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Here, <span className="font-semibold text-slate-100">cust_id</span> refers to the primary key{" "}
                            <span className="font-semibold text-slate-100">id</span> of the{" "}
                            <span className="font-semibold text-slate-100">customer</span> table.
                        </li>
                    </ul>
                </section>

                {/* SECTION: DEFAULT */}
                <section>
                    <h3 className="font-semibold text-slate-100 min-md:text-3xl max-md:text-2xl">
                        DEFAULT
                    </h3>

                    <ul className="mt-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Sets a default value for a column when no value is provided.
                        </li>
                    </ul>

                    <CodeBlock>
                        {`salary INT DEFAULT 25000;`}
                    </CodeBlock>
                </section>

                {/* SECTION: CHECK */}
                <section>
                    <h3 className="font-semibold text-slate-100 min-md:text-3xl max-md:text-2xl">
                        CHECK
                    </h3>

                    <ul className="mt-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Limits the range of values allowed in a column.
                        </li>
                    </ul>

                    <CodeBlock>
                        {`CREATE TABLE city (
  id INT PRIMARY KEY,
  city VARCHAR(50),
  age INT,
  CONSTRAINT age_check
  CHECK (age >= 18 AND city = "Delhi")
);`}
                    </CodeBlock>

                    <ul className="mt-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            This ensures only users aged 18+ from Delhi can be inserted.
                        </li>
                        <li>
                            Another simple example:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`CREATE TABLE newTab (
  age INT CHECK (age >= 18)
);`}
                    </CodeBlock>
                </section>

                {/* NEXT PAGE */}
                <section className="pt-6 border-t border-slate-800 min-a:text-2xl max-a:text-xl">
                    <p>
                        Excellent! 🎯 You’ve learned all major SQL constraints.
                        Next up — we’ll dive deep into the{" "}
                        <span className="font-semibold text-slate-100">
                            SELECT query
                        </span>{" "}
                        and data retrieval.
                    </p>
                </section>

            </div>
        </div>
    );
}

// page 12
export function Page12() {
    return (
        <div className="min-h-full w-full lg:px-6 md:px-4 px-2 pb-10">

            {/* PAGE TITLE */}
            <h1 className="font-bold tracking-tight text-slate-100 pt-6 pb-6 border-b border-slate-800
            min-lg:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl">
                SQL SELECT
            </h1>

            <div className="text-slate-300 pt-8 space-y-12">

                {/* SECTION: INTRO */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        Understanding the SELECT Query
                    </h2>

                    <ul className="mt-6 space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            The <span className="font-semibold text-slate-100">SELECT</span> statement is used to
                            retrieve data from a database.
                        </li>
                        <li>
                            We’ve already used SELECT to fetch all records from a table.
                        </li>
                    </ul>
                </section>

                {/* SECTION: SELECT ALL */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            This query retrieves all columns and all rows from the table:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`SELECT * FROM student;`}
                    </CodeBlock>

                    <ul className="mt-4 space-y-3 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            <span className="font-semibold">SELECT</span> — specifies which columns to retrieve
                        </li>
                        <li>
                            <span className="font-semibold">*</span> — wildcard meaning “all columns”
                        </li>
                        <li>
                            <span className="font-semibold">FROM</span> — specifies the table name
                        </li>
                        <li>
                            In simple words: <em>“Select everything from the student table.”</em>
                        </li>
                    </ul>
                </section>

                {/* SECTION: SELECT SPECIFIC COLUMNS */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Often, you don’t need all columns.
                        </li>
                        <li>
                            You can fetch only specific columns using this syntax:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`SELECT column1, column2 FROM table_name;`}
                    </CodeBlock>

                    <ul className="mt-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Let’s see a practical example:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`SELECT id, name FROM student;`}
                    </CodeBlock>

                    <ImageBlock
                        src="/images/img6.png"
                        alt="Selecting specific columns in MySQL Workbench"
                    />

                    <ul className="mt-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Only the <span className="font-semibold text-slate-100">id</span> and{" "}
                            <span className="font-semibold text-slate-100">name</span> columns are displayed.
                        </li>
                    </ul>
                </section>

                {/* SECTION: SELECT SINGLE COLUMN */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            You can also retrieve just a single column:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`SELECT name FROM student;`}
                    </CodeBlock>

                    <ul className="mt-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            This query returns only the names of students.
                        </li>
                        <li>
                            You can try the same with other columns like{" "}
                            <span className="font-semibold">id</span> or{" "}
                            <span className="font-semibold">age</span>.
                        </li>
                    </ul>
                </section>

                {/* NEXT PAGE */}
                <section className="pt-6 border-t border-slate-800 min-a:text-2xl max-a:text-xl">
                    <p>
                        Great job! 🎉 You now know how to retrieve data using SELECT.
                        Up next — we’ll learn how to filter records using the{" "}
                        <span className="font-semibold text-slate-100">
                            WHERE clause
                        </span>.
                    </p>
                </section>

            </div>
        </div>
    );
}

// page 13
export function Page13() {
    return (
        <div className="min-h-full w-full lg:px-6 md:px-4 px-2 pb-10">

            {/* PAGE TITLE */}
            <h1 className="font-bold tracking-tight text-slate-100 pt-6 pb-6 border-b border-slate-800
            min-lg:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl">
                WHERE Clause
            </h1>

            <div className="text-slate-300 pt-8 space-y-12">

                {/* SECTION: INTRO & SETUP */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        Setting Up Sample Data
                    </h2>

                    <ul className="mt-6 space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Before learning the <span className="font-semibold">WHERE</span> clause,
                            let’s create a sample database and table.
                        </li>
                        <li>
                            We’ll use this data in upcoming lessons as well.
                        </li>
                    </ul>

                    <CodeBlock>
                        {`CREATE DATABASE college;
USE college;`}
                    </CodeBlock>

                    <CodeBlock>
                        {`CREATE TABLE studenttable (
  rollno INT PRIMARY KEY,
  name VARCHAR(50),
  marks INT NOT NULL,
  grade VARCHAR(1),
  city VARCHAR(20)
);`}
                    </CodeBlock>

                    <CodeBlock>
                        {`INSERT INTO studenttable
(rollno, name, marks, grade, city)
VALUES
(101, "anil", 78, "C", "Pune"),
(102, "bhumika", 93, "A", "Mumbai"),
(103, "chetan", 85, "B", "Mumbai"),
(104, "dhruv", 96, "A", "Delhi"),
(105, "emanuel", 12, "F", "Delhi"),
(106, "farah", 82, "B", "Delhi");`}
                    </CodeBlock>
                </section>

                {/* SECTION: WHAT IS WHERE */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        What is the WHERE Clause?
                    </h2>

                    <ul className="mt-6 space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            The <span className="font-semibold">WHERE</span> clause is used to filter records.
                        </li>
                        <li>
                            It returns only rows that satisfy a given condition.
                        </li>
                        <li>
                            Basic syntax:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`SELECT column1, column2
FROM table_name
WHERE condition;`}
                    </CodeBlock>
                </section>

                {/* SECTION: WHERE WITH NUMBERS */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Example: Fetch students who scored more than 80 marks.
                        </li>
                    </ul>

                    <CodeBlock>
                        {`SELECT *
FROM studenttable
WHERE marks > 80;`}
                    </CodeBlock>

                    <ImageBlock
                        src="/images/img9.png"
                        alt="Students with marks greater than 80"
                    />

                    <ul className="mt-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Only students whose marks are greater than 80 are returned.
                        </li>
                    </ul>
                </section>

                {/* SECTION: WHERE WITH TEXT */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Example: Fetch students who belong to a specific city.
                        </li>
                    </ul>

                    <CodeBlock>
                        {`SELECT *
FROM studenttable
WHERE city = "Mumbai";`}
                    </CodeBlock>

                    <ImageBlock
                        src="/images/img10.png"
                        alt="Students from Mumbai"
                    />

                    <ul className="mt-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            This query returns only students from Mumbai.
                        </li>
                    </ul>
                </section>

                {/* CONCLUSION */}
                <section>
                    <ul className="min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            You can use the WHERE clause to filter data using numbers, text, or conditions.
                        </li>
                        <li>
                            WHERE becomes even more powerful when combined with operators.
                        </li>
                    </ul>
                </section>

                {/* NEXT PAGE */}
                <section className="pt-6 border-t border-slate-800 min-a:text-2xl max-a:text-xl">
                    <p>
                        Well done! 🎯 Next, we’ll explore SQL{" "}
                        <span className="font-semibold text-slate-100">
                            Operators
                        </span>{" "}
                        to build more complex conditions.
                    </p>
                </section>

            </div>
        </div>
    );
}

// page 14
export function Page14() {
    return (
        <div className="min-h-full w-full lg:px-6 md:px-4 px-2 pb-10">

            {/* PAGE TITLE */}
            <h1 className="font-bold tracking-tight text-slate-100 pt-6 pb-6 border-b border-slate-800
            min-lg:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl">
                SQL Operators
            </h1>

            <div className="text-slate-300 pt-8 space-y-12">

                {/* SECTION: INTRO */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        Types of SQL Operators
                    </h2>

                    <ul className="mt-6 space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            SQL operators are used to perform operations on data and define conditions.
                        </li>
                        <li>
                            The most commonly used operator categories are:
                        </li>
                        <li>
                            <span className="font-semibold">Arithmetic Operators:</span>{" "}
                            +, −, *, /, %
                        </li>
                        <li>
                            <span className="font-semibold">Comparison Operators:</span>{" "}
                            =, !=, &gt;, &gt;=, &lt;, &lt;=
                        </li>
                        <li>
                            <span className="font-semibold">Logical Operators:</span>{" "}
                            AND, OR, NOT, IN, BETWEEN, LIKE
                        </li>
                        <li>
                            <span className="font-semibold">Bitwise Operators:</span>{" "}
                            &, |
                        </li>
                    </ul>
                </section>

                {/* SECTION: LOGICAL OPERATORS */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        Logical Operators (with Examples)
                    </h2>
                </section>

                {/* AND */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            <span className="font-semibold">1. AND</span> — returns rows where{" "}
                            <em>all conditions are true</em>.
                        </li>
                    </ul>

                    <CodeBlock>
                        {`SELECT *
FROM studenttable
WHERE marks > 80 AND city = "Mumbai";`}
                    </CodeBlock>

                    <ImageBlock
                        src="/images/img24.png"
                        alt="AND operator example"
                    />
                </section>

                {/* OR */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            <span className="font-semibold">2. OR</span> — returns rows where{" "}
                            <em>at least one condition is true</em>.
                        </li>
                    </ul>

                    <CodeBlock>
                        {`SELECT *
FROM studenttable
WHERE marks > 90 OR city = "Mumbai";`}
                    </CodeBlock>

                    <ImageBlock
                        src="/images/img25.png"
                        alt="OR operator example"
                    />
                </section>

                {/* BETWEEN */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            <span className="font-semibold">3. BETWEEN</span> — filters values within a range.
                        </li>
                    </ul>

                    <CodeBlock>
                        {`SELECT *
FROM studenttable
WHERE marks BETWEEN 80 AND 90;`}
                    </CodeBlock>

                    <ImageBlock
                        src="/images/img26.png"
                        alt="BETWEEN operator example"
                    />

                    <p className="min-a:text-2xl max-a:text-xl border-l-4 border-slate-700 pl-4">
                        <span className="font-semibold">Note:</span> The <code>AND</code> here is part of the
                        BETWEEN syntax, not a logical AND operator.
                    </p>
                </section>

                {/* IN */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            <span className="font-semibold">4. IN</span> — matches values from a given list.
                        </li>
                    </ul>

                    <CodeBlock>
                        {`SELECT *
FROM studenttable
WHERE city IN ("Delhi", "Mumbai");`}
                    </CodeBlock>

                    <ImageBlock
                        src="/images/img27.png"
                        alt="IN operator example"
                    />
                </section>

                {/* NOT */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            <span className="font-semibold">5. NOT</span> — negates a condition.
                        </li>
                    </ul>

                    <CodeBlock>
                        {`SELECT *
FROM studenttable
WHERE city NOT IN ("Delhi", "Mumbai");`}
                    </CodeBlock>

                    <ImageBlock
                        src="/images/img28.png"
                        alt="NOT operator example"
                    />
                </section>

                {/* NEXT PAGE */}
                <section className="pt-6 border-t border-slate-800 min-a:text-2xl max-a:text-xl">
                    <p>
                        Excellent work! 🎯 You’ve learned how operators help filter data.
                        Up next — we’ll explore the{" "}
                        <span className="font-semibold text-slate-100">
                            LIMIT clause
                        </span>.
                    </p>
                </section>

            </div>
        </div>
    );
}

// page 15
export function Page15() {
    return (
        <div className="min-h-full w-full lg:px-6 md:px-4 px-2 pb-10">

            {/* PAGE TITLE */}
            <h1 className="font-bold tracking-tight text-slate-100 pt-6 pb-6 border-b border-slate-800
            min-lg:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl">
                LIMIT Clause
            </h1>

            <div className="text-slate-300 pt-8 space-y-12">

                {/* INTRO */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        Understanding the LIMIT Clause
                    </h2>

                    <ul className="mt-6 space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            The <span className="font-semibold">LIMIT</span> clause is used to restrict
                            the number of rows returned by a query.
                        </li>
                        <li>
                            Even if more rows match the query conditions, only the specified
                            number of rows will be displayed.
                        </li>
                        <li>
                            Basic syntax:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`SELECT col1, col2
FROM table_name
LIMIT number;`}
                    </CodeBlock>
                </section>

                {/* FULL TABLE */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            First, let’s view the complete table:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`SELECT *
FROM studenttable;`}
                    </CodeBlock>

                    <ImageBlock
                        src="/images/img7.png"
                        alt="Full table output"
                    />
                </section>

                {/* LIMIT EXAMPLE */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Now apply the <span className="font-mono font-semibold">LIMIT</span> clause to
                            return only 3 rows:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`SELECT *
FROM studenttable
LIMIT 3;`}
                    </CodeBlock>

                    <ImageBlock
                        src="/images/img8.png"
                        alt="LIMIT clause output"
                    />
                </section>

                {/* EXPLANATION */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            The first query returned all rows from the table.
                        </li>
                        <li>
                            The second query restricted the output to only 3 rows using
                            the <span className="font-mono font-semibold">LIMIT</span> clause.
                        </li>
                    </ul>
                </section>

                {/* NEXT PAGE */}
                <section className="pt-6 border-t border-slate-800 min-a:text-2xl max-a:text-xl">
                    <p>
                        Nice work! 🎉 You now know how to control result size.
                        Up next — we’ll explore the{" "}
                        <span className="font-semibold text-slate-100">
                            ORDER BY clause
                        </span>.
                    </p>
                </section>

            </div>
        </div>
    );
}

// page 16
export function Page16() {
    return (
        <div className="min-h-full w-full lg:px-6 md:px-4 px-2 pb-10">

            {/* PAGE TITLE */}
            <h1 className="font-bold tracking-tight text-slate-100 pt-6 pb-6 border-b border-slate-800
            min-lg:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl">
                ORDER BY Clause
            </h1>

            <div className="text-slate-300 pt-8 space-y-12">

                {/* INTRO */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        Understanding the ORDER BY Clause
                    </h2>

                    <ul className="mt-6 space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            The <span className="font-semibold">ORDER BY</span> clause is used to sort
                            query results.
                        </li>
                        <li>
                            Data can be sorted in:
                            <ul className="list-disc list-inside ml-6 mt-2">
                                <li>
                                    <span className="font-mono font-semibold">ASC</span> — ascending order
                                </li>
                                <li>
                                    <span className="font-mono font-semibold">DESC</span> — descending order
                                </li>
                            </ul>
                        </li>
                        <li>
                            Sorting can be applied to any column such as numbers, text, or dates.
                        </li>
                        <li>
                            Basic syntax:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`SELECT col1, col2
FROM table_name
ORDER BY column_name ASC;`}
                    </CodeBlock>

                    <div className="mt-6 pl-4 border-l-4 border-slate-700 min-a:text-2xl max-a:text-xl">
                        <span className="font-semibold text-slate-100">Note:</span>{" "}
                        <span className="font-mono">ASC</span> is the default order, so it can be omitted.
                        To sort in descending order, you must explicitly use{" "}
                        <span className="font-mono font-semibold">DESC</span>.
                    </div>
                </section>

                {/* EXAMPLE */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Let’s sort students by city in ascending order:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`SELECT *
FROM studenttable
ORDER BY city ASC;`}
                    </CodeBlock>

                    <ImageBlock
                        src="/images/img11.png"
                        alt="Students sorted by city in ascending order"
                    />

                    <ul className="mt-4 space-y-3 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            The rows are sorted alphabetically by the{" "}
                            <span className="font-mono font-semibold">city</span> column.
                        </li>
                        <li>
                            Cities like <span className="font-semibold">Delhi</span> appear first,
                            while <span className="font-semibold">Pune</span> appears later.
                        </li>
                    </ul>
                </section>

                {/* ADDITIONAL INFO */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            You can sort by other columns such as:
                        </li>
                        <li className="ml-6">
                            <span className="font-mono font-semibold">rollno</span>,{" "}
                            <span className="font-mono font-semibold">name</span>,{" "}
                            <span className="font-mono font-semibold">marks</span>,{" "}
                            <span className="font-mono font-semibold">grade</span>
                        </li>
                        <li>
                            Sorting can be done in either ascending or descending order
                            depending on your requirement.
                        </li>
                    </ul>
                </section>

                {/* NEXT PAGE */}
                <section className="pt-6 border-t border-slate-800 min-a:text-2xl max-a:text-xl">
                    <p>
                        Excellent progress! 🎯 Next, we’ll explore{" "}
                        <span className="font-semibold text-slate-100">
                            Aggregate Functions
                        </span>{" "}
                        and learn how to summarize data.
                    </p>
                </section>

            </div>
        </div>
    );
}

// page 17
export function Page17() {
    return (
        <div className="min-h-full w-full lg:px-6 md:px-4 px-2 pb-10">

            {/* PAGE TITLE */}
            <h1 className="font-bold tracking-tight text-slate-100 pt-6 pb-6 border-b border-slate-800
            min-lg:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl">
                Aggregate Functions
            </h1>

            <div className="text-slate-300 pt-8 space-y-12">

                {/* INTRO */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        Understanding Aggregate Functions
                    </h2>

                    <ul className="mt-6 space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Aggregate functions perform calculations on multiple rows and return a single value.
                        </li>
                        <li>
                            They are commonly used to summarize data such as totals, averages, minimums, and maximums.
                        </li>
                        <li>
                            Below are the most frequently used aggregate functions in SQL.
                        </li>
                    </ul>
                </section>

                {/* COUNT */}
                <section>
                    <h3 className="font-semibold text-slate-100 min-md:text-3xl max-md:text-2xl">
                        COUNT()
                    </h3>

                    <ul className="mt-4 space-y-3 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            <span className="font-semibold">COUNT()</span> returns the total number of non-NULL values
                            in a column.
                        </li>
                        <li>Example:</li>
                    </ul>

                    <CodeBlock>
                        {`SELECT COUNT(name)
FROM studenttable;`}
                    </CodeBlock>

                    <ImageBlock
                        src="/images/img15.png"
                        alt="COUNT(name) result preview"
                    />
                </section>

                {/* MAX */}
                <section>
                    <h3 className="font-semibold text-slate-100 min-md:text-3xl max-md:text-2xl">
                        MAX()
                    </h3>

                    <ul className="mt-4 space-y-3 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            <span className="font-semibold">MAX()</span> returns the highest value from a column.
                        </li>
                        <li>Example:</li>
                    </ul>

                    <CodeBlock>
                        {`SELECT MAX(marks)
FROM studenttable;`}
                    </CodeBlock>

                    <ImageBlock
                        src="/images/img16.png"
                        alt="MAX(marks) result preview"
                    />
                </section>

                {/* MIN */}
                <section>
                    <h3 className="font-semibold text-slate-100 min-md:text-3xl max-md:text-2xl">
                        MIN()
                    </h3>

                    <ul className="mt-4 space-y-3 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            <span className="font-semibold">MIN()</span> returns the lowest value from a column.
                        </li>
                        <li>Example:</li>
                    </ul>

                    <CodeBlock>
                        {`SELECT MIN(marks)
FROM studenttable;`}
                    </CodeBlock>

                    <ImageBlock
                        src="/images/img17.png"
                        alt="MIN(marks) result preview"
                    />
                </section>

                {/* SUM */}
                <section>
                    <h3 className="font-semibold text-slate-100 min-md:text-3xl max-md:text-2xl">
                        SUM()
                    </h3>

                    <ul className="mt-4 space-y-3 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            <span className="font-semibold">SUM()</span> returns the total of all values
                            in a numeric column.
                        </li>
                        <li>Example:</li>
                    </ul>

                    <CodeBlock>
                        {`SELECT SUM(marks)
FROM studenttable;`}
                    </CodeBlock>

                    <ImageBlock
                        src="/images/img18.png"
                        alt="SUM(marks) result preview"
                    />
                </section>

                {/* AVG */}
                <section>
                    <h3 className="font-semibold text-slate-100 min-md:text-3xl max-md:text-2xl">
                        AVG()
                    </h3>

                    <ul className="mt-4 space-y-3 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            <span className="font-semibold">AVG()</span> returns the average value
                            of a numeric column.
                        </li>
                        <li>Example:</li>
                    </ul>

                    <CodeBlock>
                        {`SELECT AVG(marks)
FROM studenttable;`}
                    </CodeBlock>

                    <ImageBlock
                        src="/images/img19.png"
                        alt="AVG(marks) result preview"
                    />
                </section>

                {/* NEXT PAGE */}
                <section className="pt-6 border-t border-slate-800 min-a:text-2xl max-a:text-xl">
                    <p>
                        Great work! 🎉 Next, we’ll learn how to group records using the{" "}
                        <span className="font-semibold text-slate-100">
                            GROUP BY
                        </span>{" "}
                        clause.
                    </p>
                </section>

            </div>
        </div>
    );
}

// page 18
export function Page18() {
    return (
        <div className="min-h-full w-full lg:px-6 md:px-4 px-2 pb-10">

            {/* PAGE TITLE */}
            <h1 className="font-bold tracking-tight text-slate-100 pt-6 pb-6 border-b border-slate-800
            min-lg:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl">
                GROUP BY Clause
            </h1>

            <div className="text-slate-300 pt-8 space-y-12">

                {/* INTRO */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        Understanding the GROUP BY Clause
                    </h2>

                    <ul className="mt-6 space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            The <span className="font-semibold">GROUP BY</span> clause is used to group
                            rows that share the same values.
                        </li>
                        <li>
                            It combines multiple rows into summary rows based on one or more columns.
                        </li>
                        <li>
                            GROUP BY is most commonly used with aggregate functions.
                        </li>
                    </ul>

                    <div className="mt-6 pl-4 border-l-4 border-slate-700 min-a:text-2xl max-a:text-xl">
                        <span className="font-semibold text-slate-100">Note:</span>{" "}
                        GROUP BY is usually used with aggregate functions like{" "}
                        <span className="font-mono font-semibold">COUNT()</span>,{" "}
                        <span className="font-mono font-semibold">SUM()</span>,{" "}
                        <span className="font-mono font-semibold">AVG()</span>, etc.
                    </div>
                </section>

                {/* EXAMPLE */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Let’s see how GROUP BY works using a practical example:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`SELECT city, COUNT(name)
FROM studenttable
GROUP BY city;`}
                    </CodeBlock>

                    <ul className="mt-6 space-y-3 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            This query groups all students by their{" "}
                            <span className="font-mono font-semibold">city</span>.
                        </li>
                        <li>
                            <span className="font-mono font-semibold">COUNT(name)</span> calculates
                            how many students belong to each city.
                        </li>
                        <li>
                            Without <span className="font-mono font-semibold">GROUP BY city</span>,
                            the count would not make sense per city.
                        </li>
                        <li>
                            The final output shows one row per city with the total number of students.
                        </li>
                    </ul>

                    <ImageBlock
                        src="/images/image12.png"
                        alt="GROUP BY city result preview"
                    />
                </section>

                {/* NEXT PAGE */}
                <section className="pt-6 border-t border-slate-800 min-a:text-2xl max-a:text-xl">
                    <p>
                        Nice work! 👏 Next, we’ll learn about the{" "}
                        <span className="font-semibold text-slate-100">
                            HAVING
                        </span>{" "}
                        clause and how it filters grouped results.
                    </p>
                </section>

            </div>
        </div>
    );
}

// page 19
export function Page19() {
    return (
        <div className="min-h-full w-full lg:px-6 md:px-4 px-2 pb-10">

            {/* PAGE TITLE */}
            <h1 className="font-bold tracking-tight text-slate-100 pt-6 pb-6 border-b border-slate-800
            min-lg:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl">
                HAVING Clause
            </h1>

            <div className="text-slate-300 pt-8 space-y-12">

                {/* INTRO */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        Understanding the HAVING Clause
                    </h2>

                    <ul className="mt-6 space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            The <span className="font-semibold">HAVING</span> clause is used to filter grouped data.
                        </li>
                        <li>
                            It is similar to the <span className="font-semibold">WHERE</span> clause,
                            but they work at different stages.
                        </li>
                        <li>
                            <span className="font-semibold">WHERE</span> filters individual rows
                            <span className="font-semibold"> before grouping</span>.
                        </li>
                        <li>
                            <span className="font-semibold">HAVING</span> filters grouped results
                            <span className="font-semibold"> after GROUP BY</span>.
                        </li>
                    </ul>

                    <div className="mt-6 pl-4 border-l-4 border-slate-700 min-a:text-2xl max-a:text-xl">
                        <span className="font-semibold text-slate-100">Important:</span>{" "}
                        Aggregate functions like{" "}
                        <span className="font-mono font-semibold">COUNT()</span>,{" "}
                        <span className="font-mono font-semibold">MAX()</span>,{" "}
                        <span className="font-mono font-semibold">SUM()</span>{" "}
                        cannot be used inside <span className="font-mono">WHERE</span>,
                        so we use <span className="font-mono font-semibold">HAVING</span>.
                    </div>
                </section>

                {/* EXAMPLE */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Let’s understand this with a practical example:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`SELECT city, COUNT(name)
FROM studenttable
GROUP BY city
HAVING MAX(marks) > 90;`}
                    </CodeBlock>

                    <ul className="mt-6 space-y-3 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            The data is grouped by{" "}
                            <span className="font-mono font-semibold">city</span>.
                        </li>
                        <li>
                            <span className="font-mono font-semibold">COUNT(name)</span> counts the number
                            of students in each city.
                        </li>
                        <li>
                            The <span className="font-mono font-semibold">HAVING</span> clause filters
                            only those cities where the{" "}
                            <span className="font-mono font-semibold">maximum marks</span> are greater than 90.
                        </li>
                        <li>
                            Cities that do not meet this condition are excluded from the result.
                        </li>
                    </ul>

                    <ImageBlock
                        src="/images/img13.png"
                        alt="HAVING clause result preview"
                    />

                    <ul className="mt-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Only <span className="font-semibold">Mumbai</span> and{" "}
                            <span className="font-semibold">Delhi</span> appear because
                            they have students with marks greater than 90.
                        </li>
                    </ul>
                </section>

                {/* NEXT PAGE */}
                <section className="pt-6 border-t border-slate-800 min-a:text-2xl max-a:text-xl">
                    <p>
                        Great work! 🎯 Next, we’ll learn about{" "}
                        <span className="font-semibold text-slate-100">
                            Cascading in Foreign Keys
                        </span>{" "}
                        and how changes propagate across related tables.
                    </p>
                </section>

            </div>
        </div>
    );
}

// page 20
export function Page20() {
    return (
        <div className="min-h-full w-full lg:px-6 md:px-4 px-2 pb-10">

            {/* PAGE TITLE */}
            <h1 className="font-bold tracking-tight text-slate-100 pt-6 pb-6 border-b border-slate-800
            min-lg:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl">
                Cascading in Foreign Keys
            </h1>

            <div className="text-slate-300 pt-8 space-y-12">

                {/* INTRO */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        Understanding Cascading Behavior
                    </h2>

                    <ul className="mt-6 space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Cascading is used with <span className="font-semibold">foreign keys</span>
                            to automatically apply changes from a parent table to a child table.
                        </li>
                        <li>
                            It helps maintain <span className="font-semibold">data consistency</span>
                            between related tables.
                        </li>
                    </ul>
                </section>

                {/* CASCADE TYPES */}
                <section>
                    <ul className="space-y-6 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            <span className="font-semibold text-slate-100">ON DELETE CASCADE</span>
                            <br />
                            If a row in the parent table is deleted, all related rows in the child table
                            are automatically deleted as well.
                        </li>

                        <li>
                            <span className="font-semibold text-slate-100">ON UPDATE CASCADE</span>
                            <br />
                            If the primary key value in the parent table changes, the corresponding
                            foreign key values in the child table are automatically updated.
                        </li>

                        <li>
                            Using cascading options prevents <span className="font-semibold">orphan records</span>
                            and keeps relationships clean.
                        </li>
                    </ul>

                    <div className="mt-6 pl-4 border-l-4 border-slate-700 min-a:text-2xl max-a:text-xl">
                        <span className="font-semibold text-slate-100">Best Practice:</span>{" "}
                        Cascading should be used thoughtfully—especially with{" "}
                        <span className="font-mono font-semibold">ON DELETE CASCADE</span>—to avoid
                        accidental data loss.
                    </div>
                </section>

                {/* EXAMPLE */}
                <section>
                    <ul className="space-y-4 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            Let’s look at an example of a foreign key with cascading enabled:
                        </li>
                    </ul>

                    <CodeBlock>
                        {`CREATE TABLE student (
    id INT PRIMARY KEY,
    courseID INT,
    FOREIGN KEY (courseID)
    REFERENCES course(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);`}
                    </CodeBlock>

                    <ul className="mt-6 space-y-3 min-a:text-2xl max-a:text-xl list-disc list-inside leading-relaxed">
                        <li>
                            The <span className="font-mono font-semibold">student</span> table depends on the
                            <span className="font-mono font-semibold"> course</span> table.
                        </li>
                        <li>
                            Deleting a course will automatically delete all related students.
                        </li>
                        <li>
                            Updating a course ID will automatically update it everywhere it’s referenced.
                        </li>
                        <li>
                            This behavior is enabled by adding just two cascade lines.
                        </li>
                    </ul>
                </section>

                {/* NEXT PAGE */}
                <section className="pt-6 border-t border-slate-800 min-a:text-2xl max-a:text-xl">
                    <p>
                        Excellent progress! 🚀 Next, we’ll explore more{" "}
                        <span className="font-semibold text-slate-100">
                            table-related queries
                        </span>{" "}
                        and how to manage table structures efficiently.
                    </p>
                </section>

            </div>
        </div>
    );
}

// page 21
export function Page21() {
    return (
        <div className="min-h-full w-full lg:px-6 md:px-4 px-2 pb-12">

            {/* PAGE TITLE */}
            <h1 className="font-bold tracking-tight text-slate-100 pt-6 pb-6 border-b border-slate-800
            min-lg:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl">
                More Table Related Queries
            </h1>

            <div className="text-slate-300 pt-8 space-y-14">

                {/* UPDATE */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        UPDATE — Modify Existing Rows
                    </h2>

                    <ul className="mt-6 space-y-4 list-disc list-inside min-a:text-2xl max-a:text-xl">
                        <li>Used to update existing records in a table.</li>
                        <li>Always use a <span className="font-mono font-semibold">WHERE</span> clause to avoid
                            updating all rows unintentionally.</li>
                    </ul>

                    <CodeBlock>
                        {`UPDATE table_name
SET col1 = value1, col2 = value2
WHERE condition;`}
                    </CodeBlock>

                    <CodeBlock>
                        {`UPDATE studenttable
SET grade = "O"
WHERE grade = "A";`}
                    </CodeBlock>

                    <ImageBlock src="/images/img29.png" alt="UPDATE query result" />

                    <div className="mt-6 pl-4 border-l-4 border-slate-700 min-a:text-2xl max-a:text-xl">
                        <span className="font-semibold text-slate-100">MySQL Note:</span>{" "}
                        Disable safe update mode before running UPDATE:
                    </div>

                    <CodeBlock>{`SET SQL_SAFE_UPDATES = 0;`}</CodeBlock>
                </section>

                {/* DELETE */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        DELETE — Remove Rows
                    </h2>

                    <CodeBlock>
                        {`DELETE FROM table_name
WHERE condition;`}
                    </CodeBlock>

                    <CodeBlock>
                        {`DELETE FROM studenttable
WHERE marks < 33;`}
                    </CodeBlock>

                    <ImageBlock src="/images/img30.png" alt="DELETE query result" />
                </section>

                {/* ALTER TABLE */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        ALTER TABLE — Modify Table Structure
                    </h2>

                    {/* ADD COLUMN */}
                    <h3 className="mt-6 font-semibold text-slate-200 min-a:text-2xl max-a:text-xl">
                        ADD COLUMN
                    </h3>

                    <CodeBlock>
                        {`ALTER TABLE studenttable
ADD COLUMN age INT NOT NULL DEFAULT 19;`}
                    </CodeBlock>

                    <ImageBlock src="/images/img31.png" alt="ADD column result" />

                    {/* DROP COLUMN */}
                    <h3 className="mt-8 font-semibold text-slate-200 min-a:text-2xl max-a:text-xl">
                        DROP COLUMN
                    </h3>

                    <CodeBlock>
                        {`ALTER TABLE studenttable
DROP COLUMN age;`}
                    </CodeBlock>

                    <ImageBlock src="/images/img30.png" alt="DROP column result" />

                    {/* RENAME TABLE */}
                    <h3 className="mt-8 font-semibold text-slate-200 min-a:text-2xl max-a:text-xl">
                        RENAME TABLE
                    </h3>

                    <CodeBlock>
                        {`ALTER TABLE studenttable
RENAME TO student;`}
                    </CodeBlock>

                    {/* CHANGE COLUMN */}
                    <h3 className="mt-8 font-semibold text-slate-200 min-a:text-2xl max-a:text-xl">
                        CHANGE COLUMN (Rename)
                    </h3>

                    <CodeBlock>
                        {`ALTER TABLE studenttable
CHANGE marks stu_marks INT;`}
                    </CodeBlock>

                    <ImageBlock src="/images/img32.png" alt="CHANGE column result" />

                    {/* MODIFY COLUMN */}
                    <h3 className="mt-8 font-semibold text-slate-200 min-a:text-2xl max-a:text-xl">
                        MODIFY COLUMN (Datatype / Constraint)
                    </h3>

                    <CodeBlock>
                        {`ALTER TABLE studenttable
MODIFY age VARCHAR(2);`}
                    </CodeBlock>
                </section>

                {/* TRUNCATE */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        TRUNCATE — Delete All Rows
                    </h2>

                    <ul className="mt-6 list-disc list-inside min-a:text-2xl max-a:text-xl">
                        <li>Deletes all records instantly.</li>
                        <li>Cannot be rolled back.</li>
                        <li>Much faster than DELETE.</li>
                    </ul>

                    <CodeBlock>
                        {`TRUNCATE studenttable;`}
                    </CodeBlock>

                    <ImageBlock src="/images/img33.png" alt="TRUNCATE result" />
                </section>

                {/* NEXT */}
                <section className="pt-6 border-t border-slate-800 min-a:text-2xl max-a:text-xl">
                    <p>
                        Excellent work! 🎯
                        Up next, we’ll explore one of the most important concepts in SQL —
                        <span className="font-semibold text-slate-100"> JOINS</span>.
                    </p>
                </section>

            </div>
        </div>
    );
}

// page 22
export function Page22() {
    return (
        <div className="min-h-full w-full lg:px-6 md:px-4 px-2 pb-12">

            {/* PAGE TITLE */}
            <h1 className="font-bold tracking-tight text-slate-100 pt-6 pb-6 border-b border-slate-800
            min-lg:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl">
                Joins in SQL
            </h1>

            <div className="text-slate-300 pt-8 space-y-16">

                {/* INTRO */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        What are SQL Joins?
                    </h2>

                    <ul className="mt-6 space-y-4 list-disc list-inside min-a:text-2xl max-a:text-xl">
                        <li>Joins are used to combine rows from two or more tables.</li>
                        <li>The tables are joined using a related column.</li>
                        <li>Joins help retrieve meaningful data spread across multiple tables.</li>
                    </ul>
                </section>

                {/* SAMPLE TABLES */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        Sample Tables
                    </h2>

                    <CodeBlock>
                        {`CREATE TABLE student (
    student_id INT PRIMARY KEY,
    name VARCHAR(50)
);`}
                    </CodeBlock>

                    <CodeBlock>
                        {`INSERT INTO student VALUES
(101, "adam"),
(102, "bob"),
(103, "casey");`}
                    </CodeBlock>

                    <CodeBlock>
                        {`CREATE TABLE course (
    student_id INT,
    course VARCHAR(50)
);`}
                    </CodeBlock>

                    <CodeBlock>
                        {`INSERT INTO course VALUES
(102, "english"),
(105, "math"),
(103, "science"),
(107, "computer science");`}
                    </CodeBlock>
                </section>

                {/* INNER JOIN */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        INNER JOIN
                    </h2>

                    <p className="min-a:text-2xl max-a:text-xl mt-4">
                        Returns records that have matching values in both tables.
                    </p>

                    <CodeBlock>
                        {`SELECT *
FROM student AS s
INNER JOIN course AS c
ON s.student_id = c.student_id;`}
                    </CodeBlock>

                    <ImageBlock src="/images/img34.png" alt="INNER JOIN result" />
                </section>

                {/* LEFT JOIN */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        LEFT JOIN
                    </h2>

                    <p className="min-a:text-2xl max-a:text-xl mt-4">
                        Returns all records from the left table and matched records from the right table.
                    </p>

                    <CodeBlock>
                        {`SELECT *
FROM student AS s
LEFT JOIN course AS c
ON s.student_id = c.student_id;`}
                    </CodeBlock>

                    <ImageBlock src="/images/img35.png" alt="LEFT JOIN result" />
                </section>

                {/* RIGHT JOIN */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        RIGHT JOIN
                    </h2>

                    <p className="min-a:text-2xl max-a:text-xl mt-4">
                        Returns all records from the right table and matched records from the left table.
                    </p>

                    <CodeBlock>
                        {`SELECT *
FROM student AS s
RIGHT JOIN course AS c
ON s.student_id = c.student_id;`}
                    </CodeBlock>

                    <ImageBlock src="/images/img36.png" alt="RIGHT JOIN result" />
                </section>

                {/* FULL JOIN */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        FULL JOIN (MySQL Workaround)
                    </h2>

                    <p className="min-a:text-2xl max-a:text-xl mt-4">
                        MySQL does not support FULL JOIN directly. We simulate it using UNION.
                    </p>

                    <CodeBlock>
                        {`SELECT *
FROM student AS s
LEFT JOIN course AS c
ON s.student_id = c.student_id
UNION
SELECT *
FROM student AS s
RIGHT JOIN course AS c
ON s.student_id = c.student_id;`}
                    </CodeBlock>

                    <ImageBlock src="/images/img37.png" alt="FULL JOIN result" />
                </section>

                {/* SELF JOIN */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        SELF JOIN
                    </h2>

                    <p className="min-a:text-2xl max-a:text-xl mt-4">
                        A self join is a regular join where a table is joined with itself.
                    </p>

                    <CodeBlock>
                        {`CREATE TABLE employee (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    manager_id INT
);`}
                    </CodeBlock>

                    <CodeBlock>
                        {`INSERT INTO employee VALUES
(101, "adam", 103),
(102, "bob", 104),
(103, "casey", NULL),
(104, "donald", 103);`}
                    </CodeBlock>

                    <CodeBlock>
                        {`SELECT
a.name AS manager_name,
b.name AS employee_name
FROM employee AS a
JOIN employee AS b
ON a.id = b.manager_id;`}
                    </CodeBlock>

                    <ImageBlock src="/images/img38.png" alt="SELF JOIN result" />
                </section>

                {/* UNION */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        UNION in SQL
                    </h2>

                    <ul className="mt-6 list-disc list-inside min-a:text-2xl max-a:text-xl space-y-3">
                        <li>Combines results of two or more SELECT statements.</li>
                        <li>Each SELECT must have the same number of columns.</li>
                        <li>Column datatypes must be compatible.</li>
                        <li>Column order must be the same.</li>
                    </ul>

                    <CodeBlock>
                        {`SELECT column(s) FROM tableA
UNION
SELECT column(s) FROM tableB;`}
                    </CodeBlock>
                </section>

                {/* NEXT */}
                <section className="pt-6 border-t border-slate-800 min-a:text-2xl max-a:text-xl">
                    <p>
                        Great progress! 🚀
                        Next, we’ll explore powerful concepts called
                        <span className="font-semibold text-slate-100"> SQL Subqueries</span>.
                    </p>
                </section>

            </div>
        </div>
    );
}

// page 23
export function Page23() {
    return (
        <div className="min-h-full w-full lg:px-6 md:px-4 px-2 pb-12">

            {/* PAGE TITLE */}
            <h1 className="font-bold tracking-tight text-slate-100 pt-6 pb-6 border-b border-slate-800
                min-lg:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl">
                SQL Subqueries
            </h1>

            <div className="text-slate-300 pt-8 space-y-16">

                {/* INTRO */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        What are SQL Subqueries?
                    </h2>

                    <ul className="mt-6 space-y-4 list-disc list-inside min-a:text-2xl max-a:text-xl">
                        <li>
                            A <span className="font-bold">subquery</span> is a query written inside another SQL query.
                        </li>
                        <li>
                            Also called an <span className="font-bold">inner query</span> or <span className="font-bold">nested query</span>.
                        </li>
                        <li>
                            Subqueries usually involve two <span className="font-mono font-bold">SELECT</span> statements.
                        </li>
                        <li>Syntax of a subquery:</li>
                    </ul>

                    <CodeBlock>
                        {`SELECT column(s)
FROM table_name
WHERE column_name operator
(subquery);`}
                    </CodeBlock>
                </section>

                {/* EXAMPLE 1 */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        Example 1: Students Above Class Average
                    </h2>

                    <p className="min-a:text-2xl max-a:text-xl mt-4">
                        Get names of all students who scored more than the class average.
                    </p>

                    <CodeBlock>
                        {`SELECT name, marks
FROM studenttable
WHERE marks > 
(SELECT AVG(marks)
 FROM studenttable);`}
                    </CodeBlock>

                    <ul className="mt-4 space-y-2 list-disc list-inside min-a:text-2xl max-a:text-xl">
                        <li>Subquery calculates the class average.</li>
                        <li>Main query selects students with marks greater than that average.</li>
                        <li>Result: Students performing above average.</li>
                    </ul>

                    <ImageBlock src="/images/img39.png" alt="Subquery average result" />
                </section>

                {/* EXAMPLE 2 */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        Example 2: Students with Even Roll Numbers
                    </h2>

                    <p className="min-a:text-2xl max-a:text-xl mt-4">
                        Get names of all students who have even roll numbers.
                    </p>

                    <CodeBlock>
                        {`SELECT name, rollno
FROM studenttable
WHERE rollno IN
(SELECT rollno
 FROM studenttable
 WHERE rollno % 2 = 0);`}
                    </CodeBlock>

                    <ul className="mt-4 space-y-2 list-disc list-inside min-a:text-2xl max-a:text-xl">
                        <li>Subquery selects all even roll numbers.</li>
                        <li>Main query selects students whose roll number exists in that list.</li>
                        <li>Result: Students with even roll numbers.</li>
                    </ul>

                    <ImageBlock src="/images/img40.png" alt="Subquery even rollno result" />
                </section>

                {/* NEXT */}
                <section className="pt-6 border-t border-slate-800 min-a:text-2xl max-a:text-xl">
                    <p>
                        Excellent! 🚀 Next, we’ll explore <span className="font-semibold text-slate-100">MySQL Views</span>.
                    </p>
                </section>

            </div>
        </div>
    );
}

// page 24
export function Page24() {
    return (
        <div className="min-h-full w-full lg:px-6 md:px-4 px-2 pb-12">

            {/* PAGE TITLE */}
            <h1 className="font-bold tracking-tight text-slate-100 pt-6 pb-6 border-b border-slate-800
                min-lg:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl">
                MySQL Views
            </h1>

            <div className="text-slate-300 pt-8 space-y-16">

                {/* INTRO */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        What are MySQL Views?
                    </h2>

                    <ul className="mt-6 space-y-4 list-disc list-inside min-a:text-2xl max-a:text-xl">
                        <li>A <span className="font-bold">view</span> is a virtual table based on the result-set of an SQL statement.</li>
                        <li>Views always show up-to-date data. The database engine recreates the view every time it is queried.</li>
                        <li>Let’s understand MySQL Views with an example:</li>
                    </ul>
                </section>

                {/* CREATE VIEW */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        Creating a View
                    </h2>

                    <CodeBlock>
                        {`CREATE VIEW view1 AS
SELECT rollno, name
FROM studenttable;`}
                    </CodeBlock>

                    <ul className="mt-4 space-y-2 list-disc list-inside min-a:text-2xl max-a:text-xl">
                        <li>This creates a MySQL View named <span className="font-bold">view1</span>.</li>
                        <li>The view is based on the query <code>SELECT rollno, name FROM studenttable</code>.</li>
                        <li>Now, we can query the view like a regular table.</li>
                    </ul>
                </section>

                {/* QUERY VIEW */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        Querying the View
                    </h2>

                    <CodeBlock>
                        {`SELECT * FROM view1;`}
                    </CodeBlock>

                    <ul className="mt-4 space-y-2 list-disc list-inside min-a:text-2xl max-a:text-xl">
                        <li>This query retrieves all rows from the view <span className="font-bold">view1</span>.</li>
                    </ul>

                    <ImageBlock src="/images/img14.png" alt="MySQL view result preview" />
                </section>

                {/* NEXT */}
                <section className="pt-6 border-t border-slate-800 min-a:text-2xl max-a:text-xl">
                    <p>
                        This marks the end of <span className="font-semibold text-slate-100">SQL Learning</span>.
                        But I have some additional <span className="font-semibold text-slate-100">Resources</span> for you in the next two pages.
                    </p>
                </section>

            </div>
        </div>
    );
}

// Resources pages
// page 25
export function Page25() {
    return (
        <div className="min-h-full w-full lg:px-6 md:px-4 px-2 pb-12">

            {/* PAGE TITLE */}
            <h1 className="font-bold tracking-tight text-slate-100 pt-6 pb-6 border-b border-slate-800
                min-lg:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl">
                SQL Projects
            </h1>

            <div className="text-slate-300 pt-8 space-y-16">

                {/* INTRO */}
                <section>
                    <p className="min-a:text-2xl max-a:text-xl">
                        This section showcases SQL-based projects I’ve created as part of my learning and practice journey.
                    </p>

                    <p className="min-a:text-2xl max-a:text-xl">
                        These projects combine concepts from <span className="font-semibold text-slate-100">Apna College's SQL course</span> with real-world
                        data handling, query writing, and optimization techniques.
                    </p>

                    <p className="min-a:text-2xl max-a:text-xl">
                        I’ll also share the source code and live demos (where applicable) to help you understand SQL in practical applications.
                    </p>
                </section>

                {/* GITHUB REPOSITORY */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        GitHub Repository
                    </h2>

                    <p className="min-a:text-2xl max-a:text-xl mt-4">
                        🔗 <span className="text-slate-400 italic">Main Repository Link:</span>{' '}
                        <a
                            href="https://github.com/TonyStark-19/SQL-Projects"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-400 italic underline"
                        >
                            sql-projects
                        </a>
                    </p>

                    <p className="text-sm text-slate-400 mt-1">
                        This repository contains all of my SQL-based learning projects and practice files.
                    </p>
                </section>

                {/* SQL SYNTAX EXAMPLES */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        SQL Syntax Examples
                    </h2>

                    <p className="min-a:text-2xl max-a:text-xl mt-4">
                        📘 <span className="text-slate-400 italic">Quick Syntax Reference:</span>{' '}
                        <a
                            href="https://github.com/TonyStark-19/SQL-Projects/blob/main/SQL-Syntax.sql"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-400 italic underline"
                        >
                            sql_syntax.sql
                        </a>
                    </p>

                    <p className="text-sm text-slate-400 mt-1">
                        A compilation of commonly used SQL commands and syntax examples — great for quick revision or reference.
                    </p>
                </section>

                {/* STUDENT MANAGEMENT PROJECT */}
                <section>
                    <h2 className="font-semibold text-slate-100 min-md:text-4xl max-md:text-3xl">
                        Student Management System Project
                    </h2>

                    <p className="min-a:text-2xl max-a:text-xl mt-4">
                        📁 <span className="text-slate-400 italic">Project Link:</span>{' '}
                        <a
                            href="https://github.com/TonyStark-19/SQL-Projects/blob/main/Project1.sql"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-400 italic underline"
                        >
                            student-management-system4
                        </a>
                    </p>

                    <p className="text-sm text-slate-400 mt-1">
                        A database project that manages student records using SQL queries — including table creation, data insertion, updates, and filtering.
                    </p>
                </section>

                {/* NEXT */}
                <section className="pt-6 border-t border-slate-800 min-a:text-2xl max-a:text-xl">
                    <p>
                        Stay tuned! More projects will be published here as they are completed. 🚀
                    </p>
                </section>

            </div>
        </div>
    );
}

// page 26
export function Page26() {
    return (
        <div className="min-h-full w-full lg:px-6 md:px-4 px-2 pb-12">

            {/* PAGE TITLE */}
            <h1 className="font-bold tracking-tight text-slate-100 pt-6 pb-6 border-b border-slate-800
                min-lg:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl">
                More Links
            </h1>

            <div className="text-slate-300 pt-8 space-y-16">

                {/* INTRO */}
                <section>
                    <p className="min-a:text-2xl max-a:text-xl">
                        This website was created as part of my SQL learning journey. I learned SQL concepts from Apna College's{' '}
                        <a href="https://www.youtube.com/watch?v=hlGoQC332VM&t=11487s" target="_blank" rel="noopener noreferrer"
                            className="text-blue-400 hover:underline">
                            SQL One Shot Tutorial
                        </a>{' '}
                        on YouTube.
                    </p>

                    <p className="min-a:text-2xl max-a:text-xl mt-4">
                        I followed notes provided by Apna College and combined them with my own structuring and design ideas to build this project using <span className="font-semibold text-slate-100">React JS</span> and <span className="font-semibold text-slate-100">Tailwind CSS</span>.
                    </p>
                </section>

                {/* PRACTICE ADVICE */}
                <section>
                    <p className="min-a:text-2xl max-a:text-xl">
                        If you are serious about learning SQL, I highly recommend not only studying the theory but also <span className="font-bold text-green-400">practicing it regularly</span>.
                    </p>

                    <p className="min-a:text-2xl max-a:text-xl mt-4">
                        Two excellent platforms for SQL practice are:
                    </p>

                    <ul className="list-disc pl-8 space-y-2 min-a:text-2xl max-a:text-xl">
                        <li>
                            <a href="https://www.hackerrank.com/domains/sql" target="_blank" rel="noopener noreferrer"
                                className="text-blue-400 hover:underline">
                                HackerRank SQL Practice
                            </a>
                        </li>
                        <li>
                            <a href="https://leetcode.com/problemset/database/" target="_blank" rel="noopener noreferrer"
                                className="text-blue-400 hover:underline">
                                LeetCode SQL Questions
                            </a>
                        </li>
                    </ul>
                </section>

                {/* ADDITIONAL RESOURCES */}
                <section>
                    <p className="min-a:text-2xl max-a:text-xl mt-4">
                        Some additional helpful resources for learning and mastering SQL:
                    </p>

                    <ul className="list-disc pl-8 space-y-2 min-a:text-2xl max-a:text-xl">
                        <li>
                            <a href="https://www.w3schools.com/sql/" target="_blank" rel="noopener noreferrer"
                                className="text-blue-400 hover:underline">
                                W3Schools SQL Tutorial
                            </a>
                        </li>
                        <li>
                            <a href="https://sqlzoo.net/" target="_blank" rel="noopener noreferrer"
                                className="text-blue-400 hover:underline">
                                SQLZoo - Interactive SQL Tutorials
                            </a>
                        </li>
                        <li>
                            <a href="https://mode.com/sql-tutorial/" target="_blank" rel="noopener noreferrer"
                                className="text-blue-400 hover:underline">
                                Mode SQL Tutorial for Analysts
                            </a>
                        </li>
                    </ul>
                </section>

                {/* NEXT / CLOSING */}
                <section className="pt-6 border-t border-slate-800 min-a:text-2xl max-a:text-xl">
                    <p>
                        Keep learning, keep practicing, and most importantly, keep building! ✨
                    </p>
                </section>

            </div>
        </div>
    );
}