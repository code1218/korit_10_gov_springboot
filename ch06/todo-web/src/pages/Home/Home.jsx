import Header from "../../components/Header/Header";
import { useMe } from "../../hooks/queries/useUser";
import * as s from "./styles";

function Home() {
    const meQuery = useMe();

    console.log(meQuery.data.body.profileImage)

    return (
        <div css={s.layout}>
            <Header>
                <h2 css={s.title}>ReMind</h2>
                <div css={s.profile(meQuery.data?.body.profileImage)}></div>
            </Header>
        </div>
    )
}

export default Home;