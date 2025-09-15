export default function Contact() {
  return (
    <section>
      <h1>Contact</h1>
      <p>
        You can contact us at:{" "}
        <a href="abdulrehmanbhatti976@gmail.com" className="text-blue-600 underline">
          abdulrehmanbhatti976@gmail.com
        </a>
      </p>
      <p>
        Or call us at:{" "}
        <a href="tel:(+92)345-8229007" className="text-blue-600 underline">
          (+92) 345-8229007
        </a>
      </p>
      <img
        src="hero1.jpg"
        alt="hero image"
        className="page-image"
        style={{ width: "200px", height: "auto" }}
      />
    </section>
  );
}
