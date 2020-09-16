class Bio extends React.Component {
    render() {
        return (<div className="card mt-3">
            <div className="card-body">
                <p className="card-text">

                I'm a fresh graduate from Cairo University Faculty of Computer Science and AI. I am interested mainly in UI/UX Design, Content Creation, Digital Marketing, and Social Media Marketing. 
                Looking forward to getting the right opportunity to work on what I've
learned so far through the courses I've been taking and projects I've
been working on. Hopefully, I would be able to learn new
technologies and features if needed for any job. I also dedicate my time and commit to any tasks given to me.

                </p>
            </div>
        </div>);
    }
}
ReactDOM.render(React.createElement(Bio), document.querySelector('#bio'));

