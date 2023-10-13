import React, { useState, ChangeEvent, FormEvent, FC } from 'react';
import { Img } from './Img';
// import { Modal } from 'antd';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  email: string;
  name: string;
  telephone: string;
  paymentMethod: string;
}

const BookingModal: FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    name: '',
    telephone: '',
    paymentMethod: 'credit-card', // Default payment method
  });

  const [checkInDate, setCheckInDate] = useState<string>('');
  const [checkOutDate, setCheckOutDate] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckInDateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCheckInDate(value);
  };

  const handleCheckOutDateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCheckOutDate(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const closeAndResetModal = () => {
    onClose();
    
    
  };

  const generateDateOptions = () => {
    const dateOptions = [];
    const today = new Date();
    const currentYear = today.getFullYear();

    for (let month = 1; month < 12; month++) {
      for (let day = 1; day <= new Date(currentYear, month + 1, 0).getDate(); day++) {
        const date = new Date(currentYear, month, day);
        const dateString = date.toISOString().split('T')[0];
        dateOptions.push(
          <option key={dateString} value={dateString}>
            {dateString}
          </option>
        );
      }
    }

    return dateOptions;
  };

  return (
    <>
     {/* <Modal
        title=""
        centered
        open={modalOpen}
        onOk={closeModal}
        onCancel={closeModal}
        footer={null} 
        className=''
      ></Modal> */}
    <div className={`fixed top-0 inset-0 w-full flex z-10 bg-black-900_0c items-center py-[28%] md:p-[14%] sm:p-8 justify-center ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div className="modal-container relative bg-teal-600 rounded-[30px]  p-28 md:p-8  md:w-[90%]  w-[60%]">
        <div className="modal-content ">
          <Img  src="images/close.png"  alt="close" className="close-button absolute top-3 left-4 w-[30px] md:w-[16px]" onClick={closeAndResetModal}
           
            />
          
          {isSubmitted ? (
            <div className="mb-4 text-green-500">Thank you for your booking!</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4 md:mb-2 flex justify-center md:flex-col md:justify-center md:gap-2 gap-6 w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input  rounded-[15px] w-1/2 md:w-full"
                />
                
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input  rounded-[15px] w-1/2 md:w-full"
                />
              </div>
              <div className="mb-4 md:mb-1 flex justify-center w-full md:flex-col md:gap-1 gap-6">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                  className="input rounded-[15px] w-1/2 md:w-full"
                />
                <select
                  name="select service"
                  value={checkOutDate}
                  onChange={handleCheckOutDateChange}
                  required
                  className="input md:mb-2 rounded-[15px] w-1/2 md:w-full"
                >
                  <option value="">select service </option>
                  {generateDateOptions()}
                </select>
              </div>
              
              <div className="mb-4 md:mb-1 flex justify-center md:grid md:grid-cols-2 md:w-full md:gap-2 gap-6 ">
                <select
                  name="entery-Date"
                  value={checkInDate}
                  onChange={handleCheckInDateChange}
                  required
                  className="input w-1/4 rounded-[15px]  md:w-full"
                >
                  <option value="">entery-Date</option>
                  {generateDateOptions()}
                </select>
                <select
                  name="out-Date"
                  value={checkOutDate}
                  onChange={handleCheckOutDateChange}
                  required
                  className="input w-1/4 rounded-[15px] md:w-full"
                >
                  <option value="">out-Date</option>
                  {generateDateOptions()}
                </select>
              
                <select
                  name="number"
                  value={checkOutDate}
                  onChange={handleCheckOutDateChange}
                  required
                  className="input w-1/4 rounded-[15px] md:w-full"
                >
                  <option value="">number</option>
                  {generateDateOptions()}
                </select>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  required
                  className="input w-1/4 rounded-[15px] md:w-full"
                >
                  <option value="credit-card" className='w-1/4'>Credit Card</option>
                  <option value="paypal" className='w-1/4'>PayPal</option>
                </select>
              
              </div>
              <div className=' relative mb-10'>
              <button type="submit" className="btn-primary absolute right-0 text-teal-600 items-end bg-white-A700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Book Now
              </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default BookingModal;


