import React, { Component } from "react";

export class PlusSquareIcon extends Component {
    render() {
        return (
            <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M22.5 15V30"
                    stroke="#1D1F22"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M15 22.5H30"
                    stroke="#1D1F22"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <rect x="0.5" y="0.5" width="44" height="44" stroke="#1D1F22" />
            </svg>
        );
    }
}

export class MinusSquareIcon extends Component {
    render() {
        return (
            <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M15 22.5H30"
                    stroke="#1D1F22"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <rect x="0.5" y="0.5" width="44" height="44" stroke="#1D1F22" />
            </svg>
        );
    }
}

export class ChevronLeftIcon extends Component {
    render() {
        return (
            <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M7.25 1.06857L1.625 6.6876L7.25 12.3066"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }
}

export class ChevronRightIcon extends Component {
    render() {
        return (
            <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0.75 1.06808L6.375 6.68711L0.75 12.3062"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }
}
