import "../css/aboutme.css"

function AboutMe() {

    return (
        <div className="aboutme_body">
            <div className="aboutme_header">
                <h2>About me</h2>
            </div>
            <div className="aboutme_text">
                <p>Hello! I'm Marharyta.</p>
                <p>I'm an aspiring full-stack developer with a background in manual testing through 
                    freelance work and three years of Computer Science education. 
                    I enjoy putting the theory I've learned at university into 
                    practice and creating innovative, user-friendly websites. 
                    I'm also interested in keeping up with the latest trends in IT, particularly in Machine Learning and AI.</p>

                    <p>Currently, I'm learning React and improving my JavaScript skills by building real-world applications. 
                    I'm also determined to keep my QA skills sharp, so I occasionally take on freelance testing projects.</p>

                    <p>Outside of coding, I enjoy dancing and digital art. I'm a curious and sociable person who believes 
                        that one of the best ways to learn is by building projects, experimenting, 
                        and learning from others in the industry.</p>

                    <p>I'm currently looking for opportunities to work on meaningful projects, expand my skills, and grow as a developer.</p>

            </div>
            <div className="about-cards">
                <div className="experience">
                <h3>My experience</h3>
                <p>Freelance Manual Tester</p>
                <p>2025-2026</p>
            </div>
            <div className="education">
                <h3>My education</h3>
                <h4>Bachelor of Computer Science</h4>
                <p>Pryazovski State Technical University</p>
                <p>2024-2028</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe