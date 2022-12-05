
import { User } from "../interfaces/User.ts";
import { default as userRepository  } from "../repositories/UserRepository.ts";

// import { crypto } from "../dependences.ts";
import { cryptoSHA512 } from "../utils/crypto.js";

class UserService {

    isLoginUser = async (account: string, password: string)=>{
        // password = crypto.subtle.digest("SHA-512", new TextEncoder().encode(password)).toString();
        password = await cryptoSHA512(password);
        return await userRepository.isLogin(account, password);        
    }
    
    fetchUsers = async () =>  {
        return  await userRepository.getUsers();
    };

      
    fetchUser = async (id: number) =>{
        return await userRepository.getUser(id);
    }
        
    
    
    createUser = async (user: User) => {
        return await userRepository.addUser(user)  
    };

    updateUser = async (user: User, id: number) => {
            const updatedUser: {
            id: number;
            account: string;
            password: string;
        } = user;
        
        return await userRepository.updateUser(id,user);
    };

    deleteUser = async (id: number) => {
        return  await userRepository.deleteUser(id);
    };
}


export default new UserService();