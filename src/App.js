import React from 'react'
import "./App.css";
import Footer from './components/Footer.js';
import { Link } from 'react-router-dom';



function App() {
  return (

  <div className='box_Main'>

    <div className='container'> 
      <div className='box_Header' id='boxHeader'>
        <header className='main_Header'>
          <a href='/'>
            <img id='logo_App' src='https://food.grab.com/static/images/logo-grabfood-white2.svg' alt='logoApp'></img>
          </a>
          <div className='btn_header'>
            <a href='/'><img id='logo_cart' src='https://food.grab.com/static/images/icons/icon-cart-default-black.svg' alt='logoCart'></img></a>
            <a href='/'>Đăng nhập/Đăng ký</a>
            <a href='/'>VI</a>
          </div>
        </header>
      </div>

      <div className='box_imgBackgr'>
        <img id='img_backgr' src='https://food.grab.com/static/page-home/VN-new-3.jpg' alt='imgBox'></img>
      </div>

      <div className='box_form'> 
        <form>
          <h3>Xao Chìn</h3>
          <h1>Where should we deliver your food today?</h1>
          <div className='divinput flex justify-between items-center hover:border-green-500  pl-4 pr-4 '>
              <img className=' w-[24px] h-[24px] left-1' src='https://nguynthuhigh.github.io/grab-food-react/static/media/location_Icon.2279cfbd611b0f6cdf9f.png' alt=''></img>
              <input className='flex w-full pl-4 h-full focus:outline-none'  placeholder='Em nhà ở mô rứa'></input> 
              <img className=' w-[25px] h-[25px]' src='https://food.grab.com/static/images/icons/icon-geo-button.svg' alt=''></img>
          </div>
          <button><b>Tìm Kiếm</b></button>
        </form>
      </div>
    </div>
    <hr/> 

    <div></div>

      <div className='max-w-[1200px] w-full mr-auto ml-auto mt-[50px]'>  
        <h1 className='text-4xl	font-bold'>Ưu đãi GrabFood tại <span style={{color: '#00b14f'}}>Phcuzuuu</span></h1>

        <div className='mt-12 flex justify-between gap-6'>
          <div>
          <Link to='/detailmenu'>
            <div>
            <div className='absolute bg-col pl-2 pr-2 pt-[1px] pb-[1px] text-[12px] mt-[15px] text-white font-bold ml-[-3px]' style={{backgroundColor:"#00b14f"}}>Promo</div>
              <img className='rounded-lg' src='https://food-cms.grab.com/compressed_webp/merchants/5-C3VWSBAALXMUNJ/hero/3ae3989b-2a55-4b39-b8b0-285683d4bf06__store_cover__2023__03__08__16__14__48.webp' alt='imgFood'></img>
            </div>
            <h1 className='text-lg mt-2 mb-2 font-bold'>Bánh Mì Nóng Hổi - Phúc Du</h1> 
            <p className='text-sm mb-2'>Bánh Mì</p>

            <div className='flex gap-4 mb-2'>
              <div className='flex gap-2'><img className='w-[24px]' src='https://food.grab.com/static/images/icons/icon-star.svg' alt=''></img><p>5</p></div>
              <div className='flex gap-2'><img src='https://food.grab.com/static/images/icons/icon-clock.svg' alt=''></img><p>30 phút</p></div>
              <div><span className='mr-2'>•</span>2km</div>
            </div> 
            <div className='flex gap-2 justify-center'>
              <img src='https://food.grab.com/static/images/icons/icon-promo-tag.svg' alt=''></img>
              <p>Ưu đãi như khuyến mãi</p>
            </div>
            </Link>
          </div>

          <div>
            <a href='1'>
            <div>
            <div className='absolute bg-col pl-2 pr-2 pt-[1px] pb-[1px] text-[12px] mt-[15px] text-white font-bold ml-[-3px]' style={{backgroundColor:"#00b14f"}}>Promo</div>
              <img className='rounded-lg' src='https://food-cms.grab.com/compressed_webp/merchants/5-CZCVAZLFHAAVAN/hero/304004d0811c4da39d9416a1c0436f60_1670796938778655745.webp' alt='imgFood'></img>
            </div>
            <h1 className='text-lg mt-2 mb-2 font-bold'>Bún Trộn Quảng Ngãi - Phúc Du</h1> 
            <p className='text-sm mb-2'>Bún - Phở</p>

            <div className='flex gap-4 mb-2'>
              <div className='flex gap-2'><img className='w-[24px]' src='https://food.grab.com/static/images/icons/icon-star.svg' alt=''></img><p>5</p></div>
              <div className='flex gap-2'><img src='https://food.grab.com/static/images/icons/icon-clock.svg' alt=''></img><p>15 phút</p></div>
              <div><span className='mr-2'>•</span>0.5km</div>
            </div> 
            <div className='flex gap-2 justify-center'>
              <img src='https://food.grab.com/static/images/icons/icon-promo-tag.svg' alt=''></img>
              <p>Ưu đãi như khuyến mãi</p>
            </div>
            </a>
          </div>

          <div>
            <a href='1'>
            <div>
            <div className='absolute bg-col pl-2 pr-2 pt-[1px] pb-[1px] text-[12px] mt-[15px] text-white font-bold ml-[-3px]' style={{backgroundColor:"#00b14f"}}>Promo</div>
              <img className='rounded-lg' src='https://food-cms.grab.com/compressed_webp/merchants/5-C3VWSBAALXMUNJ/hero/3ae3989b-2a55-4b39-b8b0-285683d4bf06__store_cover__2023__03__08__16__14__48.webp' alt='imgFood'></img>
            </div>
            <h1 className='text-lg mt-2 mb-2 font-bold'>Bánh Mì Nóng Hổi - Phúc Du</h1> 
            <p className='text-sm mb-2'>Bánh Mì</p>

            <div className='flex gap-4 mb-2'>
              <div className='flex gap-2'><img className='w-[24px]' src='https://food.grab.com/static/images/icons/icon-star.svg' alt=''></img><p>5</p></div>
              <div className='flex gap-2'><img src='https://food.grab.com/static/images/icons/icon-clock.svg' alt=''></img><p>30 phút</p></div>
              <div><span className='mr-2'>•</span>2km</div>
            </div> 
            <div className='flex gap-2 justify-center'>
              <img src='https://food.grab.com/static/images/icons/icon-promo-tag.svg' alt=''></img>
              <p>Ưu đãi như khuyến mãi</p>
            </div>
            </a>
          </div>

          <div>
            <a href='1'>
            <div>
            <div className='absolute bg-col pl-2 pr-2 pt-[1px] pb-[1px] text-[12px] mt-[15px] text-white font-bold ml-[-3px]' style={{backgroundColor:"#00b14f"}}>Promo</div>
              <img className='rounded-lg' src='https://food-cms.grab.com/compressed_webp/merchants/5-CZCVAZLFHAAVAN/hero/304004d0811c4da39d9416a1c0436f60_1670796938778655745.webp' alt='imgFood'></img>
            </div>
            <h1 className='text-lg mt-2 mb-2 font-bold'>Bún Trộn Quảng Ngãi - Phúc Du</h1> 
            <p className='text-sm mb-2'>Bún - Phở</p>

            <div className='flex gap-4 mb-2'>
              <div className='flex gap-2'><img className='w-[24px]' src='https://food.grab.com/static/images/icons/icon-star.svg' alt=''></img><p>5</p></div>
              <div className='flex gap-2'><img src='https://food.grab.com/static/images/icons/icon-clock.svg' alt=''></img><p>15 phút</p></div>
              <div><span className='mr-2'>•</span>0.5km</div>
            </div> 
            <div className='flex gap-2 justify-center'>
              <img src='https://food.grab.com/static/images/icons/icon-promo-tag.svg' alt=''></img>
              <p>Ưu đãi như khuyến mãi</p>
            </div>
            </a>
          </div>

          
          
        </div>

        <div className='p-3 mt-7 border-[1px] border-neutral-600 w-full flex justify-center rounded-[6px] hover:border-green-500 hover:text-green-500 mb-10'>
            <Link to='/listStore' className='text-neutral-600 hover:text-green-500 font-semibold'>See all promotions</Link> {" "}
        </div>
        
        <h1 className='text-4xl	font-bold'>There's something for everyone!</h1>
        <div className='flex justify-between gap-6  '>
          <div>
            <a href='1'>
            <img className='rounded-lg mt-10 mb-5' src='https://food-cms.grab.com/compressed_webp/cuisine/62/icons/FastFood_4710e425c3d24db2aa4280aa207a22d3_1547819143037208832.webp' alt='imgFood'></img>
            <p className='font-bold'>Burger</p> 
            </a>
          </div>

          <div>
            <a href='1'>
            <img className='rounded-lg mt-10 mb-5' src='https://food-cms.grab.com/compressed_webp/collections/36/icons/upload-photo-icon_e816de4ec50a4e7a95fc6cc52e3072cd_1548575711684762474.webp' alt='imgFood'></img>
            <p className='font-bold'>Hiso Party</p> 
            </a>
          </div>

          <div>
            <a href='1'>
            <img className='rounded-lg mt-10 mb-5' src='https://food-cms.grab.com/compressed_webp/cuisine/157/icons/eb8ea703d1f84b218b79b0f860e99425_1562559054203677203.webp' alt='imgFood'></img>
            <p className='font-bold'>Ăn Vặt</p> 
            </a>
          </div>

          <div>
            <a href='1'>
            <img className='rounded-lg mt-10 mb-5' src='https://food-cms.grab.com/compressed_webp/cuisine/144/icons/Rice_e191965ccd6848a3862e6a695d05983f_1547819238893335910.webp' alt='imgFood'></img>
            <p className='font-bold'>Cơm</p> 
            </a>
          </div>
        </div>

        <div className='flex justify-between gap-6  '>
          <div>
            <a href='1'>
            <img className='rounded-lg mt-10 mb-5' src='https://food-cms.grab.com/compressed_webp/cuisine/62/icons/FastFood_4710e425c3d24db2aa4280aa207a22d3_1547819143037208832.webp' alt='imgFood'></img>
            <p className='font-bold'>Burger</p> 
            </a>
          </div>

          <div>
            <a href='1'>
            <img className='rounded-lg mt-10 mb-5' src='https://food-cms.grab.com/compressed_webp/collections/36/icons/upload-photo-icon_e816de4ec50a4e7a95fc6cc52e3072cd_1548575711684762474.webp' alt='imgFood'></img>
            <p className='font-bold'>Hiso Party</p> 
            </a>
          </div>

          <div>
            <a href='1'>
            <img className='rounded-lg mt-10 mb-5' src='https://food-cms.grab.com/compressed_webp/cuisine/157/icons/eb8ea703d1f84b218b79b0f860e99425_1562559054203677203.webp' alt='imgFood'></img>
            <p className='font-bold'>Ăn Vặt</p> 
            </a>
          </div>

          <div>
            <a href='1'>
            <img className='rounded-lg mt-10 mb-5' src='https://food-cms.grab.com/compressed_webp/cuisine/144/icons/Rice_e191965ccd6848a3862e6a695d05983f_1547819238893335910.webp' alt='imgFood'></img>
            <p className='font-bold'>Cơm</p> 
            </a>
          </div>
        </div>

        <div className='flex justify-between gap-6  '>
          <div>
            <a href='1'>
            <img className='rounded-lg mt-10 mb-5' src='https://food-cms.grab.com/compressed_webp/cuisine/62/icons/FastFood_4710e425c3d24db2aa4280aa207a22d3_1547819143037208832.webp' alt='imgFood'></img>
            <p className='font-bold'>Burger</p> 
            </a>
          </div>

          <div>
            <a href='1'>
            <img className='rounded-lg mt-10 mb-5' src='https://food-cms.grab.com/compressed_webp/collections/36/icons/upload-photo-icon_e816de4ec50a4e7a95fc6cc52e3072cd_1548575711684762474.webp' alt='imgFood'></img>
            <p className='font-bold'>Hiso Party</p> 
            </a>
          </div>

          <div>
            <a href='1'>
            <img className='rounded-lg mt-10 mb-5' src='https://food-cms.grab.com/compressed_webp/cuisine/157/icons/eb8ea703d1f84b218b79b0f860e99425_1562559054203677203.webp' alt='imgFood'></img>
            <p className='font-bold'>Ăn Vặt</p> 
            </a>
          </div>

          <div>
            <a href='1'>
            <img className='rounded-lg mt-10 mb-5' src='https://food-cms.grab.com/compressed_webp/cuisine/144/icons/Rice_e191965ccd6848a3862e6a695d05983f_1547819238893335910.webp' alt='imgFood'></img>
            <p className='font-bold'>Cơm</p> 
            </a>
          </div>
        </div>


      </  div>
    <Footer></Footer>
        
  </div>

)
}



export default App
