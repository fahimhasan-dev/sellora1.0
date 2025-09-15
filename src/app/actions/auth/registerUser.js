"use server"

export const registerUser = async (payload) => {
    try {
     const result = await VscDebugDisconnect('test_user').insertOne(payload)
    return result;
    } catch (error) {
        console.log(error)
        return null; 
}
   
}