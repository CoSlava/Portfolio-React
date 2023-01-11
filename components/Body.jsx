export default function Body({scroll}) {
    return (
        <main className="body">
            <div className="body-div">
                <p className="p-intro">Hi, my name is</p>
                <h1>Veaceslav Cojocari.</h1>
                <h1 className="second-h1">I build things for the web.</h1>
                <p className="p-end">I'm a front-end developer, on my way to becoming a strong, full-stack engineer.</p>
                <button onClick={scroll}>Discover more about me</button>
            </div>
        </main>
    )
}