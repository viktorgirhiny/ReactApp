
import './App.css';
import TrueFocus from './components/TrueFocus';
import SplashCursor from './components/SplasCursor';
import Folder from './components/Folder';
import Stepper, { Step } from './components/Stepper';
import ProfileCard from './components/ProfileCard';
import SplitText from "./components/SplitText";


function App() {
  return (
    <div className="App" style={{ backgroundColor: '#222222', color: 'white', paddingBottom: '100px' }}>

      {/* <main>
        <TrueFocus
          sentence="Vidd felém az egeret!"
          manualMode={true}
          blurAmount={5}
          borderColor="red"
          animationDuration={0.3}
          pauseBetweenAnimations={1}
        />
      </main> */}



      <SplitText
        text="Üdvözöllek nálunk!"
        className="text-2xl font-semibold"
        delay={120}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />




      <div style={{ height: '600px', position: 'relative', top: '30vh', left: '70vw' }}>
        <Folder
          size={1.5}
          color="#00d8ff"
          className="custom-folder"
          items={[
            { link: "https://example.com/1", content: "" },
            { link: "https://example.com/2", content: "" },
            { link: "https://example.com/3", content: "" },
          ]}
        />
      </div>

      <p style={{ fontSize: '30px', position: 'relative', top: '-50px' }}>Gyere le!!</p>








      <Stepper
        initialStep={1}
        onStepChange={(step) => {
          console.log(step);
        }}
        onFinalStepCompleted={() => console.log("All steps completed!")}
        backButtonText="Previous"
        nextButtonText="Next"
      >
        <Step>
          <h2>Welcome to the React Bits stepper!</h2>
          <p>Check out the next step!</p>
        </Step>
        <Step>
          <h2>Step 2</h2>
          <img style={{ height: '100px', width: '100%', objectFit: 'cover', objectPosition: 'center -70px', borderRadius: '15px', marginTop: '1em' }} src="https://www.purrfectcatgifts.co.uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894" />
          <p>Custom step content!</p>
        </Step>
        <Step>
          <h2>How about an input?</h2>
          <input placeholder="Your name?" />
        </Step>
        <Step>
          <h2>Final Step</h2>
          <p>You made it!</p>
        </Step>
      </Stepper>







      {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '50px'}}>
      <ProfileCard
        name="Javi A. Torres"
        title="Software Engineer"
        handle="javicodes"
        status="Online"
        contactText="Contact Me"
        avatarUrl="/src/nyar1.jpg"
        showUserInfo={true}
        enableTilt={true}
        onContactClick={() => console.log('Contact clicked')}
      />

      <ProfileCard
        name="Javi A. Torres"
        title="Software Engineer"
        handle="javicodes"
        status="Online"
        contactText="Contact Me"
        avatarUrl=""
        showUserInfo={true}
        enableTilt={true}
        onContactClick={() => console.log('Contact clicked')}
      />

      <ProfileCard
        name=""
        title="Software Engineer"
        handle="javicodes"
        status="Online"
        contactText="Contact Me"
        avatarUrl=""
        showUserInfo={false}
        enableTilt={true}
        onContactClick={() => console.log('Contact clicked')}
      />
        </div> */}

      <div></div>



      {/* <SplashCursor /> */}
    </div>
  );
}

export default App;
