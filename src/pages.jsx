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
                    <li className="pt-7">To create your first Database on MySQL write the following command on
                        MySQl Workbench :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    CREATE DATABASE xyz;
                </div>

                <ul className="text-2xl list-disc pl-6 pb-3">
                    <li className="pt-3">After writing it select the command and then click on the second bolt like
                        icon at the top of Workbench.
                    </li>
                    <li className="pt-3">Then you can referesh the schemas section on the left of the Workbench
                        and then you will see your database being created. As you can see below :
                    </li>
                </ul>

                <div className="pt-3 pl-3 overflow-hidden">
                    <img className="rounded-lg" src="/images/img1.png" alt="workbench preview"></img>
                </div>

                <ul className="text-2xl list-disc pl-6 pb-3">
                    <li className="pt-7">So congratulations you have created your first database successfully.</li>
                    <li className="pt-3">But to use this database you have to run this command : </li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
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

                <ul className="text-2xl list-disc pl-6 pb-3">
                    <li className="pt-3">But if you want to delete this database you can simply do it by using this command :</li>
                </ul>

                <div className="bg-gray-800 text-green-400 font-mono p-3 pl-5 rounded-md mt-3 w-[800px]">
                    DROP DATABASE xyz;
                </div>

                <ul className="text-2xl list-disc pl-6 pb-3">
                    <li className="pt-3">You can still create it using the same command we used to create database.</li>
                </ul>

                <div className="text-2xl pt-4 py-7">Now let's learn the most important part of databases
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
                    <li className="pt-3">So let's create our first table. Write the follwing code in your
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

                <div className="text-2xl pt-4 py-7">Now let's learn about the datatypes used in SQL in the next page.</div>
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

            <div className="text-gray-200 pt-10"></div>
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
            </div>
        </div>
    )
}

// page 10
export function Page10() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">Table Related Queries</h1>

            <div className="text-gray-200 pt-10"></div>
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

            <div className="text-gray-200 pt-10"></div>
        </div>
    )
}

// page 14
export function Page14() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">Where Clause</h1>

            <div className="text-gray-200 pt-10"></div>
        </div>
    )
}

// page 15
export function Page15() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">SQL Operators</h1>

            <div className="text-gray-200 pt-10"></div>
        </div>
    )
}

// page 16
export function Page16() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">Limit Clause</h1>

            <div className="text-gray-200 pt-10"></div>
        </div>
    )
}

// page 17
export function Page17() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">Order By Clause</h1>

            <div className="text-gray-200 pt-10"></div>
        </div>
    )
}

// page 18
export function Page18() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">Aggregate Functions</h1>

            <div className="text-gray-200 pt-10"></div>
        </div>
    )
}

// page 19
export function Page19() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">Group By Clause</h1>

            <div className="text-gray-200 pt-10"></div>
        </div>
    )
}

// page 20
export function Page20() {
    return (
        <div className="min-h-full w-full px-4">
            <h1 className="text-8xl font-semibold pt-3 text-slate-100">Having Clause</h1>

            <div className="text-gray-200 pt-10"></div>
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

            <div className="text-gray-200 pt-10"></div>
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