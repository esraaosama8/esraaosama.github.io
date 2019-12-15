class Certificates extends React.Component {
    render() {
        return (<div className="card mt-3">
            <div className="card-title card-header"><i className="fas fa-certificate"/> Certificates
            </div>
            <table className="table table-bordered">
                <tbody>
            <tr>
            <td className="text-center"><img src="./src/img/svg/udacity.svg" width="25" title="Udacity" style={{webkitFilter: "grayscale(80%)"}}/>
        </td>
        <td><a href="https://graduation.udacity.com/confirm/RVLRPMLH">Front-End Web Developer NANODEGREE</a></td>
        </tr>
                <tr>
                    <td className="text-center"><img
                        src="./src/img/svg/coursera.png" width="25" title="Coursera"/>
                    </td>
                    <td><a
                        href="https://www.coursera.org/account/accomplishments/specialization/KAWRMFGB24YE"> UI / UX Design Specialization</a></td>
                </tr>

        </tbody>
    </table></div>
    )
    }
}
ReactDOM.render(React.createElement(Certificates), document.querySelector('#certificates'));