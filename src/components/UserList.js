import '../styles/UserList.css';
import User from './User';

const UserList = ({ userList, setUserList }) => {
    return (

        <div className="user-list">
            <h2>User List</h2>
            <small>Click user to delete</small>
            <table>
                <thead>
                    <tr className="table-header">
                        <th>Username</th>
                        <th>Age</th>
                    </tr>
                </thead>

                {userList && userList.map(user => (
                    <User key={Math.random()} name={user.username} age={user.age} id={user.id} setUserList={setUserList} userList={userList} />))}



            </table>

        </div>

    );
}

export default UserList;