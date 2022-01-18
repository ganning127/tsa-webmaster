const MDXComponents = {
    h1: (props) => <h1 className="font-bold text-4xl" {...props} />,
    h2: (props) => <h1 className="font-bold text-4xl" {...props} />,
    h3: (props) => <h1 className="font-bold text-4xl" {...props} />,
    h4: (props) => <h1 className="font-bold text-4xl" {...props} />,
    h5: (props) => <h1 className="font-bold text-4xl" {...props} />,
    h6: (props) => <h1 className="font-bold text-4xl" {...props} />,
    inlineCode: (props) => (
        <code  {...props} />
    ),
    br: (props) => <br {...props} />,
    hr: <hr />,
    a: (props) => <a {...props} />,
    p: (props) => <p {...props} />,
    ul: (props) => <ul />,
    ol: (props) => <ol />,
    li: (props) => <li {...props} />,
    code: (props) => <code {...props} />,
    blockquote: (props) => <blockquote  {...props} />
}

export default MDXComponents