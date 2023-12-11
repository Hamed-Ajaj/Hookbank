
import {card} from "../assets"
import styles , {layout} from "../style"
import Button from "./Button"
const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
        <div className = {`${layout.sectionInfo}`}>
            <h2 className={`${styles.heading2}`}>Get early access today</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-10` }>
            It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
            </p>
            <Button >Get Started For Free</Button>
        </div>
        <div className = {`${layout.sectionImg}`}>
            <img src={card} alt="card"  className="w-full h-full"/>
        </div>
    </section>
  )
}

export default CardDeal
