import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import { Link } from 'react-router-dom';
import img1 from './img/potato.jpg';
import img2 from './img/sweetpotato.jpg';
import img3 from './img/tomato.jpg';
import img4 from './img/carrot2.jpg';
import img5 from './img/bgg.jpg';
function App() {
    return (
        <>
            <div>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Link to={'login'}>
                                    <div class="login">로그인</div>
                                </Link>
                                <div class="title">못난이 마켓</div>
                                <div class="mainContainer">
                                    <div class="search">
                                        <input type="text" name="search" placeholder="검색" autofocus />
                                    </div>
                                </div>
                                <div class="aa">
                                    <img src={img5} />
                                </div>
                                <div class="mainImage">
                                    <div>
                                        <button>
                                            <img src={img1}></img>
                                        </button>
                                        <div>감자 팝니다</div>
                                        <div class="price">10,000원</div>
                                    </div>
                                    <div>
                                        <button>
                                            <img src={img2}></img>
                                        </button>
                                        <div>고구마 팜</div>
                                        <div class="price">8,000원</div>
                                    </div>
                                    <div>
                                        <button>
                                            <img src={img3}></img>
                                        </button>
                                        <div>토마토</div>
                                        <div class="price">5,000원</div>
                                    </div>
                                    <div>
                                        <button>
                                            <img src={img4}></img>
                                        </button>
                                        <div>당근ㅍㅍ</div>
                                        <div class="price">15,000원</div>
                                    </div>
                                </div>
                            </>
                        }
                    ></Route>
                    <Route
                        path="/login"
                        element={
                            <div>
                                <Login></Login>
                            </div>
                        }
                    ></Route>
                    <Route path="/signup" element={<SignUp></SignUp>}></Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
