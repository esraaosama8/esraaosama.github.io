class Tools extends React.Component {
    render() {
        return (<div className="card mt-3">
            <div className="card-title card-header"><i className="fas fa-tools"/> Skills & Tools</div>
            <table className="table table-bordered table-striped">

                <tbody>
                <tr>
                    <td>HTML5</td>
                </tr>
                <tr>
                    <td>CSS</td>
                </tr>
                <tr>
                    <td>Bootstrap</td>
                </tr>
            <tr>
            <td>Adobe XD</td>
            </tr>
        <tr>
        <td>Axure</td>
        </tr>
        <tr>
        <td>Balsamiq</td>
        </tr>
        <tr>
        <td>InVision</td>
        </tr>
        <tr>
        <td>User Interface Prototyping</td>
        </tr>

                </tbody>
            </table>
        </div>)
    }
}
ReactDOM.render(React.createElement(Tools), document.querySelector('#tools'));