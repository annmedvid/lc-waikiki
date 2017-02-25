"use strict"

const before =
[
    "**/reset.css",
    "**/fonts.css",
]

module.exports =
{
    files:
    {
        stylesheets:
        {
            joinTo: "style.css",
            order: { before },
        },
    },
}
