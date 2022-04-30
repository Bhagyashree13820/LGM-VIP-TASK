import Loader from "react-loader-spinner";
import './styles.css';

const LoaderComp = ()=>{
    return(
        <div className='app'>
            <Loader
            type="Bars"
            color="#82589f"
            style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            height={100}
            width={100}
            timeout={3000}
            />
       </div>
    );
}
export default LoaderComp
