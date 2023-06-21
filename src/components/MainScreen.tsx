import qr from '../assets/image-qr-code.png';

const MainScreen = () => {
  return (
    <>
     <div className="flex items-center justify-center h-screen bg-Light_Gray">
      <div className="w-64 text-center bg-White  rounded-lg shadow-md">
       <div className='p-3'>
      <img className='rounded-lg' src={qr}></img>      
       </div>
        <div className=''>
             <h2 className="text-lg text-[#1F3251] font-outfit font-bold mb-2 p-1 px-6 ">Improve your front-end skills by building projects</h2>
        </div>
          <div>
             <p className="text-sm text-Grayish_Blue font-outfit px-5 pb-7">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level!</p>
       </div>
       
      </div>
      </div>

      
      </>
  );
};

export default MainScreen;
