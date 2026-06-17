import { css } from "@emotion/react";

export const layout = css`
    flex-grow: 1;
`;

export const title = css`
    margin: 0 ;
    font-size: 28px;
`;

export const profile = (url) => css`
    box-shadow: 0 0 3px 3px #dbdbdb;
    border-radius: 50%;
    width: 34px;
    height: 34px;
    background-color: #dbdbdb;
    background-image: url(${url});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
`;