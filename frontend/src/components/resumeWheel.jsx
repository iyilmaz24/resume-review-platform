import '../styles/wheelStyles.css';
import { IconArrowDownBar } from '@tabler/icons-react';



function ResumeWheel({ spinDeg, chooseResume }) {

    function spinWheel () {
        let container = document.querySelector(".container");
        container.style.transform = `rotate(${spinDeg.current}deg)`;
        // console.log(spinDeg.current);
        spinDeg.current += Math.max(Math.ceil(Math.random() * 3000), 1500);

        chooseResume();
    }   

  return (<>

        <div className="arrow flex flex-row place-content-center">
            <IconArrowDownBar size={60}/></div>

        <div className="container">
            <div className="one">1</div>
            <div className="two">2</div>
            <div className="three">3</div>
            <div className="four">4</div>
            <div className="five">5</div>
            <div className="six">6</div>
            <div className="seven">7</div>
            <div className="eight">8</div>
        </div>

        <div className='mt-8'>
            <button onClick={spinWheel} id="spin" className="defaultButton">Spin</button>
        </div>


  </>);
}


export default ResumeWheel;