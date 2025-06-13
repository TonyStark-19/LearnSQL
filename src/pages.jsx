// Content for each page

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