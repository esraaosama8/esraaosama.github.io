class Projects extends React.Component {
    render() {
        return (<div className="card mt-3">
            <div className="card-title card-header"><i className="fas fa-tasks"/> Recent Projects</div>
            <table className="table table-bordered table-striped">
                <tbody>
                    <tr>
            <td><a href="https://github.com/esraaosama8/UdaciCards" target="_blank">UdaciCards</a></td>
        <td> 
         An app focuses on building a "Mobile Flashcards" app using <b> React Native </b> with <b>Expo</b> Platform. The application allows a user to create a deck of flash cards, each capturing a question and answer for the deck's topic. The user can then start a quiz to test their knowledge of a particular topic.
        </td>
        </tr>
            <tr>
            <td><a href="http://portfolio-98.byethost24.com/" target="_blank">Discover Egypt</a></td>
        <td> Discover Egypt is a one page portfolio website that I have developed, hosted and created by <b>Bootstrap Framework</b>. The website features several content sections, a responsive portfolio grid with hover effects, full page portfolio item modals and a responsive timeline.
        </td>
        </tr>
                <tr>
                    <td><a href="https://github.com/esraaosama8/galesak" target="_blank">Galesak</a></td>
                    <td> Galesak is a website that my graduation team and I had developed to provide services on finding suitable assistants and sitters to make it easy and fast for people to get the right assist they need that's near them.
        The project has been deployed using <b>NetBeans Framework</b>,<b> Java Servelts</b>, <b>HTML5</b>, <b>CSS</b>,<b> Bootstrap </b>, <b>JQuery</b>, and <b>MySQL</b> Database.
                    </td>
                </tr>
                <tr>
                    <td><a href="https://www.behance.net/gallery/87314609/Care4u" target="_blank">Care4u</a></td>
                    <td> This is a project that I have developed for my UI/UX specialization course using <b>Adobe XD</b> tools.
                    </td>
                </tr>
                <tr>
                    <td><a href="https://esraa136915.invisionapp.com/public/share/QMWTY558E" target="_blank">Hens</a>
                    </td>
                    <td> This is a clickable prototype for an abstract restaurant website I have made using <b>Balsamiq</b> and <b>InVision</b>.
                    </td>
                </tr>
                </tbody>
            </table>
        </div>)
    }
}
ReactDOM.render(React.createElement(Projects), document.querySelector('#projects'));
