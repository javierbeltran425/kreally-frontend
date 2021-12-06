import React from 'react'

export default function GeneralButton(props) {
    const { text } = props;

    return (
        <button className="max-w-max text-black bg-red-200 rounded-full py-1 px-4 hover:bg-red-300 duration-500">
            {text}
        </button>
    )
}
