import { signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import RobotList from "../../components/RobotList/RobotList";
import { auth, githubProvider } from "../../firebaseConfig";

const ListPage = (): React.ReactElement => {
  const [user, isLoading] = useAuthState(auth);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const login = async () => {
    await signInWithPopup(auth, githubProvider);
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <section>
      <header>
        <h2>List Page</h2>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
      </header>
      {user && <RobotList />}
    </section>
  );
};

export default ListPage;
