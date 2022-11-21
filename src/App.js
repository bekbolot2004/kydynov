import Author from "./Components/Author";
import Contacts from "./Components/Contacts";
import Main from "./Components/Main";
import MainLayout from "./Components/MainLayout";
import Price from "./Components/Price";
import QuestionsAndAnswers from "./Components/QestionAndAnswers";
import Support from "./Components/Support";
import Split from './Components/Split'
import Study from "./Components/Study";

function App() {
  return (
    <MainLayout>
    <Main/>
    <Split/>
    <Author/>
    <Study/>
    <Price/>
    <QuestionsAndAnswers/>
    <Support/>
    <Contacts/>
    </MainLayout>
  );
}

export default App;
