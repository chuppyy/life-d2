export default function Contact() {
    return <>
        <div className="container-flu contact-us">
        <h1>About Us</h1>
        <hr />
        <p>
            If you have any questions, suggestions, touching, or inspiring stories or you just want to connect with me, I
            would love to hear from you!
        </p>
        <p className="mt-1">Please leave me an email through the Contact Form and I will get back with you as soon as possible.
            Otherwise,
            join us at our Facebook Group Middle Aged Humor.</p>
        <p className="mt-1"> We are only middle aged once, so stay classNamey and a bit bad assy!</p>

        <br />
        <form>
            <div className="mb-3">
                <label className="form-label">Your name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Your Email</label>
                <input type="email" className="form-control" id="exampleInputPassword1" />
            </div>

            <div className="mb-3">
                <label  className="form-label">Subject</label>
                <input type="text" className="form-control" id="exampleInputPassword1" />
            </div>

            <div className="mb-3">
                <label  className="form-label">Your message (optional)</label>
                <textarea className="form-control" id="exampleInputPassword1"> </textarea>
            </div>

            <button type="submit" className="btn-primary">Submit</button>
        </form>
    </div>
    </>
}