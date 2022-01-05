import React, { useMemo/*, useState, useEffect*/ } from "react";

import UserForm from './components/UserForm.js';
import Table from './components/Table.js';

import './App.css';

export const App = () => {
    const columns = useMemo(
        () => [
            {
                Header: "Position",
                accessor: "id",
                Cell: ({ cell: { value } }) => 1
            },
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Email',
                accessor: 'email',
            },
            {
                Header: 'Phone Number',
                accessor: 'phone_number',
            },
        ],
        []
    );

    return (
        <div id='main'>
            <UserForm />
            <Table columns={columns} data={[1, 2, 3]} />

        </div>
    );
}

export default App;
