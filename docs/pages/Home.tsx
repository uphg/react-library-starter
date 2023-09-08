import ReactLogo from '../assets/react.svg'

const Home = () => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <h1 className="">
            <span className="">Vite</span>
          </h1>
          <p className="c-red">Next Generation Frontend Tooling</p>
          <p className="">Get ready for a development environment that can finally catch up with you.</p>
        </div>
        <div className="">
          <div className="">
            <div className=""></div>
            <img className="" src={ReactLogo} alt="Vite"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home