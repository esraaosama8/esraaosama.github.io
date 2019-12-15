class Milestones extends React.Component {
    render() {
        return (<div className="card mt-3">
            <div className="card-title card-header"><i className="far fa-flag"/> Education</div>
            <table className="table table-bordered">
                <tr>
                    <td className="text-center">
                        <a href="https://fci.cu.edu.eg/Home" target="_blank">
                <img src='./src/img/svg/Cairo_University_Crest.png' title="Cairo University" width="50px" style={{webkitFilter: "grayscale(40%)"}}/>
                </a>
                    </td>
                    <td>
        <strong>Faculty of Computer and Artificial Intelligence -</strong><br/> <strong>Cairo University</strong><br/>
                        Bachelor's degree<br/>
       <i> 2015 - 2019</i><br/>

                    </td>
                </tr>

            </table>
        </div>)
    }
}
ReactDOM.render(React.createElement(Milestones), document.querySelector('#milestones'));
