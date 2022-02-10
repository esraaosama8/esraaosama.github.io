class Intro extends React.Component {
    render() {
        return (<div className="card mt-3">
            <h1 className="card-title card-header text-dark">Esraa Osama Abdelraouf</h1>
                <img className="card-img-bottom" src="./src/img/svg/me.jpeg" alt="me" />
            {/*<img src="./src/img/svg/me2.jpg" alt="me"/>*/}
            <table className="table table-bordered mt-1">
                <tbody>
                   /* <tr>
                        <td colSpan={2}><i className="fas fa-phone fa-lg" /> +201011544812</td>
                    </tr>*/
                    <tr>
                        <td colSpan={2}><i className="fas fa-home fa-lg" /> Giza, Al-Sheikh Zayed City
                    </td>
                    </tr>
                    <tr>
                        <td colSpan={2}><i className="fas fa-envelope fa-lg" /> souhashem8@gmail.com</td>
                    </tr>
                </tbody>
            </table>
                       {/*Image source was here*/}

            <div className="mt-1" />

            <div className="btn-group btn-group-lg">
                <a className="btn btn-outline-dark" href="https://www.github.com/esraaosama8" target="_blank"
                    style={{ width: "50%" }}><i className="fab fa-github fa-lg" /></a>
                <a className="btn btn-outline-dark" href="https://www.linkedin.com/in/esraaosama8" target="_blank"
                    style={{ width: "50%" }}><i className="fab fa-linkedin fa-lg" /></a>
            </div>
            <div className="mt-1" />
        </div>)
    }
}

ReactDOM.render(React.createElement(Intro), document.querySelector('#intro'));
