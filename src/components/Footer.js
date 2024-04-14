import React from 'react'

function Footer() {
  return (
    <div>

        <div className='mt-[100px] w-[1200px] mr-auto ml-auto '>
           <h1 className='text-4xl font-bold mb-10'>Vì sao bạn nên Order trên GrabFood?</h1> 
           <ul className='text-sm' >
            <div className='flex items-center'><img className='w-[20px] h-5' src='https://www.shutterstock.com/image-vector/green-check-mark-icon-tick-600nw-522874111.jpg' alt=''></img><li className='m-2'><span className='font-bold'>Nhanh nhất</span> - GrabFood cung cấp dịch vụ giao đồ ăn nhanh nhất thị trường.</li></div>
            <div className='flex '><img className='w-[20px] h-5 mt-2' src='https://www.shutterstock.com/image-vector/green-check-mark-icon-tick-600nw-522874111.jpg' alt=''></img><li className='m-2'><span className='font-bold'>Dễ dàng nhất</span> - Giờ đây, bạn chỉ cần thực hiện vài cú nhấp chuột hoặc chạm nhẹ là đã có thể đặt đồ ăn. Hãy đặt đồ ăn trực tuyến hoặc tải xuống siêu ứng dụng Grab của chúng tôi để có trải nghiệm nhanh hơn và thú vị hơn.</li></div>
            <div className='flex items-center'><img className='w-[20px] h-5' src='https://www.shutterstock.com/image-vector/green-check-mark-icon-tick-600nw-522874111.jpg' alt=''></img><li className='m-2'><span className='font-bold'>Đáp ứng mọi nhu cầu</span> - Từ món ăn đặc sản địa phương đến các nhà hàng được ưa thích, nhiều lựa chọn đa dạng chắc chắn sẽ luôn làm hài lòng khẩu vị của bạn.</li></div>
            <div className='flex items-center'><img className='w-[20px] h-5' src='https://www.shutterstock.com/image-vector/green-check-mark-icon-tick-600nw-522874111.jpg' alt=''></img><li className='m-2'><span className='font-bold'>Thanh toán dễ dàng</span> - Giao và nhận đồ ăn thật dễ dàng. Thanh toán bằng GrabPay thậm chí còn dễ dàng hơn nữa.</li></div>
            <div className='flex items-center'><img className='w-[20px] h-5' src='https://www.shutterstock.com/image-vector/green-check-mark-icon-tick-600nw-522874111.jpg' alt=''></img><li className='m-2'><span className='font-bold'>Nhiều quà tặng hơn</span> - Tích điểm GrabRewards cho mỗi đơn hàng của bạn và sử dụng điểm thưởng để đổi lấy nhiều ưu đãi hơn.</li></div>
           </ul>
        </div>

        <div className='mt-[100px] w-[1200px] mr-auto ml-auto '>
            <h1 className='text-4xl font-bold mb-10'>Những câu hỏi thường gặp</h1> 
            <h1 className='text-2xl font-bold mb-5'>GrabFood là gì?</h1> 
            <h1 className='text-1xl mb-10'>Lunch, Bún Cá Chấm Gốc Đa - Vũ Thạnh for Dinner! We are here to satisfy your hunger with a wide selection of merchant partners in Vietnam. GrabFood là dịch vụ Giao đồ ăn nhanh nhất tại Việt Nam. Chúng tôi đã sắp xếp tất cả các món ăn, nhà hàng và thực phẩm yêu thích của bạn một cách hợp lý để giúp bạn tìm được đồ ăn dễ dàng và nhanh chóng nhất có thể. Tìm và đặt món ăn yêu thích trên khắp Việt Nam - đặt đồ ăn trực tuyến chỉ bằng vài thao tác, từ món Lifted Coffee & Brunch cho bữa sáng, đến Maazi Indian – Nhà Hàng Ấn Độ cho bữa trưa, đến Bún Cá Chấm Gốc Đa – Vũ Thạnh cho bữa tối! Hãy để chúng tôi xua tan cơn đói của bạn nhờ một loạt đối tác bán đồ ăn ở Việt Nam.</h1> 
            <div className='p-3 mt-7 border-[1px] border-neutral-600 w-full flex justify-center rounded-[6px] hover:border-green-500 hover:text-green-500 mb-10'>
                <a href='1' className='text-neutral-600 hover:text-green-500 font-semibold'>Read More</a>
            </div>
        </div>

        <div className='bg-zinc-100	 w-100% h-[550px]'>
            <div className='flex w-[1200px] mr-auto ml-auto '>
                <div className='w-[600px] mt-[100px]' >
                    <div className='flex grid justify-items-center' ><img src='https://food.grab.com/static/page-home/bottom-food-options.svg' alt=''></img></div>
                    <h1 className='flex justify-center m-3 font-bold text-xl'>Curated restaurants</h1>
                    <h1 className='flex text-center text-sm pr-20 pl-20'>From small bites to big meals, we won't limit your appetite. Go ahead and order all you want.</h1>
                </div>

                <div className='w-[600px] mt-[100px]' >
                    <div className='flex grid justify-items-center' >
                        <img className='w-[150px] h-[150px]' src='https://food.grab.com/static/images/ilus-cool-features-app.svg' alt=''></img>
                    </div>
                    <h1 className='flex justify-center m-3 font-bold text-xl'>More cool features available on the app</h1>
                    <h1 className='flex text-center	 text-sm pr-20 pl-20'>Download Grab app to use other payment methods and enjoy seamless communication with your driver.</h1>
                    <div className='flex justify-center gap-5 mt-6	'>
                        <img src='https://food.grab.com/static/images/logo-appstore.svg' alt=''></img>
                        <img src='https://food.grab.com/static/images/logo-playstore.svg' alt=''></img>
                    </div>
                </div>
            </div>
        </div>

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
    </div>
  )
}

export default Footer