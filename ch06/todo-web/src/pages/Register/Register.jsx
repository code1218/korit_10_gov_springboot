import TextButton from "../../components/buttons/TextButton/TextButton";
import Header from "../../components/Header/Header";
import * as s from "./styles";

function Register() {

    return (
        <div css={s.layout}>
            <Header>
                <TextButton>취소</TextButton>
                <h4>새로운 할 일</h4>
                <TextButton weight={600}>완료</TextButton>
            </Header>
            <main>
                <div css={s.titleAndMemo}>
                    <input type="text" placeholder="제목" />
                    <textarea placeholder="메모"></textarea>
                </div>
                <ul css={s.listGroup}>
                    <li>
                        <div css={s.iconBox("#ff3b30")}>
                            <svg data-dc-tpl="249" width="14" height="14" viewBox="0 0 14 14" fill="none"><rect data-dc-tpl="250" x="1" y="2" width="12" height="11" rx="2" stroke="white" stroke-width="1.6"></rect><path data-dc-tpl="251" d="M1 5.5h12M4.5 1v3M9.5 1v3" stroke="white" stroke-width="1.6" stroke-linecap="round"></path></svg>
                        </div>
                        <div>날짜</div>
                        <div>
                            <input type="date" />
                        </div>
                    </li>
                    <li>
                        <div css={s.iconBox("#5856d6")}>
                            <svg data-dc-tpl="256" width="14" height="14" viewBox="0 0 14 14" fill="none"><circle data-dc-tpl="257" cx="7" cy="7" r="5.5" stroke="white" stroke-width="1.6"></circle><path data-dc-tpl="258" d="M7 4.5V7.5l2 2" stroke="white" stroke-width="1.6" stroke-linecap="round"></path></svg>
                        </div>
                        <div>시간</div>
                        <div>
                            <input type="time" />
                        </div>
                    </li>
                </ul>
                <ul css={s.listGroup}>
                    <li css={s.liButton}>
                        <div css={s.iconBox("#34c759")}>
                            <svg data-dc-tpl="264" width="14" height="14" viewBox="0 0 14 14" fill="none"><rect data-dc-tpl="265" x="1" y="4" width="12" height="9" rx="2" stroke="white" stroke-width="1.6"></rect><path data-dc-tpl="266" d="M1 7h12M4 4V2.5a2 2 0 014 0V4" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg>
                        </div>
                        <div>카테고리</div>
                        <div>
                            <div css={s.categorySelectedColor("#34c759")}></div>
                            <div>개인</div>
                            <div>
                                <svg data-dc-tpl="271" width="7" height="12" viewBox="0 0 7 12" fill="none"><path data-dc-tpl="272" d="M1 1l5 5-5 5" stroke="#C7C7CC" stroke-width="1.8" stroke-linecap="round"></path></svg>
                            </div>
                        </div>
                    </li>
                    <li css={s.liButton}>
                        <div css={s.iconBox("#c7c7cc")}>
                            <svg data-dc-tpl="275" width="14" height="14" viewBox="0 0 14 14" fill="none"><path data-dc-tpl="276" d="M7 2v6M7 11v1" stroke="white" stroke-width="2" stroke-linecap="round"></path></svg>
                        </div>
                        <div>우선순위</div>
                        <div>
                            <div>없음</div>
                            <div>
                                <svg data-dc-tpl="271" width="7" height="12" viewBox="0 0 7 12" fill="none"><path data-dc-tpl="272" d="M1 1l5 5-5 5" stroke="#C7C7CC" stroke-width="1.8" stroke-linecap="round"></path></svg>
                            </div>
                        </div>
                    </li>
                    <li css={s.liButton}>
                        <div css={s.iconBox("#ff9500")}>
                            <svg data-dc-tpl="284" width="12" height="14" viewBox="0 0 12 14" fill="none"><path data-dc-tpl="285" d="M1.5 1.5v12M1.5 1.5h8l-2 4.5 2 4.5H1.5" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </div>
                        <div>깃발 표시</div>
                        <div>
                            <label css={s.toggleCheckBox}>
                                <input type="checkbox" />
                                <div></div>
                            </label>
                        </div>
                    </li>
                </ul>
            </main>
        </div>
    )
}

export default Register;