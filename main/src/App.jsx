// Import the CSS file so the styling is applied to our website
import './App.css'

// This is the main function that creates our entire website
function App() {
  
  // We create a list (array) to hold the information for all 4 members
  const members = [
    // This holds the ID, full name, and description for Grace
    { id: "grace", name: "Grace Ann Casaljay", desc: "Balancing the beautiful chaos of motherhood and marriage, I am a 26-year-old on a mission to conquer the tech world. Returning to school to complete my degree isn't just about a career change for me—it’s about proving that dreams don't have an expiration date. Whether I'm managing my household or mastering new systems, I am fueled by a love for learning and a desire to build a tech-driven future for my family." },
    // This holds the ID, full name, and description for Ivy
    { id: "ivy", name: "Ivy Garnica", desc: "My name is Ivy Diaz Garnica, and I am the entrepreneur behind Irscentials, a perfume brand based in Santa Margarita. At 24, I am focused on growing my business while maintaining a high level of personal growth through reading and staying active in sports like basketball. I am a firm believer in hard work and constant learning, whether it's through a book or navigating the challenges of a startup" },
    // This holds the ID, full name, and description for Pia
    { id: "pia", name: "Pia Mae Asosola", desc: "I am a curious person who enjoys learning new things. I want to explore tech skills, like programming. I balance my time by relaxing, watching movies or listening to music. I like keeping things simple and learning step by step." },
    // This holds the ID, full name, and description for Abegail
    { id: "abegail", name: "Abegail Calagos", desc: "I’m a funny and hardworking person who enjoys making others smile. I like to stay positive even when things get challenging, and I always try to do my best in everything I do. I’m friendly, easy to get along with, and I value learning new things and improving myself every day." }
  ];

  // The return statement sends the HTML back to the browser to be displayed
  return (
    
    // This is the main box that wraps around the entire webpage
    <div className="app-wrapper">
      
      {/* This is the top navigation bar menu */}
      <nav className="navbar">
        
        {/* This is our browser/team logo on the left side */}
        <h2 className="logo">TEAM GIPA</h2>
        
        {/* This box holds all the clickable links on the right side */}
        <div className="nav-links">
          
          {/* We use .map() to loop through our members list and create a link for each one */}
          {members.map((m) => (
            
            // This creates the actual clickable link using the member's ID
            <a key={m.id} href={`#${m.id}`}>
              
              {/* This takes the full name, splits it by spaces, and only shows the first name */}
              {m.name.split(' ')[0]}
            </a>
            
          ))}
          
        </div>
        
      </nav>

      {/* This box holds all the main content below the navigation bar */}
      <div className="main-content">
        
        {/* This is the header section that introduces the team */}
        <header className="team-intro">
          
          {/* The big main title of the page */}
          <h1>Meet the Team</h1>
          
          {/* A short paragraph explaining who TEAM GIPA is */}
          <p className="intro-text">
            Welcome to the official page of TEAM GIPA. We are a dedicated group of 
            IT students passionate about building modern web solutions. Our team combines 
            creativity, technical skill, and organized analysis to bring projects to life.
          </p>
          
        </header>
        
        {/* This is the flexible grid container that holds the member cards */}
        <div className="team-grid">
          
          {/* We use .map() again to create a visual card for every member in our list */}
          {members.map((member) => (
            
            // This section represents one single card for a team member
            <section key={member.id} id={member.id} className="card">
              
              {/* This displays the member's full name inside their card */}
              <h3>{member.name}</h3>
              
              {/* This displays the member's specific role inside their card */}
              <p>{member.desc}</p>
              
            </section>
            
          ))}
          
        </div>

      </div>
      
    </div>
  )
}

// This makes the App component available for Vite to render on the screen
export default App