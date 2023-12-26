function LocationComponent() {
  return (
    <div className="">
      <iframe
      className="rounded-xl"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110958.99634013523!2d52.54739051015625!3d29.6481725711199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fb2120c639a43bf%3A0x1516de5126619a7f!2sEram%20Garden!5e0!3m2!1sen!2s!4v1686399165144!5m2!1sen!2s"
        width="450"
        height="220"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default LocationComponent;
