import { useState } from 'react';
import './userDashboard.css';
import axios from 'axios'; 
import downarr from '../images/downarr.png';
import user from '../images/user.png';
import msg from '../images/msg.png';
import noti from '../images/noti.png';
import card from '../images/card.png';
import budget from '../images/budget.png';
import payment from '../images/payment.png';
import home from '../images/home.png';
import curr from '../images/curr.png';
import currsym from '../images/currsym.png';
import loanicon from '../images/loanicon.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {

  const navigate=useNavigate();
  const [borrowcs, setBorrowcs] = useState(true);
  const [transactcs, setTransactcs] = useState(false);
  const [depositecs, setDepositecs] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    loanAmount: '',
    loanTenure: '',
    employmentStatus: '',
    reasonForLoan: '',
    employmentAddress: ''
  });

  const [loans] = useState([
    { officer: 'John Okoh', amount: 50000, date: 'June 09, 2021', time: '6:30 PM', status: 'PENDING' },
    { officer: 'John Okoh', amount: 100000, date: 'June 07, 2021', time: '6:30 PM', status: 'VERIFIED' },
    { officer: 'John Okoh', amount: 100000, date: 'June 07, 2021', time: '6:30 PM', status: 'REJECTED' },
    { officer: 'John Okoh', amount: 100000, date: 'May 27, 2021', time: '6:30 PM', status: 'APPROVED' },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 2; 

  const indexOfLastLoan = currentPage * rowsPerPage;
  const indexOfFirstLoan = indexOfLastLoan - rowsPerPage;
  const currentLoans = loans.slice(indexOfFirstLoan, indexOfLastLoan);

  const totalPages = Math.ceil(loans.length / rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle input change
  const handleInputChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://loan-manager-b62z.onrender.com/api/v1/create-loan', formData); 
      console.log(response.data);
      toast.success("loan applied successfully");
      setIsDialogOpen(false);
    } catch (error) {
      console.error(error);
      alert('Error submitting loan application');
    }
  };

  return (
    <div className='complete'>
      {/* Header Content */}
      <ToastContainer />
      <div className='header'>
        <div className='head1'>
          CREDIT APP
        </div>

        <div className='head2'>
          <div>
            <img src={home} alt='not' />
            <div className='home'>Home</div>
          </div>
          <div>
            <img src={payment} alt='not' />
            <div className='payment'>Payments</div>
          </div>
          <div>
            <img src={budget} alt='not' />
            <div className='payment'>Budgets</div>
          </div>
          <div>
            <img src={card} alt='not' />
            <div className='payment'>Card</div>
          </div>

          <div>
            <div className='payment' onClick={()=>navigate("/admin")} style={{cursor:"pointer"}}>Admin</div>
          </div>
        </div>

        <div className='head3'>
          <div><img src={noti} alt='not' /></div>
          <div><img src={msg} alt='not' /></div>
          <div><img src={user} alt='not' /></div>
          <div className='payment'>User</div>
          <div><img src={downarr} alt='not' /></div>
        </div>
      </div>

      {/* Body Content */}
      <div className='bodytp'>
        <div className='body1'>
          <div className='body1left'>
            <div className='currimg'>
              <img src={curr} alt='not' />
            </div>
            <div className='deficit'>
              <div>DEFICIT</div>
              <div className='currsymimg'>
                <img src={currsym} alt='not' />
              </div>
            </div>
            <div className='amnt'>
              0.0
            </div>
          </div>

          <div className='getloan' onClick={() => setIsDialogOpen(true)}>
            Get A Loan
          </div>
        </div>

        <div className='tabs'>
          <button className={borrowcs ? 'active-tab' : ''} onClick={() => { setBorrowcs(true); setTransactcs(false); setDepositecs(false); }}>
            Borrow Cash
          </button>
          <button className={transactcs ? 'active-tab' : ''} onClick={() => { setBorrowcs(false); setTransactcs(true); setDepositecs(false); }}>
            Transact
          </button>
          <button className={depositecs ? 'active-tab' : ''} onClick={() => { setBorrowcs(false); setTransactcs(false); setDepositecs(true); }}>
            Deposit Cash
          </button>
        </div>

        <div className="body3">
          <input
            type="text"
            placeholder="Search for loans"
            className="search-bar"
          />
        </div>
      </div>

      {isDialogOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsDialogOpen(false)}>&times;</span>
            <h2>APPLY FOR A LOAN</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input 
                  type="text" 
                  name="fullName"
                  placeholder="Full name as it appears on bank account" 
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required 
                />
                <input 
                  type="number" 
                  name="loanAmount"
                  placeholder="How much do you need?" 
                  value={formData.loanAmount}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-row">
                <input 
                  type="number" 
                  name="loanTenure"
                  placeholder="Loan tenure (in months)" 
                  value={formData.loanTenure}
                  onChange={handleInputChange}
                  required 
                />
                <input 
                  type="text" 
                  name="employmentStatus"
                  placeholder="Employment status" 
                  value={formData.employmentStatus}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-row">
                <textarea 
                  name="reasonForLoan"
                  placeholder="Reason for loan" 
                  value={formData.reasonForLoan}
                  onChange={handleInputChange}
                  required
                />
                <input 
                  type="text" 
                  name="employmentAddress"
                  placeholder="Employment address" 
                  value={formData.employmentAddress}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-footer">
                <input type="checkbox" required />
                <label>I have read the important information and agree to the terms.</label>
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}

      <div className="loan-table-container">
        <h2>Applied Loans</h2>
        <div className="loan-table">
          <div className="loan-table-header">
            <div>Loan Officer</div>
            <div>Amount</div>
            <div>Date Applied</div>
            <div>Status</div>
          </div>
          {currentLoans.map((loan, index) => (
            <div key={index} className="loan-table-row">
              <div className="loan-officer">
                <img src={loanicon || 'not-found.png'} alt="not found" className="loan-officer-img" />
                <div>{loan.officer}</div>
              </div>
              <div>{loan.amount.toLocaleString()}</div>
              <div>
                <div>{loan.date}</div>
                <div>{loan.time}</div>
              </div>
              <div>
                <span className={`status-badge ${loan.status.toLowerCase()}`}>{loan.status}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination-controls">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
