import product1 from '../../../assets/images/3f7adbdd7c0244bc472649798d8b21efd639cdc8.png'
import product2 from '../../../assets/images/36aec8f04cda262fb7ec76417af70265ca7bcaad.png'
import product3 from '../../../assets/images/669d6a7c9f9ac467e124d485ca1c7e9af1670bb7.png'
import product4 from '../../../assets/images/48394e6ed91aab55891e7ddd7c645b5fad480d20.png'
function Categories() {
    return (
        <div  className="p-5  border-b-2 border-[#05243F0D] ">
            <div className="flex justify-between text-[15px] text-[#697C8C] font-[600] mb-4">
                <p>Categories</p>
                <p>See All</p>
            </div>
            <div className="flex">
                <div className='flex gap-8 overflow-hidden no-scrollbar'>
                    <div className='flex flex-col align-center text-center'>
                        <div className='w-[84px] border-1 border-[#D3D9DE4D] h-[60px] overflow-hidden rounded-[90px] mb-2 '>
                            <img src={product1} alt="" />
                        </div>
                        <div>
                            <p className='text-[#05243F] text-[13px] '>Maintenance</p>
                        </div>
                    </div>
                    <div className='flex flex-col align-center text-center'>
                        <div className='w-[84px] border-1 border-[#D3D9DE4D] h-[60px] overflow-hidden rounded-[90px] mb-2 '>
                            <img src={product2} alt="" />
                        </div>
                        <div>
                            <p className='text-[#05243F] text-[13px] '>Car Parts</p>
                        </div>
                    </div>
                    <div className='flex flex-col align-center text-center'>
                        <div className='w-[84px] border-1 border-[#D3D9DE4D] h-[60px] overflow-hidden rounded-[90px] mb-2 '>
                            <img src={product3} alt="" className='object-contain'/>
                        </div>
                        <div>
                            <p className='text-[#05243F] text-[13px] '>Accessories</p>
                        </div>
                    </div>
                    <div className='flex flex-col align-center text-center'>
                        <div className='w-[84px] border-1 border-[#D3D9DE4D] h-[60px] overflow-hidden rounded-[90px] mb-2 '>
                            <img src={product4} alt="" className='object-contain'/>
                        </div>
                        <div className=''>
                            <p className='text-[#05243F] text-[13px] '>Deals</p>
                        </div>
                    </div>
                    <div className='flex flex-col align-center text-center'>
                        <div className='w-[84px] border-1 border-[#D3D9DE4D] h-[60px] overflow-hidden rounded-[90px] mb-2 '>
                            <img src={product1} alt="" />
                        </div>
                        <div>
                            <p className='text-[#05243F] text-[13px] '>Maintenance</p>
                        </div>
                    </div>
                    <div className='flex flex-col align-center text-center'>
                        <div className='w-[84px] border-1 border-[#D3D9DE4D] h-[60px] overflow-hidden rounded-[90px] mb-2 '>
                            <img src={product2} alt="" />
                        </div>
                        <div>
                            <p className='text-[#05243F] text-[13px] '>Car Parts</p>
                        </div>
                    </div>
                    <div className='flex flex-col align-center text-center'>
                        <div className='w-[84px] border-1 border-[#D3D9DE4D] h-[60px] overflow-hidden rounded-[90px] mb-2 '>
                            <img src={product3} alt="" className='object-contain'/>
                        </div>
                        <div>
                            <p className='text-[#05243F] text-[13px] '>Accessories</p>
                        </div>
                    </div>
                    <div className='flex flex-col align-center text-center'>
                        <div className='w-[84px] border-1 border-[#D3D9DE4D] h-[60px] overflow-hidden rounded-[90px] mb-2 '>
                            <img src={product4} alt="" className='object-contain'/>
                        </div>
                        <div className=''>
                            <p className='text-[#05243F] text-[13px] '>Deals</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Categories;