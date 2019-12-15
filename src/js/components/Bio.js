class Bio extends React.Component {
    render() {
        return (<div className="card mt-3">
            <div className="card-body">
                <p className="card-text">
            A fresh graduate from Cairo University Faculty of Computer Science and Information. I'm looking for internships or part-time jobs in Web Development or UI/UX Design to work on what I've learnt so far. Hopefully I would be able to learn new technologies and features if needed for any job.
                </p>
            </div>
        </div>);
    }
}
ReactDOM.render(React.createElement(Bio), document.querySelector('#bio'));

