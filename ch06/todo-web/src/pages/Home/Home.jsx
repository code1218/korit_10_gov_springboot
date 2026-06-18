import TextButton from "../../components/buttons/TextButton/TextButton";
import Header from "../../components/Header/Header";
import Spinners from "../../components/Spinners/Spinners";
import { useCategories } from "../../hooks/queries/useCategory";
import { useMe } from "../../hooks/queries/useUser";
import * as s from "./styles";

function Home() {
    const meQuery = useMe();
    const categoiesQuery = useCategories();

    console.log(categoiesQuery.data);

    return (
        <div css={s.layout}>
            <Header>
                <h2 css={s.title}>ReMind</h2>
                <div css={s.profile(meQuery.data?.body.profileImage)}></div>
            </Header>
            <div css={s.main}>
                <div css={s.boxGroup}>

                </div>
                <div css={s.listGroup}>
                    <header>
                        <h3>나의 목록</h3>
                        <TextButton>편집</TextButton>
                    </header>
                    <ul>
                        {
                            categoiesQuery.isLoading
                            ? <></>
                            : categoiesQuery.data.body.map(category => (
                                <li>{category.categoryIcon}{category.categoryName}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home;