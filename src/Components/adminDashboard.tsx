import { useState } from 'react';
import './adminDashboard.css';
import downarr from '../images/downarr.png';
import user from '../images/user.png';
import msg from '../images/msg.png';
import noti from '../images/noti.png';
import sidebarIcon from '../images/sidebar.png';
import active from "../images/adminimg/active.png";
import boro from "../images/adminimg/boro.png";
import cashdis from "../images/adminimg/cashdis.png";
import cashrece from "../images/adminimg/cashrece.png";
import loan from "../images/adminimg/loan.png";
import otherloan from "../images/adminimg/otherloan.png";
import rapid from "../images/adminimg/rapid.png";
import saving from "../images/adminimg/saving.png";
import dashboard1 from "../images/adminimg/dashboard1.png";
import boro1 from "../images/adminimg/boro1.png";
import loan1 from "../images/adminimg/loan1.png";
import repay1 from "../images/adminimg/repay1.png";
import accnt1 from "../images/adminimg/accnt1.png";
import rep1 from "../images/adminimg/rep1.png";
import coll1 from "../images/adminimg/coll1.png";
import accong1 from "../images/adminimg/accong1.png";
import sav1 from "../images/adminimg/sav1.png";
import exp1 from "../images/adminimg/exp1.png";
import sig1 from "../images/adminimg/sig1.png";
import inv1 from "../images/adminimg/inv1.png";
import cal1 from "../images/adminimg/cal1.png";
import sett1 from "../images/adminimg/sett1.png";
import signout1 from "../images/adminimg/signout1.png";
import user1 from "../images/adminimg/user1.png";
import loanpay1 from "../images/adminimg/loanpay1.png";
import { useNavigate } from 'react-router-dom';



const AdminDashboard = () => {
  
  const navigate=useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const recentLoans = [
    { user: 'Tom Cruise', details: 'Contact Email not Linked', date: 'June 09, 2021', status: 'PENDING' },
    { user: 'Matt Damon', details: 'Adding Images to Featured Posts', date: 'June 09, 2021', status: 'PENDING' },
    { user: 'Robert Downey', details: 'When will I be charged this month?', date: 'June 08, 2021', status: 'PENDING' },
    { user: 'Christian Bale', details: 'Payment not going through', date: 'June 08, 2021', status: 'PENDING' },
    { user: 'Henry Cavil', details: 'Unable to add replies', date: 'June 08, 2021', status: 'APPROVED' },
    { user: 'Chris Evans', details: 'Downtime since last week', date: 'June 08, 2021', status: 'APPROVED' },
    { user: 'Sam Smith', details: 'Referral Bonus', date: 'June 08, 2021', status: 'PENDING' },
  ];

  return (
    <div className={`dashboard-container ${sidebarOpen ? 'dashboard-elements-shifted' : ''}`}>
      <div className='header'>
        <div className='headsidbar'>
          <div className='head1' onClick={()=>navigate("/")} style={{ cursor: "pointer" }}>CREDIT APP</div>
          <div style={{ cursor: "pointer" }}><img src={sidebarIcon} alt="" onClick={toggleSidebar} /></div>
        </div>

        <div className='head3'>
          <div><img src={noti} alt='not' /></div>
          <div><img src={msg} alt='not' /></div>
          <div><img src={user} alt='not' /></div>
          <div className='payment'>User</div>
          <div><img src={downarr} alt='not' /></div>
        </div>
      </div>

      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="user-section">
          <img src={user1} alt="User Icon" className="user-icon" />
          <span className="user-name">John Okoh</span>
        </div>
        <ul>
          <li>
            <img src={dashboard1} alt="Dashboard" />
            <span>Dashboard</span>
          </li>
          <li>
            <img src={boro1} alt="Borrowers" />
            <span>Borrowers</span>
          </li>
          <li>
            <img src={loan1} alt="Loans" />
            <span>Loans</span>
          </li>
          <li>
            <img src={repay1} alt="Repayments" />
            <span>Repayments</span>
          </li>
          <li>
            <img src={accnt1} alt="Loan Parameters" />
            <span>Loan Parameters</span>
          </li>
          <li>
            <img src={rep1} alt="Accounting" />
            <span>Accounting</span>
          </li>
          <li>
            <img src={coll1} alt="Reports" />
            <span>Reports</span>
          </li>
          <li>
            <img src={accong1} alt="Collateral" />
            <span>Collateral</span>
          </li>
          <li>
            <img src={sav1} alt="Access Configuration" />
            <span>Access Configuration</span>
          </li>
          <li>
            <img src={exp1} alt="Savings" />
            <span>Savings</span>
          </li>
          <li>
            <img src={sig1} alt="Expenses" />
            <span>Expenses</span>
          </li>
          <li>
            <img src={inv1} alt="E-signature" />
            <span>E-signature</span>
          </li>
          <li>
            <img src={cal1} alt="Investor Accounts" />
            <span>Investor Accounts</span>
          </li>
          <li>
            <img src={sett1} alt="Calendar" />
            <span>Calendar</span>
          </li>
          <li>
            <img src={signout1} alt="Settings" />
            <span>Settings</span>
          </li>
          <li>
            <img src={loanpay1} alt="Sign Out" />
            <span>Sign Out</span>
          </li>
        </ul>
      </div>

      <div className="dashboard-elements">
        <div className='dashboard-card'>
          <img src={active} alt='Active Users' />
          <div>
            <p>200</p>
            <p>Active Users</p>
          </div>
        </div>
        <div className='dashboard-card'>
          <img src={boro} alt='Borrowers' />
          <div>
            <p>100</p>
            <p>Borrowers</p>
          </div>
        </div>
        <div className='dashboard-card'>
          <img src={cashdis} alt='Cash Disbursed' />
          <div>
            <p>550,000</p>
            <p>Cash Disbursed</p>
          </div>
        </div>
        <div className='dashboard-card'>
          <img src={cashrece} alt='Cash Received' />
          <div>
            <p>1,000,000</p>
            <p>Cash Received</p>
          </div>
        </div>
        <div className='dashboard-card'>
          <img src={saving} alt='Savings' />
          <div>
            <p>450,000</p>
            <p>Savings</p>
          </div>
        </div>
        <div className='dashboard-card'>
          <img src={rapid} alt='Repaid Loans' />
          <div>
            <p>30</p>
            <p>Repaid Loans</p>
          </div>
        </div>
        <div className='dashboard-card'>
          <img src={otherloan} alt='Other Accounts' />
          <div>
            <p>10</p>
            <p>Other Accounts</p>
          </div>
        </div>
        <div className='dashboard-card'>
          <img src={loan} alt='Loans' />
          <div>
            <p>50</p>
            <p>Loans</p>
          </div>
        </div>
      </div>

      <div className='recent-loans'>
        <h3>Recent Loans</h3>
        <table className='loan-table'>
          <thead>
            <tr>
              <th>User Details</th>
              <th>Customer Name</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentLoans.map((loan, index) => (
              <tr key={index}>
                <td>{loan.details}</td>
                <td>{loan.user}</td>
                <td>{loan.date}</td>
                <td><span className={`status ${loan.status.toLowerCase()}`}>{loan.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='pagination'>
          <span>Rows per page: 7</span>
          <span>1-7 of 1240</span>
          <span>&lt; Prev | Next &gt;</span>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
