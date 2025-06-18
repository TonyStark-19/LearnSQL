// Content for each page

// Get started pages
// page 1
export function Page1() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">SQL Introduction</h1>

            <div className="text-gray-200 pt-10">
                <div className="text-4xl font-semibold">What is SQL?</div>

                <ul className="text-2xl list-disc pl-6 pb-7">
                    <li className="pt-7">SQL stands for Structured Query Language</li>
                    <li className="pt-3">It is not a database, it is a language used to interact with database.</li>
                    <li className="pt-3">SQL is a programming language used to interact with relational databases</li>
                    <li className="pt-3">SQL is used to store, manipulate and retrieve data from relational databases</li>

                    <li className="pt-3">It is used to perform <span className="font-bold">CRUD</span> operations :
                        <ul className="text-2xl list-disc pl-8">
                            <li className="pt-3"><span className="font-bold">C</span>reate - To create databases,
                                tables, insert data in tables etc.</li>
                            <li className="pt-3"><span className="font-bold">R</span>ead - To read data present in the database.</li>
                            <li className="pt-3"><span className="font-bold">U</span>pdate - Modify already inserted data.</li>
                            <li className="pt-3"><span className="font-bold">D</span>elete - Delete databases, table
                                or specific data point/row or multiple rows.</li>
                        </ul>
                    </li>
                </ul>

                <div className="text-2xl pt-1 border-l-4 border-slate-700 pl-3"><span className="font-bold">Note : </span>SQL keywords are not case
                    sensitive. Eg : select is the same as SELECT in SQL.</div>

                <div className="text-4xl pt-7 font-semibold">SQL vs MySQL</div>

                <div className="text-2xl pt-5">SQL is a language used to perform <span className="font-bold">CRUD </span>
                    operations in Relational Database, while MySQL is a Relational Database Management System (RDBMS) that uses SQL.</div>

                <div className="text-2xl py-7">Let's dive into Database Management System (DBMS) in the next page.</div>
            </div>
        </div>
    )
}

// page 2
export function Page2() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">DBMS</h1>

            <div className="text-gray-200 pt-10">
                <div className="text-4xl font-semibold">Let's talk about Databases first :</div>

                <ul className="text-2xl list-disc pl-6 pb-7">
                    <li className="pt-7">Database is a collection of interrelated data.</li>
                    <li className="pt-3">Database is a collection of data in a format that can easily be accessed (Digital).</li>
                </ul>

                <div className="text-4xl pt-5 font-semibold">So, What is DBMS?</div>

                <ul className="text-2xl list-disc pl-6 pb-7">
                    <li className="pt-7">A software application used to manage our Database is called DBMS
                        (Database Management System).
                    </li>
                    <li className="pt-3">It is software which is used to create, manage, and organise databases.</li>
                </ul>

                <div className="text-4xl pt-5 font-semibold">Types of Databases:</div>

                <ul className="text-2xl list-disc pl-6 pb-7">
                    <li className="pt-7">Relational
                        <ul className="text-2xl list-disc pl-8 pb-5">
                            <li className="pt-3">Relational Database Management System (RDBMS) - is a DBMS based on the concept
                                of tables.
                            </li>
                            <li className="pt-3">Data is organised into tables with rows and columns.</li>
                            <li className="pt-3">Eg : MySQL, PostgreSQL, Oracle etc.</li>
                        </ul>
                    </li>

                    <div className="text-2xl pt-1 pl-3 border-l-4 border-slate-700"><span className="font-bold">Note : </span>
                        We use SQL to work with Relational DBMS.</div>

                    <li className="pt-7">Non Relational (NoSQL).
                        <ul className="text-2xl list-disc pl-8">
                            <li className="pt-3">Non Relational Database Management System (NoSQL) - is a DBMS
                                in which data is not stored in tables.
                            </li>
                            <li className="pt-3">Eg : MongoDB.</li>
                        </ul>
                    </li>
                </ul>

                <div className="text-2xl pt-4 py-7">Let's dive into MySQL (a relational database system) which we will use to
                    learn about databases using SQL in the next page.</div>
            </div>
        </div>
    )
}

// page 3
export function Page3() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">MySQL</h1>

            <div className="text-gray-200 pt-10">
                <div className="text-4xl font-semibold">What is MySQL?</div>

                <ul className="text-2xl list-disc pl-6 pb-7">
                    <li className="pt-7">MySQL is a relational database management system (RDBMS).</li>
                    <li className="pt-3">It uses SQL language to interact with databases.</li>
                    <li className="pt-3">We will be using MySQL to learn SQL language.</li>
                </ul>

                <div className="text-4xl pt-5 font-semibold">Installing MySQL</div>

                <ul className="text-2xl list-disc pl-6 pb-7">
                    <li className="pt-7">If you have not installed MySQL till now. Install it from the link below :</li>
                    <li className="pt-3"><a className="hover:underline" href="https://www.mysql.com/">Download MySQL</a></li>
                </ul>

                <div className="text-2xl pt-1 pl-3 border-l-4 border-slate-700"><span className="font-bold">Note : </span>
                    You can follow a tutorial to download it to make sure everything is done correctly.</div>

                <div className="text-4xl pt-5 font-semibold">MySQL Workbench</div>

                <ul className="text-2xl list-disc pl-6 pb-7">
                    <li className="pt-7">MySQL Workbench is where we will write our SQL queries.</li>
                    <li className="pt-3">Below is a preview image of the MySQL Workbench :</li>
                </ul>

                <div className="rounded-lg overflow-hidden">
                    <img src="/images/workbench.png" alt="workbench"></img>
                </div>

                <div className="text-2xl pt-4 py-7">So the introduction of SQL is done. Let's begin
                    learning SQL from the next page.</div>
            </div>
        </div>
    )
}

// Learn sql pages
// page 4
export function Page4() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">Create Database</h1>

            <div className="text-gray-200 pt-10">
                <div className="text-4xl font-semibold">Creating our first Database</div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">To create your first Database on MySQL write the following code on your
                        MySQl Workbench :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md my-3 w-[800px]">
                    CREATE DATABASE xyz;
                </div>

                <ul className="text-2xl list-disc pl-6 pb-5">
                    <li className="pt-3">After writing it select the code and then click on the second bolt like
                        icon at the top of Workbench.
                    </li>
                </ul>

                <div className="text-2xl pt-1 pl-3 border-l-4 border-slate-700"><span className="font-bold">Note : </span>
                    The second bolt icon is used to run a selected portion of the code while the first one runs the whole file.
                    We will mostly use the second one for running our queries. You can use the first one only when you have not ran a single code
                    from that file, unless it will give error.</div>

                <ul className="text-2xl list-disc pl-6 pb-3 pt-2">
                    <li className="pt-3">Then you can referesh the schemas section on the left of the Workbench
                        and then you will see your database being created. As you can see below :
                    </li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img1.png" alt="workbench preview"></img>
                </div>

                <ul className="text-2xl list-disc pl-6 pb-3">
                    <li className="pt-7">So congratulations you have created your first database successfully.</li>
                    <li className="pt-3">But to use this database to perform your queires you have to run this code : </li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md my-3 w-[800px]">
                    USE xyz;
                </div>

                <ul className="text-2xl list-disc pl-6 pb-3">
                    <li className="pt-3">After this you will see the xyz database being highlighted. And now you can
                        use it and perform SQL queries on it.
                    </li>
                </ul>

                <div className="pt-3 pl-3 pb-4 overflow-hidden">
                    <img className="rounded-lg" src="/images/img2.png" alt="workbench preview"></img>
                </div>

                <div className="text-2xl pt-1 pl-3 border-l-4 border-slate-700"><span className="font-bold">Note : </span>
                    When you re-open your MySQL Workbench after closing it then you have to use this code again to
                    use the database and avoid errors.</div>

                <ul className="text-2xl list-disc pl-6 pb-3 pt-2">
                    <li className="pt-3">But if you want to delete this database you can simply do it by using this command :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md my-3 w-[800px]">
                    DROP DATABASE xyz;
                </div>

                <ul className="text-2xl list-disc pl-6 pb-3">
                    <li className="pt-3">You can still create the same database it using the same code
                        we used to create database earlier.</li>
                </ul>

                <div className="text-2xl pt-3 pb-6">Now let's learn the most important part of databases
                    : Tables in the next page.</div>
            </div>
        </div>
    )
}

// page 6
export function Page6() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">Create Table</h1>

            <div className="text-gray-200 pt-10">
                <div className="text-4xl font-semibold">Creating our first Table</div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">For creating our first Table on MySQL we use the following syntax :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px] overflow-x-auto">
                    <code>
                        CREATE TABLE table_name ({"\n"}
                        &nbsp;&nbsp;column_name1 datatype constraint,{"\n"}
                        &nbsp;&nbsp;column_name2 datatype constraint,{"\n"}
                        &nbsp;&nbsp;column_name3 datatype constraint{"\n"}
                        );
                    </code>
                </pre>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-5">We can add as much as columns as we want.</li>
                    <li className="pt-3">So let's create our first table in our database. Write the follwing code in your
                        MySQL Workbench :
                    </li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px] overflow-x-auto">
                    <code>
                        CREATE TABLE student ( {"\n"}
                        &nbsp;&nbsp;id INT PRIMARY KEY, {"\n"}
                        &nbsp;&nbsp;name VARCHAR(50), {"\n"}
                        &nbsp;&nbsp;age INT NOT NULL {"\n"}
                        );
                    </code>
                </pre>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-5">After writing the above code, select it all and run it.</li>
                    <li className="pt-3">Then refresh the schema section and then you will see your table being created.
                        As you can see below :
                    </li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img3.png" alt="workbench preview"></img>
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">Now you must be wondering what are these datatypes, constraints
                        like INT, NOT NULL, PRIMARY KEY, VARCHAR(50) etc. But don't worry we will dive
                        into it in the upcoming pages.</li>
                </ul>

                <div className="text-2xl pt-3 pb-6">Now let's learn about the datatypes used in SQL in the next page.</div>
            </div>
        </div>
    )
}

// page 7
export function Page7() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">SQL Datatypes</h1>

            <div className="text-gray-200 pt-10"></div>
        </div>
    )
}

// page 8
export function Page8() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">SQL Commands</h1>

            <div className="text-gray-200 pt-10">
                <div className="text-4xl font-semibold">Let's understand the types SQL Commands</div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">
                        <span className="font-bold">DDL </span>
                        (Data Definition Language) : create, alter, rename, truncate & drop
                    </li>
                    <li className="pt-7">
                        <span className="font-bold">DQL </span>
                        (Data Query Language) : select
                    </li>
                    <li className="pt-7">
                        <span className="font-bold">DML </span>
                        (Data Manipulation Language) : select, insert, update & delete
                    </li>
                    <li className="pt-7">
                        <span className="font-bold">DCL </span>
                        (Data Control Language) : grand & revoke permission to users
                    </li>
                    <li className="pt-7">
                        <span className="font-bold">TCL </span>
                        (Transaction COntrol Language) : start transaction, commit, rollback etc.
                    </li>
                </ul>

                <div className="text-2xl pt-3 pb-6">Now let's learn about more database realted queries on the next page.</div>
            </div>
        </div>
    )
}

// page 9
export function Page9() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">Database Related Queries</h1>

            <div className="text-gray-200 pt-10">
                <div className="text-4xl font-semibold">Let's see some more database related queries</div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">We created our first database using the follwing command :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    CREATE DATABASE xyz;
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">To avoid any error in the action output tab at the bottom, we will
                        use the follwing command as best practice :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    CREATE DATABASE IF NOT EXISTS xyz;
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">This command checks if the database with same name exists or not. If it is
                        already there then it does not create the database and if it is there it will create it.</li>
                    <li className="pt-7">We can do same for deleting the database. We deleted database using the following
                        code :
                    </li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    DROP DATABASE xyz;
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">To avoid any error in the action output tab at the bottom, we will
                        use the follwing command as best practice :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    DROP DATABASE IF NOT EXISTS xyz;
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">This command checks if the database with same name exists or not. If it is
                        there then it deletes it and if it is not there nothing will happen.</li>
                    <li className="pt-7">We can also check how many databases and tables we have created so far
                        in our MySQL Workbench.
                    </li>
                    <li className="pt-3">To check how many databases are present, we run the following code :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    SHOW DATABASES;
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-3">To check how many TABLES are present, we run the following code :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    SHOW TABLES;
                </div>

                <div className="text-2xl pt-5 pb-6">Now let's learn about the some more Table related queries
                    in the next page.</div>
            </div>
        </div>
    )
}

// page 10
export function Page10() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">Table Related Queries</h1>

            <div className="text-gray-200 pt-10">
                <div className="text-4xl font-semibold">Let's see some more table related queries</div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">We created our first table using the follwing code :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px] overflow-x-auto">
                    <code>
                        CREATE TABLE student ( {"\n"}
                        &nbsp;&nbsp;id INT PRIMARY KEY, {"\n"}
                        &nbsp;&nbsp;name VARCHAR(50), {"\n"}
                        &nbsp;&nbsp;age INT NOT NULL {"\n"}
                        );
                    </code>
                </pre>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">Now to check our table which we created, we can run this following code :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    SELECT * FROM student;
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">Now you will see a result gird opened where you can see your table. As
                        you can see below :</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img4.png" alt="workbench preview"></img>
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">But currently the values are null, which means there is no values inserted
                        in the table yet.</li>
                    <li className="pt-3">Let's insert some values in this table. You can insert values in the
                        table using the follwing syntax :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px] overflow-x-auto">
                    <code>
                        INSERT INTO table_name {"\n"}
                        (colname1, colname2) {"\n"}
                        VALUES {"\n"}
                        (col1_v1, col2_v1), {"\n"}
                        (col1_v2, col2_v2);
                    </code>
                </pre>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">Let's understand this syntax with an example code :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px] overflow-x-auto">
                    <code>
                        INSERT INTO student {"\n"}
                        (id, name, age) {"\n"}
                        VALUES {"\n"}
                        (101, "karan", 20), {"\n"}
                        (102, "arjun", 21);
                    </code>
                </pre>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">After writing this code select it all and run it. Check the action output tab below.
                        If it shows green tick we are good to go.</li>
                    <li className="pt-3">Now we can check the inserted data using the same code :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    SELECT * FROM student;
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">Now you must be seeing the follwing result in the result gird :</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img5.png" alt="workbench preview"></img>
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">Which means the data has been successfully inserted. Congratualtions you have not
                        learned to create your first table but also inserted the data to it.</li>
                </ul>

                <div className="text-2xl pt-5 pb-6">Now let's learn about SQL Keys in the next page.</div>
            </div>
        </div>
    )
}

// page 11
export function Page11() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">SQL Keys</h1>

            <div className="text-gray-200 pt-10"></div>
        </div>
    )
}

// page 5
export function Page12() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">SQL Constraints</h1>

            <div className="text-gray-200 pt-10"></div>
        </div>
    )
}

// page 13
export function Page13() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">SQL Select</h1>

            <div className="text-gray-200 pt-10">
                <div className="text-4xl font-semibold">Let's understand SELECT Query in detail</div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">SELECT is used to select any data from the database.</li>
                    <li className="pt-7">We used SELECT earlier to print the whole table. We used the follwing code :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    SELECT * FROM student;
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7 list-none">Let's understand this code :</li>
                    <li className="pt-3">So here we know about "SELECT", this symbol "*" means all. So "SELECT *" means
                        Select all.</li>
                    <li className="pt-3">"FROM" is used to define from where we want to select data.</li>
                    <li className="pt-3">And at last "student" is the table which we created and want to select data from.</li>
                    <li className="pt-3">So this whole code means select all data from the table "student". As a result is shows
                        whole table.</li>
                    <li className="pt-7">But what if we wanted to just select only specific columns from the given table.
                        We can do this with the follwing syntax :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    SELECT col1, col2 FROM table_name;
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">Let's understand this with an example :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    SELECT id, name FROM student;
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">Select this code and run it. You will see the follwing result :</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img6.png" alt="workbench preview"></img>
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">So what we did? Rather than selecting the whole table, we selected only few
                        specific columns (id, name).</li>
                    <li className="pt-3">if you want to just select only one column, you can do that as well like this :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    SELECT name FROM student;
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">Now you must be seeing the name column only. You can do the same for id
                        and age columns.</li>
                </ul>

                <div className="text-2xl pt-5 pb-6">Now let's learn about Where Clause in the next page.</div>

            </div>
        </div>
    )
}

// page 14
export function Page14() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">Where Clause</h1>

            <div className="text-gray-200 pt-10">
                <div className="text-4xl font-semibold">Before learning about Where Clause we will first create a sample
                    database :</div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">First let's create database named college :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px] overflow-x-auto">
                    <code>
                        CREATE DATABASE college {"\n"}
                        USE college {"\n"}
                    </code>
                </pre>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">After creating the database, now let's create table :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px] overflow-x-auto">
                    <code>
                        CREATE TABLE studenttable ( {"\n"}
                        &nbsp;&nbsp;rollno INT PRIMARY KEY,  {"\n"}
                        &nbsp;&nbsp;name VARCHAR(50),  {"\n"}
                        &nbsp;&nbsp;marks INT NOT NULL,  {"\n"}
                        &nbsp;&nbsp;grade VARCHAR(1),  {"\n"}
                        &nbsp;&nbsp;city VARCHAR(20)  {"\n"}
                        );
                    </code>
                </pre>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">Now let's insert sample data to this table :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px] overflow-x-auto">
                    <code>
                        INSERT INTO {"\n"}
                        studenttable (rollno, name, marks, grade, city) {"\n"}
                        VALUES {"\n"}
                        (101, "Anil", 78, "C", "Pune"), {"\n"}
                        (102, "bhumika", 93, "A", "Mumbai"), {"\n"}
                        (103, "chetan", 85, "B", "Mumbai"), {"\n"}
                        (104, "dhruv", 96, "A", "Delhi"), {"\n"}
                        (105, "emanuel", 12, "F", "Delhi"), {"\n"}
                        (106, "farah", 82, "B", "Delhi");
                    </code>
                </pre>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">We will use this table in the upcoming pages as well to understand
                        about SQL concepts.</li>
                    <li className="pt-3">Now let's dive into Where Clause</li>
                </ul>

                <div className="text-4xl pt-5 font-semibold">Where Clause</div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">Where Clause is used to define some conditions.</li>
                    <li className="pt-3">It is used to filter data from the database as per some conditions.</li>
                    <li className="pt-3">We can use Where Clause using the following syntax :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px] overflow-x-auto">
                    <code>
                        SELECT col1, col2 FROM table_name {"\n"}
                        WHERE conditions;
                    </code>
                </pre>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">Let's understand this syntax with an example :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    SELECT * FROM studenttable WHERE marks &gt; 80;
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">Above code returns only that data of students who have marks greater than 80. Which
                        can be seen below :</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img9.png" alt="workbench preview"></img>
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">Let's take another example :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    SELECT * FROM studenttable WHERE city = "Mumbai";
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">Above code returns only that data of students who are from city Mumbai.
                        Which also can be seen below :
                    </li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img10.png" alt="workbench preview"></img>
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">Now you have understand how the Where Clause works.</li>
                    <li className="pt-3">We can use different types of operators with Where Clause.</li>
                </ul>

                <div className="text-2xl pt-5 pb-6">Now let's learn about Operators in SQL in the next page.</div>
            </div>
        </div>
    )
}

// page 15
export function Page15() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">SQL Operators</h1>

            <div className="text-gray-200 pt-10">
                <div className="text-4xl font-semibold">Let's learn about types of SQL Operators</div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">
                        <span className="font-bold">Arithmetic Operators : </span>
                        + (Addition), - (Subtraction), * (Multiplication), / (Division), % (Modulus)
                    </li>
                    <li className="pt-5">
                        <span className="font-bold">Comparison Operators : </span>
                        = (Equal to), != (Not equal to), &gt;, &gt;=, &lt;, &lt;=
                    </li>
                    <li className="pt-5">
                        <span className="font-bold">Logical Operators : </span>
                        AND, OR, NOT, IN, BETWEEN, ALL, LIKE, ANY
                    </li>
                    <li className="pt-5">
                        <span className="font-bold">Bitwise Operators : </span>
                        & (Bitwise AND), | (Bitwise OR)
                    </li>
                    <li className="pt-7 list-none">Let's see some Logical Operators :</li>
                    <li className="pt-7">Logical AND (to check for both conditions to be true)</li>
                    <li className="pt-3">Let's understand this with an example :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    SELECT * FROM studenttable WHERE marks &gt; 80 AND city = "Mumbai";
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-5">Above statements returns those rows where marks is greater than 80 and city is
                        Mumbai.</li>
                    <li className="pt-7">Logical OR (to check for one of the conditions to be true)</li>
                    <li className="pt-3">Let's understand this with an example :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    SELECT * FROM studenttable WHERE marks &gt; 90 OR city = "Mumbai";
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-5">Above statements returns those rows where marks is greater than 90 or where the
                        city is Mumbai.</li>
                    <li className="pt-7">Logical BETWEEN (selects for a given range)</li>
                    <li className="pt-3">Let's understand this with an example :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    SELECT * FROM studenttable WHERE marks BETWEEN 80 AND 90;
                </div>

                <ul className="text-2xl list-disc pl-6 pb-5">
                    <li className="pt-5">Above statements returns those rows where marks is between the range 80 and 90.</li>
                </ul>

                <div className="text-2xl pt-1 pl-3 border-l-4 border-slate-700"><span className="font-bold">Note : </span>
                    Here AND is not Logical AND Operator</div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">Logical IN (matches any value in the list)</li>
                    <li className="pt-3">Let's understand this with an example :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    SELECT * FROM studenttable WHERE city IN ("Delhi", "Mumbai");
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-5">Above statements returns those rows where city is in from the list ("Delhi",
                        "Mumbai")</li>
                    <li className="pt-7">Logical NOT (to negate the given conditon)</li>
                    <li className="pt-3">Let's understand this with an example :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    SELECT * FROM studenttable WHERE city NOT IN ("Delhi", "Mumbai");
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-5">Above statements returns those rows where city is not from the list ("Delhi",
                        "Mumbai")</li>
                </ul>

                <div className="text-2xl pt-5 pb-6">Now let's learn about another type of clause which is
                    LIMIT Clause in the next page.</div>
            </div>
        </div>
    )
}

// page 16
export function Page16() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">Limit Clause</h1>

            <div className="text-gray-200 pt-10">
                <div className="text-4xl font-semibold">Let's learn about Limit Clause</div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">Limit Clause sets an upper limit on number of rows to be returned as result.</li>
                    <li className="pt-3">Which means by using Limit Clause we get a limited amount of data even
                        if the condtion asks to return more data from the database.</li>
                    <li className="pt-3"> We can use Limit Clause using the follwing syntax :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px] overflow-x-auto">
                    <code>
                        SELECT col1, col2 FROM table_name {"\n"}
                        LIMIT number;
                    </code>
                </pre>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">Let's understand this syntax with an example :</li>
                    <li className="pt-3">First we will use Select all statement to check the diffrence :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    SELECT * FROM studenttable;
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">The above statement will show the follwing result :</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img7.png" alt="workbench preview"></img>
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">Now let's run the Limit statement :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    SELECT * FROM studenttable LIMIT 3;
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">The above statement will show the follwing result :</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img8.png" alt="workbench preview"></img>
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">Now you must be seeing the diffrence between the results.</li>
                    <li className="pt-3">The Select all statement returns all data of the table but Limits it to 3.
                        Which means only 3 rows will be returned as result.</li>
                </ul>

                <div className="text-2xl pt-5 pb-6">Now let's learn about another type of clause which is
                    Order By Clause in the next page.</div>
            </div>
        </div>
    )
}

// page 17
export function Page17() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">Order By Clause</h1>

            <div className="text-gray-200 pt-10">
                <div className="text-4xl font-semibold">Let's learn about Order By Clause</div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">Order By Clause is used to sort the result in ascending (ASC) or descending
                        order (DESC).</li>
                    <li className="pt-3">Which means by using Order By Clause we get a the result in a sorted fashion.
                        And this result can be in ascending (ASC) or descending order (DESC).</li>
                    <li className="pt-3"> We can use Order By Clause using the follwing syntax :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 mb-6 w-[800px] overflow-x-auto">
                    <code>
                        SELECT col1, col2 FROM table_name {"\n"}
                        ORDER BY col_name(s) ASC;
                    </code>
                </pre>

                <div className="text-2xl pt-1 pl-3 border-l-4 border-slate-700"><span className="font-bold">Note : </span>
                    There's no need to write ASC for sorting data in ascending order. It will be done as a defalut
                    thing but you have to write DESC for sorting data in descending order.</div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">Let's understand this syntax with an example :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px] overflow-x-auto">
                    <code>
                        SELECT * FROM studenttable {'\n'}
                        ORDER BY city ASC;
                    </code>
                </pre>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">The above statement will show the follwing result :</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img11.png" alt="workbench preview"></img>
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">As you can see in the above result the data is sorted in ascending order
                        as per the city.</li>
                    <li className="pt-3">As a result the city Delhi is at the top while Pune is at the bottom.</li>
                    <li className="pt-3">You can order the result by roll number, name, marks or grade and whether
                        it's ascending or descending ordering of data.</li>
                </ul>

                <div className="text-2xl pt-5 pb-6">Now let's learn about Aggregate functions in the next page.</div>
            </div>
        </div>
    )
}

// page 18
export function Page18() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">Aggregate Functions</h1>

            <div className="text-gray-200 pt-10">
                <div className="text-4xl font-semibold">Let's learn about Aggregate Functions</div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">Aggregate Functions perform a calculation on a set of values, and
                        return a single value.</li>
                    <li className="pt-3">Let's see the types of Aggregate Functions :</li>
                    <li className="pt-7">COUNT( ) : it returns the count of the total number of items for
                        the particular column.</li>
                    <li className="pt-3">Let's understand it with some example :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    SELECT COUNT(name) FROM studenttable;
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">The above statement shows the count of names as it can be seen below :</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img15.png" alt="workbench preview"></img>
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">MAX( ) : it returns the maximum value for the particular column.</li>
                    <li className="pt-3">Let's understand it with some example :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    SELECT MAX(marks) FROM studenttable;
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">The above statement shows the maximum marks as it can be seen below :</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img16.png" alt="workbench preview"></img>
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">MIN( ) : it returns the minimum value for the particular column.</li>
                    <li className="pt-3">Let's understand it with some example :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    SELECT MIN(marks) FROM studenttable;
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">The above statement shows the minimum marks as it can be seen below :</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img17.png" alt="workbench preview"></img>
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">SUM( ) : it returns the total sum value for the particular column.</li>
                    <li className="pt-3">Let's understand it with some example :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    SELECT SUM(marks) FROM studenttable;
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">The above statement shows the total sum of marks as it can be seen below :</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img18.png" alt="workbench preview"></img>
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">AVG( ) : it returns the average value for the particular column.</li>
                    <li className="pt-3">Let's understand it with some example :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    SELECT AVG(marks) FROM studenttable;
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">The above statement shows the average of marks as it can be seen below :</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img19.png" alt="workbench preview"></img>
                </div>

                <div className="text-2xl pt-5 pb-6">Now let's learn about another type of clause which is
                    Group By Clause in the next page.</div>
            </div>
        </div>
    )
}

// page 19
export function Page19() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">Group By Clause</h1>

            <div className="text-gray-200 pt-10">
                <div className="text-4xl font-semibold">Let's learn about Group By Clause</div>

                <ul className="text-2xl list-disc pl-6 pb-5">
                    <li className="pt-7">Group rows that have the same values into summary rows.</li>
                    <li className="pt-3">It collects data from multiple records and groups the result by one or
                        more column.</li>
                </ul>

                <div className="text-2xl pt-1 pl-3 border-l-4 border-slate-700"><span className="font-bold">Note : </span>
                    We generally use Group By Clause with some Aggregate function</div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">Let's understand Group By Clause with an example :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px] overflow-x-auto">
                    <code>
                        SELECT city, COUNT(name) {'\n'}
                        FROM studenttable {'\n'}
                        GROUP BY city;
                    </code>
                </pre>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">In the above statement we are selecting city column which gives city names
                        and COUNT(name) column which gives count of names.</li>
                    <li className="pt-3">The above function COUNT(name) won't work without grouping it with something.</li>
                    <li className="pt-3">That's why we group it with city. Now the result will a total number of names
                        or student as per the city. As you can see below :</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/image12.png" alt="workbench preview"></img>
                </div>

                <div className="text-2xl pt-5 pb-6">Now let's learn about another type of clause which is
                    Having Clause in the next page.</div>
            </div>
        </div>
    )
}

// page 20
export function Page20() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">Having Clause</h1>

            <div className="text-gray-200 pt-10">
                <div className="text-4xl font-semibold">Let's learn about Having Clause</div>

                <ul className="text-2xl list-disc pl-6 pb-5">
                    <li className="pt-7">It is similar to Where Clause as it also applies some condtion on rows.</li>
                    <li className="pt-3">It is used when we want to apply any condition after grouping.</li>
                    <li className="pt-3">Which means when we have grouped the data using Group By Clause. Then if we want
                        to apply some condition to the group we use Having Clause.</li>
                    <li className="pt-7">Let's understand Having Clause with an example :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px] overflow-x-auto">
                    <code>
                        SELECT COUNT(name), city {'\n'}
                        FROM studenttable {'\n'}
                        GROUP BY city {'\n'}
                        HAVING MAX(marks) &gt; 90;
                    </code>
                </pre>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">In the above statement we are selecting city column which gives city names
                        and COUNT(name) column which gives count of names.</li>
                    <li className="pt-3">Then we have grouped the data by city.</li>
                    <li className="pt-3">And then applied a condition using Having Clause, that give me count of students
                        in each city only if the highest mark in the city is greater than 90.</li>
                    <li className="pt-3">And then it gives the following result :</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img13.png" alt="workbench preview"></img>
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">This result means that only the city Mumbai and Delhi have one or more students
                        who have maximum marks greater than 90.</li>
                </ul>

                <div className="text-2xl pt-5 pb-6">Now let's learn about Cascading in Foreign Keys in the next page.</div>
            </div>
        </div>
    )
}

// page 21
export function Page21() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">Cascading</h1>

            <div className="text-gray-200 pt-10"></div>
        </div>
    )
}

// page 22
export function Page22() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">More Table Related Queries</h1>

            <div className="text-gray-200 pt-10"></div>
        </div>
    )
}

// page 23
export function Page23() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">Joins In SQL</h1>

            <div className="text-gray-200 pt-10"></div>
        </div>
    )
}

// page 24
export function Page24() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">SQL Sub-Queries</h1>

            <div className="text-gray-200 pt-10"></div>
        </div>
    )
}

// page 25
export function Page25() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">MySQL Views</h1>

            <div className="text-gray-200 pt-10">
                <div className="text-4xl font-semibold">Let's learn about MySQL Views</div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">A view is a virtual table based on the result-set of an SQL statement.</li>
                    <li className="pt-3">A view always shows up-to-date data. The database engine recreates the view
                        , every time a user queries it.</li>
                    <li className="pt-7">Let's understand MySQL Views with an example :</li>
                </ul>

                <pre className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px] overflow-x-auto">
                    <code>
                        CREATE VIEW view1 AS {'\n'}
                        SELECT rollno, name FROM studenttable; {'\n'}
                    </code>
                </pre>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">The above statemet create a MySQL View "view1".</li>
                    <li className="pt-3">This "view1" is created on the statement "SELECT rollno, name FROM studenttable"
                        which selects rollno and name column from the studenttable.</li>
                    <li className="pt-3">Now to see thie MySQL View "view1" we can run this follwing code : </li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    SELECT * FROM view1;
                </div>

                <ul className="text-2xl list-disc pl-6 pb-2">
                    <li className="pt-7">This statement will give us the follwing result :</li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img14.png" alt="workbench preview"></img>
                </div>

                <div className="text-2xl pt-5 pb-6">This marks the end of the SQL Learning. But i have some more resources
                    for you in the next two pages.</div>
            </div>
        </div>
    )
}

// page 26
export function Page26() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">SQL Projects</h1>

            <div className="text-gray-200 pt-10"></div>
        </div>
    )
}

// page 27
export function Page27() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">More Links</h1>

            <div className="text-gray-200 pt-10"></div>
        </div>
    )
}