function UrlStore() {
    const getUserLoginQuery = (username, password) => {
        return `select * from user where username = '${username}' and password = '${password}'`;
    }

    const getUserRegistrationQuery = (guid, name, roleId, username, password) => {
        return "INSERT INTO user (`guid`,`name`,`role`,`username`, `password`) VALUES " + `( '${guid}','${name}',${roleId},'${username}','${password}');`;
    }

    const getAllDevicesByUserQuery = (userId) => {
        return `SELECT * FROM device where user_id = ${userId}`;
    }

    return {
        getUserLoginQuery, getUserRegistrationQuery, getAllDevicesByUserQuery
    }
}

module.exports = UrlStore();