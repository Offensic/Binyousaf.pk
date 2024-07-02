import React from 'react'

function Shipping() {
    return (
        <div>

            <div className='mt-5' style={{ padding: 'clamp(2px, 10%, 160px)'}}>

                {/* Heaing About Deliver timing */}
                <h3 className='font-sans text-base font-bold text-[#2e2e2e]'>Expected delivery time:</h3>
                <span className='text-[#555555] text-[13px] tracking-wide	 font-Lato  font-bold  leading-7'>DELIVERY TIME (PAKISTAN) : WITHIN ONE WEEK FOR UNSTITCHED <br />
                    DELIVERY TIME (PAKISTAN) : WITHIN 2 TO 3 WEEKS FOR STITCHED <br />
                    DELIVERY TIME (INTERNATIONAL) : WITHIN 2 WEEKS FOR UNSTITCHED <br />
                    DELIVERY TIME (INTERNATIONAL) : WITHIN 3 TO 5 WEEKS FOR STITCHED <br />
                    CUSTOM STITCH : 1 WEEK EXTRA</span>



                {/* Sipping Carges Heading */}
                <h3 className='font-sans text-base font-bold text-[#2e2e2e] mt-4 mb-16'>Shipping Charges:</h3>
                <span className='font-sans'>Within Pakistan: Free <br />
                    Outside Pakistan: Shipping charges will be calculated at the time of checkout based on the size of package and destination.</span>



                {/* Couries Heaing */}
                <h3 className='font-sans text-base font-bold text-[#2e2e2e] mt-4 mb-16'>Couriers:</h3>
                <span className='font-sans'>Within Pakistan: TCS/Leapards <br />
                    Outside Pakistan: DHL</span>


                {/* CheckOut and Duties */}
                <h3 className='font-sans text-base font-bold text-[#2e2e2e] mt-4 mb-4'>Customs and Duties:</h3>
                <span className='text-[#485e75] font-sans text-base tracking-wider leading-7'>Your order may be required to pay customs and import duties upon arrival of the goods into your country. Baroque is not responsible for any taxes or  duties the customs office may charge you, and payment is necessary to release your order from customs.</span>


                {/* Privacy and Policy  */}
                <h3 className='text-[#485e75] text-[20px] font-sans mt-20 mb-4'>Privacy & Policy:</h3>
                <span className='text-[#485e75] font-sans text-base tracking-wider leading-7'>Information is collected on this site by baroque.pk (Baroque) will take all measures to protect your personal information. Any personal information <br /> received will only be used to fill your order. We will not sell or redistribute your information to anyone. Any information you provide will be  governed  <br /> by this privacy policy and our terms and conditions.</span> <br /> <br />
                <span className='text-[#485e75] font-sans text-base tracking-wider leading-7'>We may collect two types of information via this website: information you specifically provide to us, and automatic information associated with your use of this site. Information you specifically provide to us includes any information you enter into a form or send to us via e-mail. Examples of this information include information you enter when placing an order or setting up an account. Automatic information associated with your use of this site includes any information arising from your use of this site which you do not specifically provide. Examples of this information include your IP address, the type of web browser you are using, and the speed of your web connection.</span><br /><br />


                <span className='text-[#485e75] font-sans text-base tracking-wider leading-7'>We will protect your data and not sell it any cost please feel free to contactinfo@baroque.pk.</span><br /> <br />
                <span className='text-[#485e75] font-sans text-base tracking-wider leading-7'>All stitched orders are made to order. The making of the product begins the next business day from when the order is received.</span><br /><br />
                <span className='text-[#485e75] font-sans text-base tracking-wider leading-7'>We endeavour to dispatch the order as soon as possible and are always trying to reduce the delivery times.</span><br /><br />
                <span className='text-[#485e75] font-sans text-base tracking-wider leading-7'>For Cash on Delivery (or COD) orders payment will be collected from shipping address..</span>

                <div className='mt-16 mb-5'>
                    <hr />                    
                </div>
                <hr />
            </div>

        </div>
    )
}

export default Shipping