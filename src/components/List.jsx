import React from 'react';
import './list.css';
import emojiArray from "./emoji";

const List = ({ query }) => {
    const [list, setList] = React.useState(emojiArray);
    let newEmojiList = [...list];

    function filterEmoji() {
        const filteredEmojis = newEmojiList.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );

        if (query && filteredEmojis.length === 0) {
            return (
                <p>
                    No matching emojis found for "{query}".
                </p>
            );
        }

        return filteredEmojis.map((filteredEmoji, index) => (
            <li key={index}>
                {filteredEmoji.emoji} {filteredEmoji.name}
            </li>
        ));
    }

    return (
        <ul>
            {filterEmoji()}
        </ul>
    );
}

export default List;
