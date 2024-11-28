import { useNavigate,Outlet } from 'react-router-dom';

export const Contact = () => {
  const Navigate =useNavigate();
  
  const handleSubmit =()=>{
    console.log("Submited");
    Navigate("/");
  }
  return (   
    <>
      <div className="component">Contact</div>
      <Outlet/>
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}
