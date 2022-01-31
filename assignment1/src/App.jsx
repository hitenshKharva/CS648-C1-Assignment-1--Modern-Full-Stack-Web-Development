const renderElement = (
    <>
      <div className="navbar">
        <a href="/" className="navbar-heading">
          About Me
        </a>
        <ul className="navbar-items-wrapper">
          <li className="navbar-item">Home</li>
        </ul>
      </div>
  
      <div className="body-wrapper">
        <div className="home-image">
          <img className= "background" src="images/background1.jpeg" />
          <div className="text-on-image">
            <div className="text-on-image-name">Hitensh Kharva</div>
            <hr className="text-on-image-seperater" />
            <div className="typewriter">
              <p className="typewriter-text text-on-image-desc">Data monger and Perennial optimist</p>
            </div>
          </div>
        </div>

        <div className="home-body">
        <article className="article about-me-article">
          <section>
            <h2 className="sec-head">About Me</h2>
            <div className="sec-body">
              <img src="images/profile.jpeg" className="profile-img" />
              <div className="about-me-desc">
                <p>
                  Hi! I’m <strong style={{ color: "white" }}>Hitensh Kharva</strong> 
                </p>
                <p>
                I am a CS Graduate Student as San Diego State Univeristy
                  
                </p>
                <a href="https://github.com/hitenshKharva" target="_blank" className="github-btn">
                  <button className="button button-dark">View my GitHub Repo</button>
                </a>
              </div>
            </div>
          </section>
        </article>
      </div>
      </div>
    </>
  );
  
  ReactDOM.render(renderElement, document.getElementById("contents"));