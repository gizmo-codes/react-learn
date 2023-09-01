const Header = () => {
    // Since this is on more than one line, it must be placed in parens.
    return(
        <header>
            {/* What a weird way to comment... */}
            {/* className is used here given class is reserved in JS, and jsx is an extension of JS */}
            {/* jsx JavaScript XML - Allows us to write JavaScript that looks like markup (HTML) and have it return from a component */}
            {/* jsx is obviously not valid JavaScript so browsers cannot read it directly, a transpiler translates it into appropriate syntax the browser can understand */}
            <h1 className="mt-4 p5 bg-primary text-white rounded">Header > H1.</h1>
        </header>
    )
}

export default Header