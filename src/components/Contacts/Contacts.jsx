import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./styles.scss";

import contactVideo from "../../assets/brofist.mp4";

const Contacts = () => {
  const [weekDayOfToday, setWeekDayOfToday] = useState("");
  const [openNotification, setOpenNotification] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [sendingButtonText, setSendingButtonText] = useState("Send message");

  const getTodaysDayOfTheWeek = () => {
    let day = new Date();

    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    setWeekDayOfToday(weekday[day.getDay()]);
  };

  const clearForm = () => {
    setContactEmail("");
    setContactName("");
    setContactMessage("");
  };

  const copyDiscord = async () => {
    await navigator.clipboard.writeText("Valraven#7264");
    setOpenNotification(true);
    setTimeout(() => {
      setOpenNotification(false);
    }, 7000);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (contactName === "" || contactMessage === "" || contactEmail === "") {
      return;
    }
    setSendingButtonText("Sending message...");

    const message = {
      to: "akatiago@gmail.com",
      from: "akatiago@gmail.com",
      subject: contactName,
      text: contactMessage,
      html: contactMessage + " " + contactEmail,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    };
    fetch(
      "https://send-personal-email-api.herokuapp.com/sendemail",
      requestOptions
    )
      .then((response) => response.json())
      .then(() => {
        clearForm();
        setSendingButtonText("Send message");
      })
      .catch((error) => {
        console.error(error);
        setSendingButtonText("An error has occurred");
        setTimeout(() => {
          clearForm();
          setSendingButtonText("Send message");
        }, 5000);
      });
  };

  useEffect(() => {
    getTodaysDayOfTheWeek();
  }, []);

  return (
    <section className="contacts">
      <h1>Let's create cool things together</h1>
      <h3>Stay creative and have a stunning {weekDayOfToday}!</h3>
      <div className="content">
        <div className="cta">
          <video id="video" autoPlay={true} muted={true} loop={true}>
            <source src={contactVideo} type="video/mp4" />
          </video>
        </div>
        <div className="socials">
          <a
            className="github"
            href="https://github.com/MrValraven"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i id="github" className="fab fa-github"></i>
            <p>@MrValraven</p>
          </a>
          <a
            className="linkedIn"
            href="https://www.linkedin.com/in/tiagoagcosta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i id="linkedin" className="fab fa-linkedin"></i>
            <p>Tiago Costa</p>
          </a>
          <a className="discord" onClick={() => copyDiscord()}>
            <i id="discord" className="fab fa-discord"></i>
            <p id="discordID">Valraven#7264</p>
          </a>
        </div>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="contactName">Name</label>
          <input
            type="text"
            required
            name="contactName"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
          />
          <label htmlFor="contactEmail">Email</label>
          <input
            type="email"
            required
            name="contactEmail"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
          />
          <label htmlFor="contactMessage">Message</label>
          <textarea
            type="text"
            required
            name="contactMessage"
            value={contactMessage}
            onChange={(e) => setContactMessage(e.target.value)}
          />
          <Button className="contactButton" buttonText={sendingButtonText} />
        </form>
      </div>
      {openNotification ? (
        <div className="notification">
          <p>DiscordID copied sucessfully</p>
          <i
            onClick={() => setOpenNotification(false)}
            className="fas fa-times"
          ></i>
        </div>
      ) : null}
    </section>
  );
};

export default Contacts;
