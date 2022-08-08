import React from 'react';
import '../assets/scss/common.scss'

function Header() {
    return(
        <header className="headerWrap">
            <div className="header">
                <div className="headLogo">
                    <a href="javascript:void(0);"><h1>KB생명보험 <span>영업관리자</span></h1></a>
                </div>
                <ul className="headUtile">
                    <li className="h_time">
                        <span>남은시간</span>
                        <em>60:00</em>
                        <button className="extend">연장</button>
                    </li>
                    <li className="h_alram">
                        <span>알림</span>
                        <em>+99</em>건
                    </li>
                    <li>
                        <div className="userInfo"><strong>홍길동</strong>님(본사스텝)</div>
                        <button className="gnbLogout">로그아웃</button>
                    </li>
                </ul>
            </div>

            <div className="gnb">
                <ul className="navDepth1">
                    <li>
                        <a href="javascript:void(0);">통합정보조회</a>
                        <div className="navDepth2">
                            <div>
                                <ul>
                                    <li><a href="javascript:void(0);">GA정보조회</a></li>
                                    <li><a href="javascript:void(0);">지점정보조회</a></li>
                                    <li><a href="javascript:void(0);">FA정보조회</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="javascript:void(0);">실적조회</a>
                        <div className="navDepth2">
                            <div>
                                <ul>
                                    <li><a href="javascript:void(0);">영업실저</a></li>
                                    <li><a href="javascript:void(0);">가입설계실적</a></li>
                                    <li><a href="javascript:void(0);">계약리스트</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="javascript:void(0);">활동관리</a>
                        <div className="navDepth2">
                            <div>
                                <ul>
                                    <li><a href="javascript:void(0);">일정관리</a></li>
                                    <li><a href="javascript:void(0);">활동현황</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="javascript:void(0);">공지사항</a>
                        <div className="navDepth2">
                            <div>
                                <ul>
                                    <li><a href="javascript:void(0);">공지사항</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="javascript:void(0);">자료실</a>
                        <div className="navDepth2">
                            <div>
                                <ul>
                                    <li><a href="javascript:void(0);">자료실</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="javascript:void(0);">운영</a>
                        <div className="navDepth2">
                            <div>
                                <ul>
                                    <li><a href="javascript:void(0);">권한관리</a></li>
                                    <li><a href="javascript:void(0);">권한별 메뉴관리</a></li>
                                    <li><a href="javascript:void(0);">공지사항 관리</a></li>
                                    <li><a href="javascript:void(0);">자료실 관리</a></li>
                                    <li><a href="javascript:void(0);">메뉴관리</a></li>
                                    <li><a href="javascript:void(0);">코드관리</a></li>
                                    <li><a href="javascript:void(0);">메뉴별 사용통계현황</a></li>
                                    <li><a href="javascript:void(0);">지점별 사용통계현황</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </header>
    )
}

export default Header;