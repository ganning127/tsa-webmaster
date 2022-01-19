const MDXComponents = {
    h1: (props) => <h1 className="font-bold text-4xl text-dark-blue my-3" {...props} />,
    h2: (props) => <h1 className="font-bold text-4xl text-dark-blue my-3" {...props} />,
    h3: (props) => <h1 className="font-bold text-4xl text-dark-blue my-3" {...props} />,
    h4: (props) => <h1 className="font-bold text-4xl text-dark-blue my-3" {...props} />,
    h5: (props) => <h1 className="font-bold text-4xl text-dark-blue my-3" {...props} />,
    h6: (props) => <h1 className="font-bold text-4xl text-dark-blue my-3" {...props} />,
    inlineCode: (props) => (
        <code className="text-dark-blue bg-slate-200 p-1 rounded-md" {...props} />
    ),
    br: (props) => <br {...props} />,
    hr: <hr />,
    a: (props) => <a {...props} />,
    p: (props) => <p className="text-xl my-2 leading-9" {...props} />,
    ul: (props) => <ul classname="list-disc" {...props} />,
    ol: (props) => <ol className="list-decimal" {...props} />,
    li: (props) => <li {...props} />,
    code: (props) => <code className="text-red-400" {...props} />,
    blockquote: (props) => <blockquote  {...props} />,
    img: (props) => <img className="max-h-60vh" {...props} />,
}

export default MDXComponents