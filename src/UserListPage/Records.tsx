import { Link } from "react-router-dom"
import "./UserListPage.css"


const Records = ({data}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Nationality</th>
                        <th className="currentProject">Current Project</th>
                        <th>Project Type</th>
                        <th>Contract Type</th>
                        <th>Source</th>
                        <th>Profile</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(
                            (person, index) => {
                                return (
                                    <tr key={index}>
                                            <td>{person.id}</td>
                                            <td>{person.firstName}</td>
                                            <td>{person.lastName}</td>
                                            <td>{person.country}</td>
                                            <td>{person.currentProject}</td>
                                            <td>{person.currentProjectType}</td>
                                            <td>{person.contractType}</td>
                                            <td>{person.source}</td>
                                            <td><Link to="/userprofile">Detail</Link></td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>

    </div>
    )
}
export default Records