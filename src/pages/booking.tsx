import axios from 'axios';
import { Img, Text } from 'components';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PropertyCard = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone_number: '',
    booking_date: '',
    leaving_date: '',
    service_name: 'room',
    object_name: 'F24',
    payment_mode: 'PAY_NOW',
    numberOfRooms: 1,
  });

  const showToast = (message, type, options = {}) => {
    return toast[type](message, {
      position: 'top-right',
      autoClose: 5000,
      ...options,
    });
  };

  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [totalAmount, setTotalAmount] = useState(50);

  useEffect(() => {
    const currentDate = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const formattedCurrentDate = currentDate.toISOString().slice(0, 16);
    const formattedTomorrowDate = tomorrow.toISOString().slice(0, 16);

    setFormData({
      ...formData,
      booking_date: formattedCurrentDate,
      leaving_date: formattedTomorrowDate,
    });
  }, []);

  const handleDateChange = (e) => {
    const { name, value } = e.target;

    if (name === 'booking_date') {
      const selectedDate = new Date(value);
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() );

      if (selectedDate < tomorrow) {
        showToast('choose the date from todate.', 'error');
      } else {
        setFormData({
          ...formData,
          booking_date: value,
          leaving_date: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        leaving_date: value,
      });
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'object_name' || name === 'numberOfRooms') {
      const numberOfRooms = name === 'numberOfRooms' ? parseInt(value) : formData.numberOfRooms;
      const object_name = name === 'object_name' ? value : formData.object_name;
      calculateTotalAmount(numberOfRooms, object_name);
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const calculateTotalAmount = (numberOfRooms, object_name) => {
    const object_nameCosts = {
      vip: 100,
      classic: 50,
      regular: 20,
    };

    const costPerRoomPerDay = object_nameCosts[object_name] || 0;
    const totalAmount = numberOfRooms * costPerRoomPerDay;

    setTotalAmount(totalAmount);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the API endpoint
      const response = await axios.post(
        'http://crepin.pythonanywhere.com/api-tuuza/booking/',
        formData
      );

      if (response.status === 200 && response.data.pay_link) {
        await showToast('Booking successful!', 'success');
        // Redirect the user to the payment link
        window.location.href = response.data.pay_link;
        console.log(response.status)
      } else if (response.status === 201) {
        await showToast('Booking successful!', 'success');
        // Redirect the user to the payment link
        // window.location.href = response.data.pay_link;
        console.log(response.status,"hellow")
      }else {
        console.error('Booking response not as expected');
        await showToast('Booking failed. Please try again later.', 'error');
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      if (error.response && error.response.data) {
        const errorMessages = error.response.data;
        for (const key in errorMessages) {
          if (errorMessages.hasOwnProperty(key)) {
            await showToast(`Error: ${key} - ${errorMessages[key]}`, 'error');
          }
        }
      } else {
        await showToast('An unexpected error occurred. Please try again later.', 'error');
      }
    }
  };


  return (
    <div className="border border-gray-200 md:ml-1 md:mr-1 ml-28 mr-28 rounded-lg p-6 shadow-md">
      <div className="flex mb-3">
        <Link className="home" to="/">
          <Img
            className="md:px-5 md:w-full"
            src="images/backicon.svg"
            alt="img16301"
          />
        </Link>
        <Text className="text-base ml-3 text-blue_gray-800 tracking-[-0.30px]">
          Back
        </Text>
      </div>
      <div className="grid grid-cols-2 gap-3 justify-around md:grid-cols-1">
        <Img
          className="md:px-5 md:w-full"
          src="images/img_img16151.png"
          alt="img16301"
        />
        <div className="grid grid-cols-2 gap-3 md:hidden">
          <Img
            className="md:px-5 md:w-full"
            src="images/img_rectangle28.png"
            alt="rectangleTwentyEight"
          />
          <Img
            className="md:px-5 md:w-full"
            src="images/img_img16461.png"
            alt="img16461"
          />
          <Img
            className="md:px-5 md:w-full"
            src="images/img_img15501.png"
            alt="img15501"
          />
          <Img
            className="md:px-5 md:w-full"
            src="images/img_img15801.png"
            alt="img15801"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-1 mt-4">
        <div>
          <p className="text-lg font-bold">Entire home hosted by Heath</p>
          <div>
            <div className="bg-[#b2bad6] h-1 w-full mt-7"></div>
            <div className="grid grid-cols-2 px-9 mt-5 py-3">
              <Img
                className="md:px-5 w-1/4 mb-5"
                src="images/smartphone.png"
                alt="img15801"
              />
              <p>
                <h1 className="font-bold">Self check-in</h1>
              </p>
              <Img
                className="md:px-5 w-1/4"
                src="images/location.png"
                alt="img15801"
              />
              <p className="leading-[30.00px] md:ml-[0] mt-5 text-black-900 md:text-[12px] text-center font-roboto font-normal md:tracking-normal sm:text-[12px] md:w-full sm:w-full">
                <h1 className="font-bold text-left">Great location</h1>
                95% of recent guests gave the location a 5-star rating.
              </p>
              <Img
                className="md:px-5 w-1/4 "
                src="images/pngwing.com.png"
                alt="img15801"
              />
              <p className="leading-[30.00px] md:ml-[0] mt-5 text-black-900 md:text-[12px] text-center font-roboto font-normal md:tracking-normal sm:text-[12px] md:w-full sm:w-full">
                <h1 className="font-bold text-left">Park for free</h1>
                This is one of the few places in the area with free parking.
              </p>
            </div>
          </div>
          <div className="bg-[#b2bad6] h-1 w-full mt-7"></div>
          <Text
            className="leading-[30.00px] md:ml-[0] mt-5 text-black-900 md:text-[12px] text-center font-roboto font-normal md:tracking-normal sm:text-[12px] md:w-full sm:w-full"
            size="txtRobotoRomanRegular20"
          >
            Enkuso Ntelon is a quiet and secluded Naivasha vacation rental near the Malewa River. We are a Superhost with 100% 5 Star reviews. Fairly priced, look for mid-week discounts! Plan early as we fill up! A cook and support staff are provided.
            This is the perfect home for a quiet retreat with family or friends. Enjoy morning coffee and sunsets from our veranda overlooking a private acacia valley. Explore the Naivasha
          </Text>
        </div>
        <div className="flex justify-center md:w-full">
          <div className="modal-content mt-8 shadow-lg w-[80%] md:w-full md:mx-0 bg-slate-200 flex justify-center h-[60%] md:h-auto p-6 rounded-lg">
            <form onSubmit={handleSubmit} className="w-full md:w-1/2 sm:w-full">
              <div className="mb-4 md:mb-2 grid grid-cols-2 lg:justify-center md:w-full md:grid-cols-1 md:justify-between md:gap-2 gap-6 w-full">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="input rounded-[15px]  md:w-full"
                />
                <input
                  type="tel"
                  name="phone_number"
                  placeholder="Phone Number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  required
                  className="input rounded-[15px] md:w-full"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input rounded-[15px] md:w-full"
                />
              
                <select
                  name="service_name"
                  value={formData.service_name}
                  onChange={handleChange}
                  required
                  className="input md:mb-2 rounded-[15px]  md:w-full"
                >
                  <option value="room">room</option>
                  <option value="garden">cycling</option>
                  <option value="bar">Bar</option>
                </select>
                {formData.service_name === 'room' && (
                  <div className="grid grid-cols-2 justify-center md:grid md:grid-cols-2 md:w-full md:gap-2 gap-6">
                    <input
                      type="number"
                      name="numberOfRooms"
                      placeholder="Number of Rooms"
                      value={formData.numberOfRooms}
                      onChange={handleChange}
                      required
                      className="input w-full rounded-[15px] md:w-full"
                    />
                      <select
                  name="object_name"
                  placeholder="Object Name"
                  value={formData.object_name} 
                  onChange={handleChange}
                  className="input w-full rounded-[15px] md:w-full"
               
                >
                  <option value="F24">F24</option>
                  <option value="F34">F34</option>
                  <option value="bar">F23</option>
                </select>
                  </div>
                )}
                <input
                  type="date"
                  name="booking_date"
                  placeholder="Booking Date"
                  value={formData.booking_date}
                  onChange={handleDateChange}
                  min={formData.booking_date}
                  className="input w-full rounded-[15px] md:w-full"
                />
                
                <input
                  type="date"
                  name="leaving_date"
                  placeholder="Leaving Date"
                  value={formData.leaving_date}
                  onChange={handleDateChange}
                  min={formData.booking_date}
                  className="input w-full rounded-[15px] md:w-full"
                />
               
                 <select
  name="payment_mode"
  value={formData.payment_mode}
  onChange={handleChange}
  required
  className="input w-full rounded-[15px] md:w-full"
>
  <option value="PAY_NOW">PAY_NOW</option>
  <option value="AT_ARRIVAL">AT_ARRIVAL</option>
</select>
               
             
                <button
                  type="submit"
                  className="btn-primary  right-0 text-teal-600 items-end bg-white-A700 hover-bg-blue-800 focus-ring-4 focus-ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark-bg-blue-600 dark-hover-bg-blue-700 focus-outline-none dark-focus-ring-blue-800"
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PropertyCard;


