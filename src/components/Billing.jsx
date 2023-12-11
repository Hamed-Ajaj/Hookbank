import {apple, google, bill} from '../assets'
import styles , {layout} from "../style"

const Billing = () => {
  return (
    <section id='product' className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt="bill"
        className='w-full h-full relative z-[5]'
        />

        <div className={`absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient`}/>
        <div className={`absolute z-[0] -left-1/2 w-[50%] bottom-0 h-[50%] rounded-full pink__gradient`}/>
      </div>
      <div className={`${layout.sectionInfo}`}>
          <h2 className={`${styles.heading2}`}>Easily Control your <br  className='sm:block hidden'/> billing & invoicing</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5` }>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
          </p>
          <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
              <img src={apple} alt="apple store" className='w-[128px] object-contain mr-5 cursor-pointer h-[42px]' />
              <img src={google} alt="google play" className='w-[128px] object-contain cursor-pointer h-[42px]' />
          </div>
      </div>
    </section>
  )
}

export default Billing
