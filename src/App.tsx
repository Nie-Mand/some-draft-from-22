import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  return (
    <div>
      <Parallax pages={4} className="bg-so-dark">
        <ParallaxLayer offset={0} sticky={{ start: 0, end: 4 }}>
          <nav className="font-alien bg-so-dark w-full text-white flex items-center space-x-10 u-container py-5">
            <button className="font-bold text-xl">NIEMAND RS</button>

            <div className="flex items-center space-x-4">
              <button className="hover:font-alien-solid">ABOUT</button>
              <button className="hover:font-alien-solid">BLOG</button>
              <button className="hover:font-alien-solid">WORK</button>
            </div>

            <div className="flex-1"></div>

            <div className="flex items-center space-x-4 font-alien-solid">
              <button className="button">RESUME</button>
              <button className="button">CONTACT</button>
            </div>
          </nav>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2} className="font-alien">
          <div className="grid grid-cols-2">
            <div></div>

            <div className="u-container">
              <img src="/weird-shape.svg" alt="weird shape" className="" />
              <img src="/circle.svg" alt="weird shape" />
              <img src="/triangle.svg" alt="weird shape" className="" />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5} className="font-alien text-white">
          <span>Second Page</span>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>
          <span>Third Page</span>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
