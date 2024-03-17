async function authUser(email, password) {
    const data = await authUserDB(email, password);
    if (!data.length) throw new Error("The user is not registered");
    return data;
}