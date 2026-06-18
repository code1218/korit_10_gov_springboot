import { Link } from "react-router";
import TextButton from "../../components/buttons/TextButton/TextButton";
import Header from "../../components/Header/Header";
import Spinners from "../../components/Spinners/Spinners";
import { useCategories, useCategoryNotCompletedCount } from "../../hooks/queries/useCategory";
import { useMe } from "../../hooks/queries/useUser";
import * as s from "./styles";

function Home() {
    const meQuery = useMe();
    const categoiesQuery = useCategories();
    const categoryNotCompletedCountQuery = useCategoryNotCompletedCount();

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
                                <li key={category.categoryId}>
                                    <Link to={`/categories/${category.categoryName}/todos`}>
                                        <div css={s.categoryIcon(category.categoryColor)}>{category.categoryIcon}</div>
                                        <div css={s.categoryName}>{category.categoryName}</div>
                                        <div css={s.categoryCount}>
                                            <span>
                                                {
                                                    categoryNotCompletedCountQuery.isLoading || 
                                                    categoryNotCompletedCountQuery.data.body
                                                    .find(count => count.id === category.categoryId)
                                                    .notCompletedCount || "0"
                                                }
                                            </span>
                                            <svg data-dc-tpl="128" width="8" height="13" viewBox="0 0 8 13" fill="none" style={{"margin-left": "4px"}}><path data-dc-tpl="129" d="M1 1l6 5.5L1 12" stroke="#C7C7CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <TextButton>새로운 목록 추가</TextButton>
                </div>
            </div>
        </div>
    )
}

export default Home;