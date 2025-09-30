import React from 'react';
import Navbar from "./Navbar";
import EmployeeCard from './cards/EmployeeCard'
import SalaryCard from './cards/SalaryCard'
import AttendanceCard from './cards/AttendanceCard'
import PayrollCard from './cards/PayrollCard'


function Dashboard() {
    return (
        <>
            <Navbar />
            <div className='flex flex-row justify-center gap-8 w-full'>
                <EmployeeCard />
                <SalaryCard />
                <AttendanceCard />
                <PayrollCard />
            </div>
        </>
    );
}

export default Dashboard;
