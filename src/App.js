import './App.css';
import {Title , Abtn} from './commonui/ui'


function App() {
  return (
    <div className="App">
      <Title>나는 스타일컴포넌트입니다.</Title>
      <Title>베스트상품</Title>
      <Title>추천상품</Title>
      <h2>
        나는 타이틀입니다
        <Abtn>더보기</Abtn>
      </h2>
      <h2>
        나는 타이틀입니다
        <Abtn>응모하기</Abtn>
      </h2>
     
    </div>
  );
}

export default App;
