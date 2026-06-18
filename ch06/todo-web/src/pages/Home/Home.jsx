import { Link } from "react-router";
import TextButton from "../../components/buttons/TextButton/TextButton";
import Header from "../../components/Header/Header";
import Spinners from "../../components/Spinners/Spinners";
import { useCategories, useCategoryColorsAndIcons, useCategoryNotCompletedCount } from "../../hooks/queries/useCategory";
import { useMe } from "../../hooks/queries/useUser";
import * as s from "./styles";
import { useBottomModalStore } from "../../store/modalStore";
import { useState } from "react";

function Home() {
    const meQuery = useMe();
    const categoiesQuery = useCategories();
    const categoryNotCompletedCountQuery = useCategoryNotCompletedCount();

    const setModalOpen = useBottomModalStore((state) => state.setOpen);
    const setModalChildren = useBottomModalStore((state) => state.setChildren);

    const handleCategoryRegisterOnClick = () => {
        setModalOpen(true);
        setModalChildren(<CategoryRegister />);
    }

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
                    <TextButton onClick={handleCategoryRegisterOnClick}>새로운 목록 추가</TextButton>
                </div>
            </div>
        </div>
    )
}

export default Home;

function CategoryRegister() {
    const colorsAndIconsQuery = useCategoryColorsAndIcons();
    const [ newCategory, setNewCategory ] = useState({
        name: "",
        colorId: 1,
        iconId: 1,
    });
    const colors = colorsAndIconsQuery.data?.body.categoryColors ?? [];
    const icons = colorsAndIconsQuery.data?.body.categoryIcons ?? [];

    const selected = {
        color: colors.find(c => c.id === newCategory.colorId)?.color,
        icon: icons.find(i => i.id === newCategory.iconId)?.icon,
    }

    return <div>
        <header>
            <h3>새로운 목록</h3>
            <div css={s.categoryIcon(selected.color)}>{selected.icon}</div>
        </header>
        <div>
            <input type="text" />
        </div>
        <div>
            {
                colors.map(c => (
                    <label key={c.id}>
                        <input type="radio" />
                        {c.color}
                    </label>
                ))
            }
        </div>
        <div>
            {
                icons.map(i => (
                    <label key={i.id}>
                        <input type="radio" />
                        {i.icon}
                    </label>
                ))
            }
        </div>
    </div>
}