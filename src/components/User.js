import '../styles/User.css';

const User = ({ name, age, id, setUserList, userList }) => {

    const handleClick = (e) => {

        let rowId = e.target.parentElement.parentElement.id

        let newArr = userList.filter(u => u.id !== rowId)

        setUserList(newArr)
    }

    return (

        <tbody >
            <tr id={id} className='user' onClick={handleClick} title="Click to delete user">
                <td className="td-name">
                    <div className='user-name'> <span>{name}</span></div>
                </td>
                <td className="td-age">
                    <div className="user-age"><span>{age}</span></div>
                </td>
            </tr>
        </tbody>







        // <div id={id} className="user" onClick={handleClick}>
        //     <p className="user-details"><span className="user-name">  {name}</span><span className="user-age">  {age}</span></p>
        // </div>

    );
}

export default User;