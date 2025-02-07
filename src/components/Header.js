import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const showGptSearch = useSelector((store)=> store.gpt.showGptSearch)
    
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            navigate("/");
          }).catch((error) => {
            navigate("/error");
          });
    }
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) { 
           const {uid,email,displayName,photoURL} = user;
           dispatch(addUser({uid: uid,email: email,displayName: displayName,photoURL:photoURL}));
           navigate("/browse")
         } else {
           dispatch(removeUser());
           navigate("/");
         }
       });
       return ()=> unsubscribe()
   },[])

   const handleGptSearchClick=()=>{
      dispatch(toggleGptSearchView());
   }

    return <div
    className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-44" src = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"/>
        {user && (<div className="flex p-2">
          <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
          onClick={handleGptSearchClick}
          >
            {showGptSearch? "Homepage" : "GPT Search"}
          </button>
          <img className="h-12 w-12"alt="usericon" src={user?.photoURL}/>
          <button onClick={handleSignOut} className="font-bold text-white">Sign-Out</button>
        </div>
        )}

        
    </div>
};

export default Header;