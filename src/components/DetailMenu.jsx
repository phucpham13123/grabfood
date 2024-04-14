/* eslint-disable react-hooks/rules-of-hooks */
import "./DetailMenu.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function DetailFooter(){
  return(
    <div  className='w-100% max-h-fit		' style={{backgroundColor:"#00b14f"}}>
            <div className='w-[1200px] mr-auto ml-auto pt-8 mb-8' >
                <img className=' w-[173px] h-15' src='https://food.grab.com/static/images/logo-grabfood-white2.svg' alt=''></img>
                <hr className='mt-5'/>
            </div>

            <div className='w-[1200px] mr-auto ml-auto flex text-white' >
                <div className='w-[300px] '>
                    <div className='mb-5'><a href='1' alt=''>Về GrabFood</a></div>
                    <div className='mb-5'><a href='1' alt=''>Về Grab</a></div>
                    <div className='mb-5'><a href='1' alt=''>Blog</a></div>
                </div>

                <div className='w-[300px]'>
                    <div className='mb-5'><a href='1' alt=''>Mở quán trên GrabFood</a></div>
                    <div className='mb-5'><a href='1' alt=''>Trở thành tài xế Grab</a></div>
                </div>

                <div className='w-[300px]'>
                    <div className='mb-5'><a href='1' alt=''>Trung tâm hỗ trợ</a></div>
                    <div className='mb-5'><a href='1' alt=''>Câu hỏi thường gặp</a></div>
                </div>

                <div className='w-[300px] flex'>
                    <a href='0'><img className='bg-transparent	w-[60px] h-[60px]' src='https://i.imgur.com/8hirQxj.png' alt=''></img></a>
                    <a href='0'><img className='bg-transparent	w-[60px] h-[60px]' src='https://i.imgur.com/8hirQxj.png' alt=''></img></a>
                    <a href='0'><img className='bg-transparent	w-[60px] h-[60px]' src='https://i.imgur.com/8hirQxj.png' alt=''></img></a>

                </div>
            </div>
            <div className='w-[1200px] mr-auto ml-auto mb-8' >
            <hr className='mt-5 		'/>
            </div>
            
            <div className='w-[1200px] mr-auto ml-auto pt-0 pb-6 flex justify-between' >
                <div className='flex gap-6'> 
                    <img src='https://food.grab.com/static/images/logo-appstore.svg' alt=''></img>
                    <img src='https://food.grab.com/static/images/logo-playstore.svg' alt=''></img>
                </div>
                <div className='flex gap-6 items-center text-white'> 
                    <div>© 2024 Grab</div>
                    <div className='flex gap-3'>    
                    <a href='1'>Câu hỏi thường gặp</a>
                    <span>•</span>
                    <a href='1'>Chính sách bảo mật</a>
                    </div>
                </div>
            </div>
        </div>
  )
}

function DetailFood1(){
  const [showLayout, setShowLayout] = useState(false);
  // Hàm để ẩn layout khi click ra ngoài
  const handleBlur = () => {
    setShowLayout(false);
  };
  return(
    <div className="mt-6 ">
      <a href='' onFocus={() => setShowLayout(true)}>  
        {showLayout && (
        <div className="sidebar layout" onBlur={handleBlur} tabIndex={0}>
          {/* Nội dung của layout mới */}Chưa được cô ơi huhu
        </div>
        )}
        <div className="flex w-[384px] max-h-min	 p-4 bg-white">
          <div className="w-[136px] ">
            <img className="w-[120px] h-[120px]" src="https://food-cms.grab.com/compressed_webp/items/VNITE20230829080119011320/detail/2cd9915f_mageHandler.webp" alt="" />
          </div>
          <div className="w-[216px]">
            <p className="mb-4 text-base">BUỔI SÁNG PHẤN KHỞI</p>
            <p className="mb-[8px] mt-[6px] text-sm text-gray-600">COMBO Bánh Mì + Cà Phê</p>
            <div className="flex mt-7">
              <p className="font-semibold">19.000</p>
              <div class="rounded-full bg-green-600 ml-auto w-8 h-8 flex justify-center items-center">
                <img src="https://food.grab.com/static/images/quick-add/plus-white.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

function DetailFood2(){
  return(
    <div className="mt-6 ">
      <a href=''>
        <div className="flex w-[384px] max-h-min	 p-4 bg-white">
          <div className="w-[136px] ">
            <img className="w-[120px] h-[120px]" src="https://food-cms.grab.com/compressed_webp/items/VNITE20230829091043017671/detail/93025b5b_mageHandler.webp" alt="" />
          </div>
          <div className="w-[216px]">
            <p className="mb-4 text-base">BUỔI TRƯA NĂNG LƯỢNG</p>
            <p className="mb-[8px] mt-[6px] text-sm text-gray-600">COMBO Bánh Mì + Nước Sâm</p>
            <div className="flex mt-7">
              <p className="font-semibold">29.000</p>
              <div class="rounded-full bg-green-600 ml-auto w-8 h-8 flex justify-center items-center">
                <img src="https://food.grab.com/static/images/quick-add/plus-white.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

function DetailFood3(){
  return(
    <div className="mt-6 ">
      <a href=''>
        <div className="flex w-[384px] max-h-min	 p-4 bg-white">
          <div className="w-[136px] ">
            <img className="w-[120px] h-[120px]" src="https://food-cms.grab.com/compressed_webp/items/VNITE20230829080119020770/detail/a3bd1185_mageHandler.webp" alt="" />
          </div>
          <div className="w-[216px]">
            <p className="mb-4 text-base">BUỔI TỐI THƯ GIÃN</p>
            <p className="mb-[8px] mt-[6px] text-sm text-gray-600">COMBO Bánh Bao + Sữa Hạt</p>
            <div className="flex mt-7">
              <p className="font-semibold">25.000</p>
              <div class="rounded-full bg-green-600 ml-auto w-8 h-8 flex justify-center items-center">
                <img src="https://food.grab.com/static/images/quick-add/plus-white.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

function DetailFood4(){
  return(
    <div className="mt-6 ">
      <a href=''>
        <div className="flex w-[384px] max-h-min	 p-4 bg-white">
          <div className="w-[136px] ">
            <img className="w-[120px] h-[120px]" src="https://food-cms.grab.com/compressed_webp/items/VNITE20230829231124011041/detail/58b26e98_mageHandler.webp" alt="" />
          </div>
          <div className="w-[216px]">
            <p className="mb-4 text-base">Bánh Mì Sườn Chay</p>
            <p className="mb-[8px] mt-[6px] text-sm text-gray-600">Ăn đi rồi nghiệp</p>
            <div className="flex mt-7">
              <p className="font-semibold">21.000</p>
              <div class="rounded-full bg-green-600 ml-auto w-8 h-8 flex justify-center items-center">
                <img src="https://food.grab.com/static/images/quick-add/plus-white.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

function DetailFood5(){
  return(
    <div className="mt-6 ">
      <a href=''>
        <div className="flex w-[384px] max-h-min	 p-4 bg-white">
          <div className="w-[136px] ">
            <img className="w-[120px] h-[120px]" src="https://food-cms.grab.com/compressed_webp/items/VNITE20230829231123029110/detail/f3d440c3_mageHandler.webp" alt="" />
          </div>
          <div className="w-[216px]">
            <p className="mb-4 text-base">Bánh Mì Thập Cẩm</p>
            <p className="mb-[8px] mt-[6px] text-sm text-gray-600">Ăn xong hết lẩm bẩm</p>
            <div className="flex mt-7">
              <p className="font-semibold">21.000</p>
              <div class="rounded-full bg-green-600 ml-auto w-8 h-8 flex justify-center items-center">
                <img src="https://food.grab.com/static/images/quick-add/plus-white.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

function DetailFood6(){
  return(
    <div className="mt-6 ">
      <a href=''>
        <div className="flex w-[384px] max-h-min	 p-4 bg-white">
          <div className="w-[136px] ">
            <img className="w-[120px] h-[120px]" src="https://food-cms.grab.com/compressed_webp/items/VNITE20230829231125015282/detail/65b32db5_mageHandler.webp" alt="" />
          </div>
          <div className="w-[216px]">
            <p className="mb-4 text-base">Bánh Mì Chả Lụa</p>
            <p className="mb-[8px] mt-[6px] text-sm text-gray-600">Ăn đi rồi lụa</p>
            <div className="flex mt-7">
              <p className="font-semibold">21.000</p>
              <div class="rounded-full bg-green-600 ml-auto w-8 h-8 flex justify-center items-center">
                <img src="https://food.grab.com/static/images/quick-add/plus-white.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

function DetailFood7(){
  return(
    <div className="mt-6 ">
      <a href=''>
        <div className="flex w-[384px] max-h-min	 p-4 bg-white">
          <div className="w-[136px] ">
            <img className="w-[120px] h-[120px]" src="https://food-cms.grab.com/compressed_webp/items/VNITE2024010917414429346/detail/menueditor_item_f4aa61617d314d2a8a9e78f0b6e50c47_1704822757967157825.webp" alt="" />
          </div>
          <div className="w-[216px]">
            <p className="mb-4 text-base">Bánh Bao Chay</p>
            <p className="mb-[8px] mt-[6px] text-sm text-gray-600">Dành cho người mỏ nghiệp</p>
            <div className="flex mt-7">
              <p className="font-semibold">35.000</p>
              <div class="rounded-full bg-green-600 ml-auto w-8 h-8 flex justify-center items-center">
                <img src="https://food.grab.com/static/images/quick-add/plus-white.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

function DetailFood10(){
  return(
    <div className="mt-6 ">
      <a href=''>
        <div className="flex w-[384px] max-h-min	 p-4 bg-white">
          <div className="w-[136px] ">
            <img className="w-[120px] h-[120px]" src="https://food-cms.grab.com/compressed_webp/items/VNITE2024010917450051716/detail/menueditor_item_91c87a35849f49fe9488f60a22d82ba6_1704822770764066704.webp" alt="" />
          </div>
          <div className="w-[216px]">
            <p className="mb-4 text-base">Tàu Phớ</p>
            <p className="mb-[8px] mt-[6px] text-sm text-gray-600">Món này lạ shop cũng không biết</p>
            <div className="flex mt-7">
              <p className="font-semibold">35.000</p>
              <div class="rounded-full bg-green-600 ml-auto w-8 h-8 flex justify-center items-center">
                <img src="https://food.grab.com/static/images/quick-add/plus-white.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

function detailMenu() {
  return (
    <div> 

      


        <div className='containerDM content'>
            <div className='box_HeaderDM' id='boxHeaderDM'>
            <header className='main_HeaderDM'>
                <div className='flex items-center	'>
                <a href='/' className='mr-10'>
                <img id='logo_AppDM' src='https://food.grab.com/static/images/logo-grabfood2.svg' alt='logoAppDM'></img>
                </a>
                <div className='divinputDM flex justify-between items-center hover:border-green-500  pl-4 pr-4 '>
                    <img className=' w-[24px] h-[24px] left-1' src='https://nguynthuhigh.github.io/grab-food-react/static/media/location_Icon.2279cfbd611b0f6cdf9f.png' alt=''></img>
                    <input className='flex w-full pl-4 h-full focus:outline-none'  placeholder='Nhập địa chỉ của bạn'></input> 
                    <img className=' w-[25px] h-[25px]' src='https://food.grab.com/static/images/icons/icon-geo-button.svg' alt=''></img>
                </div>
                </div>
                <div className='btn_headerDM'>
                <a href='/'><img id='logo_cartDM' src='https://food.grab.com/static/images/icons/icon-cart-default-black.svg' alt='logoCartDM'></img></a>
                <a href='/'>Đăng nhập/Đăng ký</a>
                <a href='/'>VI</a>
                </div>
            </header>
            </div>
        </div>

        <div className='flex w-[1200px] mr-auto ml-auto'>
            <div className='mt-5'>
                <h1 className='text-4xl mt-2 mb-2 font-bold'>Bánh Mì Nóng Hổi - Phúc Du - Quận 12</h1> 
                <p className='text-sm mb-2 font-semibold'>Bánh Mì</p>

                <div className='flex gap-7 mb-2'>
                <div className='flex gap-2'><img className='w-[24px]' src='https://food.grab.com/static/images/icons/icon-star.svg' alt=''></img><p>5</p></div>
                <div className='flex gap-2'><img src='https://food.grab.com/static/images/icons/icon-clock.svg' alt=''></img><p>30 phút</p></div>
                <div><span className='mr-2'>•</span>2km</div>
                </div> 
                <div className='flex gap-7 mb-2'>
                    <label className='font-semibold'>Giờ mở cửa</label>
                    <div>Hôm nay <b className='font-semibold'>06:00 - 23:59</b></div>
                </div>
                <div className='flex gap-2 mb-1'>
                <img src='https://food.grab.com/static/images/icons/icon-promo-tag.svg' alt=''></img>
                <p>Tận hưởng ưu đãi</p>
                </div>
                <div className='flex gap-2 mb-1'>
                <img src='https://food.grab.com/static/images/icons/icon-promo-tag.svg' alt=''></img>
                <p>Ưu đãi như khuyến mãi</p>
                </div>
                <div className='flex gap-2 mb-5'>
                <img src='https://food.grab.com/static/images/icons/icon-promo-tag.svg' alt=''></img>
                <p>Khuyến mãi đến 0 đồng</p>
                </div>
            </div>
        </div>

        <div className=' flex items-center'>
          <div className='flex w-[1200px] mr-auto ml-auto  font-semibold text-base'>
            <div><a href='#uudai' className="pt-3.5 pb-3.5 pr-6 pl-6 hover:text-green-500 focus:border-green-500 focus:underline focus:ring-green-500">Ưu Đãi Hôm Nay</a></div>
            <div><a href='#banhmi' className="pt-3.5 pb-3.5 pr-6 pl-6 hover:text-green-500 focus:border-green-500 focus:underline focus:ring-green-500">Bánh Mì</a></div>
            <div><a href='#ankem' className="pt-3.5 pb-3.5 pr-6 pl-6 hover:text-green-500 focus:border-green-500 focus:underline focus:ring-green-500">Ăn Kèm</a></div>
            <div><a href='#monthem' className="pt-3.5 pb-3.5 pr-6 pl-6 hover:text-green-500 focus:border-green-500 focus:underline focus:ring-green-500">Các Món Thêm</a></div>
          </div>
        </div>

        <div id='uudai' className='mt-5 bg-gray-100 pb-5' >
            <div  className="pt-10 flex w-[1200px] mr-auto ml-auto text-4xl font-bold">Lựa Món Ngon Nè</div>
            <div className='flex w-[1200px] mr-auto ml-auto pt-10 pb-10'>
                <h1 className='text-4xl font-semibold'>Ưu Đãi Hôm Nay</h1>
            </div>
          
          <div  className='flex justify-between w-[1200px] mr-auto ml-auto'>
            <DetailFood1></DetailFood1>
            <DetailFood2></DetailFood2>
            <DetailFood3></DetailFood3>
          </div>

        </div>

        <div id='banhmi' className=' bg-gray-100' >
            <div  className="pt-5 flex w-[1200px] mr-auto ml-auto text-4xl font-bold"></div>
            <div className='flex w-[1200px] mr-auto ml-auto pt-5 pb-10'>
                <h1 className='text-4xl font-semibold'>Bánh Mì</h1>
            </div>
          
          <div  className='flex justify-between w-[1200px] mr-auto ml-auto'>
            <DetailFood4></DetailFood4>
            <DetailFood5></DetailFood5>
            <DetailFood6></DetailFood6>
          </div>

        </ div >
        <div id='ankem'></div>
        <div  className=' bg-gray-100' >
            <div  className="pt-5 flex w-[1200px] mr-auto ml-auto text-4xl font-bold"></div>
            <div className='flex w-[1200px] mr-auto ml-auto pt-5 pb-10'>
                <h1 className='text-4xl font-semibold'>Ăn Kèm</h1>
            </div>
          
          <div  className='flex justify-between w-[1200px] mr-auto ml-auto flex-wrap'>
            <DetailFood7></DetailFood7>
            <DetailFood7></DetailFood7>
            <DetailFood7></DetailFood7>
          
          </div>

        </div>

        <div id='monthem' className=' bg-gray-100' >
            <div  className="pt-5 flex w-[1200px] mr-auto ml-auto text-4xl font-bold"></div>
            <div className='flex w-[1200px] mr-auto ml-auto pt-5 pb-10'>
                <h1 className='text-4xl font-semibold'>Các Món Thêm</h1>
            </div>
          
          <div  className='flex flex-wrap justify-between w-[1200px] mr-auto ml-auto'>
            <DetailFood10></DetailFood10>
            <DetailFood10></DetailFood10>
            <DetailFood10></DetailFood10>
            <DetailFood10></DetailFood10>
            <DetailFood10></DetailFood10>
            <DetailFood10></DetailFood10>
          </div>

        </div>

        
        
        <div className='pt-20 bg-gray-100 text-sm flex justify-center pb-6' >
            <h1 className='text-gray-600'>Chúng tôi luôn cố gắng cập nhật thông tin chính xác nhất. <span className='text-cyan-500'>Hãy báo với chúng tôi</span> nếu bạn thấy bất kỳ thông tin không chính xác nào.</h1>
        </div>


        <DetailFooter></DetailFooter>
    </div>
  )
}

export default detailMenu