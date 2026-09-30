import "../css/capabilities.css"

function Capabilities() {

    return (
        <div className="capabilities_body" id="capabilities">
            <div className="capabilities_header">
                <h2>
                    Capabilities
                </h2>
            </div>
            <div className="cards-grid">
            <div className="card card-purple">
                <h3>Web Development</h3>
                <ul>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>Python / Flask</li>
                </ul>
            </div>
            <div className="card card-light">
                <h3>UI & Frontend</h3>
                <ul>
                    <li>Responsive UI</li>
                    <li>Figma → Code</li>
                    <li>HTML / CSS</li>
                </ul>
            </div>
            <div className="card card-light">
                <h3>Manual QA & Testing</h3>
                <ul>
                    <li>Functional testing</li>
                    <li>Bug reporting</li>
                    <li>Regression tests</li>
                </ul>
            </div>
            <div className="card card-purple">
                <h3>Problem Solving</h3>
                <ul>
                    <li>Debugging</li>
                    <li>Requirements</li>
                    <li>Research</li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Capabilities