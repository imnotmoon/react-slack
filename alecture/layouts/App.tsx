import React, {FC} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import LogIn from '@pages/Login'
import SignUp from '@pages/SignUp'

const App : FC = () => {
  return (
      <Switch>
          {/* Redirect : 화면을 다른곳으로 옮겨준 */}
          <Redirect path="/login" to="/login" />

          {/* Route : 컴포넌트를 화면에 띄워주는 역할 */}
          <Route path={"/login"} component={LogIn} />
          <Route path={"/signup"} component={SignUp}/>
      </Switch>
      );
}

export default App;
