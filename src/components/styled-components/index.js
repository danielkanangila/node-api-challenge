import styled from 'styled-components';

export const Main = styled.div`
    padding: 30px 0 50px;
    .mt-30 {
        margin-top: 30px;
    }
    form {
        margin-bottom: 30px;
        padding-bottom: 30px;
        border-bottom: 6px solid #f1f1f1; 
        .action {
            margin-top: 30px;
        }
        .action button:first-child {
            margin-right: 15px;
        }
        h2 {
            margin-bottom: 30px;
        }
    }
    .field {
        position: relative;
        display: flex;
        flex-direction: column;
        &.completed {
            margin-top: 20px;
            label {
                top: 0;
                left: 20px;
            }
        }
    }
    .mb-20 {
        margin-bottom: 20px;
    }
    label {
        position: absolute;
        top: -8px; left: 10px;
        padding: 2.5px 15px;
        font-size: 0.65rem;
        font-weight: bold;
        text-transform: uppercase;
        background-color: #ffff;
        transition: .3s;
    }
    input, textarea {
        width: 100%;
        max-width: 450px;
        border: 2px solid #cccccc;
        padding: 13px;
        font-size: 1rem;
        border-radius: 5px;
        transition: .3s;
        &:focus {
            border-color: rgba(21, 101, 192, 0.8);
        }
        &:focus + label {
            color: rgba(21, 101, 192, 1);
        }
    }
    textarea {
        resize: none;
        overflow: auto;
        min-height: 90px;
        max-height: 250px;
        padding-bottom: 20px;
    }
    .btn {
        text-transform: uppercase;
        font-size: 0.85rem;
        font-weight: bold;
        padding: 10px 20px;
        transition: .3s;
        border-radius: 3px;
        cursor: pointer;

        &.small {
            font-size: 0.65rem;
            padding: 5px;
        }

        &-primary {
            background: rgba(21, 101, 192, 0.8);
            color: #ffff;
            border: 2px solid transparent;
            &:hover {
                background: rgba(21, 101, 192, 1);
            }
        }

        &-default {
            background-color: #ffff;
            border: 2px solid rgba(21, 101, 192, 0.8);
            color: rgba(21, 101, 192, 0.8);
            &:hover {
                background-color: rgba(21, 101, 192, 0.3);
                border-color: transparent;
            } 
        }

        &-danger {
            background: rgba(229, 57, 53, 1);
            color: #ffff;
        }

    }
    .lightenblue {
        background: rgba(21, 101, 192, 0.1);
        color: #1565c0;
        &:hover {
            background: rgba(21, 101, 192, 0.3);
        }
    }
    .lightenred {
        background: rgba(229, 57, 53, 0.1);
        color: rgba(229, 57, 53, 1);
        &:hover {
            background: rgba(229, 57, 53, 0.3);
        }
    }
    h2 {
        font-size: 1.1rem;
    }
    .comment {
        display: flex;
        justify-content: flex-start;
        align-items: baseline;
        input {
            width: fit-content;
            margin-right: 20px;
        }
    }
    .post, .comment {
        position: relative;
        padding: 30px 0;
        border-bottom: 2px solid #f1f1f1;
        &-title {
            font-size: 1.1rem;
        }
        &-contents {
            margin: 15px 0;
        }
        &-date {
            font-size: 0.75rem;
            color: #919191;
        }
        &-action {
            margin: 20px 0 0;

            span:first-child {
                margin-right: 5px;
                padding: 3.5px;
            }
        }
        &-link {
            position: absolute;
            top: 0; left: 0; bottom: 0; right: 0;
            background: transparent;
            z-index: 2;
        }
    }
`;