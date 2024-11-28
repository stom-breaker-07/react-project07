import { Routes,Route ,Navigate} from 'react-router-dom';

import {Home ,Contact,ProductList,ProductDetail,Admin,PageNotFound} from "../pages/Export";
import {ContactEu,Contactin,ContactUs,Contactother} from "../pages/Contacts/Export";

export const AllRoutes = () => {
    const user=true;
  return (
    <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='contact' element={<Contact/>}>
                 <Route path='in' element={<Contactin/>}/>
                 <Route path='eu' element={<ContactEu/>}/>
                 <Route path='us' element={<ContactUs/>}/>
                 <Route path='*' element={<Contactother/>}/>
             </Route>
             <Route path='product' element={<ProductList/>}/>
             <Route path='product/:id' element={<ProductDetail/>} />
             <Route path='/admin' element={user ?<Admin/>:<Navigate to='*'/> }/>
             <Route path='*' element={<PageNotFound/>}/>
 </Routes>
  )
}
