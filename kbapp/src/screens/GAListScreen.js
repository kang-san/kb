import React from 'react';
import Header from "../components/Header";
import KBDataGrid from "../components/KBDataGrid";

function GAListScreen() {
    return (
        <div className="container">
            <Header/>
            <div className='content'>
                <div className="con-wrap bg-gray">

                    {/*// search 스크린으로 대체*/}
                    <nav className="nav">
                        <div className="lnb">
                            <div className="tit-area">
                                <h2 className="tit-con">검색</h2>
                            </div>
                            <div className="tab-wrap">
                                <ul className="tab-nav tab-type">
                                    <li data-tab="con-tab1" className="active">
                                        <span className="tab">간편검색</span>
                                    </li>
                                    <li data-tab="con-tab2">
                                        <span className="tab">그룹조회</span>
                                    </li>
                                </ul>

                                <div className="tab-con active" id="con-tab1">
                                    <div className="tit-area">
                                        <h3>영업본부 검색</h3>
                                    </div>
                                    <div className="sel-group-wrap">
                                        <div className="sel-group">
                                            <select>
                                                <option value="">본부 전체</option>
                                                <option value="option1">1</option>
                                                <option value="option2">2</option>
                                                <option value="option3">3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="sel-group-wrap">
                                        <div className="sel-group">
                                            <select>
                                                <option value="">지점 전체</option>
                                                <option value="option1">1</option>
                                                <option value="option2">2</option>
                                                <option value="option3">3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="sel-group-wrap">
                                        <div className="sel-group">
                                            <select>
                                                <option value="">CA 전체</option>
                                                <option value="option1">1</option>
                                                <option value="option2">2</option>
                                                <option value="option3">3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="bottom-con">
                                        <div className="tit-area">
                                            <h3>직접 검색</h3>
                                        </div>
                                        <div className="input-wrap">
                                            <input type="text" id="text1" className="input" placeholder="영업부,지점,GA명 입력"
                                                   value=""/>
                                        </div>
                                        <button className="btn-l yellow">검색</button>
                                    </div>
                                </div>

                                <div className="tab-con" id="con-tab2">
                                    <div className="tit-area">
                                        <h3>직접 검색</h3>
                                    </div>
                                    <div className="sel-group-wrap">
                                        <div className="sel-group">
                                            <select>
                                                <option value="">전체</option>
                                                <option value="option1">1</option>
                                                <option value="option2">2</option>
                                                <option value="option3">3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="input-wrap">
                                        <input type="text" id="text1" className="input" placeholder="영업부,지점,GA명 입력" value=""/>
                                    </div>
                                    <button className="btn-l yellow">검색</button>
                                    <div className="app-box">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <div className="app-wrap">
                        <div className="app-box">
                            <div className="tit-area">
                                <h2 className="tit-con">GA 정보 목록</h2>
                            </div>
                            <div className="btn-r-fix">
                                <button className="item-set modal-open" data-info="modal-open1">
                                    <span className="ico ico-item-set"></span>
                                    항목설정

                                </button>
                                <button className="item-view">
                                    <span className="ico ico-view-big"></span>
                                    크게보기

                                </button>
                            </div>


                            {/*// MUI로 대체*/}

                            <div className="tit-mini">전체 100건</div>
                            {/*<div className="table-wrap">*/}
                            {/*    <table className="tbl-sty1">*/}
                            {/*        /!*<colgroup>*!/*/}
                            {/*        /!*    <col style="width:5%"/>*!/*/}
                            {/*        /!*        <col style="width:6%"/>*!/*/}
                            {/*        /!*            <col style="width:6%"/>*!/*/}
                            {/*        /!*                <col style="width:6%"/>*!/*/}
                            {/*        /!*                    <col style="width:6%"/>*!/*/}
                            {/*        /!*                        <col style="width:13%"/>*!/*/}
                            {/*        /!*                            <col style="width:6%"/>*!/*/}
                            {/*        /!*                                <col style="width:10%"/>*!/*/}
                            {/*        /!*                                    <col style="width:10%"/>*!/*/}
                            {/*        /!*                                        <col style="width:10%"/>*!/*/}
                            {/*        /!*                                            <col style="width:8%"/>*!/*/}
                            {/*        /!*                                                <col style="width:8%"/>*!/*/}
                            {/*        /!*                                                    <col style="width:6%"/>*!/*/}
                            {/*        /!*</colgroup>*!/*/}
                            {/*        <thead>*/}
                            {/*        <tr>*/}
                            {/*            <th>NO</th>*/}
                            {/*            <th>본부</th>*/}
                            {/*            <th>지점</th>*/}
                            {/*            <th>GA</th>*/}
                            {/*            <th>GA코드</th>*/}
                            {/*            <th>GA등록번호</th>*/}
                            {/*            <th>대표자</th>*/}
                            {/*            <th>전화번호</th>*/}
                            {/*            <th>제휴계약일</th>*/}
                            {/*            <th>영업개시일</th>*/}
                            {/*            <th>영업차월</th>*/}
                            {/*            <th>등록일</th>*/}
                            {/*            <th>계약상태</th>*/}
                            {/*        </tr>*/}
                            {/*        </thead>*/}
                            {/*        <tbody>*/}
                            {/*        <tr className="text-center">*/}
                            {/*            <td>1</td>*/}
                            {/*            <td>A본부</td>*/}
                            {/*            <td>A지점</td>*/}
                            {/*            <td>AGA</td>*/}
                            {/*            <td>12345</td>*/}
                            {/*            <td>12345678910</td>*/}
                            {/*            <td>김대표</td>*/}
                            {/*            <td>010-1234-678</td>*/}
                            {/*            <td>2022.01.06</td>*/}
                            {/*            <td>2022.01.06</td>*/}
                            {/*            <td>13</td>*/}
                            {/*            <td>2022.01.06</td>*/}
                            {/*            <td>계약</td>*/}
                            {/*        </tr>*/}
                            {/*        <tr className="text-center">*/}
                            {/*            <td>2</td>*/}
                            {/*            <td>A본부</td>*/}
                            {/*            <td>A지점</td>*/}
                            {/*            <td>AGA</td>*/}
                            {/*            <td>12345</td>*/}
                            {/*            <td>12345678910</td>*/}
                            {/*            <td>김대표</td>*/}
                            {/*            <td>010-1234-678</td>*/}
                            {/*            <td>2022.01.06</td>*/}
                            {/*            <td>2022.01.06</td>*/}
                            {/*            <td>13</td>*/}
                            {/*            <td>2022.01.06</td>*/}
                            {/*            <td>계약</td>*/}
                            {/*        </tr>*/}
                            {/*        </tbody>*/}
                            {/*    </table>*/}
                            {/*</div>*/}
                            {/*<div className="paging">*/}
                            {/*    <a href="javascript:void(0);" className="btn-first">첫페이지</a>*/}
                            {/*    <a href="javascript:void(0);" className="btn-pre">이전페이지</a>*/}
                            {/*    <p>*/}
                            {/*        <a href="javascript:void(0);" className="on">1</a>*/}
                            {/*        <a href="javascript:void(0);">2</a>*/}
                            {/*        <a href="javascript:void(0);">3</a>*/}
                            {/*        <a href="javascript:void(0);">4</a>*/}
                            {/*        <a href="javascript:void(0);">5</a>*/}
                            {/*        <a href="javascript:void(0);">6</a>*/}
                            {/*        <a href="javascript:void(0);">7</a>*/}
                            {/*    </p>*/}
                            {/*    <a href="javascript:void(0);" className="btn-next">다음페이지</a>*/}
                            {/*    <a href="javascript:void(0);" className="btn-last">마지마페이지</a>*/}
                            {/*</div>*/}
                            <KBDataGrid/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GAListScreen;